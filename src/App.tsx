import { useEffect, useState, useContext } from "react";

import { SelectedPage } from "./shared/types";

import Navbar from "./scenes/navbar";
import Home from "./scenes/Home";
import Benefits from "./scenes/Benefits";
import OurClasses from "./scenes/OurClasses";
import ContactUs from "./scenes/ContactUs";
import Footer from "./scenes/Footer";
import { GlobalContext } from "./contexts/global-context";

const App = () => {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const { setSelectedPage } = useContext(GlobalContext);

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
      <Navbar isTopOfPage={isTopOfPage} />
      <Home />
      <Benefits />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
};

export default App;
