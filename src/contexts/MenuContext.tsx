import React, {
  createContext, ReactNode, useMemo, useState,
} from 'react';

type NavContextProps = {
  children: ReactNode;
};

type NavContextType = {
  isOpenMenu: boolean;
  setIsOpenMenu: (state: boolean) => void;
  toggleMenu: () => void;
};

const initialValue = {
  isOpenMenu: false,
  setIsOpenMenu: () => {},
  toggleMenu: () => {},
};

const NavContext = createContext<NavContextType>(initialValue);

const NavContextProvider = ({ children }: NavContextProps) => {
  const [isOpenMenu, setIsOpenMenu] = useState(initialValue.isOpenMenu);

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const providerValue = useMemo(() => ({
    isOpenMenu,
    setIsOpenMenu,
    toggleMenu,
  }), [isOpenMenu]);

  return (
    <NavContext.Provider value={providerValue}>
      {children}
    </NavContext.Provider>
  );
};

export { NavContext, NavContextProvider };
