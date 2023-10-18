import { Inter, Poppins } from "next/font/google";


export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: [
    '100', '300', '400', '700', '900'
  ]
});

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: [
    '100', '300', '400', '700', '900'
  ]
});
