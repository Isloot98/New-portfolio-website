"use client";

import { useEffect, useState } from "react";
import Header from "@/components/header";
import ButtonAppBar from "@/components/mobileHeader";

const DynamicHeader = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", checkIsMobile);

    checkIsMobile();

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const NavbarComponent = isMobile ? ButtonAppBar : Header;

  return <NavbarComponent />;
};

export default DynamicHeader;
