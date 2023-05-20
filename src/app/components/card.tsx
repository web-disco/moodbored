"use client";

import { useRef, useContext } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

import { ImageProps } from "../interfaces/ImageProps";
import { ModalContext } from "../context/modal-context";

const Card = ({ src, id }: ImageProps) => {
  const component = useRef<HTMLDivElement>(null);

  const { setIsOpen, setSrc, setId } = useContext(ModalContext);

  const isInView = useInView(component, { once: true });

  return (
    <motion.div
      ref={component}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      className="relative hover:scale-[1.03] transition-all w-full h-[300px] md:h-[250px] lg:h-[200px] cursor-pointer"
      onClick={() => {
        setIsOpen && setIsOpen(true);
        setSrc && setSrc(src);
        setId && setId(id);
      }}
    >
      <Image src={src} sizes="100%" alt={id} fill className="object-cover" />
    </motion.div>
  );
};

export default Card;
