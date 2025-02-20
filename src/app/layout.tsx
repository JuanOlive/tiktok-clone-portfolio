import type { Metadata } from "next";
import "./globals.css";
import SideNav from "../components/aside";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tiktok Clone ",
  description: "Tiktok Clone by Juan",
};

    export default function RootLayout({ children }: { children: React.ReactNode }) {
      return (
          <html lang="pt-br">
              <body className='bg-black'>
                  <div className="flex">
                      {/* Sidebar */}
                      <SideNav />
  
                      {/* Conteúdo principal */}
                      <div className="ml-64 p-4 flex-1">
                          {children}
                      </div>
                  </div>
              </body>
          </html>
      );
  }
  
