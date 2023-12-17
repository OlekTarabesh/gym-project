import { FC } from "react";
import { motion } from "framer-motion";

import useMediaQuery from "../../hooks/useMediaQuery";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";

import Sponsors from "./Sponsors";
import Actions from "./Actions";
import { SelectedPage } from "../../shared/types";
import { HomePropsType } from "./types";

const Home: FC<HomePropsType> = ({ selectPageHandler }) => {
  const selectPage = () => {
    selectPageHandler(SelectedPage.Home);
  };

  const selectContactUs = () => {
    selectPageHandler(SelectedPage.ContactUs);
  };
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* Image and main header */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={selectPage}
      >
        {/* main header  */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* hadings  */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20  before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt="Home page tex" />
              </div>
            </div>
            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>
          {/* Actions  */}
          <Actions selectPage={selectPage} selectContactUs={selectContactUs} />
        </div>
        {/* image  */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img src={HomePageGraphic} alt="" />
        </div>
      </motion.div>
      {/* Sponsors  */}
      {isAboveMediumScreens && <Sponsors />}
    </section>
  );
};

export default Home;
