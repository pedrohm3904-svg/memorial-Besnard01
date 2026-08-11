const fontes = [
  {
    id: "fapesp-adeus",
    tipo: "Memória científica",
    instituicao: "Pesquisa FAPESP",
    titulo: "O adeus ao Prof. Besnard",
    descricao:
      "Registra a despedida do navio, objetos preservados, 68 diários de bordo e a estimativa de cerca de 50 mil amostras biológicas associadas às viagens.",
    url: "https://revistapesquisa.fapesp.br/o-adeus-ao-prof-besnard/",
  },
  {
    id: "jornal-usp",
    tipo: "Memória institucional",
    instituicao: "Jornal da USP",
    titulo: "O protagonista da oceanografia brasileira",
    descricao:
      "Reconstrói a contribuição do Besnard para pesquisa, ensino, Antártica e a sucessão de embarcações do Instituto Oceanográfico.",
    url: "https://jornal.usp.br/universidade/o-protagonista-da-oceanografia-brasileira/",
  },
  {
    id: "alpha-crucis",
    tipo: "Infraestrutura científica",
    instituicao: "Pesquisa FAPESP",
    titulo: "A saga do Alpha Crucis",
    descricao:
      "Detalha a busca pelo sucessor do Besnard, a aquisição do antigo Moana Wave, a reforma nos Estados Unidos e sua incorporação à USP.",
    url: "https://revistapesquisa.fapesp.br/a-saga-do-alpha-crucis/",
  },
  {
    id: "alpha-delphini",
    tipo: "Infraestrutura científica",
    instituicao: "Instituto Oceanográfico da USP",
    titulo: "B/Pq Alpha Delphini",
    descricao:
      "Apresenta o primeiro barco oceanográfico do gênero inteiramente construído no Brasil e sua função complementar na pesquisa costeira.",
    url: "https://www.io.usp.br/index.php/embarcacoes/b-pq-alpha-delphini/apresentacao.html",
  },
  {
    id: "colbio",
    tipo: "Coleção científica",
    instituicao: "Instituto Oceanográfico da USP",
    titulo: "Coleção Biológica Prof. Edmundo F. Nonato",
    descricao:
      "Acervo de referência e testemunho para estudos de biodiversidade, taxonomia, distribuição, ecologia e conservação marinha.",
    url: "https://www.io.usp.br/colecao-biologica/",
  },
  {
    id: "memoria-prceu",
    tipo: "Projeto de memória",
    instituicao: "PRCEU / Universidade de São Paulo",
    titulo: "Catálogo de projetos 2013–2014",
    descricao:
      "Registra projetos voltados à memória audiovisual do IOUSP e à trajetória Besnard–Moana Wave–Alpha Crucis.",
    url: "https://prceu.usp.br/wp-content/uploads/2021/09/2013-2014_Catalogo.pdf",
  },
  {
    id: "documentario",
    tipo: "Arquivo audiovisual",
    instituicao: "Instituto Oceanográfico da USP",
    titulo: "Besnard: histórias de um navio oceanográfico",
    descricao:
      "Documentário de 2016 que preserva memória institucional e depoimentos ligados ao navio.",
    url: "https://www.youtube.com/watch?v=BABF6sh2Qq8",
  },
  {
    id: "yapery",
    tipo: "História oral",
    instituicao: "Instituto Oceanográfico da USP",
    titulo: "Yapery Tupiassu de Britto Guerra — 2004",
    descricao:
      "Depoimento histórico relacionado à criação, construção, problemas e relevância do Besnard.",
    url: "https://www.youtube.com/watch?v=wTHj7Y7SkJ4",
  },
  {
    id: "marta",
    tipo: "História oral",
    instituicao: "Instituto Oceanográfico da USP",
    titulo: "Marta Vannucci — 2004",
    descricao:
      "Registro audiovisual de uma personagem fundamental da história inicial do Instituto Oceanográfico.",
    url: "https://www.youtube.com/watch?v=XRwc5_0djPo",
  },
  {
    id: "valdenir",
    tipo: "História oral",
    instituicao: "Instituto Oceanográfico da USP",
    titulo: "Valdenir Veronese Furtado — 2006",
    descricao:
      "Entrevista preservada pelo IOUSP sobre a trajetória da Oceanografia e da pesquisa embarcada.",
    url: "https://www.youtube.com/watch?v=61D3Xbe8Edo",
  },
  {
    id: "psrm",
    tipo: "Política do mar",
    instituicao: "Comissão Interministerial para os Recursos do Mar",
    titulo: "Plano Setorial para os Recursos do Mar",
    descricao:
      "Contextualiza a continuidade das políticas brasileiras de conhecimento e uso sustentável dos recursos marinhos.",
    url: "https://www.marinha.mil.br/secirm/pt-br/psrm/sobre",
  },
];

