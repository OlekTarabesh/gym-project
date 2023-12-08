import { FC } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { ActionButtonPropsType, SelectedPage } from "./types";

const ActionButton: FC<ActionButtonPropsType> = ({ children, selectPage }) => {
  const selectPageHandler = () => {
    selectPage(SelectedPage.ContactUs);
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
