import { FC } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

import Link from "../components/Link";

import { SidebarPropsType } from "./types";

const Sidebar: FC<SidebarPropsType> = ({ data, toggleMenuHandler }) => {
  return (
    <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
      {/* Close Icon */}
      <div className="flex justify-end p-12">
        <button onClick={toggleMenuHandler}>
          <XMarkIcon className="h-6 w-6 text-gray-400" />
        </button>
      </div>

      {/* Menu Items */}
      <div className="ml-[33%] flex flex-col gap-10 text-2xl">
        {data.map((item) => (
          <Link page={item.page} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
