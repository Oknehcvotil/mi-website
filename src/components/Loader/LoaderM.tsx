import { LoaderMCont } from "./Loader.styled";
import { motion } from "framer-motion";

const LoaderM = () => {
  return (
    <LoaderMCont>
      <motion.img
        src="/logo.svg"
        alt="Loading"
        width={80}
        height={69}
        initial={{ scale: 0.8 }}
        animate={{
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </LoaderMCont>
  );
};

export default LoaderM;
