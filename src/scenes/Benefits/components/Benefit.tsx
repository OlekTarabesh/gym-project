import { FC, useContext } from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { BenefitPropsType } from "./types";
import { SelectedPage } from "../../../shared/types";
import { GlobalContext } from "../../../contexts/global-context";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const Benefit: FC<BenefitPropsType> = ({ icon, title, description }) => {
  const { setSelectedPage } = useContext(GlobalContext);
  const selectPage = () => {
    setSelectedPage(SelectedPage.ContactUs);
  };
  return (
    <motion.div
      variants={childVariant}
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-500 p-4">
          {icon}
        </div>
      </div>

      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={selectPage}
        href={`${SelectedPage.ContactUs}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  );
};

export default Benefit;
