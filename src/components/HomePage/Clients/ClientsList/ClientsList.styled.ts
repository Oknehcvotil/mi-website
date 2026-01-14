import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const List = styled(motion.ul)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 20px;
`;

export const ListItem = styled(motion.li)`
  border-radius: 10px;
  background-color: #fff;
  border: 2px solid #d8dadc;
  flex-basis: calc((100% - 16px) / 2);
  min-height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
