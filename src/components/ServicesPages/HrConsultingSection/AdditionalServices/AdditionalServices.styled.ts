import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const AdditionalServicesList = styled(motion.ul)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-direction: column;
  padding: 0 15px;
  max-width: 390px;
  width: 100%;
  margin: 0 auto;
`;

export const AdditionalServicesItems = styled(motion.li)`
  border: 5px solid #fff;
  border-radius: 10px;
  backdrop-filter: blur(15px);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background: rgba(255, 255, 255, 0.5);
  padding: 15px 10px;
  width: 100%;
  text-align: center;
  font-weight: 500;
  font-size: 13px;
  line-height: 129%;
  text-align: center;
  color: #14111a;
`;