const dimensoes = [
  {
    numero: "01",
    titulo: "Pessoas",
    frase: "O navio formou comunidades, não apenas currículos.",
    texto:
      "Pesquisadores, técnicos, tripulantes e estudantes aprenderam a trabalhar em um ambiente em que decisões científicas dependem de navegação, segurança, instrumentação, cooperação e tempo de mar. O conhecimento de bordo foi transmitido entre gerações e reapareceu em novos projetos, laboratórios e embarcações.",
  },
  {
    numero: "02",
    titulo: "Dados e amostras",
    frase: "Uma coleta pode continuar produzindo ciência décadas depois.",
    texto:
      "O legado material da pesquisa não terminou quando as campanhas acabaram. Amostras biológicas, registros ambientais, fichas, séries oceanográficas e diários preservam observações de épocas que não podem ser repetidas. Quando técnicas novas surgem, materiais antigos podem responder perguntas novas.",
  },
  {
    numero: "03",
    titulo: "Objetos",
    frase: "A ciência também deixa cultura material.",
    texto:
      "Timão, bitácula, sinos, vigias, luzes, sextante, placa do fabricante e outros instrumentos contam uma história diferente daquela dos artigos. Eles mostram como era navegar, medir, orientar e operar uma plataforma científica no século XX.",
  },
  {
    numero: "04",
    titulo: "Instituições e políticas",
    frase: "O Besnard aproximou universidade, Estado e oceano.",
    texto:
      "PROANTAR, programas de recursos vivos, pesquisas da plataforma continental e cooperações internacionais fizeram do navio uma interface entre investigação acadêmica e projetos nacionais. O conhecimento produzido a bordo entrou em decisões, políticas científicas e estratégias de ocupação do espaço marítimo.",
  },
  {
    numero: "05",
    titulo: "Novas plataformas",
    frase: "Uma infraestrutura envelhece; a capacidade construída pode continuar.",
    texto:
      "A experiência acumulada no Besnard ajudou a definir necessidades técnicas e científicas das embarcações seguintes. Alpha Crucis e Alpha Delphini pertencem a outra geração, mas foram incorporados por uma instituição que já aprendera, com décadas de mar, por que navios de pesquisa são essenciais.",
  },
  {
    numero: "06",
    titulo: "Memória",
    frase: "Preservar também é uma forma de produzir conhecimento.",
    texto:
      "Entrevistas, documentários, catálogos, coleções e este Memorial Digital transformam a própria história do navio em objeto de pesquisa. A memória não é um apêndice sentimental: ela documenta como uma comunidade científica foi construída.",
  },
];

