import { FileText, Map, Ship, Waves } from "lucide-react";

export default function Expedicoes() {
  const periodos = [
    {
      anos: "1967–1970",
      titulo: "Primeiros cruzeiros e chegada ao Brasil",
      texto:
        "Os primeiros registros incluem os cruzeiros VIKINDIO, a travessia até o Brasil e as primeiras campanhas no litoral paulista e no Atlântico Sul.",
    },
    {
      anos: "1970–1976",
      titulo: "Expansão das campanhas científicas",
      texto:
        "O Besnard passa a atuar em projetos como GEDIP, REMAC/PETROBRAS, FINEP, estudos de bentos, ictioplâncton e pesquisas de circulação costeira.",
    },
    {
      anos: "1982–1988",
      titulo: "PROANTAR e atuação antártica",
      texto:
        "O navio participa de expedições associadas ao PROANTAR, ampliando sua importância para a pesquisa brasileira em regiões polares.",
    },
    {
      anos: "1997–1998",
      titulo: "OPISS, PADCT, COROAS e REVIZEE",
      texto:
        "As campanhas passam a envolver projetos de grande escala ligados à costa brasileira, recursos vivos, circulação e processos oceanográficos.",
    },
    {
      anos: "2001–2006",
      titulo: "DEPROAS, ECOSAN e últimas campanhas",
      texto:
        "Nos anos finais de operação, o Besnard atuou em projetos como DEPROAS e ECOSAN, além de disciplinas de graduação e pós-graduação.",
    },
  ];

  const projetos = [
    "VIKINDIO",
    "GEDIP",
    "REMAC/PETROBRAS",
    "FINEP",
    "PROANTAR",
    "REVIZEE",
    "DEPROAS",
    "ECOSAN",
  ];

  return (
    <section className="py-16">
      <header className="max-w-5xl mb-12">
        <p className="inline-block px-5 py-2 mb-6 rounded-full bg-[#164E63]/25 border border-white/10 text-[#D6B36A] text-sm">
          Acervo técnico • Cruzeiros oceanográficos
        </p>

        <h1 className="text-4xl md:text-6xl font-black text-slate-100 mb-6">
          Expedições e Cruzeiros Oceanográficos
        </h1>

        <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
          A trajetória científica do N/Oc Prof. Wladimir Besnard pode ser
          observada por meio de seus cruzeiros oceanográficos, que reuniram
          projetos, pesquisadores, regiões estudadas e diferentes frentes da
          oceanografia brasileira entre 1967 e 2006.
        </p>
      </header>

      <section className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="rounded-[2rem] bg-[#0F1E2E]/70 border border-white/10 p-7">
          <Ship className="text-[#D6B36A] mb-4" size={32} />
          <h2 className="text-2xl font-black text-slate-100 mb-2">
            40 anos ao mar
          </h2>
          <p className="text-slate-400 leading-relaxed">
            O documento-base apresenta uma sequência de campanhas científicas
            realizadas ao longo de quatro décadas de operação.
          </p>
        </div>

        <div className="rounded-[2rem] bg-[#0F1E2E]/70 border border-white/10 p-7">
          <Waves className="text-[#D6B36A] mb-4" size={32} />
          <h2 className="text-2xl font-black text-slate-100 mb-2">
            Atlântico Sul
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Os registros incluem estudos no litoral brasileiro, no Atlântico
            Sul, em regiões costeiras e em áreas oceânicas de maior alcance.
          </p>
        </div>

        <div className="rounded-[2rem] bg-[#0F1E2E]/70 border border-white/10 p-7">
          <Map className="text-[#D6B36A] mb-4" size={32} />
          <h2 className="text-2xl font-black text-slate-100 mb-2">
            Acervo em expansão
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Esta página poderá futuramente receber mapas, filtros por período,
            tabela interativa e visualização das regiões estudadas.
          </p>
        </div>
      </section>

      <section className="rounded-[2rem] bg-[#08111F]/60 border border-white/10 p-6 sm:p-8 md:p-10 mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-[#D6B36A] mb-10">
          Linha do tempo das campanhas
        </h2>

        <div className="space-y-8">
          {periodos.map((item) => (
            <div
              key={item.anos}
              className="grid md:grid-cols-[180px_1fr] gap-6 border-l md:border-l-0 md:border-t border-[#D6B36A]/30 pt-6"
            >
              <div>
                <p className="text-3xl font-black text-[#D6B36A]">
                  {item.anos}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-black text-slate-100 mb-3">
                  {item.titulo}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {item.texto}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 mb-12">
        <div className="rounded-[2rem] bg-[#0F1E2E]/70 border border-white/10 p-6 sm:p-8 md:p-10">
          <h2 className="text-3xl font-black text-[#D6B36A] mb-5">
            Projetos citados no acervo
          </h2>

          <p className="text-slate-300 leading-relaxed mb-6">
            O documento reúne diferentes projetos e atividades científicas
            realizadas a bordo, incluindo campanhas oceanográficas, disciplinas,
            testes de equipamentos e programas de pesquisa.
          </p>

          <div className="flex flex-wrap gap-3">
            {projetos.map((projeto) => (
              <span
                key={projeto}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300"
              >
                {projeto}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] bg-[#0F1E2E]/70 border border-white/10 p-6 sm:p-8 md:p-10">
          <h2 className="text-3xl font-black text-[#D6B36A] mb-5">
            Documento completo
          </h2>

          <p className="text-slate-300 leading-relaxed mb-6">
            A listagem original dos cruzeiros oceanográficos apresenta, em
            formato de tabela, o projeto ou atividade, período, pesquisador-chefe
            e região estudada em cada campanha.
          </p>

          <a
            href="/documentos/cruzeiros-oceanograficos-besnard.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#D6B36A] text-slate-950 font-black hover:scale-105 transition"
          >
            <FileText size={22} />
            Abrir PDF dos cruzeiros
          </a>
        </div>
      </section>

      <section className="rounded-[2rem] bg-[#08111F]/60 border border-dashed border-[#D6B36A]/35 p-6 sm:p-8 md:p-10">
        <p className="text-sm text-[#D6B36A] font-bold mb-3">
          Próxima etapa
        </p>

        <h2 className="text-2xl md:text-3xl font-black text-slate-100 mb-4">
          Mapa interativo das expedições
        </h2>

        <p className="text-slate-400 leading-relaxed max-w-4xl">
          Esta área poderá receber futuramente um mapa interativo com regiões
          estudadas pelo Besnard, conectando os cruzeiros oceanográficos às
          rotas, programas científicos e áreas de pesquisa ao longo da costa
          brasileira, Atlântico Sul e Antártica.
        </p>
      </section>
    </section>
  );
}