"use client";

import { useLenis } from "@studio-freight/react-lenis";
import { scambleHover } from "../utils/animations";

const Footer = () => {
  const lenis = useLenis();
  return (
    <footer
      className="text-xs pb-10 flex justify-end cursor-pointer hover:text-[#FF4D00] transition-all footer-btn"
      onClick={() => lenis.scrollTo(0)}
      onMouseEnter={() =>
        scambleHover({ className: ".footer-btn", text: "moodbored..." })
      }
    >
      moodbored...
    </footer>
  );
};

export default Footer;
