import { SelectedPage } from "@/shared/types";

export type SidebarPropsType = {
  data: { page: string }[];
  selectedPage: SelectedPage;
  toggleMenuHandler: () => void;
  selectPage: (value: SelectedPage) => void;
};
