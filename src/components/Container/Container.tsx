import type { ReactNode } from "react";
import { Wrapper } from "./Container.styled";

type ContainerProps = {
  children: ReactNode;
};

function Container({ children }: ContainerProps) {
  return <Wrapper>{children}</Wrapper>;
}

export default Container;
