import "@/styles/global.css";
import { Inter } from "@next/font/google";
import clsx from "clsx";
import GlassPane from "@/components/GlassPane";

const inter = Inter({
  variable: "--font-inter",
  subsets: ['latin']
});

export default function DashboardRootLayout({ children }) {
  return (
    <html lang="en" className={clsx(inter.variable, "dark")}>
      <head />
      <body className="h-screen w-screen candy-mesh p-6">
        <GlassPane className="w-full h-full p-6 flex align-center container mx-auto">

          <main className="w-full pl-6 h-full">{children}</main>
        </GlassPane>
      </body>
    </html>
  );
}