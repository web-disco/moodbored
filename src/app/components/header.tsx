"use client";

import { useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/dist/ScrambleTextPlugin";
import { useLenis } from "@studio-freight/react-lenis";

import { scambleHover, headerAnimations } from "../lib/animations";

gsap.registerPlugin(ScrambleTextPlugin);

const Header = () => {
  const lenis = useLenis();

  const onDiscoverClick = () => {
    lenis.scrollTo("#discover");
  };

  useEffect(() => {
    headerAnimations();
  }, []);
  return (
    <section className="h-screen flex items-center">
      <div>
        <Link href="/">
          <h1 className="text-[60px] scramble font-semibold">Moodbored...</h1>
        </Link>
        <p className="opacity-0 header-text font-normal text-[12px] max-w-[500px] text-gray-500">
          Share and discover visually simulating content. <br /> Curated from
          the help of{" "}
          <Link
            className="underline header-link-1 hover:text-[#FF4D00] transition-all"
            href="https://archillect.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Archillect
          </Link>
          , an AI created by{" "}
          <Link
            className="underline header-link-2 hover:text-[#FF4D00] transition-all"
            href="https://twitter.com/muratpak"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pak
          </Link>
          .
        </p>
        <button
          onMouseEnter={() =>
            scambleHover({ className: ".discover-btn", text: "discover" })
          }
          onClick={onDiscoverClick}
          className="discover-btn opacity-0 inline-block mt-4 text-sm hover:text-[#FF4D00] transition-all"
        >
          Discover
        </button>
      </div>
    </section>
  );
};

export default Header;
