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

  .react-tel-input .form-control {
    border: 1px solid #d8dadc;
    border-radius: 10px;
    padding: 12px 16px 12px 60px;
    background: #fff;
    outline: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 125%;
    font-family: "Montserrat";

    &:focus {
      border-color: #a066ff;
      box-shadow: none;
    }
  }

  .react-tel-input .selected-flag:hover::before,
  .react-tel-input .selected-flag:focus::before,
  .react-tel-input .flag-dropdown.open .selected-flag::before {
    border: none;
    box-shadow: none;
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
  transition: color 0.3s ease, box-shadow 0.2s ease, transform 0.2s ease;
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
`;
