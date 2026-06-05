import { Link } from "react-router-dom";

const formsUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSeasF6Rqmz-a6omaOirhSEUFWUDuegpMxnIrKBoRVOC4HfczQ/viewform?usp=publish-editor";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[#08111F]/70">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-8">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div>
            <p className="font-black text-[#D6B36A]">Memorial Besnard</p>
            <p className="text-sm text-slate-400 mt-1">
              IMAR-UNIFESP • SEAlegre
            </p>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-300">
            <Link to="/" className="hover:text-[#D6B36A]">Início</Link>
            <Link to="/historia" className="hover:text-[#D6B36A]">História</Link>
            <Link to="/ciencia" className="hover:text-[#D6B36A]">Ciência</Link>
            <Link to="/galeria" className="hover:text-[#D6B36A]">Galeria</Link>
            <Link to="/legado" className="hover:text-[#D6B36A]">Legado</Link>
            <Link to="/sobre" className="hover:text-[#D6B36A]">Projeto</Link>
            <Link to="/referencias" className="hover:text-[#D6B36A]">Referências</Link>
            <Link to="/expedicoes" className="hover:text-[#D6B36A]">Expedições</Link>
          </div>

          <div className="max-w-sm">
            <p className="text-sm text-slate-300 leading-relaxed mb-3">
              Fotos, documentos e relatos sobre o Besnard podem ser enviados
              para análise e possível inclusão no memorial.
            </p>

            <a
              href={formsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-4 py-2 rounded-xl bg-[#D6B36A] text-slate-950 font-black hover:scale-105 transition"
            >
              Enviar contribuição
            </a>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-white/10 text-sm text-slate-400">
          <p>Desenvolvido por Pedro Henrique Moura • Tel. (11) 94589-4462</p>
        </div>
      </div>
    </footer>
  );
}