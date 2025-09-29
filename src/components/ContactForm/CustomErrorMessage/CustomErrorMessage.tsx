import { ErrorCont } from "./CustomErrorMessage.styled";

type CustomErrorMessageProps = {
  children?: string;
};

const CustomErrorMessage = ({ children }: CustomErrorMessageProps) => {
  return (
    <ErrorCont>
      <svg width={16} height={16}>
        <use href="/icons/sprite.svg#icon-error"></use>
      </svg>
      {children}
    </ErrorCont>
  );
};

export default CustomErrorMessage;
