import gsap from "gsap";

interface ScrambleHoverProps {
  className: string;
  text: string;
}

export const scambleHover = ({ className, text }: ScrambleHoverProps) => {
  gsap.to(className, {
    duration: 0.3,
    scrambleText: {
      text,
      chars: "01",
      revealDelay: 0.3,
    },
  });
};

export const headerAnimations = () => {
  gsap.to(".scramble", {
    duration: 2,
    scrambleText: {
      text: "Moodbored...",
      chars: "01",
      revealDelay: 1,
    },
    onComplete: () => {
      gsap.to(".header-text", {
        opacity: 1,
      });
      gsap.to(".header-link-1", {
        duration: 1.3,
        scrambleText: {
          text: "Archillect",
          chars: "01",
          revealDelay: 1,
        },
      });
      gsap.to(".header-link-2", {
        duration: 1.3,
        scrambleText: {
          text: "Pak",
          chars: "01",
          revealDelay: 1,
        },
        onComplete: () => {
          gsap.to(".discover-btn", {
            opacity: 1,
          });
        },
      });
    },
  });
};
