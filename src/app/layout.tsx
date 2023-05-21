import "./globals.css";
import localFont from "next/font/local";

import LenisProvider from "./context/lenis-provider";
import ModalContextProvider from "./context/modal-context";

const proto = localFont({
  display: "swap",
  src: [
    {
      path: "../../public/fonts/proto-mono-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/proto-mono-semi.ttf",
      weight: "600",
      style: "semibold",
    },
  ],
});

export const metadata = {
  title: "Moodbored...",
  description: "Share and discover visually simulating content",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <LenisProvider>
        <ModalContextProvider>
          <body className={proto.className}>{children}</body>
        </ModalContextProvider>
      </LenisProvider>
    </html>
  );
}
