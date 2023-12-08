import { SelectedPage } from "@/shared/types";

export type HomePropsType = {
  selectPageHandler: (value: SelectedPage) => void;
};

export type ActionsPropsType = {
  selectPage: () => void;
  selectContactUs: () => void;
};
