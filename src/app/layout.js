import { Inter } from "next/font/google";
import "./globals.css";

import { NavBar } from "./components/NavBar";
import ThemeProvider from "./providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "luckened",
  description: "Luckened's work portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <body className={inter.className}>
        <ThemeProvider>
          <NavBar />
          <main className="flex min-h-screen flex-col items-center justify-between p-8">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
