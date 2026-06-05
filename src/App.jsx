import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Historia from "./pages/Historia";
import Ciencia from "./pages/Ciencia";
import Galeria from "./pages/Galeria";
import Legado from "./pages/Legado";
import SobreProjeto from "./pages/SobreProjeto";
import Referencias from "./pages/Referencias";
import Expedicoes from "./pages/Expedicoes";

export default function App() {
  return (
    <div className="min-h-screen bg-[#08111F] text-slate-100 overflow-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(22,78,99,0.28),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(214,179,106,0.12),transparent_25%),linear-gradient(to_bottom,#08111F,#0B1624,#08111F)]" />
      <div className="fixed inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:48px_48px]" />

      <Sidebar />

      <div className="relative z-10 md:ml-24">
        <main className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/historia" element={<Historia />} />
            <Route path="/ciencia" element={<Ciencia />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/legado" element={<Legado />} />
            <Route path="/sobre" element={<SobreProjeto />} />
            <Route path="/referencias" element={<Referencias />} />
            <Route path="/expedicoes" element={<Expedicoes />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </div>
  );
}