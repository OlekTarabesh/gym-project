import { FC } from "react";
import { motion } from "framer-motion";

import HText from "@/shared/HText";
import Benefit from "./components/Benefit";
import Graphics from "./Graphics";

import { BenefitTypes, SelectedPage } from "@/shared/types";
import { benDB } from "./benDB";
import { BenefitsPropsTypes } from "./types";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Benefits: FC<BenefitsPropsTypes> = ({ selectPageHandler }) => {
  const selectPage = () => {
    selectPageHandler(SelectedPage.Benefits);
  };
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={selectPage}>
        {/* Header  */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>
        {/* Benefits */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benDB.map((benefit: BenefitTypes) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              selectPageHandler={selectPageHandler}
            />
          ))}
        </motion.div>
        {/* Graphic And Description  */}
        <Graphics selectPage={selectPage} />
      </motion.div>
    </section>
  );
};

export default Benefits;
