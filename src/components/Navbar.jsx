import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <Link to="/" className="flex items-center gap-4">
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

          <div>
            <p className="text-cyan-200 font-black leading-tight">
              Memorial Besnard
            </p>
            <p className="text-xs text-slate-300">
              IMAR-UNIFESP • SEAlegre
            </p>
          </div>
        </Link>

        <div className="flex flex-wrap justify-start md:justify-end gap-3 text-sm text-slate-200">
          <Link to="/" className="hover:text-cyan-300">Início</Link>
          <Link to="/historia" className="hover:text-cyan-300">História</Link>
          <Link to="/ciencia" className="hover:text-cyan-300">Ciência</Link>
          <Link to="/galeria" className="hover:text-cyan-300">Galeria</Link>
          <Link to="/legado" className="hover:text-cyan-300">Legado</Link>
          <Link to="/sobre" className="hover:text-cyan-300">Projeto</Link>
          <Link to="/referencias" className="hover:text-cyan-300">Referências</Link>
        </div>
      </div>
    </nav>
  );
}