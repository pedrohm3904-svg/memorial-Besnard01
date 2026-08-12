import { useMemo, useState } from "react";

const referencias = [
  {
    id: "cruzeiros-pdf",
    eixo: "Ciência e Pesquisa",
    tipo: "Acervo local",
    instituicao: "Instituto Oceanográfico da USP",
    titulo: "Prof. W. Besnard — 40 anos de navio ao mar: cruzeiros oceanográficos",
    descricao:
      "Catálogo de dez páginas usado como base do arquivo pesquisável de cruzeiros, com projeto/atividade, período, pesquisador-chefe e região estudada entre 1967 e 2006.",
    url: "/documentos/cruzeiros-oceanograficos-besnard.pdf",
    destaque: true,
  },
  {
    id: "fapesp-pesquisadores",
    eixo: "História",
    tipo: "Pesquisa histórica",
    instituicao: "Pesquisa FAPESP",
    titulo: "Pesquisadores do mar",
    descricao:
      "Reconstrução da formação da oceanografia institucional no Brasil, da concepção do navio, construção na Noruega e primeira viagem científica.",
    url: "https://revistapesquisa.fapesp.br/pesquisadores-do-mar/",
  },
  {
    id: "jornal-usp-protagonista",
    eixo: "História",
    tipo: "Memória institucional",
    instituicao: "Jornal da USP",
    titulo: "O protagonista da oceanografia brasileira",
    descricao:
      "Síntese histórica do papel do Besnard na pesquisa, no ensino, nas campanhas antárticas e na formação de pesquisadores do IOUSP.",
    url: "https://jornal.usp.br/universidade/o-protagonista-da-oceanografia-brasileira/",
  },
  {
    id: "engenharia-naval",
    eixo: "História",
    tipo: "Documento técnico-histórico",
    instituicao: "Revista Marítima Brasileira / Marinha do Brasil",
    titulo: "Engenharia Naval — Yapery Tupiassu de Britto Guerra",
    descricao:
      "Relato ligado à participação da Escola Politécnica da USP, à Comissão de Construção do Navio e ao desenvolvimento da engenharia naval brasileira.",
    url: "https://portaldeperiodicos.marinha.mil.br/index.php/revistamaritima/article/download/3901/3823",
  },
  {
    id: "vikindio",
    eixo: "Ciência e Pesquisa",
    tipo: "Fonte institucional histórica",
    instituicao: "Instituto Oceanográfico da USP",
    titulo: "VIKINDIO",
    descricao:
      "Página histórica dedicada à primeira expedição científica do Besnard durante a viagem da Noruega ao Brasil.",
    url: "https://www.io.usp.br/index.php/ocean-coast-res/36-portugues/infraestrutura/embarcacoes/prof-besnard/projetos/361-vikindio.html",
  },
  {
    id: "antartica",
    eixo: "História",
    tipo: "História naval",
    instituicao: "Revista do Clube Naval / Marinha do Brasil",
    titulo: "Primeira Expedição Brasileira à Antártica",
    descricao:
      "Registro da participação do Prof. W. Besnard e do Barão de Teffé na primeira expedição oficial brasileira ao continente antártico.",
    url: "https://portaldeperiodicos.marinha.mil.br/index.php/clubenaval/article/view/4001",
  },
  {
    id: "fapesp-adeus",
    eixo: "Legado",
    tipo: "Memória científica",
    instituicao: "Pesquisa FAPESP",
    titulo: "O adeus ao Prof. Besnard",
    descricao:
      "Fonte importante sobre reformas, incêndio, objetos preservados, 68 diários de bordo e a estimativa de cerca de 50 mil amostras biológicas associadas às viagens.",
    url: "https://revistapesquisa.fapesp.br/o-adeus-ao-prof-besnard/",
  },
  {
    id: "incendio-2008",
    eixo: "História",
    tipo: "Nota contemporânea",
    instituicao: "Marinha do Brasil, reproduzida pelo Poder Naval",
    titulo: "Incêndio a bordo do navio de pesquisa Professor Besnard",
    descricao:
      "Nota publicada em 13 de novembro de 2008 com horário, local, resposta à emergência e anúncio de inspeção e abertura de inquérito.",
    url: "https://www.naval.com.br/blog/2008/11/13/incendio-a-bordo-de-do-navio-de-pesquisa-professor-besnard/",
  },
  {
    id: "uruguai-2014",
    eixo: "História",
    tipo: "Documento administrativo primário",
    instituicao: "Conselho Universitário da USP",
    titulo: "963ª Sessão — Processo 2014.1.289.21.9",
    descricao:
      "Documenta o trâmite jurídico-administrativo e a aprovação da doação do navio para a Universidad de la República, no Uruguai.",
    url: "https://secretaria.webhostusp.sti.usp.br/wp-content/uploads/Co-09122014-Decis%C3%B5es.pdf",
  },
  {
    id: "uruguai-2015",
    eixo: "História",
    tipo: "Documento institucional",
    instituicao: "Jornal da USP",
    titulo: "Conselho Universitário registra desistência do Uruguai",
    descricao:
      "Registra a desistência uruguaia e a retomada da discussão sobre retirada de equipamentos e desmonte da estrutura.",
    url: "https://jornal.usp.br/institucional/press-release/conselho-universitario-aprova-mudanca-no-sistema-de-eleicao-de-dirigentes/",
  },
  {
    id: "ilhabela-debate",
    eixo: "Pós-operação",
    tipo: "Documento municipal",
    instituicao: "Prefeitura de Ilhabela",
    titulo: "Debate público sobre o destino do W. Besnard",
    descricao:
      "Registra a doação à Prefeitura, o plano de naufrágio controlado, estudos de licenciamento e a disputa entre recife artificial e museu.",
    url: "https://www.ilhabela.sp.gov.br/portal/noticias/0/3/10873/prefeitura-de-ilhabela-pede-proposta-de-projeto-para-o-navio-w-besnard-durante-reuniao-publica",
  },
  {
    id: "ilhabela-vistoria",
    eixo: "Pós-operação",
    tipo: "Documento municipal",
    instituicao: "Prefeitura de Ilhabela",
    titulo: "Visita técnica e condições da embarcação em 2017",
    descricao:
      "Relato institucional das condições encontradas no navio e das intervenções elétricas, hidráulicas e mecânicas consideradas necessárias.",
    url: "https://www.ilhabela.sp.gov.br/portal/noticias/0/3/10141/autoridades-de-ilhabela-se-surpreendem-com-condicoes-precarias-do-navio-doado-pela-usp",
  },
  {
    id: "caso-juridico",
    eixo: "Pós-operação",
    tipo: "Análise jurídica documentada",
    instituicao: "Migalhas Marítimas",
    titulo: "O caso do navio Professor Wladimir Besnard",
    descricao:
      "Reconstitui vistoria, judicialização, obrigações impostas ao Município e o conflito entre preservação cultural e risco ambiental.",
    url: "https://www.migalhas.com.br/coluna/migalhas-maritimas/388207/o-caso-do-navio-professor-wladimir-besnard",
  },
  {
    id: "mpf-2023",
    eixo: "Pós-operação",
    tipo: "Documento público primário",
    instituicao: "Ministério Público Federal",
    titulo: "Ata da 629ª Sessão da 4ª Câmara de Coordenação e Revisão",
    descricao:
      "Registra a existência do cumprimento de sentença relacionado à retirada do navio do Porto de Santos e à dimensão ambiental do caso.",
    url: "https://www.mpf.mp.br/atuacao/ccr4/revisao/sessoes/sessoes-anteriores/2023/arquivos/ata-629-sro-4ccr-publicada.pdf",
  },
  {
    id: "santos-2024",
    eixo: "Pós-operação",
    tipo: "Documento municipal",
    instituicao: "Prefeitura de Santos",
    titulo: "Navio Professor Besnard começa a renascer com o Parque Valongo",
    descricao:
      "Registra a responsabilidade do Instituto do Mar, trabalhos voluntários e a proposta de transformação da embarcação em atração museológica.",
    url: "https://www.santos.sp.gov.br/?q=noticia%2Fnavio-professor-besnard-comeca-a-renascer-com-o-parque-valongo-em-santos",
  },
  {
    id: "aps-2026",
    eixo: "Pós-operação",
    tipo: "Documento administrativo primário",
    instituicao: "Autoridade Portuária de Santos",
    titulo: "Contrato emergencial de salvamento — 2026",
    descricao:
      "Documento relacionado à contratação emergencial para salvamento, estabilização, reflutuação e remoção controlada da embarcação.",
    url: "https://intranet.portodesantos.com.br/docs_codesp/doc_codesp_pdf_site.asp?id=162812",
  },
  {
    id: "jornal-orla-2026",
    eixo: "Pós-operação",
    tipo: "Acompanhamento contemporâneo",
    instituicao: "Jornal da Orla",
    titulo: "Arquivo de notícias — Prof. W. Besnard",
    descricao:
      "Reúne atualizações de 2026 sobre submersão parcial, salvamento, reflutuação e plano de reboque.",
    url: "https://jornaldaorla.com.br/noticias/tag/navio-professor-w-besnard/",
  },
  {
    id: "fisica-io",
    eixo: "Ciência e Pesquisa",
    tipo: "Síntese científica institucional",
    instituicao: "Instituto Oceanográfico da USP",
    titulo: "Brazil Report on Physical Oceanography",
    descricao:
      "Retrospectiva que contextualiza FGGE, projetos integrados, COROAS, REVIZEE, DEPROAS e outras frentes de Oceanografia Física.",
    url: "https://www.mares.io.usp.br/aagn/aagn11/iapsoreport.html",
  },
  {
    id: "colbio",
    eixo: "Ciência e Pesquisa",
    tipo: "Coleção científica",
    instituicao: "Instituto Oceanográfico da USP",
    titulo: "Coleção Biológica Prof. Edmundo F. Nonato — ColBIO",
    descricao:
      "Acervo de referência e testemunho para estudos de biodiversidade, taxonomia, distribuição, ecologia e conservação marinha.",
    url: "https://www.io.usp.br/colecao-biologica/",
  },
  {
    id: "revizee",
    eixo: "Ciência e Pesquisa",
    tipo: "Programa nacional",
    instituicao: "Ministério do Meio Ambiente",
    titulo: "Programa REVIZEE",
    descricao:
      "Referência oficial sobre a avaliação do potencial sustentável dos recursos vivos da Zona Econômica Exclusiva brasileira.",
    url: "https://www.gov.br/mma/pt-br/assuntos/biodiversidade-e-biomas/biomas-e-ecossistemas/ecossistemas-costeiros-e-marinhos/programa-revizee",
  },
  {
    id: "psrm",
    eixo: "Ciência e Pesquisa",
    tipo: "Política pública do mar",
    instituicao: "Comissão Interministerial para os Recursos do Mar",
    titulo: "Plano Setorial para os Recursos do Mar",
    descricao:
      "Contextualiza a coordenação da pesquisa, conhecimento e uso sustentável dos recursos marinhos brasileiros.",
    url: "https://www.marinha.mil.br/secirm/pt-br/psrm/sobre",
  },
  {
    id: "opiss",
    eixo: "Ciência e Pesquisa",
    tipo: "Divulgação científica",
    instituicao: "Pesquisa FAPESP",
    titulo: "O mar de São Sebastião",
    descricao:
      "Apresenta resultados e a abordagem integrada dos estudos oceanográficos na plataforma interna de São Sebastião.",
    url: "https://revistapesquisa.fapesp.br/o-mar-de-sao-sebastiao/",
  },
  {
    id: "reuso-cientifico",
    eixo: "Ciência e Pesquisa",
    tipo: "Publicação científica",
    instituicao: "LabPesq / Instituto Oceanográfico da USP",
    titulo: "Exemplo de reuso de dados históricos de campanhas do Besnard",
    descricao:
      "Publicação usada no Memorial como exemplo de combinação posterior de amostragens históricas obtidas em diferentes campanhas oceanográficas.",
    url: "https://www.labpesq.io.usp.br/images/publicacoes/Araujo_and_Gasalla_2018_Fisheries_Oceanography.pdf",
  },
  {
    id: "alpha-crucis",
    eixo: "Legado",
    tipo: "Infraestrutura científica",
    instituicao: "Pesquisa FAPESP",
    titulo: "A saga do Alpha Crucis",
    descricao:
      "Detalha a procura pelo sucessor oceânico do Besnard, a aquisição do antigo Moana Wave e sua modernização como Alpha Crucis.",
    url: "https://revistapesquisa.fapesp.br/a-saga-do-alpha-crucis/",
  },
  {
    id: "alpha-delphini",
    eixo: "Legado",
    tipo: "Infraestrutura científica",
    instituicao: "Instituto Oceanográfico da USP",
    titulo: "B/Pq Alpha Delphini",
    descricao:
      "Apresenta a plataforma costeira construída no Brasil e sua função complementar dentro da infraestrutura de pesquisa do IOUSP.",
    url: "https://www.io.usp.br/index.php/embarcacoes/b-pq-alpha-delphini/apresentacao.html",
  },
  {
    id: "prceu-memoria",
    eixo: "Memória e audiovisual",
    tipo: "Projeto de extensão e memória",
    instituicao: "PRCEU / Universidade de São Paulo",
    titulo: "Catálogo de projetos 2013–2014",
    descricao:
      "Registra iniciativas de memória audiovisual do IOUSP e o projeto 'Resgatando História e Ciência: Navio Oceanográfico Professor Wladimir Besnard a Navio Oceanográfico Alpha Crucis'.",
    url: "https://prceu.usp.br/wp-content/uploads/2021/09/2013-2014_Catalogo.pdf",
  },
  {
    id: "documentario",
    eixo: "Memória e audiovisual",
    tipo: "Documentário",
    instituicao: "Instituto Oceanográfico da USP",
    titulo: "Besnard: histórias de um navio oceanográfico",
    descricao:
      "Documentário de 2016 preservado como obra audiovisual de memória institucional. O Memorial aponta para a fonte original e não reproduz seu conteúdo como autoria própria.",
    url: "https://www.youtube.com/watch?v=BABF6sh2Qq8",
  },
  {
    id: "yapery",
    eixo: "Memória e audiovisual",
    tipo: "História oral",
    instituicao: "Instituto Oceanográfico da USP",
    titulo: "Yapery Tupiassu de Britto Guerra — entrevista de 2004",
    descricao:
      "Depoimento do contra-almirante e engenheiro naval sobre a criação do curso de Engenharia Naval e aspectos ligados à concepção e construção do Besnard.",
    url: "https://www.youtube.com/watch?v=wTHj7Y7SkJ4",
  },
  {
    id: "marta",
    eixo: "Memória e audiovisual",
    tipo: "História oral",
    instituicao: "Instituto Oceanográfico da USP",
    titulo: "Marta Vannucci — entrevista de 2004",
    descricao:
      "Entrevista de uma personagem central da formação do IOUSP e da fase em que a construção do Besnard foi concluída.",
    url: "https://www.youtube.com/watch?v=XRwc5_0djPo",
  },
  {
    id: "valdenir",
    eixo: "Memória e audiovisual",
    tipo: "História oral",
    instituicao: "Instituto Oceanográfico da USP",
    titulo: "Valdenir Veronese Furtado — entrevista de 2006",
    descricao:
      "Depoimento preservado pelo IOUSP sobre a trajetória da Oceanografia e da pesquisa embarcada.",
    url: "https://www.youtube.com/watch?v=61D3Xbe8Edo",
  },
  {
    id: "videos-io",
    eixo: "Memória e audiovisual",
    tipo: "Acervo audiovisual institucional",
    instituicao: "Instituto Oceanográfico da USP",
    titulo: "Vídeos — embarcações, apresentações e entrevistas",
    descricao:
      "Página institucional que reúne playlists de embarcações, apresentações, entrevistas e atividades de pesquisa e ensino do IOUSP.",
    url: "https://www.io.usp.br/index.php/oceanos/videos.html",
  },
];

