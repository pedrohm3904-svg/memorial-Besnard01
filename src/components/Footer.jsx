import { Link } from "react-router-dom";

const formsUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSeasF6Rqmz-a6omaOirhSEUFWUDuegpMxnIrKBoRVOC4HfczQ/viewform?usp=publish-editor";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="flex items-center gap-4">
            <img
              src="/imagens/unifesp-logo.png"
              alt="Logo da UNIFESP"
              className="h-12 w-auto bg-white/90 rounded-xl px-2 py-1"
            />

            <img
              src="/imagens/sealegre-logo.png"
              alt="Logo do SEAlegre"
              className="h-12 w-12 object-contain rounded-full bg-white"
            />
          </div>

          <div>
            <h3 className="text-cyan-200 font-black mb-3">
              Navegação
            </h3>

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-300">
              <Link to="/" className="hover:text-cyan-300">Início</Link>
              <Link to="/historia" className="hover:text-cyan-300">História</Link>
              <Link to="/ciencia" className="hover:text-cyan-300">Ciência</Link>
              <Link to="/galeria" className="hover:text-cyan-300">Galeria</Link>
              <Link to="/legado" className="hover:text-cyan-300">Legado</Link>
              <Link to="/sobre" className="hover:text-cyan-300">Projeto</Link>
              <Link to="/referencias" className="hover:text-cyan-300">Referências</Link>
            </div>
          </div>

          <div>
            <h3 className="text-cyan-200 font-black mb-3">
              Contribuições
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Fotos, documentos e relatos sobre o N/Oc Prof. Wladimir Besnard
              podem ser enviados para análise e possível inclusão no memorial.
            </p>

            <a
              href={formsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-300 to-emerald-300 text-slate-950 font-black hover:scale-105 transition"
            >
              Enviar contribuição
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-sm text-slate-400">
            Memorial Besnard • IMAR-UNIFESP • SEAlegre
          </p>
        </div>
      </div>
    </footer>
  );
}