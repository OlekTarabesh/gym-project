import { FC, useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { LinkPropsType } from "../types";
import { SelectedPage } from "../../../shared/types";
import { GlobalContext } from "../../../contexts/global-context";

const Link: FC<LinkPropsType> = ({ page }) => {
  const { setSelectedPage, selectedPage } = useContext(GlobalContext);
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  const selectPageHandler = () => {
    setSelectedPage(lowerCasePage);
  };

  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={selectPageHandler}
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
        transition duration-500 hover:text-primary-300
      `}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
