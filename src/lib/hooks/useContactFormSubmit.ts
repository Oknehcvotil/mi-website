import type { FormikHelpers } from "formik";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";
const STATUS_HIDE_DELAY_MS = 4000;

export type FormValues = {
  name: string;
  phone: string;
  email: string;
  website: string;
};

export type SubmitStatus = {
  message: string;
  type: "error" | "success";
};

type ContactApiResponse = {
  message?: string;
  success?: boolean;
};

const getErrorMessage = (
  error: unknown,
  fallbackMessage: string,
): string => {
  if (error && typeof error === "object" && "message" in error) {
    const message = error.message;

    if (typeof message === "string" && message.trim()) {
      return message;
    }
  }

  return fallbackMessage;
};

export function useContactFormSubmit() {
  const { t } = useTranslation();
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);
  const statusTimeoutRef = useRef<number | null>(null);

  const clearStatusTimeout = useCallback(() => {
    if (statusTimeoutRef.current !== null) {
      window.clearTimeout(statusTimeoutRef.current);
      statusTimeoutRef.current = null;
    }
  }, []);

  const showSubmitStatus = useCallback(
    (status: SubmitStatus) => {
      clearStatusTimeout();
      setSubmitStatus(status);
      statusTimeoutRef.current = window.setTimeout(() => {
        setSubmitStatus(null);
        statusTimeoutRef.current = null;
      }, STATUS_HIDE_DELAY_MS);
    },
    [clearStatusTimeout],
  );

  useEffect(
    () => () => {
      clearStatusTimeout();
    },
    [clearStatusTimeout],
  );

  const getSubmitErrorMessage = useCallback(
    (status?: number) => {
      if (status === 429) {
        return t("form.errorRateLimit");
      }

      if (status === 400) {
        return t("form.errorInvalidData");
      }

      return t("form.errorMessage");
    },
    [t],
  );

  const handleSubmit = useCallback(
    async (
      values: FormValues,
      { resetForm, setSubmitting }: FormikHelpers<FormValues>,
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
        const message = getErrorMessage(error, fallbackMessage);

        showSubmitStatus({
          message,
          type: "error",
        });
        console.error("Error submitting form:", error);
      } finally {
        setSubmitting(false);
      }
    },
    [clearStatusTimeout, getSubmitErrorMessage, showSubmitStatus, t],
  );

  return {
    handleSubmit,
    submitStatus,
  };
}
