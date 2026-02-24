import styled from "@emotion/styled";
import { Field } from "formik";

export const FormCont = styled.div`
  background-image: url("/images/mob/background/form-bg.jpg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 390px;
  width: 100%;
  padding: 20px 10px;
  height: 450px;

  @media (min-width: 1920px) {
    background-image: url("/images/desktop/background/form-bg.jpg");
    max-width: 955px;
    height: 733px;
  }
`;

export const FormWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background: #fff;
  padding: 15px;
  max-width: 350px;
  width: 100%;

  @media (min-width: 1920px) {
    max-width: 660px;
    border-radius: 32px;
    padding: 40px 30px 30px;
  }
`;

export const FieldCont = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  &:last-of-type {
    margin-bottom: 20px;
  }

  label {
    font-weight: 400;
    font-size: 18px;
    line-height: 125%;
    color: #000;

    span {
      color: #ff2400;
    }
  }

  .react-international-phone-input-container {
    border: 1px solid #d8dadc;
    border-radius: 10px;
    gap: 5px;
    padding: 0 16px;
    min-height: 43.1px;
    align-items: center;

    &:focus-within {
      border-color: #a066ff;
      box-shadow: none;
    }
  }

  .react-international-phone-country-selector-button {
    border-radius: none;
    border: none;
    margin-right: 0px;
    background-color: transparent;

    &:hover,
    &:focus {
      background-color: transparent;
    }
  }

  .react-international-phone-input-container .react-international-phone-input {
    border-radius: none;
    border: none;
    margin: 0;
    background: #fff;
    outline: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 125%;
    font-family: "Montserrat";
    padding: 0;
  }

  @media (min-width: 1920px) {
    margin-bottom: 20px;

    &:last-of-type {
      margin-bottom: 30px;
    }

    label {
      font-size: 25px;
    }

    .react-international-phone-input-container {
      gap: 8px;
      padding: 0 16px;
      min-height: 68.85px;
      align-items: center;
    }

    .react-international-phone-input-container
      .react-international-phone-input {
      font-size: 25px;
      font-family: "Montserrat";
    }

    .react-international-phone-country-selector-button__button-content {
      img {
        width: 35px;
        height: 35px;
        margin-right: 10px;
      }
    }

    .react-international-phone-country-selector-button__dropdown-arrow {
      border-top: 8px solid #777;
      border-right: 8px solid transparent;
      border-left: 8px solid transparent;
    }
  }
`;

export const CustomField = styled(Field)`
  border: 1px solid #d8dadc;
  border-radius: 10px;
  padding: 12px 16px;
  background: #fff;
  outline: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 125%;
  font-family: "Montserrat";

  &:hover,
  &:focus {
    border-color: #a066ff;
    outline: none;
    box-shadow: none;
  }

  @media (min-width: 1920px) {
    padding: 18px 16px;
    font-size: 25px;
  }
`;

export const SubmitBtn = styled.button`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  text-transform: uppercase;
  color: #fff;
  border-radius: 10px;
  width: 100%;
  transition:
    color 0.3s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
  background: #5427b1;
  min-height: 45px;
  height: 100%;

  span {
    position: relative;
    z-index: 1;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, #5427b1 0%, #a066ff 100%);
    opacity: 1;
    transition: opacity 0.35s ease;
    z-index: 0;
  }

  &:hover::before,
  &:focus::before {
    opacity: 0;
  }

  &:active {
    box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.25);
    transform: scale(0.97);
  }

  @media (min-width: 1920px) {
    font-size: 35px;
    border-radius: 10px;
    min-height: 80px;
    height: 100%;
  }
`;
