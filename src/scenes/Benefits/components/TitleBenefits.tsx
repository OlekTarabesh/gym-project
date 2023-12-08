import { motion } from "framer-motion";

import HText from "@/shared/HText";

const TitleBenefits = () => {
  return (
    <div className="relative">
      <div className="before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            MILLIONS OF HAPPY MEMBERS GETTING{" "}
            <span className="text-primary-500">FIT</span>
          </HText>
        </motion.div>
      </div>
    </div>
  );
};

export default TitleBenefits;