const objetos = [
  {
    nome: "Timão e comandos",
    texto:
      "Retirados da embarcação e preservados no IOUSP, representam a dimensão operacional do navio: governar uma plataforma de dezenas de metros enquanto uma estação científica acontece.",
  },
  {
    nome: "Bitácula",
    texto:
      "A coluna que abriga a bússola materializa uma tecnologia básica da navegação: orientar o navio e dar sentido espacial às observações.",
  },
  {
    nome: "Sinos",
    texto:
      "Objetos aparentemente simples carregam marcas do cotidiano marítimo, da comunicação e da identidade da embarcação.",
  },
  {
    nome: "Vigias",
    texto:
      "Fragmentos da arquitetura de bordo que transformam uma estrutura técnica em espaço vivido por pesquisadores e tripulantes.",
  },
  {
    nome: "Luzes de navegação",
    texto:
      "Equipamentos de emergência preservados lembram que uma plataforma de ciência é também uma embarcação submetida a normas, riscos e rotinas marítimas.",
  },
  {
    nome: "Placa do estaleiro",
    texto:
      "A identificação do fabricante norueguês conecta a materialidade do navio à sua origem em Bergen e à história internacional de sua construção.",
  },
  {
    nome: "Sextante",
    texto:
      "Instrumento que simboliza a transição entre tradições clássicas de navegação e a oceanografia cada vez mais eletrônica e digital.",
  },
  {
    nome: "Âncora e instrumentos de maior porte",
    texto:
      "Parte desse patrimônio foi mantida em áreas do Instituto e do Museu, deslocando peças do contexto operacional para o contexto de preservação.",
  },
];

const elos = [
  {
    periodo: "1967",
    nome: "Prof. W. Besnard",
    subtitulo: "A plataforma que consolidou uma cultura de pesquisa embarcada",
    texto:
      "Décadas de campanhas criaram experiência em planejamento, estações, instrumentação, logística, segurança, manutenção e formação de equipes.",
  },
  {
    periodo: "2009–2012",
    nome: "Moana Wave → Alpha Crucis",
    subtitulo: "A sucessão não foi simples substituição",
    texto:
      "Depois do incêndio do Besnard, reformá-lo mostrou-se tecnicamente e economicamente problemático. A USP procurou embarcações em diversos países até adquirir o antigo Moana Wave, da Universidade do Havaí, modernizado em Seattle e incorporado como Alpha Crucis.",
  },
  {
    periodo: "2013",
    nome: "Alpha Delphini",
    subtitulo: "Uma nova escala de operação",
    texto:
      "Construído no Brasil, o Alpha Delphini foi pensado como plataforma intermediária para pesquisas costeiras e de plataforma, complementando a capacidade de uma embarcação oceânica de maior porte.",
  },
  {
    periodo: "Hoje",
    nome: "Uma cultura de infraestrutura",
    subtitulo: "O elo mais importante não é o metal",
    texto:
      "O legado está na compreensão institucional de que Oceanografia exige acesso continuado ao mar, pessoal treinado, manutenção, instrumentos, coleções e capacidade de transformar dias de navio em séries científicas duradouras.",
  },
];

const memoria = [
  {
    periodo: "2004–2006",
    titulo: "Depoimentos e história oral",
    texto:
      "Antes de o Besnard deixar definitivamente a pesquisa, o IOUSP já registrava entrevistas de docentes e personagens de sua história. Esses depoimentos hoje são fontes primárias de memória institucional.",
    fontes: ["yapery", "marta", "valdenir"],
  },
  {
    periodo: "2013–2014",
    titulo: "Memória audiovisual do IOUSP",
    texto:
      "Um projeto da PRCEU propôs consultar arquivos científicos, textuais, administrativos e visuais, inclusive diários de bordo e navegação, para produzir registros audiovisuais, transcrições, livro e documentário.",
    fontes: ["memoria-prceu"],
  },
  {
    periodo: "2013–2014",
    titulo: "Besnard → Moana Wave → Alpha Crucis",
    texto:
      "Outro projeto de extensão tratou explicitamente a sucessão de embarcações como narrativa histórica e científica, propondo uma cartilha e/ou documentário em linguagem acessível.",
    fontes: ["memoria-prceu"],
  },
  {
    periodo: "2016",
    titulo: "Besnard: histórias de um navio oceanográfico",
    texto:
      "O documentário reuniu imagens e vozes que hoje são parte do acervo audiovisual da própria memória do navio. O acesso ao filme fica concentrado aqui, sem repetição em outras seções da página.",
    fontes: ["documentario"],
  },
  {
    periodo: "2026",
    titulo: "Memorial Digital",
    texto:
      "O presente projeto acrescenta uma nova camada: investigação documental da trajetória pós-operacional, catálogo científico pesquisável, conexão com fontes primárias e abertura para memórias de pesquisadores ligados ao IMar/UNIFESP e a outras instituições.",
    fontes: [],
  },
];

