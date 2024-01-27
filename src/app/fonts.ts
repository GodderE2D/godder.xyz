import { Inter, Fira_Code, Roboto } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const fira_code = Fira_Code({
  subsets: ["latin"],
  display: "swap",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
