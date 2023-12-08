import { FC } from "react";

import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import TitleBenefits from "./components/TitleBenefits";
import Description from "./components/Description";
import ActionButton from "@/shared/ActionButton";

import { GraphicsPropsTypes } from "./types";

const Graphics: FC<GraphicsPropsTypes> = ({ selectPage }) => {
  return (
    <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
      {/* Graphic */}
      <img
        src={BenefitsPageGraphic}
        alt="benefits-page-graphic"
        className="mx-auto"
      />
      {/* Description */}
      <div>
        {/* Title  */}
        <TitleBenefits />
        {/* Description  */}
        <Description />
        {/* Button  */}
        <div className="relative mt-16">
          <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
            <ActionButton selectPage={selectPage}>Join Now</ActionButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graphics;