const ideiasFuturas = [
  {
    titulo: "Coleção de relatos",
    texto:
      "Publicar depoimentos curados de pesquisadores, técnicos e estudantes, sempre com data, vínculo, autorização e contexto da viagem.",
  },
  {
    titulo: "Objetos em 3D",
    texto:
      "Fotogrametria de instrumentos preservados poderia transformar timão, bitácula, sinos ou sextante em peças navegáveis de um museu virtual.",
  },
  {
    titulo: "Diários digitalizados",
    texto:
      "Se o acesso institucional for autorizado, páginas selecionadas dos 68 diários podem ser digitalizadas, transcritas e ligadas aos cruzeiros correspondentes.",
  },
  {
    titulo: "Árvore de descendência científica",
    texto:
      "Projetos, orientadores, estudantes e publicações podem formar uma rede mostrando como uma campanha de décadas atrás continua em trabalhos atuais.",
  },
  {
    titulo: "Besnard → presente",
    texto:
      "Uma visualização pode ligar técnicas antigas a equipamentos atuais e mostrar o que mudou — e o que permaneceu — na pesquisa embarcada.",
  },
  {
    titulo: "Arquivo de preservação",
    texto:
      "Manter cópias autorizadas, metadados, links arquivados e referências completas reduz o risco de perder novamente páginas institucionais que já se tornaram difíceis de encontrar.",
  },
];

function FonteChip({ id }) {
  const fonte = fontes.find((item) => item.id === id);
  if (!fonte) return null;

  return (
    <a
      href={fonte.url}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-bold text-cyan-100 transition hover:-translate-y-0.5 hover:bg-cyan-300/20"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-200" />
      {["yapery", "marta", "valdenir", "documentario"].includes(id)
        ? fonte.titulo
        : fonte.instituicao}
      <span aria-hidden="true">↗</span>
    </a>
  );
}

