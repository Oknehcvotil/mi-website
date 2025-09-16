import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Card = styled(motion.article)<{ backGround?: string }>`
  flex: 1;
  background-color: ${({ backGround }) => backGround || "#fff"};
  padding: 20px 0;
`;

export const CardCont = styled.div`
  max-width: 390px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const Title = styled.h3`
  font-family: "Unbounded";
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  text-transform: uppercase;
  margin: 0 0 15px;
  max-width: 270px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Item = styled.li`
  position: relative;
  border: 1px solid #fff;
  border-radius: 11px;
  width: 100%;
  min-height: 50px;
  backdrop-filter: blur(100%);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25), inset 6px 11px 5px 0 #fff;
  background: rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  padding-left: 19px;

  &::after {
    content: "";
    position: absolute;
    left: -8px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    width: 16px;
    height: 16px;
    background: linear-gradient(180deg, #5427b1 0%, #a066ff 100%);
  }
`;

export const Text = styled.p`
  font-family: "Unbounded";
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  text-transform: uppercase;
`;
