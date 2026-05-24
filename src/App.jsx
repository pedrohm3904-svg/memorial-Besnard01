export default function App() {
  const timeline = [
    ["1950", "Construção do navio na Noruega."],
    ["1967", "Incorporação ao Brasil como laboratório flutuante."],
    ["1967–2006", "Período de expedições oceanográficas. Última missão em 20/04/2006."],
    ["2008", "Incêndio compromete a navegabilidade e funções operacionais."],
    ["2026", "Naufrágio parcial no Porto de Santos."],
  ];

  const links = [
    {
      title: "Mar Sem Fim",
      text: "A saga do navio oceanográfico Prof. W. Besnard",
      url: "https://marsemfim.com.br/a-saga-do-navio-oceanografico-prof-w-besnard-tera-final-feliz/",
    },
    {
      title: "Defesa Aérea & Naval",
      text: "Naufrágio parcial no Porto de Santos",
      url: "https://www.defesaaereanaval.com.br/acidentes-navais/navio-oceanografico-prof-w-besnard-afunda-parcialmente-no-porto-de-santos",
    },
    {
      title: "Wikipedia",
      text: "Resumo histórico do N/Oc Prof. Wladimir Besnard",
      url: "https://pt.wikipedia.org/wiki/NOc_Prof._Wladimir_Besnard",
    },
    {
      title: "Náutica",
      text: "Reportagem sobre o naufrágio em Santos",
      url: "https://nautica.com.br/historia-navio-professor-wladimir-besnard-afundou-santos/",
    },
  ];

  const relatos = [
    {
      nome: "Relatos de docentes e pesquisadores",
      texto: "Este espaço poderá reunir memórias de pessoas que embarcaram, pesquisaram ou tiveram alguma relação acadêmica e afetiva com o Besnard.",
    },
    {
      nome: "Arquivo colaborativo",
      texto: "As contribuições podem ser organizadas em uma planilha ou banco de dados, revisadas pela equipe e publicadas como parte do acervo digital.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#020817] text-white overflow-hidden">
      {/* FUNDO */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(34,211,238,0.32),transparent_28%),radial-gradient(circle_at_85%_10%,rgba(250,204,21,0.18),transparent_25%),radial-gradient(circle_at_50%_95%,rgba(16,185,129,0.25),transparent_35%)]" />
      <div className="fixed inset-0 bg-gradient-to-b from-[#020817]/60 via-[#061826]/90 to-[#020817]" />

      <div className="relative z-10">
        {/* NAVBAR */}
        <nav className="sticky top-0 z-50 bg-slate-950/55 backdrop-blur-xl border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
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

              <div>
                <p className="text-cyan-200 font-black leading-tight">
                  Memorial Besnard
                </p>
                <p className="text-xs text-slate-300">
                  IMAR • UNIFESP • SEAlegre
                </p>
              </div>
            </div>

            <div className="hidden md:flex gap-6 text-sm text-slate-200">
              <a href="#historia" className="hover:text-cyan-300">História</a>
              <a href="#quem-somos" className="hover:text-cyan-300">Quem somos</a>
              <a href="#galeria" className="hover:text-cyan-300">Arquivo visual</a>
              <a href="#relatos" className="hover:text-cyan-300">Relatos</a>
              <a href="#fontes" className="hover:text-cyan-300">Fontes</a>
            </div>
          </div>
        </nav>

        {/* HERO */}
        <header className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-block px-5 py-2 mb-6 rounded-full bg-cyan-300/10 border border-cyan-200/30 text-cyan-100">
              Memorial digital • Ciências do Mar • Santos-SP
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-emerald-200 to-yellow-100">
              N/Oc Prof. Wladimir Besnard
            </h1>

            <p className="mt-6 text-lg text-slate-100 leading-relaxed max-w-2xl">
              Um memorial visual dedicado ao navio oceanográfico que marcou a
              história da oceanografia brasileira, conectando ciência, mar,
              memória, território e extensão universitária.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#galeria"
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-300 to-emerald-300 text-slate-950 font-black hover:scale-105 transition"
              >
                Ver arquivo visual
              </a>

              <a
                href="#quem-somos"
                className="px-6 py-3 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/20 transition"
              >
                Quem somos
              </a>
            </div>
          </div>

          <figure className="relative rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl bg-white/10">
            <img
              src="/imagens/besnard-naufragio-1.jpg"
              alt="N/Oc Prof. Wladimir Besnard no Porto de Santos"
              className="w-full h-[520px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
            <figcaption className="absolute bottom-0 p-6 text-slate-200">
              Registro visual do Besnard na região portuária de Santos.
            </figcaption>
          </figure>
        </header>

        <main className="max-w-7xl mx-auto px-6 space-y-16">
          {/* SELOS */}
          <section className="grid md:grid-cols-4 gap-6">
            {[
              ["1950", "Construção na Noruega"],
              ["1967", "Incorporação ao Brasil"],
              ["2006", "Última expedição registrada"],
              ["2026", "Naufrágio parcial em Santos"],
            ].map(([ano, texto]) => (
              <div
                key={ano}
                className="rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/20 p-7 shadow-2xl"
              >
                <h3 className="text-4xl font-black text-cyan-200">{ano}</h3>
                <p className="mt-3 text-slate-200">{texto}</p>
              </div>
            ))}
          </section>

          {/* HISTÓRIA */}
          <section id="historia" className="grid md:grid-cols-2 gap-6">
            <div className="rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/20 p-8">
              <h2 className="text-3xl font-black text-cyan-200 mb-5">
                Contextualização Histórica
              </h2>

              <p className="text-slate-100 leading-relaxed">
                O navio oceanográfico Professor Wladimir Besnard foi construído
                na Noruega em 1950 e incorporado ao Brasil em 1967, atuando
                como laboratório flutuante do Instituto Oceanográfico da USP.
                Sua trajetória foi fundamental para o desenvolvimento da
                oceanografia brasileira e para a formação de pesquisadores que
                hoje atuam em instituições como o IMAR/UNIFESP.
              </p>
            </div>

            <div className="rounded-[2rem] bg-gradient-to-br from-cyan-300/20 via-emerald-300/10 to-yellow-200/10 backdrop-blur-xl border border-cyan-200/30 p-8">
              <h2 className="text-3xl font-black text-emerald-200 mb-5">
                Expedições Oceanográficas
              </h2>

              <p className="text-slate-100 leading-relaxed">
                O período de atividade científica do Besnard ocorreu entre 1967
                e 2006, com sua última expedição registrada em 20/04/2006. Após
                o incêndio ocorrido em 2008, sua navegabilidade e demais funções
                operacionais ficaram comprometidas, tornando a embarcação
                inoperante. Desde então, o navio permaneceu atracado no Porto
                de Santos.
              </p>
            </div>
          </section>

          {/* QUEM SOMOS */}
          <section
            id="quem-somos"
            className="rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/20 p-8"
          >
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-yellow-100 mb-5">
                  Quem Somos
                </h2>

                <p className="text-slate-100 leading-relaxed">
                  Este memorial nasce como uma proposta colaborativa de
                  preservação da memória científica e afetiva do N/Oc Prof.
                  Wladimir Besnard, articulando história da oceanografia
                  brasileira, território santista, extensão universitária e
                  divulgação científica.
                </p>

                <p className="mt-4 text-slate-100 leading-relaxed">
                  O projeto se alinha a iniciativas de extensão universitária
                  do SEAlegre, promovendo a divulgação científica, memória
                  oceânica e conexão entre universidade e sociedade.
                </p>

                <p className="mt-4 text-slate-300 leading-relaxed">
                  A proposta prevê a criação de materiais físicos, como
                  cartazes, pôsteres e possíveis placas com QR Code, além deste
                  memorial online como espaço ampliado para reunir imagens,
                  relatos, fontes e registros históricos.
                </p>
              </div>

              <div className="rounded-[2rem] bg-slate-950/35 border border-white/20 p-6 text-center">
                <img
                  src="/imagens/sealegre-logo.png"
                  alt="Logo do SEAlegre"
                  className="w-44 h-44 object-contain mx-auto rounded-full bg-white"
                />

                <p className="mt-5 text-cyan-100 font-bold">
                  Extensão, ciência e comunidade
                </p>

                <p className="mt-2 text-sm text-slate-300">
                  Identidade visual inspirada no mar, no sol, na educação
                  oceânica e na comunicação pública da ciência.
                </p>
              </div>
            </div>
          </section>

          {/* LINHA DO TEMPO */}
          <section
            id="linha"
            className="rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/20 p-8"
          >
            <h2 className="text-4xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-emerald-200 mb-10">
              Linha do Tempo
            </h2>

            <div className="grid md:grid-cols-5 gap-4">
              {timeline.map(([ano, texto]) => (
                <div
                  key={ano}
                  className="rounded-2xl bg-black/25 border border-cyan-200/20 p-5 text-center hover:-translate-y-2 hover:bg-cyan-300/10 transition"
                >
                  <h3 className="text-2xl font-black text-cyan-200">{ano}</h3>
                  <p className="mt-3 text-sm text-slate-200">{texto}</p>
                </div>
              ))}
            </div>
          </section>

          {/* GALERIA */}
          <section id="galeria" className="py-4">
            <h2 className="text-center text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-emerald-200 to-yellow-100 mb-4">
              Arquivo Visual
            </h2>

            <p className="text-center text-slate-200 max-w-3xl mx-auto mb-10">
              Registros fotográficos do N/Oc Prof. Wladimir Besnard após o
              naufrágio parcial ocorrido na região portuária de Santos.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                [
                  "/imagens/besnard-naufragio-1.jpg",
                  "Registro do Besnard parcialmente submerso no Porto de Santos.",
                ],
                [
                  "/imagens/besnard-naufragio-2.jpg",
                  "Vista ampla da embarcação na região portuária de Santos.",
                ],
              ].map(([src, caption]) => (
                <figure
                  key={src}
                  className="group rounded-[2rem] overflow-hidden bg-white/10 border border-white/20 shadow-2xl"
                >
                  <div className="overflow-hidden">
                    <img
                      src={src}
                      alt={caption}
                      className="w-full h-[540px] object-cover group-hover:scale-110 transition duration-700"
                    />
                  </div>

                  <figcaption className="p-5 text-slate-200 bg-slate-950/40">
                    {caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          {/* RELATOS */}
          <section id="relatos" className="grid md:grid-cols-2 gap-6">
            <div className="rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/20 p-8">
              <h2 className="text-3xl font-black text-cyan-200 mb-5">
                Contribuir com Memórias
              </h2>

              <p className="text-slate-200 leading-relaxed mb-5">
                Para tornar o memorial útil e seguro, o ideal é receber as
                contribuições por um formulário institucional, como Google
                Forms, conectado a uma planilha. Assim, a equipe pode revisar,
                organizar e selecionar relatos antes da publicação.
              </p>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeasF6Rqmz-a6omaOirhSEUFWUDuegpMxnIrKBoRVOC4HfczQ/viewform?usp=publish-editor"
                target="_blank"
                rel="noreferrer"
                className="block text-center w-full bg-gradient-to-r from-cyan-300 to-emerald-300 text-slate-950 font-black py-4 rounded-2xl hover:scale-[1.02] transition"
              >
                Enviar contribuição
              </a>

              <p className="mt-4 text-xs text-slate-400">
                * O formulário é uma ferramenta de coleta e não garante a publicação automática. A equipe do memorial revisará as contribuições para garantir a qualidade e segurança do conteúdo publicado.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/20 p-8">
              <h2 className="text-3xl font-black text-emerald-200 mb-5">
                Relatos e Acervo Colaborativo
              </h2>

              <div className="space-y-4">
                {relatos.map((relato) => (
                  <div
                    key={relato.nome}
                    className="rounded-2xl bg-black/25 border border-cyan-200/20 p-5"
                  >
                    <h3 className="font-black text-cyan-100">{relato.nome}</h3>
                    <p className="mt-2 text-slate-300 text-sm leading-relaxed">
                      {relato.texto}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SEGURANÇA */}
          <section className="rounded-[2rem] bg-yellow-200/10 backdrop-blur-xl border border-yellow-100/20 p-8">
            <h2 className="text-3xl font-black text-yellow-100 mb-4">
              Segurança e Curadoria
            </h2>

            <p className="text-slate-100 leading-relaxed">
              Para evitar spam, exposição indevida de dados pessoais e
              publicação de conteúdo inadequado, as contribuições não devem ser
              publicadas automaticamente. O fluxo recomendado é: formulário →
              planilha privada → revisão da equipe → publicação curada no
              memorial.
            </p>
          </section>

          {/* FONTES */}
          <section
            id="fontes"
            className="rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/20 p-8"
          >
            <h2 className="text-3xl font-black text-cyan-200 mb-6">
              Saiba Mais
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-black/25 border border-cyan-200/20 p-5 hover:bg-cyan-300/10 hover:-translate-y-1 transition"
                >
                  <h3 className="text-cyan-200 font-black">{link.title}</h3>
                  <p className="text-slate-300 mt-1">{link.text}</p>
                </a>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-emerald-300/10 border border-emerald-200/20 p-6">
              <a
                href="https://www.io.usp.br/index.php/embarcacoes/n-oc-prof-w-besnard.html"
                target="_blank"
                rel="noreferrer"
                className="text-emerald-200 underline font-black"
              >
                Instituto Oceanográfico — Histórico Oficial
              </a>

              <p className="mt-3 text-slate-200">
                Neste site é possível acessar uma tabela completa contendo
                todas as expedições realizadas pelo N/Oc Professor Wladimir
                Besnard ao longo de sua operação.
              </p>
            </div>
          </section>
        </main>

        <footer className="mt-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <p className="font-black text-cyan-200">
                Memorial do N/Oc Prof. Wladimir Besnard
              </p>
              <p className="text-sm text-slate-300">
                IMAR • UNIFESP • SEAlegre • Ciências do Mar
              </p>
            </div>

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
          </div>
        </footer>
      </div>
    </div>
  );
}