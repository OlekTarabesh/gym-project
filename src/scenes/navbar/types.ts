import { SelectedPage } from "@/shared/types";

export type NavbarPropsType = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  selectPageHandler: (value: SelectedPage) => void;
};

export type BurgerPropsType = {
  toggleMenuHandler: () => void;
};

export type LinkPropsType = {
  page: string;
  selectedPage: SelectedPage;
  selectPage: (value: SelectedPage) => void;
};
