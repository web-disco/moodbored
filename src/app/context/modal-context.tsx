"use client";

import { createContext, useState } from "react";
import { ModalContextType } from "../types/ModalContextType";

export const ModalContext = createContext<Partial<ModalContextType>>({});

const NavContextProvider = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [src, setSrc] = useState<string>("");
  const [id, setId] = useState<string>("");

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        setIsOpen,
        id,
        setId,
        src,
        setSrc,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default NavContextProvider;
