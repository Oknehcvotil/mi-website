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
} from "./ContactForm.styled";
import CustomErrorMessage from "./CustomErrorMessage/CustomErrorMessage";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import SuccessMessage from "./SuccessMessage/SuccessMessage";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import type { Variants } from "framer-motion";
import { useReducedMotion } from "framer-motion";

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

const ContactForm = () => {
  const { t } = useTranslation();
  const [success, setSuccess] = useState(false);
  const reduce = useReducedMotion();

  const validationSchema = Yup.object({
    name: Yup.string().required(t("form.errors.name")),
    email: Yup.string()
      .email(t("form.errors.email"))
      .required(t("form.errors.name")),
    phone: Yup.string()
      .required(t("form.errors.phone"))
      .test(
        "is-valid-phone",
        t("form.errors.phone"),
        (value) => (value ? value.length > 6 : false), 
      ),
  });

  const handleSubmit = async (
    values: { name: string; phone: string; email: string },
    { resetForm }: { resetForm: () => void },
  ) => {
    try {
      console.log("Форма отправлена:", values);

      resetForm();
      setSuccess(true);

      setTimeout(() => setSuccess(false), 2000);
    } catch (error: unknown) {
      if (error && typeof error === "object" && "message" in error) {
        console.error(
          "Error submitting form:",
          (error as { message: string }).message,
        );
      } else {
        console.error("Error submitting form:", error);
      }
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
          initialValues={{ name: "", phone: "", email: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, values }) => (
            <Form>
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
                    autoComplete: "name",
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
                variants={reduce ? undefined : formItemVariants}
              >
                <span>{t("form.submitButton")}</span>
              </SubmitBtn>
            </Form>
          )}
        </Formik>
        {success && <SuccessMessage />}
        <PrivacyPolicy />
      </FormWrap>
    </FormCont>
  );
};

export default ContactForm;
