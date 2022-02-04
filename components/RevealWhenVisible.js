import { motion } from "framer-motion";

const RevealWhenVisible = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1, type: "spring" }}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: 100, opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default RevealWhenVisible;
