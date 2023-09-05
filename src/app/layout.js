import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Threads",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="main-container">
          <div className="w-full max-w-4xl border border-gray-900/20 p-5 rounded-md">
            {children}
          </div>
        </section>
      </body>
    </html>
  );
}
