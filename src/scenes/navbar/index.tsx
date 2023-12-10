import { FC, useState } from "react";

import Link from "./components/Link";
import Sidebar from "./sidebar/index";

import Logo from "../../assets/Logo.png";
import ActionButton from "../../shared/ActionButton";
import useMediaQuery from "../../hooks/useMediaQuery";
import Burger from "./components/Burger";

import { navDB } from "./navDB";
import { NavbarPropsType } from "./types";
import { SelectedPage } from "../../shared/types";

const Navbar: FC<NavbarPropsType> = ({
  isTopOfPage,
  selectedPage,
  selectPageHandler,
}) => {
  const [isMenueToggled, setIsMenueToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const flexBetween = "flex items-center justify-between";
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  const toggleMenuHandler = () => {
    setIsMenueToggled(!isMenueToggled);
  };

  const selectPage = (value: SelectedPage) => {
    selectPageHandler(value);
  };

  return (
    <nav>
      <div
        className={` ${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img src={Logo} alt="logo" />
            {/* Right Side */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  {navDB.map((item, i) => (
                    <Link
                      key={i}
                      page={item.page}
                      selectedPage={selectedPage}
                      selectPage={selectPage}
                    />
                  ))}
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton selectPage={selectPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <Burger toggleMenuHandler={toggleMenuHandler} />
            )}
          </div>
        </div>
      </div>
      {/* Mobile menu modal */}
      {!isAboveMediumScreens && isMenueToggled && (
        <Sidebar
          data={navDB}
          toggleMenuHandler={toggleMenuHandler}
          selectedPage={selectedPage}
          selectPage={selectPage}
        />
      )}
    </nav>
  );
};

export default Navbar;
