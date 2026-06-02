import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Historia from "./pages/Historia";
import Ciencia from "./pages/Ciencia";
import Galeria from "./pages/Galeria";
import Legado from "./pages/Legado";
import SobreProjeto from "./pages/SobreProjeto";
import Referencias from "./pages/Referencias";

export default function App() {
  return (
    <div className="min-h-screen bg-[#020817] text-white overflow-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(34,211,238,0.32),transparent_28%),radial-gradient(circle_at_85%_10%,rgba(250,204,21,0.18),transparent_25%),radial-gradient(circle_at_50%_95%,rgba(16,185,129,0.25),transparent_35%)]" />
      <div className="fixed inset-0 bg-gradient-to-b from-[#020817]/60 via-[#061826]/90 to-[#020817]" />

      <div className="relative z-10">
        <Navbar />

        <main className="max-w-7xl mx-auto px-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/historia" element={<Historia />} />
            <Route path="/ciencia" element={<Ciencia />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/legado" element={<Legado />} />
            <Route path="/sobre" element={<SobreProjeto />} />
            <Route path="/referencias" element={<Referencias />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </div>
  );
}