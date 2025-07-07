import { ReactNode } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-['Inter',sans-serif]">
      <Navbar />
      <main className="flex-1 mt-16">
        {children}
      </main>
      <footer className="border-t border-gray-100 py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Judah Mvi Mukanime. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;