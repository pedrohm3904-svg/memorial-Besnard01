export default function Home() {
  return (
    <>
      <header className="py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="inline-block px-5 py-2 mb-6 rounded-full bg-[#164E63]/25 border border-white/10 text-[#D6B36A] text-sm">
              Memorial digital • Ciências do Mar • Santos-SP
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight text-slate-100">
              N/Oc Prof. Wladimir Besnard
            </h1>

            <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl">
              Um memorial dedicado à trajetória de um dos navios mais
              importantes da oceanografia brasileira: um laboratório flutuante
              que conectou ciência, formação acadêmica, expedições oceânicas e
              memória institucional.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/historia"
                className="px-6 py-3 rounded-2xl bg-[#D6B36A] text-slate-950 font-black hover:scale-105 transition"
              >
                Conhecer a história
              </a>

              <a
                href="/galeria"
                className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                Ver arquivo visual
              </a>
            </div>
          </div>

          <figure className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-[#0F1E2E]/70">
            <img
              src="/imagens/besnard-naufragio-1.jpg"
              alt="N/Oc Prof. Wladimir Besnard no Porto de Santos"
              className="w-full h-[360px] sm:h-[460px] lg:h-[540px] object-cover grayscale-[20%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08111F]/90 via-transparent to-transparent" />
            <figcaption className="absolute bottom-0 p-6 text-slate-300 text-sm sm:text-base">
              Registro visual do Besnard na região portuária de Santos.
            </figcaption>
          </figure>
        </div>
      </header>

      <section className="rounded-[2rem] bg-[#0F1E2E]/70 backdrop-blur-xl border border-white/10 p-6 sm:p-8 md:p-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-[#D6B36A] mb-5">
              Por que preservar essa memória?
            </h2>

            <div className="space-y-4 text-slate-200 leading-relaxed">
              <p>
                Construído na Noruega e incorporado ao Brasil em 1967, o
                Professor Wladimir Besnard respondeu a uma demanda histórica da
                oceanografia nacional: a necessidade de um navio com autonomia
                para atuar como laboratório em alto-mar.
              </p>

              <p>
                Durante décadas, a embarcação apoiou pesquisas no Atlântico Sul,
                na costa brasileira e em expedições científicas que ajudaram a
                consolidar as Ciências do Mar no país. Sua história também se
                conecta à formação de pesquisadores e docentes que hoje
                participam da construção da oceanografia em instituições como o
                IMAR-UNIFESP.
              </p>

              <p>
                Este memorial digital nasce como uma forma de reunir registros,
                referências, imagens e relatos sobre o Besnard, criando uma
                experiência acessível, visual e educativa para estudantes,
                pesquisadores e pessoas interessadas na memória científica
                brasileira.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#08111F]/60 border border-white/10 p-6">
            <h3 className="text-2xl font-black text-[#D6B36A] mb-4">
              Do navio ao memorial
            </h3>

            <p className="text-slate-300 leading-relaxed">
              A proposta combina memória física e digital: cartazes, pôsteres,
              QR Codes e um acervo online capaz de ampliar o acesso à história
              do navio e às relações entre o Besnard, Santos, o SEAlegre e o
              IMAR-UNIFESP.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                ["1950", "Construção na Noruega"],
                ["1967", "Chegada ao Brasil"],
                ["2006", "Última missão registrada"],
                ["2026", "Naufrágio parcial em Santos"],
              ].map(([ano, texto]) => (
                <div
                  key={ano}
                  className="rounded-2xl bg-white/5 border border-white/10 p-4"
                >
                  <p className="text-3xl font-black text-[#D6B36A]">{ano}</p>
                  <p className="text-sm text-slate-400 mt-1">{texto}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 grid md:grid-cols-3 gap-6">
        {[
          [
            "01",
            "História",
            "Conheça a trajetória do navio, sua incorporação ao Brasil, suas expedições e sua permanência no Porto de Santos.",
            "/historia",
          ],
          [
            "02",
            "Ciência",
            "Entenda sua importância para a pesquisa oceanográfica, para a formação de cientistas e para as Ciências do Mar no Brasil.",
            "/ciencia",
          ],
          [
            "03",
            "Arquivo visual",
            "Acesse registros fotográficos e materiais visuais reunidos para preservar a memória do Besnard.",
            "/galeria",
          ],
        ].map(([numero, titulo, texto, url]) => (
          <a
            key={titulo}
            href={url}
            className="rounded-[2rem] bg-[#0F1E2E]/70 border border-white/10 p-7 hover:bg-[#164E63]/25 transition"
          >
            <p className="text-sm text-[#D6B36A] mb-2">{numero}</p>
            <h2 className="text-2xl font-black text-slate-100 mb-3">
              {titulo}
            </h2>
            <p className="text-slate-400 leading-relaxed">{texto}</p>
          </a>
        ))}
      </section>
    </>
  );
}