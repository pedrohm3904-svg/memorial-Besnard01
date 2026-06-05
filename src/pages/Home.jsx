export default function Home() {
  const timeline = [
    ["1950", "Construção na Noruega"],
    ["1967", "Incorporação ao Brasil"],
    ["1967–2006", "Atuação em expedições oceanográficas"],
    ["2008", "Incêndio e perda de operação"],
    ["2026", "Naufrágio parcial no Porto de Santos"],
  ];

  return (
    <>
      <header className="py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="inline-block px-5 py-2 mb-6 rounded-full bg-[#164E63]/25 border border-white/10 text-[#D6B36A] text-sm">
              Memorial digital • Ciências do Mar • Santos-SP
            </p>

            <h1
              translate="no"
              className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight text-slate-100"
            >
              N/Oc Prof. Wladimir Besnard
            </h1>

            <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl">
              Um memorial dedicado à trajetória de um dos navios mais
              importantes da oceanografia brasileira: um laboratório flutuante
              que conectou ciência, formação acadêmica, expedições oceânicas e
              memória institucional.
            </p>
          </div>

          <figure className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-[#0F1E2E]/70">
            <img
              src="/imagens/besnard-naufragio-1.jpg"
              alt="N/Oc Prof. Wladimir Besnard no Porto de Santos"
              className="w-full h-[340px] sm:h-[440px] lg:h-[520px] object-cover grayscale-[15%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08111F]/90 via-transparent to-transparent" />
            <figcaption className="absolute bottom-0 p-6 text-slate-300 text-sm sm:text-base">
              Registro visual do Besnard na região portuária de Santos.
            </figcaption>
          </figure>
        </div>
      </header>

      <section className="rounded-[2rem] bg-[#0F1E2E]/70 border border-white/10 p-6 sm:p-8 md:p-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
          <div>
            <p className="text-sm text-[#D6B36A] font-bold mb-3">
              Documentário USP
            </p>

            <h2 className="text-3xl md:text-4xl font-black text-slate-100 mb-5">
              Histórias de um navio oceanográfico
            </h2>

            <p className="text-slate-300 leading-relaxed text-base md:text-lg">
              Produzido pela Universidade de São Paulo, o documentário apresenta
              a trajetória do N/Oc Prof. Wladimir Besnard a partir de memórias,
              registros e relatos ligados à sua importância para a oceanografia
              brasileira.
            </p>
          </div>

          <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/BABF6sh2Qq8"
              title="Besnard: histórias de um navio oceanográfico"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="mt-12 rounded-[2rem] bg-[#08111F]/60 border border-white/10 p-6 sm:p-8 md:p-10">
        <h2 className="text-3xl md:text-4xl font-black text-[#D6B36A] mb-10">
          Linha do Tempo
        </h2>

        <div className="hidden md:block relative">
          <div className="absolute left-0 right-0 top-5 h-[2px] bg-[#D6B36A]/35" />

          <div className="grid grid-cols-5 gap-6 relative">
            {timeline.map(([ano, evento]) => (
              <div key={ano} className="text-center">
                <div className="mx-auto h-10 w-10 rounded-full bg-[#D6B36A] border-4 border-[#08111F] shadow-lg" />

                <p className="mt-5 text-2xl font-black text-[#D6B36A]">
                  {ano}
                </p>

                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  {evento}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden space-y-6">
          {timeline.map(([ano, evento]) => (
            <div
              key={ano}
              className="border-l-2 border-[#D6B36A]/50 pl-5"
            >
              <p className="text-2xl font-black text-[#D6B36A]">{ano}</p>
              <p className="text-sm text-slate-400 mt-1">{evento}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 grid lg:grid-cols-2 gap-8">
        <div className="rounded-[2rem] bg-[#0F1E2E]/70 border border-white/10 p-6 sm:p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-black text-[#D6B36A] mb-5">
            Por que preservar essa memória?
          </h2>

          <div className="space-y-5 text-slate-300 leading-relaxed text-base md:text-lg">
            <p>
              Construído na Noruega em 1950 e incorporado ao Brasil em 1967, o
              Professor Wladimir Besnard respondeu a uma demanda histórica da
              oceanografia nacional: a necessidade de uma embarcação capaz de
              operar como laboratório flutuante.
            </p>

            <p>
              Sua trajetória representa uma etapa fundamental da consolidação
              das Ciências do Mar no país, reunindo pesquisa, formação prática,
              expedições e memória institucional.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] bg-[#0F1E2E]/70 border border-white/10 p-6 sm:p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-black text-[#D6B36A] mb-5">
            Um memorial em construção
          </h2>

          <div className="space-y-5 text-slate-300 leading-relaxed text-base md:text-lg">
            <p>
              Este site reúne referências, registros visuais e textos de apoio
              para valorizar a história do Besnard e aproximá-la de estudantes,
              pesquisadores e interessados na memória científica brasileira.
            </p>

            <p>
              Futuramente, o memorial poderá receber novos materiais, relatos,
              mapas de expedições, documentos históricos e recursos visuais
              conectados a cartazes, pôsteres e QR Codes.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12 rounded-[2rem] bg-[#08111F]/60 border border-dashed border-[#D6B36A]/35 p-6 sm:p-8 md:p-10">
        <p className="text-sm text-[#D6B36A] font-bold mb-3">
          Em desenvolvimento
        </p>

        <h2 className="text-2xl md:text-3xl font-black text-slate-100 mb-4">
          Futuro mapa das expedições
        </h2>

        <p className="text-slate-400 leading-relaxed max-w-4xl">
          Esta área poderá receber, em uma próxima etapa, um mapa interativo com
          locais associados à trajetória científica do Besnard, incluindo
          Santos, regiões da costa brasileira, o Atlântico Sul e campanhas
          oceanográficas marcantes.
        </p>
      </section>
    </>
  );
}