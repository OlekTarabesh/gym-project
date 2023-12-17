import { useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

import ActionButton from "../../shared/ActionButton";

import { SelectedPage } from "../../shared/types";
import { GlobalContext } from "../../contexts/global-context";

const Actions = () => {
  const { setSelectedPage } = useContext(GlobalContext);

  const selectContactUs = () => {
    setSelectedPage(SelectedPage.ContactUs);
  };
  return (
    <motion.div
      className="mt-8 flex items-center gap-8 "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.8 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <ActionButton>Join Now</ActionButton>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={selectContactUs}
        href={`${SelectedPage.ContactUs}`}
      >
        Learn More
      </AnchorLink>
    </motion.div>
  );
};

export default Actions;
