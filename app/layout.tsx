import React from "react";
import ThemeRegistry from "@/theme/theme-registry";
import "./globals.css";
import { Montserrat } from "next/font/google";
import ProvidersContext from "@/context/providers-context";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Nghiem Thanh Pham",
  description: "I'am a student in FPT University about Software Engineering.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({
  children,
}) => {
  return (
    <html lang="vi">
      <ThemeRegistry>
        <body className={montserrat.className}>
          <ProvidersContext>{children}</ProvidersContext>
        </body>
      </ThemeRegistry>
    </html>
  );
};

export default RootLayout;