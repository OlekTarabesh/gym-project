import { SelectedPage } from "../../../shared/types";

export type BenefitPropsType = {
  title: string;
  icon: JSX.Element;
  description: string;
  selectPageHandler: (value: SelectedPage) => void;
};
