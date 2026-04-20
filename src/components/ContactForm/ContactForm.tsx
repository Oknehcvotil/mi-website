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
import FormStatusMessage from "./FormStatusMessage/FormStatusMessage";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import { useReducedMotion } from "framer-motion";
import {
  formCardVariants,
  formItemVariants,
  formShellVariants,
} from "../../lib/animations/home/animations.contactForm";
import {
  useContactFormSubmit,
  type FormValues,
} from "../../lib/hooks/useContactFormSubmit";

const ContactForm = () => {
  const { t } = useTranslation();
  const reduce = useReducedMotion();
  const { handleSubmit, submitStatus } = useContactFormSubmit();

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

  return (
    <FormCont
      id="contact"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      variants={reduce ? undefined : formShellVariants}
    >
      <FormWrap variants={reduce ? undefined : formCardVariants}>
        <Formik<FormValues>
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
          <FormStatusMessage
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
