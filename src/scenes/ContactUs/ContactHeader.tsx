import { motion } from "framer-motion";

import HText from "../../shared/HText";

const ContactHeader = () => {
  return (
    <motion.div
      className="md:w-3/5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <HText>
        <span className="text-primary-500">JOIN NOW </span>
        TO GET IN SHAPE
      </HText>
      <p className="my5">
        Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
        sapien vel rhoncus. Placerat at in enim pellentesque. Nulla adipiscing
        leo egestas nisi elit risus sit. Nunc cursus sagittis.
      </p>
    </motion.div>
  );
};

export default ContactHeader;
