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
              importantes da oceanografia brasileira.
            </p>
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
        <div className="max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-black text-[#D6B36A] mb-6">
            Um laboratório flutuante para a oceanografia brasileira
          </h2>

          <div className="space-y-5 text-slate-200 leading-relaxed text-base md:text-lg">
            <p>
              O Navio Oceanográfico Professor Wladimir Besnard ocupou um lugar
              central na consolidação das Ciências do Mar no Brasil. Construído
              na Noruega e incorporado ao Brasil em 1967, o navio respondeu a
              uma demanda histórica da pesquisa oceanográfica nacional: a
              necessidade de uma embarcação capaz de funcionar como laboratório
              em alto-mar, apoiando investigações em águas costeiras,
              territoriais e internacionais.
            </p>

            <p>
              Ao longo de mais de quatro décadas de operação, o Besnard
              participou de centenas de viagens científicas, apoiou estudos no
              Atlântico Sul e contribuiu para a formação prática de gerações de
              estudantes, pesquisadores e docentes. Mais do que uma embarcação,
              tornou-se uma infraestrutura científica viva, onde coleta de dados,
              ensino, expedições e experiência de campo se encontravam.
            </p>

            <p>
              O nome do navio homenageia Wladimir Besnard, figura essencial para
              a história da oceanografia no país e primeiro diretor do Instituto
              Oceanográfico da Universidade de São Paulo. Sua atuação ajudou a
              estruturar uma visão integrada da oceanografia, reunindo dimensões
              biológicas, físicas, químicas e geológicas do ambiente marinho.
            </p>

            <p>
              Este memorial digital nasce do desejo de preservar essa memória e
              torná-la acessível. A proposta reúne história, referências,
              registros visuais e possibilidades de colaboração, aproximando a
              trajetória do Besnard do território santista, do SEAlegre, do
              IMAR-UNIFESP e de todos que reconhecem no navio um patrimônio da
              ciência brasileira.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-[2rem] bg-[#08111F]/60 border border-white/10 p-6 sm:p-8 md:p-10">
        <h2 className="text-2xl md:text-3xl font-black text-[#D6B36A] mb-5">
          Do navio ao memorial
        </h2>

        <div className="space-y-5 text-slate-300 leading-relaxed text-base md:text-lg max-w-5xl">
          <p>
            Após sua trajetória científica, o Besnard permaneceu ligado à cidade
            de Santos e ao imaginário da comunidade oceanográfica. Seu naufrágio
            parcial no Porto de Santos, em 2026, reforçou a urgência de pensar
            formas de registro, preservação e comunicação pública dessa história.
          </p>

          <p>
            A ideia do memorial parte da possibilidade de articular suportes
            físicos e digitais: cartazes, pôsteres, placas, QR Codes, relatos,
            imagens e textos acessíveis ao público. Assim, o site funciona como
            um acervo em construção, aberto à ampliação futura por meio de
            registros históricos, contribuições de pesquisadores e materiais de
            divulgação científica.
          </p>
        </div>

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

          <a
            href="/referencias"
            className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
          >
            Consultar referências
          </a>
        </div>
      </section>
    </>
  );
}