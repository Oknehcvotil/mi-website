import type { ReactNode } from "react";
import { Wrapper } from "./Container.styled";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

function Container({ children, className }: ContainerProps) {
  return <Wrapper className={className}>{children}</Wrapper>;
}

export default Container;
