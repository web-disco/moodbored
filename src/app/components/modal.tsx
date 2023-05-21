"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { motion } from "framer-motion";
import { TwitterShareButton } from "react-share";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/dist/ScrambleTextPlugin";

import { scambleHover } from "../lib/animations";

import { ModalContext } from "../context/modal-context";

gsap.registerPlugin(ScrambleTextPlugin);

const Modal = () => {
  const { isOpen, setIsOpen, src, setSrc, id } = useContext(ModalContext);

  return (
    <motion.div
      initial={{ zIndex: -10 }}
      animate={{
        zIndex: isOpen ? 10 : -10,
      }}
      transition={{ delay: isOpen ? 0 : 0.2 }}
      className="flex items-center justify-center fixed inset-0 bg-black bg-opacity-[95%] text-white"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        className="px-5 lg:px-10"
      >
        <Image
          src={src!}
          width="500"
          height="500"
          alt={id!}
          className="object-cover"
        />
        <div className="flex justify-between text-xs mt-2">
          <Link
            href={`https://archillect.com/${id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FF4D00] transition-all source-btn flex-1"
            onMouseEnter={() =>
              scambleHover({ className: ".source-btn", text: "source" })
            }
          >
            source
          </Link>
          <button
            className="hover:text-[#FF4D00] transition-all close-btn flex-1"
            onClick={() => {
              setIsOpen && setIsOpen(false);
              setTimeout(() => {
                setSrc && setSrc("");
              }, 200);
            }}
            onMouseEnter={() => {
              scambleHover({ className: ".close-btn", text: "close" });
            }}
          >
            close
          </button>
          <div className="flex-1 text-right">
            <TwitterShareButton
              onMouseEnter={() =>
                scambleHover({ className: ".share-btn", text: "share" })
              }
              url={`|| ${process.env.NEXT_PUBLIC_SITE_URL!}`}
              title={`Look at this photo I found on Moodbored... source: https://archillect.com/${id}`}
            >
              <span className="share-btn hover:text-[#FF4D00] transition-all share-btn">
                share
              </span>
            </TwitterShareButton>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
