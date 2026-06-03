import { Link } from "react-router-dom";
import { useState } from "react";

const menuItems = [
  ["Início", "/"],
  ["História", "/historia"],
  ["Ciência", "/ciencia"],
  ["Galeria", "/galeria"],
  ["Legado", "/legado"],
  ["Projeto", "/sobre"],
  ["Referências", "/referencias"],
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 right-4 z-[60] md:hidden px-4 py-3 rounded-xl bg-[#D6B36A] text-slate-950 font-black shadow-xl"
      >
        Menu
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/70 md:hidden"
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen w-72 bg-[#08111F]/95 backdrop-blur-xl
          border-r border-white/10 p-6 transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <Link to="/" onClick={() => setOpen(false)} className="block mb-10">
          <div className="flex items-center gap-4">
            <img
              src="/imagens/unifesp-logo.png"
              alt="Logo da UNIFESP"
              className="h-12 w-auto object-contain bg-white/90 rounded-xl px-2 py-1"
            />

            <img
              src="/imagens/sealegre-logo.png"
              alt="Logo do SEAlegre"
              className="h-12 w-12 object-contain rounded-full bg-white"
            />
          </div>

          <div className="mt-5 border-t border-white/10 pt-5">
            <p className="text-[#D6B36A] font-black text-xl leading-tight">
              Memorial Besnard
            </p>
            <p className="text-xs text-slate-400 mt-1">
              IMAR-UNIFESP • SEAlegre
            </p>
          </div>
        </Link>

        <nav className="space-y-2">
          {menuItems.map(([label, path]) => (
            <Link
              key={path}
              to={path}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-slate-300 hover:bg-[#164E63]/30 hover:text-[#D6B36A] transition"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-6 left-6 right-6 border-t border-white/10 pt-5">
          <p className="text-xs text-slate-500 leading-relaxed">
            Arquivo oceânico, memória científica e patrimônio marítimo.
          </p>
        </div>
      </aside>
    </>
  );
}