import { Formik, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

import {
  CustomField,
  FieldCont,
  FormCont,
  FormWrap,
  SubmitBtn,
  SubmitBtnContent,
  SubmitBtnSpinner,
} from "./ContactForm.styled";
import CustomErrorMessage from "./CustomErrorMessage/CustomErrorMessage";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import SuccessMessage from "./SuccessMessage/SuccessMessage";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import type { Variants } from "framer-motion";
import { useReducedMotion } from "framer-motion";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

const formShellVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 48,
    scale: 0.96,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const formCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 26,
    scale: 0.98,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 220,
      damping: 24,
      mass: 0.9,
      staggerChildren: 0.04,
      delayChildren: 0.04,
    },
  },
};

const formItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

type FormValues = {
  name: string;
  phone: string;
  email: string;
  website: string;
};

type SubmitStatus = {
  message: string;
  type: "error" | "success";
};

type ContactApiResponse = {
  message?: string;
  success?: boolean;
};

const ContactForm = () => {
  const { t } = useTranslation();
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);
  const reduce = useReducedMotion();
  const statusTimeoutRef = useRef<number | null>(null);

  const clearStatusTimeout = () => {
    if (statusTimeoutRef.current !== null) {
      window.clearTimeout(statusTimeoutRef.current);
      statusTimeoutRef.current = null;
    }
  };

  const showSubmitStatus = (status: SubmitStatus) => {
    clearStatusTimeout();
    setSubmitStatus(status);
    statusTimeoutRef.current = window.setTimeout(() => {
      setSubmitStatus(null);
      statusTimeoutRef.current = null;
    }, 4000);
  };

  useEffect(
    () => () => {
      clearStatusTimeout();
    },
    [],
  );

  const validationSchema = Yup.object({
    name: Yup.string().required(t("form.errors.name")),
    email: Yup.string()
      .email(t("form.errors.email"))
      .required(t("form.errors.email")),
    phone: Yup.string()
      .required(t("form.errors.phone"))
      .test("is-valid-phone", t("form.errors.phone"), (value) =>
        value ? value.length > 6 : false,
      ),
    website: Yup.string(),
  });

  const getSubmitErrorMessage = (status?: number) => {
    if (status === 429) {
      return t("form.errorRateLimit");
    }

    if (status === 400) {
      return t("form.errorInvalidData");
    }

    return t("form.errorMessage");
  };

  const handleSubmit = async (
    values: FormValues,
    {
      resetForm,
      setSubmitting,
    }: {
      resetForm: () => void;
      setSubmitting: (isSubmitting: boolean) => void;
    },
  ) => {
    clearStatusTimeout();
    setSubmitStatus(null);

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const contentType = response.headers.get("content-type") ?? "";
      const data = contentType.includes("application/json")
        ? ((await response.json()) as ContactApiResponse)
        : null;

      if (!response.ok || !data?.success) {
        console.error("Form request failed:", {
          message: data?.message,
          status: response.status,
        });
        throw new Error(getSubmitErrorMessage(response.status));
      }

      resetForm();
      showSubmitStatus({
        message: t("form.successMessage"),
        type: "success",
      });
    } catch (error: unknown) {
      const fallbackMessage =
        error instanceof TypeError && error.message === "Failed to fetch"
          ? t("form.errorNetwork")
          : t("form.errorMessage");

      if (error && typeof error === "object" && "message" in error) {
        showSubmitStatus({
          message: String(
            (error as { message: string }).message || fallbackMessage,
          ),
          type: "error",
        });
        console.error(
          "Error submitting form:",
          (error as { message: string }).message,
        );
      } else {
        showSubmitStatus({
          message: fallbackMessage,
          type: "error",
        });
        console.error("Error submitting form:", error);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <FormCont
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      variants={reduce ? undefined : formShellVariants}
    >
      <FormWrap variants={reduce ? undefined : formCardVariants}>
        <Formik
          initialValues={{ name: "", phone: "", email: "", website: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, values, isSubmitting, handleChange }) => (
            <Form>
              <input
                type="text"
                name="website"
                value={values.website}
                onChange={handleChange}
                autoComplete="off"
                tabIndex={-1}
                style={{
                  position: "absolute",
                  left: "-9999px",
                  opacity: 0,
                  pointerEvents: "none",
                }}
              />

              <FieldCont variants={reduce ? undefined : formItemVariants}>
                <label htmlFor="name">
                  {t("form.labels.name")} <span>*</span>
                </label>
                <CustomField
                  id="name"
                  name="name"
                  autoComplete="name"
                  placeholder={t("form.input.name")}
                />
                <ErrorMessage name="name" component={CustomErrorMessage} />
              </FieldCont>

              <FieldCont variants={reduce ? undefined : formItemVariants}>
                <label htmlFor="phone">
                  {t("form.labels.phone")} <span>*</span>
                </label>
                <PhoneInput
                  defaultCountry="ua"
                  value={values.phone}
                  onChange={(phone) => setFieldValue("phone", phone)}
                  inputProps={{
                    id: "phone",
                    name: "phone",
                    autoComplete: "tel",
                    required: true,
                  }}
                />
                <ErrorMessage name="phone" component={CustomErrorMessage} />
              </FieldCont>

              <FieldCont variants={reduce ? undefined : formItemVariants}>
                <label htmlFor="email">
                  {t("form.labels.email")} <span>*</span>
                </label>
                <CustomField
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="email@example.com"
                />
                <ErrorMessage name="email" component={CustomErrorMessage} />
              </FieldCont>

              <SubmitBtn
                type="submit"
                disabled={isSubmitting}
                variants={reduce ? undefined : formItemVariants}
              >
                <SubmitBtnContent>
                  {isSubmitting && <SubmitBtnSpinner aria-hidden="true" />}
                  {isSubmitting
                    ? t("form.sendingButton")
                    : t("form.submitButton")}
                </SubmitBtnContent>
              </SubmitBtn>
            </Form>
          )}
        </Formik>

        {submitStatus && (
          <SuccessMessage
            message={submitStatus.message}
            variant={submitStatus.type}
          />
        )}
        <PrivacyPolicy />
      </FormWrap>
    </FormCont>
  );
};

export default ContactForm;
