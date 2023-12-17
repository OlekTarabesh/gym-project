import { ReactNode } from "react";

export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  Classes = "ourclasses",
  ContactUs = "contactus",
}

export interface BenefitTypes {
  title: string;
  icon: JSX.Element;
  description: string;
}

export interface ClassTypes {
  name: string;
  description?: string;
  image: string;
}

export type ActionButtonPropsType = {
  children: ReactNode;
};

export type HTextPropsType = {
  children: ReactNode;
};
