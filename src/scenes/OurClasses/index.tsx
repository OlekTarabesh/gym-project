import { FC } from "react";
import { motion } from "framer-motion";

import Classes from "./Classes";

import ClassesTitle from "./ClassesTitle";

import { classes } from "./classDB";
import { OurClassesPropsType } from "./types";
import { SelectedPage } from "@/shared/types";

const OurClasses: FC<OurClassesPropsType> = ({ setSelectedPage }) => {
  const selectPage = () => {
    setSelectedPage(SelectedPage.Classes);
  };
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div onViewportEnter={selectPage}>
        <ClassesTitle />
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item, i) => (
              <Classes
                key={`${item.name}-${i}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
