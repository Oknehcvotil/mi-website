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

const ContactForm = () => {
  const { t } = useTranslation();
  const [success, setSuccess] = useState(false);

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
        (value) => (value ? value.length > 6 : false) // можно сделать кастомную проверку
      ),
  });

  const handleSubmit = async (
    values: { name: string; phone: string; email: string },
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      console.log("Форма отправлена:", values);

      // await axios.post("/api/contact", values);

      resetForm();
      setSuccess(true);

      setTimeout(() => setSuccess(false), 2000);
    } catch (error: unknown) {
      if (error && typeof error === "object" && "message" in error) {
        console.error(
          "Error submitting form:",
          (error as { message: string }).message
        );
      } else {
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <FormCont>
      <FormWrap>
        <Formik
          initialValues={{ name: "", phone: "", email: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, values }) => (
            <Form>
              <FieldCont>
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

              <FieldCont>
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

              <FieldCont>
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

              <SubmitBtn type="submit">
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
