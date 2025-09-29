import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const PolicyModalCont = styled(motion.div)`
  position: relative;
  max-width: 300px;
  width: 100%;
  height: 70%;
  background-color: #fff;
  border-radius: 13px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  h2 {
    font-weight: 500;
    font-size: 15px;
    text-transform: uppercase;
    color: #000;
    max-width: 200px;
    margin-bottom: 10px;
  }
`;

export const TextCont = styled.div`
  overflow-y: auto;
  font-weight: 400;
  font-size: 10px;
  line-height: 130%;
  color: #000;
  flex: 1;
  padding-right: 5px;

  &::-webkit-scrollbar {
    width: 4px;
    height: 20px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 1px;
    width: 4px;
    height: 20px;
    background: #a066ff;
  }

  h3 {
    font-weight: 600;
    margin-bottom: 5px;
  }

  p:not(:last-of-type),
  ul {
    margin-bottom: 10px;
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;
  }
`;