export default function Legado() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020817] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(250,204,21,0.10),transparent_28%),radial-gradient(circle_at_88%_18%,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_50%_90%,rgba(16,185,129,0.16),transparent_34%)]" />
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-[#020817]/30 via-[#061826]/85 to-[#020817]" />

      <div className="relative z-10">
        {/* HERO */}
        <header className="border-b border-white/10">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1.15fr_0.85fr] md:items-end md:py-28">
            <div>
              <span className="inline-block rounded-full border border-yellow-100/20 bg-yellow-200/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-yellow-100">
                Legado
              </span>

              <h1 className="mt-7 max-w-5xl text-5xl font-black leading-[0.98] text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-emerald-200 to-cyan-200 md:text-7xl">
                O que permanece quando um navio deixa de navegar?
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl md:leading-9">
                Um navio pode perder seus motores, sair de operação e até
                desaparecer como infraestrutura ativa. Mas décadas de ciência
                não cabem dentro de um casco. Elas continuam em pessoas,
                coleções, objetos, instituições, políticas, novas embarcações e
                perguntas que ainda podem ser feitas aos dados do passado.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/15 bg-white/[0.07] p-7 shadow-2xl backdrop-blur-xl">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-200">
                Tese desta página
              </p>
              <p className="mt-4 text-2xl font-black leading-tight text-white">
                O Besnard foi um elo.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Entre uma oceanografia que ainda construía sua autonomia de
                campo e uma instituição capaz de operar novas plataformas,
                preservar grandes coleções, participar de programas globais e
                formar gerações de pesquisadores do mar.
              </p>
            </div>
          </div>
        </header>

        {/* DIMENSÕES */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-100">
              Seis formas de permanecer
            </p>
            <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">
              Legado não é uma coisa só
            </h2>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {dimensoes.map((item) => (
              <div
                key={item.numero}
                className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 backdrop-blur-xl"
              >
                <p className="text-sm font-black text-cyan-200">{item.numero}</p>
                <h3 className="mt-2 text-2xl font-black text-white">
                  {item.titulo}
                </h3>
                <p className="mt-3 font-bold leading-6 text-emerald-200">
                  {item.frase}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PESSOAS */}
        <section className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
                  01 · Pessoas
                </p>
                <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">
                  Um navio-escola mesmo quando a missão era pesquisa
                </h2>
              </div>

              <div>
                <p className="text-lg leading-8 text-slate-200">
                  O Besnard foi laboratório, mas também foi ambiente de
                  formação. A bordo, estudantes aprendiam a transformar teoria
                  em decisão: lançar um equipamento, reconhecer uma estação,
                  adaptar a coleta ao estado do mar, registrar metadados,
                  conservar uma amostra e trabalhar em turnos com uma equipe
                  multidisciplinar.
                </p>

                <p className="mt-5 leading-7 text-slate-400">
                  Essa experiência não desaparece quando a viagem termina. Ela é
                  carregada por quem se torna técnico, professor, orientador,
                  comandante ou pesquisador-chefe. Parte da continuidade da
                  Oceanografia brasileira é justamente uma continuidade de
                  pessoas que aprenderam embarcando.
                </p>

                <div className="mt-7 rounded-2xl border border-emerald-200/15 bg-emerald-300/[0.07] p-6">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                    Para este memorial
                  </p>
                  <p className="mt-3 leading-7 text-slate-200">
                    Os relatos de docentes e pesquisadores do IMar/UNIFESP que
                    embarcaram no Besnard ganham aqui uma função maior que a
                    homenagem: eles são história oral de uma cultura científica
                    transmitida entre instituições e gerações.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DADOS */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-200">
                02 · Dados e amostras
              </p>
              <p className="mt-4 text-7xl font-black text-emerald-200">
                ≈ 50 mil
              </p>
              <p className="mt-2 text-sm font-bold text-slate-400">
                amostras de organismos estimadas em 2016
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-black text-white">
                O oceano de décadas atrás ainda pode ser interrogado
              </h2>
              <p className="mt-5 leading-8 text-slate-200">
                Pesquisa FAPESP registrou em 2016 a estimativa de cerca de 50
                mil amostras de organismos marinhos provenientes de viagens do
                Besnard, além dos 68 diários de bordo. A Coleção Biológica do
                IOUSP funciona como acervo de referência e testemunho,
                preservando espécimes e informações ambientais para estudos
                posteriores.
              </p>
              <p className="mt-5 leading-7 text-slate-400">
                Isso significa que parte do navio continua cientificamente
                ativa sem estar no mar. Uma amostra histórica pode ser
                reidentificada taxonomicamente, comparada com populações atuais
                ou analisada com técnicas que não existiam na época da coleta.
                Dados antigos podem formar séries temporais necessárias para
                perceber mudanças ambientais de longo prazo.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <FonteChip id="fapesp-adeus" />
                <FonteChip id="colbio" />
              </div>
            </div>
          </div>
        </section>

        {/* CULTURA MATERIAL */}
        <section className="border-y border-yellow-100/10 bg-yellow-200/[0.03]">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="max-w-4xl">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-100">
                03 · Cultura material
              </p>
              <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">
                Fragmentos de um laboratório flutuante
              </h2>
              <p className="mt-5 leading-7 text-slate-300">
                A retirada e preservação de objetos antes da destinação do casco
                produziu um segundo tipo de acervo. Esses itens não substituem o
                navio inteiro, mas permitem contar como a ciência era realizada
                materialmente a bordo.
              </p>
            </div>

            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {objetos.map((objeto) => (
                <div
                  key={objeto.nome}
                  className="rounded-[1.75rem] border border-white/10 bg-black/20 p-6"
                >
                  <h3 className="text-xl font-black text-yellow-100">
                    {objeto.nome}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {objeto.texto}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <FonteChip id="fapesp-adeus" />
            </div>
          </div>
        </section>

        {/* ELO DAS EMBARCAÇÕES */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
              04 · Continuidade
            </p>
            <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">
              Besnard → Alpha Crucis → Alpha Delphini
            </h2>
            <p className="mt-5 leading-7 text-slate-300">
              Não é uma genealogia de cascos. É uma genealogia de capacidade
              científica.
            </p>
          </div>

          <div className="relative mt-10">
            <div className="pointer-events-none absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-cyan-300/0 via-cyan-300/35 to-cyan-300/0 md:left-1/2" />

            <div className="space-y-8">
              {elos.map((elo, index) => (
                <div
                  key={elo.nome}
                  className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                    index % 2 ? "" : ""
                  }`}
                >
                  <div
                    className={`ml-12 rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 md:ml-0 ${
                      index % 2 === 0
                        ? "md:col-start-1 md:text-right"
                        : "md:col-start-2"
                    }`}
                  >
                    <p className="text-sm font-black text-yellow-100">
                      {elo.periodo}
                    </p>
                    <h3 className="mt-2 text-2xl font-black text-white">
                      {elo.nome}
                    </h3>
                    <p className="mt-3 font-bold leading-6 text-emerald-200">
                      {elo.subtitulo}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      {elo.texto}
                    </p>
                  </div>

                  <div className="absolute left-5 top-8 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-[#020817] bg-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.65)] md:left-1/2" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            <FonteChip id="alpha-crucis" />
            <FonteChip id="alpha-delphini" />
            <FonteChip id="jornal-usp" />
          </div>
        </section>

        {/* POR QUE ELO */}
        <section className="border-y border-emerald-200/10 bg-emerald-300/[0.035]">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="rounded-[2rem] border border-emerald-200/15 bg-black/20 p-8 md:p-10">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-200">
                Uma leitura do legado
              </p>
              <h2 className="mt-3 max-w-5xl text-4xl font-black leading-tight text-white md:text-5xl">
                O verdadeiro sucessor do Besnard não é outro navio. É a
                capacidade de continuar perguntando ao oceano.
              </h2>
              <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-200">
                O Alpha Crucis trouxe alcance, posicionamento e instrumentação
                adequados a novas fronteiras de pesquisa. O Alpha Delphini
                ampliou a flexibilidade de operações costeiras. Coleções
                conservaram materiais. Laboratórios mantiveram técnicas.
                Pessoas transmitiram experiência. Programas científicos
                continuaram.
              </p>
              <p className="mt-5 max-w-4xl leading-7 text-slate-400">
                Nesse sentido, o Besnard é elo porque ajudou a construir uma
                infraestrutura invisível: práticas, expectativas, competências
                e redes institucionais que sobrevivem à infraestrutura física
                que lhes deu origem.
              </p>
            </div>
          </div>
        </section>

        {/* POLÍTICAS */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
                05 · Estado, ciência e território
              </p>
              <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">
                Do convés às políticas do mar
              </h2>
            </div>

            <div className="space-y-5">
              <p className="text-lg leading-8 text-slate-200">
                A participação em programas como PROANTAR, projetos do Plano
                Setorial para os Recursos do Mar e levantamentos da Zona
                Econômica Exclusiva mostra que a produção de dados oceanográficos
                não acontece fora da sociedade. Conhecer o oceano também
                significa sustentar decisões sobre recursos, conservação,
                soberania, navegação e presença científica.
              </p>

              <p className="leading-7 text-slate-400">
                Na Antártica, o Besnard participou da fase em que o Brasil
                transformava interesse político em presença científica. No
                REVIZEE, décadas depois, navios e laboratórios foram mobilizados
                para responder a outra pergunta estatal: quais recursos vivos
                existem na ZEE e que conhecimento é necessário para explorá-los
                de forma sustentável?
              </p>

              <p className="leading-7 text-slate-400">
                O legado, portanto, não pertence apenas ao IOUSP. Ele faz parte
                da história mais ampla da construção de capacidade brasileira
                para conhecer seu território marítimo.
              </p>

              <div className="flex flex-wrap gap-2">
                <FonteChip id="psrm" />
                <FonteChip id="jornal-usp" />
              </div>
            </div>
          </div>
        </section>

        {/* MEMÓRIA DA MEMÓRIA */}
        <section className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr]">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-100">
                  06 · A memória também tem história
                </p>
                <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">
                  Antes deste memorial, outras pessoas já tentavam salvar o
                  Besnard do esquecimento
                </h2>
                <p className="mt-5 leading-7 text-slate-300">
                  Reconhecer essas iniciativas é parte da ética do projeto. Este
                  site não reivindica para si a memória que recebeu de outros:
                  ele organiza, conecta, credita e tenta abrir novas frentes de
                  investigação.
                </p>
              </div>

              <div className="space-y-4">
                {memoria.map((item) => (
                  <div
                    key={`${item.periodo}-${item.titulo}`}
                    className="rounded-[1.75rem] border border-white/10 bg-black/20 p-6"
                  >
                    <p className="text-sm font-black text-cyan-200">
                      {item.periodo}
                    </p>
                    <h3 className="mt-2 text-xl font-black text-white">
                      {item.titulo}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {item.texto}
                    </p>

                    {item.fontes.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.fontes.map((fonte) => (
                          <FonteChip key={fonte} id={fonte} />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FUTURO DO MEMORIAL */}
        <section className="border-y border-cyan-200/10 bg-cyan-300/[0.035]">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="max-w-4xl">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
                Próximas camadas
              </p>
              <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">
                O legado ainda pode ser documentado melhor
              </h2>
              <p className="mt-5 leading-7 text-slate-300">
                Um memorial digital é especialmente útil porque não precisa
                encerrar a coleção. Ele pode crescer conforme novas fontes,
                autorizações, depoimentos e documentos aparecem.
              </p>
            </div>

            <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {ideiasFuturas.map((ideia) => (
                <div
                  key={ideia.titulo}
                  className="rounded-[1.75rem] border border-white/10 bg-black/20 p-6"
                >
                  <h3 className="text-xl font-black text-white">
                    {ideia.titulo}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {ideia.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTRIBUA */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-[2rem] border border-yellow-100/15 bg-gradient-to-r from-yellow-200/[0.08] via-emerald-300/[0.08] to-cyan-300/[0.08] p-8 md:p-10">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-100">
              Arquivo colaborativo
            </p>
            <h2 className="mt-3 max-w-4xl text-4xl font-black text-white">
              Você embarcou no Besnard ou preserva um documento sobre ele?
            </h2>
            <p className="mt-5 max-w-4xl leading-7 text-slate-300">
              Fotografias, relatos, cadernos, documentos, identificação de
              pessoas em imagens e memórias de campanhas podem ajudar a
              preencher lacunas. As contribuições devem ser revisadas,
              creditadas e publicadas com contexto, nunca automaticamente.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeasF6Rqmz-a6omaOirhSEUFWUDuegpMxnIrKBoRVOC4HfczQ/viewform?usp=publish-editor"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-block rounded-2xl bg-gradient-to-r from-yellow-100 via-emerald-200 to-cyan-200 px-7 py-4 font-black text-slate-950 transition hover:scale-[1.02]"
            >
              Contribuir com o Memorial ↗
            </a>
          </div>
        </section>

        {/* REFERÊNCIAS CENTRALIZADAS */}
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="flex flex-col gap-5 rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-100">
                Documentação
              </p>
              <h2 className="mt-2 text-2xl font-black text-white">
                Fontes, entrevistas e acervos em um só lugar
              </h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
                Os links essenciais permanecem junto aos trechos em que são
                usados. A relação completa foi centralizada na aba Referências,
                evitando repetir dezenas de cartões no final desta página.
              </p>
            </div>
            <a
              href="/referencias"
              className="shrink-0 rounded-2xl border border-yellow-100/20 bg-yellow-200/10 px-6 py-3 text-center font-black text-yellow-100 transition hover:bg-yellow-200/20"
            >
              Ver todas as referências →
            </a>
          </div>
        </section>

        <footer className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <p className="max-w-5xl text-2xl font-black leading-tight text-white md:text-3xl">
              Um casco pode ser perdido. Uma comunidade científica pode escolher
              não perder a memória, os dados e a capacidade que construiu a
              partir dele.
            </p>
            <p className="mt-4 text-sm text-slate-500">
              Memorial do N/Oc Prof. Wladimir Besnard • Legado • versão de
              trabalho atualizada em agosto de 2026
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}