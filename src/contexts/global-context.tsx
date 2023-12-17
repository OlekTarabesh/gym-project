import { ReactNode, createContext, useState } from "react";
import { SelectedPage } from "../shared/types";

type GContextTypes = {
  selectedPage: string;
  setSelectedPage: (value: SelectedPage) => void;
  selectPageHandler: (value: SelectedPage) => void;
};

export const GlobalContext = createContext<GContextTypes>({
  selectedPage: "",
  setSelectedPage: () => null,
  selectPageHandler: () => null,
});

const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [selectedPage, setSelectedPage] = useState(SelectedPage.Home);

  const selectPageHandler = (value: SelectedPage) => {
    setSelectedPage(value);
  };

  const contextValue = {
    selectedPage,
    setSelectedPage,
    selectPageHandler,
  };
  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
