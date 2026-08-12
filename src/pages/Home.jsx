const formsUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSeasF6Rqmz-a6omaOirhSEUFWUDuegpMxnIrKBoRVOC4HfczQ/viewform?usp=publish-editor";

const caminhos = [
  {
    numero: "01",
    titulo: "História",
    subtitulo: "Do projeto naval ao destino do casco",
    texto:
      "Acompanhe a construção, a chegada ao Brasil, as campanhas antárticas, o incêndio, as tentativas de preservação e a história ainda aberta do Besnard.",
    href: "/historia",
    cor: "cyan",
    chamada: "Percorrer a história",
  },
  {
    numero: "02",
    titulo: "Ciência e Pesquisa",
    subtitulo: "Do navio ao conhecimento",
    texto:
      "Entenda o que foram VIKINDIO, GEDIP, REMAC, PROANTAR, REVIZEE, DEPROAS, ECOSAN e outros programas — e explore o catálogo histórico de cruzeiros.",
    href: "/ciencia",
    cor: "emerald",
    chamada: "Explorar a ciência",
  },
  {
    numero: "03",
    titulo: "Legado",
    subtitulo: "O que permanece depois do navio",
    texto:
      "Pessoas, amostras, objetos, políticas científicas, memória audiovisual e novas embarcações mostram por que o Besnard foi um elo, não um ponto final.",
    href: "/legado",
    cor: "yellow",
    chamada: "Conhecer o legado",
  },
];

const numeros = [
  {
    numero: "1967",
    texto: "chegada a Santos e início de sua trajetória científica no Brasil",
  },
  {
    numero: "260+",
    texto: "cruzeiros oceanográficos registrados ao longo de aproximadamente quatro décadas",
  },
  {
    numero: "6",
    texto: "campanhas antárticas realizadas pelo Besnard entre 1982 e 1988",
  },
  {
    numero: "1967–2006",
    texto: "intervalo coberto pelo catálogo histórico de atividades científicas",
  },
];

const atalhos = [
  ["Expedições", "/expedicoes"],
  ["Galeria", "/galeria"],
  ["Referências", "/referencias"],
  ["Sobre o Memorial", "/sobre"],
];

