import { Josefin_Sans, Krona_One, Kulim_Park, Marcellus, IM_Fell_DW_Pica_SC, Sen } from "next/font/google";
import "./globals.css";


const josefinSans= Josefin_Sans({
  variable: "--font-navbar",
  subsets: ["latin"],
});

const kronaone= Krona_One({
  variable: "--font-nome",
  subsets: ["latin"],
  weight: ["400"],
});

const kulimpark= Kulim_Park({
  variable: "--font-profile",
  subsets: ["latin"],
  weight: ["400"],
});

const marcellus= Marcellus({
  weight: ["400"],
  variable: "--font-title",
  subsets: ["latin"],
});

const imfell= IM_Fell_DW_Pica_SC({
  variable: "--font-contentmenu",
  weight: ["400"],
  subsets: ["latin"],
});
const sen= Sen({
  variable: "--font-paragraphs",
  weight: ["400"],
  subsets: ["latin"],
});



export const metadata = {
  title: "Design Graphic Portifolio - Williams de Lima",
  description: "Welcome to my graphic design portfolio! I'm Williams de Lima, a passionate graphic designer dedicated to creating visually stunning and impactful designs. Explore my collection of work, showcasing my skills in branding, illustration, and digital art. Let's bring your ideas to life with creativity and precision.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefinSans.variable} ${kronaone.variable} ${kulimpark.variable} ${marcellus.variable} ${imfell.variable} ${sen.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
