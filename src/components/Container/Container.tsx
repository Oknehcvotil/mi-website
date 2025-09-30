import { forwardRef } from "react";
import type { ComponentPropsWithoutRef } from "react";
import { Wrapper } from "./Container.styled";

type ContainerProps = ComponentPropsWithoutRef<typeof Wrapper>;

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, ...rest }, ref) => {
    return (
      <Wrapper ref={ref} {...rest}>
        {children}
      </Wrapper>
    );
  }
);

export default Container;
