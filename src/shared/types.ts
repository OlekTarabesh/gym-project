export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "Our Classes",
  ContactUs = "Contact Us",
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
