import { FC } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

import { BurgerPropsType } from "./types";

const Burger: FC<BurgerPropsType> = ({ toggleMenuHandler }) => {
  return (
    <button
      className="rounded-full bg-secondary-500 p-2"
      onClick={toggleMenuHandler}
    >
      <Bars3Icon className="h-6 w-6 text-white" />
    </button>
  );
};

export default Burger;