function CaminhoCard({ item }) {
  const estilos = {
    cyan: {
      borda: "border-cyan-200/20 hover:border-cyan-200/45",
      fundo: "hover:bg-cyan-300/[0.08]",
      numero: "text-cyan-200",
      tag: "border-cyan-200/15 bg-cyan-300/10 text-cyan-100",
      link: "text-cyan-200",
    },
    emerald: {
      borda: "border-emerald-200/20 hover:border-emerald-200/45",
      fundo: "hover:bg-emerald-300/[0.08]",
      numero: "text-emerald-200",
      tag: "border-emerald-200/15 bg-emerald-300/10 text-emerald-100",
      link: "text-emerald-200",
    },
    yellow: {
      borda: "border-yellow-100/20 hover:border-yellow-100/45",
      fundo: "hover:bg-yellow-200/[0.08]",
      numero: "text-yellow-100",
      tag: "border-yellow-100/15 bg-yellow-200/10 text-yellow-100",
      link: "text-yellow-100",
    },
  };

  const estilo = estilos[item.cor];

  return (
    <a
      href={item.href}
      className={`group flex h-full flex-col rounded-[2rem] border bg-white/[0.045] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 ${estilo.borda} ${estilo.fundo}`}
    >
      <div className="flex items-start justify-between gap-4">
        <span className={`text-sm font-black ${estilo.numero}`}>
          {item.numero}
        </span>
        <span
          className={`rounded-full border px-3 py-1 text-xs font-bold ${estilo.tag}`}
        >
          explorar
        </span>
      </div>

      <h3 className="mt-6 text-3xl font-black text-white">{item.titulo}</h3>
      <p className={`mt-2 text-sm font-bold ${estilo.numero}`}>
        {item.subtitulo}
      </p>

      <p className="mt-5 flex-1 text-sm leading-7 text-slate-400">
        {item.texto}
      </p>

      <p
        className={`mt-7 text-sm font-black transition group-hover:translate-x-1 ${estilo.link}`}
      >
        {item.chamada} →
      </p>
    </a>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <header className="relative grid gap-10 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-24">
        <div>
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-cyan-200/25 bg-cyan-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-100">
              Memorial Digital
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-bold text-slate-300">
              Ciência • memória • patrimônio
            </span>
          </div>

          <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.96] text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-emerald-200 to-yellow-100 md:text-7xl">
            N/Oc Prof. Wladimir Besnard
          </h1>

          <p className="mt-7 max-w-2xl text-xl font-bold leading-8 text-white md:text-2xl md:leading-9">
            Um navio que ajudou o Brasil a transformar oceano em conhecimento.
          </p>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
            Construído para o Instituto Oceanográfico da USP, o Besnard
            atravessou o Atlântico, participou da implantação da pesquisa
            brasileira na Antártica e sustentou décadas de investigação,
            formação e cooperação científica. Este memorial reúne sua história,
            a ciência feita a bordo e o que permaneceu depois dele.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/historia"
              className="rounded-2xl bg-gradient-to-r from-cyan-300 to-emerald-300 px-6 py-3.5 font-black text-slate-950 transition hover:scale-[1.02]"
            >
              Começar pela história
            </a>

            <a
              href="/ciencia"
              className="rounded-2xl border border-white/15 bg-white/[0.07] px-6 py-3.5 font-black text-white transition hover:bg-white/[0.12]"
            >
              Explorar a ciência
            </a>
          </div>
        </div>

        <figure className="group relative min-h-[430px] overflow-hidden rounded-[2.25rem] border border-white/15 bg-white/[0.05] shadow-2xl md:min-h-[540px]">
          <img
            src="/imagens/besnard-naufragio-1.jpg"
            alt="N/Oc Prof. Wladimir Besnard no Porto de Santos"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/15 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
              Uma história ainda aberta
            </p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-200">
              Em 2026, o destino material do Besnard voltou ao centro da
              atenção pública. A página História acompanha os desdobramentos
              documentados sem tratar o futuro do casco como encerrado.
            </p>
          </div>
        </figure>
      </header>

      {/* NÚMEROS ESSENCIAIS */}
      <section className="border-y border-white/10 py-10">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {numeros.map((item) => (
            <div
              key={item.numero}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6"
            >
              <p className="text-4xl font-black text-cyan-200">{item.numero}</p>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {item.texto}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* POR QUE IMPORTA */}
      <section className="py-16 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-100">
              Por que este navio importa?
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-white md:text-5xl">
              Porque um navio científico é muito mais que um casco.
            </h2>
          </div>

          <div className="space-y-5">
            <p className="text-lg leading-8 text-slate-200">
              Para conhecer o oceano é preciso chegar até ele: repetir
              estações, lançar instrumentos, coletar organismos e sedimentos,
              medir correntes e massas d&apos;água e registrar cada observação.
              Durante décadas, o Besnard tornou esse trabalho possível para
              diferentes gerações de pesquisadores.
            </p>

            <p className="leading-7 text-slate-400">
              Por isso este memorial não conta apenas a biografia de uma
              embarcação. Ele procura conectar três histórias inseparáveis:
              <strong className="text-slate-200"> o que aconteceu com o navio</strong>,
              <strong className="text-slate-200"> o conhecimento produzido a bordo</strong>
              e
              <strong className="text-slate-200"> o que essa experiência deixou para a Oceanografia brasileira</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* TRÊS CAMINHOS */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-200">
            Escolha um caminho
          </p>
          <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">
            Três maneiras de explorar o Besnard
          </h2>
          <p className="mt-5 max-w-3xl leading-7 text-slate-400">
            As páginas principais foram separadas para evitar repetir a mesma
            narrativa em lugares diferentes.
          </p>
        </div>

        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {caminhos.map((item) => (
            <CaminhoCard key={item.titulo} item={item} />
          ))}
        </div>
      </section>

      {/* DOCUMENTÁRIO */}
      <section className="border-y border-white/10 py-16 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
              Arquivo audiovisual
            </p>
            <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">
              Besnard: histórias de um navio oceanográfico
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              Produzido pelo Instituto Oceanográfico da USP, o documentário de
              2016 reúne imagens e depoimentos sobre a trajetória da
              embarcação. Ele é apresentado aqui como obra de memória
              institucional e permanece hospedado em sua fonte original.
            </p>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              O vídeo também é contextualizado na página Legado, dentro da
              história dos esforços anteriores de preservação da memória do
              Besnard.
            </p>

            <a
              href="https://www.youtube.com/watch?v=BABF6sh2Qq8"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-2xl border border-cyan-200/20 bg-cyan-300/10 px-5 py-3 text-sm font-black text-cyan-100 transition hover:bg-cyan-300/20"
            >
              Abrir no YouTube ↗
            </a>
          </div>

          <div className="aspect-video overflow-hidden rounded-[2rem] border border-white/15 bg-black shadow-2xl">
            <iframe
              className="h-full w-full"
              src="https://www.youtube-nocookie.com/embed/BABF6sh2Qq8"
              title="Besnard: histórias de um navio oceanográfico"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* CONTRIBUA */}
      <section className="py-16 md:py-20">
        <div className="grid gap-7 rounded-[2.25rem] border border-emerald-200/15 bg-gradient-to-br from-cyan-300/[0.08] via-emerald-300/[0.07] to-yellow-200/[0.05] p-7 md:grid-cols-[1.25fr_0.75fr] md:items-center md:p-10">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-200">
              Memorial colaborativo
            </p>
            <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
              Você embarcou no Besnard ou guarda um registro sobre ele?
            </h2>

            <p className="mt-5 max-w-3xl leading-7 text-slate-300">
              Fotografias, documentos, identificação de pessoas, relatos e
              memórias de campanhas podem ajudar a preencher lacunas. As
              contribuições são revisadas antes de qualquer publicação.
            </p>
          </div>

          <div className="flex md:justify-end">
            <a
              href={formsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-2xl bg-gradient-to-r from-cyan-300 to-emerald-300 px-7 py-4 font-black text-slate-950 transition hover:scale-[1.02]"
            >
              Enviar contribuição ↗
            </a>
          </div>
        </div>
      </section>

      {/* NAVEGAÇÃO SECUNDÁRIA */}
      <section className="pb-16">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-white/10 pt-8">
          {atalhos.map(([nome, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-bold text-slate-500 transition hover:text-cyan-200"
            >
              {nome} →
            </a>
          ))}
        </div>
      </section>
    </>
  );
}