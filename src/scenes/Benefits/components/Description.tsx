import { motion } from "framer-motion";

const Description = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ deley: 0.2, duration: 0.8 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <p className="my-5">
        Nascetur aenean massa auctor tincidunt. Iaculis potenti amet egestas
        ultrices consectetur adipiscing ultricies enim. Pulvinar fames vitae
        vitae quis. Quis amet vulputate tincidunt at in nulla nec. Consequat sed
        facilisis dui sit egestas ultrices tellus. Ullamcorper arcu id pretium
        sapien proin integer nisl. Felis orci diam odio.
      </p>
      <p className="mb-5">
        Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus
        quam porttitor. Mauris velit euismod elementum arcu neque facilisi. Amet
        semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in
        risus nunc.
      </p>
    </motion.div>
  );
};

export default Description;
