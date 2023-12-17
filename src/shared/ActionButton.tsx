import { FC, useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { ActionButtonPropsType, SelectedPage } from "./types";
import { GlobalContext } from "../contexts/global-context";

const ActionButton: FC<ActionButtonPropsType> = ({ children }) => {
  const { setSelectedPage } = useContext(GlobalContext);
  const selectPageHandler = () => {
    setSelectedPage(SelectedPage.ContactUs);
  };
  return (
    <AnchorLink
      className="hover:text--white rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500"
      onClick={selectPageHandler}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
