import { Link } from "react-router-dom";
import { useState } from "react";

import {
  House,
  ScrollText,
  Microscope,
  Images,
  Anchor,
  FolderKanban,
  BookOpen,
  ChevronRight,
  ChevronLeft,
  Instagram,
  Map,
} from "lucide-react";

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

  const menu = [
    ["Início", "/", <House size={20} />],
    ["História", "/historia", <ScrollText size={20} />],
    ["Ciência", "/ciencia", <Microscope size={20} />],
    ["Galeria", "/galeria", <Images size={20} />],
    ["Legado", "/legado", <Anchor size={20} />],
    ["Projeto", "/sobre", <FolderKanban size={20} />],
    ["Referências", "/referencias", <BookOpen size={20} />],
    ["Expedições", "/expedicoes", <Map size={20} />],
  ];

  return (
    <>
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 right-4 z-[60] md:hidden px-4 py-3 rounded-xl bg-[#D6B36A] text-slate-950 font-black shadow-xl"
      >
        Menu
      </button>

      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen
          bg-[#08111F]/95 backdrop-blur-xl
          border-r border-white/10
          transition-all duration-300
          ${collapsed ? "w-24" : "w-72"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden md:flex absolute top-6 -right-4 h-9 w-9 items-center justify-center rounded-full bg-[#0F1E2E] border border-white/10 text-[#D6B36A] hover:bg-[#164E63]/50 transition shadow-xl"
          title={collapsed ? "Expandir menu" : "Recolher menu"}
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>

        <div className="p-6">
          <Link to="/" onClick={() => setMobileOpen(false)}>
            <div className="flex items-center gap-3">
              <img
                src="/imagens/unifesp-logo.png"
                alt="UNIFESP"
                className="h-10 w-auto bg-white rounded-lg px-1"
              />

              {!collapsed && (
                <img
                  src="/imagens/sealegre-logo.png"
                  alt="SEAlegre"
                  className="h-10 w-10 rounded-full bg-white"
                />
              )}
            </div>

            {!collapsed && (
              <div className="mt-6 border-t border-white/10 pt-4">
                <h2 className="text-[#D6B36A] font-black text-xl">
                  Memorial Besnard
                </h2>

                <p className="text-xs text-slate-400 mt-1">
                  IMAR-UNIFESP • SEAlegre
                </p>
              </div>
            )}
          </Link>

          <a
            href="https://www.instagram.com/sealegre.imar/"
            target="_blank"
            rel="noreferrer"
            title="Instagram do SEAlegre"
            className={`
              mt-6 flex items-center rounded-xl py-3 text-slate-300
              hover:bg-[#164E63]/30 hover:text-[#D6B36A] transition
              ${collapsed ? "justify-center px-0" : "gap-3 px-4"}
            `}
          >
            <Instagram size={20} />
            {!collapsed && <span>@sealegre.imar</span>}
          </a>

          <nav className="mt-6 space-y-2">
            {menu.map(([nome, link, icon]) => (
              <Link
                key={link}
                to={link}
                onClick={() => setMobileOpen(false)}
                title={collapsed ? nome : ""}
                className={`
                  flex items-center rounded-xl py-3 text-slate-300
                  hover:bg-[#164E63]/30 hover:text-[#D6B36A] transition
                  ${collapsed ? "justify-center px-0" : "gap-3 px-4"}
                `}
              >
                {icon}
                {!collapsed && <span>{nome}</span>}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}