import HText from "@/shared/HText";
import { motion } from "framer-motion";

const ClassesTitle = () => {
  return (
    <motion.div
      className="mx-auto w-5/6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <div className="md:w-3/5">
        <HText>OUR CLASSES</HText>
        <p className="py-5">
          Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
          tellus quam porttitor. Mauris velit euismod elementum arcu neque
          facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim
          mattis odio in risus nunc.
        </p>{" "}
      </div>
    </motion.div>
  );
};

export default ClassesTitle;
