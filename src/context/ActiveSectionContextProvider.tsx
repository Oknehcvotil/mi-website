"use client";

import React, { useState } from "react";
import type { SectionName } from "../lib/types/common.types";
import { ActiveSectionContext } from "./ActiveSectionContext";

type ActiveSectionContextProviderProps = { children: React.ReactNode };

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("About");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}
