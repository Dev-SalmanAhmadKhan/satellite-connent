import localFont from "next/font/local";

export const k2d = localFont({
  src: [
    {
      path: "../public/fonts/K2d/K2D-Light.ttf",
      weight: "300",
      style: "normal",
    },

    {
      path: "../public/fonts/K2d/K2D-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/K2d/K2D-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/K2d/K2D-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/K2d/K2D-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-k2d",
});

export const inter = localFont({
  src: [
    {
      path: "../public/fonts/inter/Inter-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/inter/Inter-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/inter/Inter-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/inter/Inter-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-inter",
});