const eixos = [
  "Todos",
  "História",
  "Ciência e Pesquisa",
  "Legado",
  "Pós-operação",
  "Memória e audiovisual",
];

function normalizar(texto = "") {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function ReferenciaCard({ referencia }) {
  const local = referencia.url.startsWith("/");

  return (
    <a
      href={referencia.url}
      target="_blank"
      rel="noreferrer"
      className={`group block rounded-[1.6rem] border p-6 transition hover:-translate-y-1 ${
        referencia.destaque
          ? "border-yellow-100/25 bg-yellow-200/[0.08]"
          : "border-white/10 bg-black/20 hover:border-cyan-200/25 hover:bg-cyan-300/[0.05]"
      }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-cyan-100">
          {referencia.eixo}
        </span>
        <span className="text-xs font-bold text-slate-500">
          {referencia.tipo}
        </span>
        {local && (
          <span className="rounded-full border border-yellow-100/20 bg-yellow-200/10 px-2.5 py-1 text-[11px] font-black text-yellow-100">
            preservado no Memorial
          </span>
        )}
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-emerald-200">
            {referencia.instituicao}
          </p>
          <h3 className="mt-1 text-xl font-black leading-snug text-white">
            {referencia.titulo}
          </h3>
        </div>
        <span className="text-cyan-200 transition group-hover:translate-x-1 group-hover:-translate-y-1">
          ↗
        </span>
      </div>

      <p className="mt-4 text-sm leading-7 text-slate-400">
        {referencia.descricao}
      </p>
    </a>
  );
}

export default function Referencias() {
  const [busca, setBusca] = useState("");
  const [eixo, setEixo] = useState("Todos");

  const filtradas = useMemo(() => {
    const termo = normalizar(busca.trim());

    return referencias.filter((referencia) => {
      const bateEixo = eixo === "Todos" || referencia.eixo === eixo;
      const bateBusca =
        !termo ||
        normalizar(
          [
            referencia.instituicao,
            referencia.titulo,
            referencia.descricao,
            referencia.tipo,
            referencia.eixo,
          ].join(" ")
        ).includes(termo);

      return bateEixo && bateBusca;
    });
  }, [busca, eixo]);

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#020817] text-white">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_12%_12%,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_88%_14%,rgba(250,204,21,0.09),transparent_27%),radial-gradient(circle_at_50%_92%,rgba(16,185,129,0.15),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-[#020817]/30 via-[#061826]/85 to-[#020817]" />

      <div className="relative z-10">
        <header className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <span className="inline-block rounded-full border border-cyan-200/25 bg-cyan-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-100">
              Referências e documentação
            </span>

            <h1 className="mt-7 max-w-5xl text-5xl font-black leading-[0.98] text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-emerald-200 to-yellow-100 md:text-7xl">
              De onde vem esta história?
            </h1>

            <p className="mt-7 max-w-4xl text-lg leading-8 text-slate-200 md:text-xl md:leading-9">
              Esta página reúne, em um único lugar, as fontes usadas nas abas de
              História, Ciência e Pesquisa e Legado. O objetivo é deixar o
              Memorial auditável sem repetir grandes bibliografias ao final de
              cada página.
            </p>

            <p className="mt-5 max-w-4xl leading-7 text-slate-400">
              Sempre que possível, documentos administrativos, páginas
              institucionais e registros contemporâneos são priorizados. Fontes
              jornalísticas, memória oral e sínteses históricas entram como
              camadas complementares e são identificadas pelo tipo de material.
            </p>
          </div>
        </header>

        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-5 rounded-[2rem] border border-yellow-100/20 bg-gradient-to-br from-yellow-200/[0.08] via-white/[0.04] to-cyan-300/[0.06] p-7 md:grid-cols-[0.35fr_1.65fr] md:p-9">
            <div>
              <p className="text-5xl font-black text-yellow-100">PDF</p>
              <p className="mt-2 text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                acervo local
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-white">
                Catálogo histórico dos cruzeiros do Besnard
              </h2>
              <p className="mt-4 leading-7 text-slate-300">
                O arquivo pesquisável da página Ciência foi reconstruído a
                partir deste documento. Como a navegação histórica do site do
                IOUSP se tornou instável, o Memorial pode manter uma cópia do
                PDF em seu próprio diretório público, preservando o acesso ao
                catálogo e indicando sua origem institucional.
              </p>
              <a
                href="/documentos/cruzeiros-oceanograficos-besnard.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block rounded-2xl bg-gradient-to-r from-yellow-100 to-emerald-200 px-5 py-3 text-sm font-black text-slate-950 transition hover:scale-[1.02]"
              >
                Abrir o PDF dos cruzeiros ↗
              </a>
            </div>
          </div>
        </section>

        <section className="sticky top-0 z-30 border-y border-white/10 bg-slate-950/80 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <div className="grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
              <input
                value={busca}
                onChange={(event) => setBusca(event.target.value)}
                placeholder="Buscar: Yapery, incêndio, REVIZEE, Alpha Crucis, Ilhabela..."
                className="w-full rounded-2xl border border-white/15 bg-black/25 px-5 py-3.5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-200/40"
              />

              <div className="flex gap-2 overflow-x-auto pb-1 lg:pb-0">
                {eixos.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setEixo(item)}
                    className={`shrink-0 rounded-full border px-4 py-2 text-xs font-black transition ${
                      eixo === item
                        ? "border-cyan-200/30 bg-cyan-300/20 text-cyan-100"
                        : "border-white/10 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-200">
                Acervo consultado
              </p>
              <h2 className="mt-2 text-3xl font-black text-white md:text-4xl">
                {filtradas.length} referência{filtradas.length === 1 ? "" : "s"}
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-6 text-slate-500">
              Links externos podem mudar ou sair do ar. Por isso, documentos
              centrais devem ser progressivamente preservados com metadados e,
              quando juridicamente possível, cópias locais ou arquivadas.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filtradas.map((referencia) => (
              <ReferenciaCard key={referencia.id} referencia={referencia} />
            ))}
          </div>

          {filtradas.length === 0 && (
            <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 text-center text-slate-400">
              Nenhuma referência corresponde aos filtros atuais.
            </div>
          )}
        </section>

        <section className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto grid max-w-7xl gap-5 px-6 py-16 md:grid-cols-3">
            <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-6">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
                Documentos primários
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Atas, processos, contratos, documentos administrativos, notas
                contemporâneas e páginas institucionais têm prioridade quando a
                questão envolve datas, decisões e responsabilidades.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-6">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Sínteses e memória oral
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Reportagens científicas, entrevistas e documentários são
                fundamentais para reconstruir experiência e contexto, mas não
                substituem laudos ou documentos administrativos quando estes
                são necessários.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-6">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-100">
                Página em construção
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Novas referências podem ser incorporadas conforme diários,
                laudos, processos e acervos se tornem disponíveis. Uma fonte
                nova pode corrigir ou aprofundar textos já publicados no
                Memorial.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}