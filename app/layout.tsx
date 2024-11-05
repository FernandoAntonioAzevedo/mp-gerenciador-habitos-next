import "./globals.css";
import type { Metadata } from "next";
import { Dosis } from "next/font/google";
import Image from "next/image";

const dosis = Dosis({ subsets: ["latin"] });
 

export const metadata: Metadata = {
  title: "Meta Diária - Gerenciador de Hábitos",
  description: "Gerencie seus hábitos na palma da sua mão",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dosis.className} flex justify-center flex-col mt-10 bg-neutral-900`}>
        <Image src="/logo.svg"
        width={200}
        height={200} 
        alt="Logo" />
        {children} </body>
    </html>
  );
}
