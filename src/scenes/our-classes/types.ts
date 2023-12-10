import { SelectedPage } from "../../shared/types";

export type OurClassesPropsType = {
  setSelectedPage: (value: SelectedPage) => void;
};

export type ClassesPropsType = {
  name: string;
  description?: string;
  image: string;
};
