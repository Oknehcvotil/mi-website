import { Formik, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import {
  CustomField,
  FieldCont,
  FormCont,
  FormWrap,
  SubmitBtn,
} from "./ContactForm.styled";
import { isValidPhoneNumber } from "libphonenumber-js";
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
      .test("is-valid-phone", t("form.errors.phone"), (value) =>
        value ? isValidPhoneNumber("+" + value) : false
      )
      .required(t("form.errors.name")),
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
                <CustomField name="name" placeholder={t("form.input.name")} />
                <ErrorMessage name="name" component={CustomErrorMessage} />
              </FieldCont>

              <FieldCont>
                <label htmlFor="phone">
                  {t("form.labels.phone")} <span>*</span>
                </label>
                <PhoneInput
                  country={"ua"}
                  value={values.phone}
                  onChange={(phone) => setFieldValue("phone", phone)}
                  inputProps={{
                    name: "phone",
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
                  name="email"
                  type="email"
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
