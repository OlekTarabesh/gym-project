import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";

const Sponsors = () => {
  return (
    <div className="h-[150px] w-full bg-primary-100 py-10">
      <div className="mx-auto w-5/6">
        <div className="w-5/5 flex items-center justify-between gap-8">
          <img src={SponsorRedBull} alt="redbull-sponsor" />
          <img src={SponsorForbes} alt="Forbes-sponsor" />
          <img src={SponsorFortune} alt="fortune-sponsor" />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
