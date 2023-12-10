import { useEffect, useState } from "react";

import { SelectedPage } from "./shared/types";

import Navbar from "./scenes/navbar";
import Home from "./scenes/home";
import Benefits from "./scenes/benefits";
import OurClasses from "./scenes/our-classes";
import ContactUs from "./scenes/contactUs";
import Footer from "./scenes/footer";

const App = () => {
  const [selectedPage, setSelectedPage] = useState(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  const selectPageHandler = (value: SelectedPage) => {
    setSelectedPage(value);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY !== 0) setIsTopOfPage(false);
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        selectPageHandler={selectPageHandler}
      />
      <Home selectPageHandler={selectPageHandler} />
      <Benefits selectPageHandler={selectPageHandler} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
};

export default App;
