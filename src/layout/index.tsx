import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors dark:bg-[#020617] dark:text-white">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}