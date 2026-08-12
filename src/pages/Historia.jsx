const fontes = [
  {
    id: "fapesp-memoria",
    tipo: "Pesquisa histórica",
    instituicao: "Pesquisa FAPESP",
    titulo: "Pesquisadores do mar",
    descricao:
      "Reconstrução da formação da oceanografia institucional no Brasil e das negociações, construção e primeira viagem do Prof. W. Besnard.",
    url: "https://revistapesquisa.fapesp.br/pesquisadores-do-mar/",
  },
  {
    id: "jornal-usp-protagonista",
    tipo: "Memória institucional",
    instituicao: "Jornal da USP",
    titulo: "O protagonista da oceanografia brasileira",
    descricao:
      "Síntese histórica do papel do navio, com dados sobre cruzeiros, estações oceanográficas, Antártica e depoimentos de pesquisadores do IOUSP.",
    url: "https://jornal.usp.br/universidade/o-protagonista-da-oceanografia-brasileira/",
  },
  {
    id: "engenharia-naval",
    tipo: "Documento técnico-histórico",
    instituicao: "Revista Marítima Brasileira / Marinha do Brasil",
    titulo: "Engenharia Naval — Yapery Tupiassu de Britto Guerra",
    descricao:
      "Relato do autor do projeto sobre a participação da Escola Politécnica da USP, a Comissão de Construção e o estaleiro norueguês.",
    url: "https://portaldeperiodicos.marinha.mil.br/index.php/revistamaritima/article/download/3901/3823",
  },
  {
    id: "vikindio",
    tipo: "Fonte institucional",
    instituicao: "Instituto Oceanográfico da USP",
    titulo: "VIKINDIO",
    descricao:
      "Página histórica do IOUSP dedicada à primeira expedição científica do navio, realizada durante a viagem entre a Noruega e o Brasil.",
    url: "https://www.io.usp.br/index.php/ocean-coast-res/36-portugues/infraestrutura/embarcacoes/prof-besnard/projetos/361-vikindio.html",
  },
  {
    id: "cruzeiros-io",
    tipo: "Fonte institucional",
    instituicao: "Instituto Oceanográfico da USP",
    titulo: "Cruzeiros e Projetos",
    descricao:
      "Catálogo histórico dos cruzeiros e projetos desenvolvidos com o Prof. W. Besnard entre 1967 e 2006.",
    url: "https://www.io.usp.br/index.php/embarcacoes/n-oc-prof-w-besnard/cruzeiros-e-projetos.html",
  },
  {
    id: "antartica",
    tipo: "História naval",
    instituicao: "Revista do Clube Naval / Marinha do Brasil",
    titulo: "Primeira Expedição Brasileira à Antártica",
    descricao:
      "Registro da participação conjunta do Prof. W. Besnard e do Barão de Teffé na primeira expedição oficial brasileira ao continente antártico.",
    url: "https://portaldeperiodicos.marinha.mil.br/index.php/clubenaval/article/view/4001",
  },
  {
    id: "fapesp-adeus",
    tipo: "Pesquisa histórica",
    instituicao: "Pesquisa FAPESP",
    titulo: "O adeus ao Prof. Besnard",
    descricao:
      "Histórico da embarcação, das reformas dos anos 1990, problemas de motor, incêndio e discussão sobre sua destinação.",
    url: "https://revistapesquisa.fapesp.br/o-adeus-ao-prof-besnard/",
  },
  {
    id: "incendio-2008",
    tipo: "Nota contemporânea",
    instituicao: "Marinha do Brasil, reproduzida pelo Poder Naval",
    titulo: "Incêndio a bordo do navio de pesquisa Professor Besnard",
    descricao:
      "Nota publicada em 13 de novembro de 2008 com horário, local, resposta à emergência e anúncio de inspeção e abertura de inquérito.",
    url: "https://www.naval.com.br/blog/2008/11/13/incendio-a-bordo-de-do-navio-de-pesquisa-professor-besnard/",
  },
  {
    id: "uruguai-2014",
    tipo: "Documento administrativo primário",
    instituicao: "Conselho Universitário da USP",
    titulo: "963ª Sessão — Processo 2014.1.289.21.9",
    descricao:
      "Documenta o trâmite jurídico-administrativo e a aprovação da doação do navio para a Universidad de la República, no Uruguai.",
    url: "https://secretaria.webhostusp.sti.usp.br/wp-content/uploads/Co-09122014-Decis%C3%B5es.pdf",
  },
  {
    id: "uruguai-2015",
    tipo: "Documento institucional",
    instituicao: "Jornal da USP",
    titulo: "Conselho Universitário registra desistência do Uruguai",
    descricao:
      "Em 2015, a USP informou que o governo uruguaio desistira da doação e aprovou a retirada dos equipamentos e o desmonte da estrutura.",
    url: "https://jornal.usp.br/institucional/press-release/conselho-universitario-aprova-mudanca-no-sistema-de-eleicao-de-dirigentes/",
  },
  {
    id: "ilhabela-2017",
    tipo: "Documento municipal",
    instituicao: "Prefeitura de Ilhabela",
    titulo: "Debate público sobre o destino do W. Besnard",
    descricao:
      "Registra a doação à Prefeitura em 2016, o projeto de naufrágio controlado, estudos de licenciamento e a disputa entre recife artificial e museu.",
    url: "https://www.ilhabela.sp.gov.br/portal/noticias/0/3/10873/prefeitura-de-ilhabela-pede-proposta-de-projeto-para-o-navio-w-besnard-durante-reuniao-publica",
  },
  {
    id: "ilhabela-vistoria",
    tipo: "Documento municipal",
    instituicao: "Prefeitura de Ilhabela",
    titulo: "Visita técnica e condições da embarcação em 2017",
    descricao:
      "Relato institucional das condições precárias observadas no navio e das reformas que seriam necessárias.",
    url: "https://www.ilhabela.sp.gov.br/portal/noticias/0/3/10141/autoridades-de-ilhabela-se-surpreendem-com-condicoes-precarias-do-navio-doado-pela-usp",
  },
  {
    id: "caso-juridico",
    tipo: "Análise jurídica documentada",
    instituicao: "Migalhas Marítimas",
    titulo: "O caso do navio Professor Wladimir Besnard",
    descricao:
      "Reconstitui a vistoria de 2018, a judicialização, as obrigações impostas ao Município e o conflito entre preservação cultural e risco ambiental.",
    url: "https://www.migalhas.com.br/coluna/migalhas-maritimas/388207/o-caso-do-navio-professor-wladimir-besnard",
  },
  {
    id: "mpf-2023",
    tipo: "Documento público primário",
    instituicao: "Ministério Público Federal",
    titulo: "Ata da 629ª Sessão da 4ª CCR",
    descricao:
      "Registra a existência do cumprimento de sentença relativo à retirada do navio do Porto de Santos e a judicialização da questão ambiental.",
    url: "https://www.mpf.mp.br/atuacao/ccr4/revisao/sessoes/sessoes-anteriores/2023/arquivos/ata-629-sro-4ccr-publicada.pdf",
  },
  {
    id: "santos-2024",
    tipo: "Documento municipal",
    instituicao: "Prefeitura de Santos",
    titulo: "Navio Professor Besnard começa a renascer com o Parque Valongo",
    descricao:
      "Registra a responsabilidade da OSCIP Instituto do Mar, a recuperação voluntária e o projeto de transformação da embarcação em atração museológica.",
    url: "https://www.santos.sp.gov.br/?q=noticia%2Fnavio-professor-besnard-comeca-a-renascer-com-o-parque-valongo-em-santos",
  },
  {
    id: "aps-2026",
    tipo: "Documento administrativo primário",
    instituicao: "Autoridade Portuária de Santos",
    titulo: "Contrato emergencial de salvamento — 2026",
    descricao:
      "Ata do Conselho de Administração que registra a contratação da Marfort para salvamento, estabilização, reflutuação e remoção controlada.",
    url: "https://intranet.portodesantos.com.br/docs_codesp/doc_codesp_pdf_site.asp?id=162812",
  },
  {
    id: "situacao-2026",
    tipo: "Acompanhamento contemporâneo",
    instituicao: "Jornal da Orla",
    titulo: "Arquivo de notícias — Prof. W. Besnard",
    descricao:
      "Reúne o afundamento parcial, a reflutuação e a atualização de agosto de 2026 sobre o plano de reboque encaminhado à Capitania dos Portos.",
    url: "https://jornaldaorla.com.br/noticias/tag/navio-professor-w-besnard/",
  },
];

const numeros = [
  {
    numero: "49,3 m",
    legenda: "comprimento da embarcação",
    fonte: "fapesp-adeus",
  },
  {
    numero: "260+",
    legenda: "cruzeiros oceanográficos registrados",
    fonte: "jornal-usp-protagonista",
  },
  {
    numero: "≈ 8.200",
    legenda: "estações oceanográficas",
    fonte: "jornal-usp-protagonista",
  },
  {
    numero: "6",
    legenda: "expedições à Antártica",
    fonte: "fapesp-memoria",
  },
];

const marcos = [
  ["1958", "O projeto de um navio próprio ganha impulso institucional e financeiro."],
  ["1964", "É assinado o contrato para construção da embarcação."],
  ["1966", "O casco é lançado ao mar em Bergen, na Noruega."],
  ["1967", "Batismo, VIKINDIO e chegada a Santos."],
  ["1982", "O Besnard parte para a primeira expedição oficial brasileira à Antártica."],
  ["1988", "Última campanha antártica; um grave problema no eixo da hélice marca a viagem."],
  ["1994–2000", "Grandes reformas, nova paralisação por motor e retorno ao mar."],
  ["2008", "Incêndio na Baía de Guanabara encerra sua capacidade operacional de pesquisa."],
  ["2014–2015", "A USP aprova doação ao Uruguai; o governo uruguaio depois desiste."],
  ["2016", "O navio é doado a Ilhabela, inicialmente para naufrágio controlado."],
  ["2018–2023", "Vistorias, risco ambiental, ação judicial e disputa sobre seu destino."],
  ["2019–2024", "O Instituto do Mar assume o projeto de preservação e musealização."],
  ["2026", "Adernamento, submersão parcial, salvamento e reflutuação no Valongo."],
];

const capitulos = [
  {
    id: "necessidade",
    periodo: "1946–1964",
    numero: "01",
    titulo: "Antes do navio: por que o Brasil precisava de um laboratório flutuante",
    subtitulo: "O Besnard começou como uma necessidade científica, muito antes de existir como casco.",
    fontes: ["fapesp-memoria", "engenharia-naval"],
    paragrafos: [
      `A história do N/Oc Prof. Wladimir Besnard começa antes de sua construção. Em 1946, o Estado de São Paulo criou o Instituto Paulista de Oceanografia (IPO), incorporado à Universidade de São Paulo em 1951 e posteriormente denominado Instituto Oceanográfico. Naquele momento, a pesquisa brasileira sobre o oceano ainda dependia de estruturas modestas, embarcações de oportunidade e cooperações com outras instituições. Para investigar de forma sistemática uma costa com milhares de quilômetros e avançar para o oceano aberto, era necessário algo diferente: um navio concebido para a ciência.`,
      `Wladimir Besnard, primeiro diretor do Instituto, defendia a aquisição de uma embarcação oceanográfica própria. A ideia ganhou força no final da década de 1950, mas sua concretização ultrapassou sua vida: Besnard morreu em 1960. O projeto, entretanto, continuou nas gestões seguintes, envolvendo o Instituto Oceanográfico, a Universidade, o Governo do Estado, recursos federais, a engenharia naval brasileira e, mais tarde, um estaleiro norueguês.`,
      `Esse percurso é importante porque o navio não foi simplesmente comprado pronto. Seu nascimento está ligado à formação da própria engenharia naval moderna na USP. O projeto preliminar foi desenvolvido na Escola Politécnica, em um contexto de cooperação com a Marinha do Brasil. Yapery Tupiassu de Britto Guerra, engenheiro naval e personagem central desse processo, registrou que o Besnard foi o primeiro projeto e o primeiro navio resultante do então Departamento de Engenharia Naval da Escola Politécnica da USP.`,
    ],
    destaques: [
      "A necessidade de um navio próprio já era defendida durante a gestão de Wladimir Besnard.",
      "O projeto atravessou diferentes administrações do Instituto Oceanográfico.",
      "A concepção envolveu ciência, universidade, engenharia naval, governo e cooperação internacional.",
    ],
  },
  {
    id: "construcao",
    periodo: "1958–1967",
    numero: "02",
    titulo: "Da prancheta à Noruega",
    subtitulo: "Um projeto brasileiro construído em Bergen.",
    fontes: ["engenharia-naval", "fapesp-memoria", "jornal-usp-protagonista"],
    paragrafos: [
      `No fim de 1958, a ideia de uma embarcação oceanográfica própria ganhou novo impulso. Em 1959 foi criada, pelo Governo do Estado de São Paulo, uma Comissão de Construção do Navio. O trabalho técnico articulava o Instituto Oceanográfico e a Escola Politécnica da USP, em uma época em que o ensino de Engenharia Naval na universidade ainda estava se consolidando.`,
      `O projeto preliminar nasceu na Politécnica. Yapery Tupiassu de Britto Guerra participou do trabalho técnico e posteriormente presidiu a Comissão de Construção. O engenheiro Vicente Maria Verrone, integrante da primeira turma de engenheiros navais formada pela Poli, acompanharia a construção na Noruega como representante do Instituto. Esse detalhe transforma o Besnard também em um marco da história da engenharia naval brasileira: antes de ser um laboratório flutuante, ele foi exercício concreto de formação tecnológica e capacidade de projeto.`,
      `Após o processo de seleção internacional, a construção foi confiada ao estaleiro A/S Mjellem Karlsen, em Bergen, na Noruega. O contrato foi assinado em abril de 1964. O casco foi lançado ao mar em 18 de agosto de 1966 e, em 5 de maio de 1967, a embarcação pronta recebeu o nome Professor Wladimir Besnard, homenagem ao pesquisador que havia defendido a necessidade daquele navio, mas não chegou a vê-lo concluído.`,
      `A construção no exterior não diminui a dimensão brasileira do projeto. Ao contrário: a documentação histórica mostra uma cadeia de decisões, desenhos, formação de engenheiros, fiscalização e financiamento que conectou São Paulo, a USP, a Marinha e a indústria naval norueguesa. O resultado foi uma plataforma científica concebida especificamente para permitir ao país observar o mar com continuidade.`,
    ],
    destaques: [
      "1959 — criação da Comissão de Construção do Navio.",
      "Abril de 1964 — assinatura do contrato de construção.",
      "18 de agosto de 1966 — lançamento do casco.",
      "5 de maio de 1967 — batismo como Prof. W. Besnard.",
    ],
  },
  {
    id: "vikindio",
    periodo: "1967",
    numero: "03",
    titulo: "VIKINDIO: o navio começou a fazer ciência antes de chegar ao Brasil",
    subtitulo: "A travessia inaugural foi também a primeira expedição científica.",
    fontes: ["vikindio", "fapesp-memoria", "jornal-usp-protagonista"],
    paragrafos: [
      `Em 10 de junho de 1967, o Prof. W. Besnard deixou Bergen com destino ao Brasil. A viagem não foi tratada como simples translado. Brasileiros e noruegueses aproveitaram a travessia para realizar observações e coletas científicas, inaugurando o navio já em atividade de pesquisa. A expedição recebeu o nome VIKINDIO, combinação simbólica das referências a vikings e indígenas.`,
      `Durante aproximadamente sessenta dias, o laboratório flutuante atravessou o Atlântico realizando coletas de água e organismos e observações oceanográficas. A rota passou pela costa africana e depois por pontos do litoral brasileiro. O antigo registro do Instituto Oceanográfico descreve atividades envolvendo hidrografia, plâncton, fauna bentônica e prospecção de peixes.`,
      `A viagem também deixou uma marca cartográfica: nas proximidades de Cabo Verde, os trabalhos identificaram uma grande elevação submarina posteriormente associada ao nome Besnard. A própria viagem de entrega, portanto, produziu conhecimento antes que o navio sequer alcançasse sua base definitiva.`,
      `Em 9 de agosto de 1967, o Besnard chegou a Santos. A chegada não representava apenas a incorporação de uma embarcação ao patrimônio universitário; representava a entrada em operação de uma infraestrutura científica que permitiria ao Instituto Oceanográfico planejar séries de observações, formar pesquisadores no mar e participar de programas nacionais e internacionais em outra escala.`,
    ],
    destaques: [
      "10 de junho de 1967 — saída de Bergen.",
      "Cerca de 60 dias de travessia científica.",
      "9 de agosto de 1967 — chegada a Santos.",
      "A viagem inaugural já produziu dados e amostras oceanográficas.",
    ],
  },
  {
    id: "laboratorio",
    periodo: "1967–2006",
    numero: "04",
    titulo: "Quatro décadas como laboratório flutuante",
    subtitulo: "O Besnard transformou quilômetros navegados em séries de dados, amostras e formação científica.",
    fontes: ["jornal-usp-protagonista", "cruzeiros-io", "fapesp-adeus"],
    paragrafos: [
      `A partir de Santos, o navio passou a sustentar uma parte decisiva da oceanografia de campo brasileira. O catálogo histórico do Instituto Oceanográfico reúne cruzeiros e projetos entre 1967 e 2006. Em aproximadamente quatro décadas de operação, o Jornal da USP registra mais de 260 cruzeiros oceanográficos e cerca de 8.200 estações oceanográficas.`,
      `Esses números ajudam a medir a escala, mas não esgotam o legado. Em cada estação havia pessoas, instrumentos, cadernos de bordo, amostras de água e sedimento, organismos, medições físicas e químicas e decisões tomadas em condições reais de mar. O Besnard funcionou simultaneamente como laboratório, plataforma de amostragem, espaço de formação e ponto de encontro entre diferentes especialidades das ciências do mar.`,
      `Projetos de pesca, plâncton, bentos, oceanografia física, química e geológica, produtividade marinha, circulação, plataforma continental e recursos vivos utilizaram a embarcação ao longo de décadas. Muitos resultados científicos publicados anos depois nasceram de materiais coletados em seus cruzeiros, o que faz com que a vida científica do navio ultrapasse o período em que ele efetivamente navegou.`,
      `A embarcação também ajudou a consolidar uma cultura de pesquisa embarcada no país. Gerações de estudantes aprenderam que a oceanografia não se limita ao laboratório em terra: depende de planejamento de estação, operação de equipamentos, rotina de bordo, trabalho em equipe, registro rigoroso e capacidade de interpretar um oceano que muda enquanto é observado.`,
    ],
    destaques: [
      "Mais de 260 cruzeiros oceanográficos.",
      "Cerca de 8.200 estações oceanográficas.",
      "Projetos nacionais e internacionais.",
      "Formação de sucessivas gerações de pesquisadores e técnicos.",
    ],
  },
  {
    id: "antartica",
    periodo: "1982–1988",
    numero: "05",
    titulo: "Antártica: quando o Besnard levou a ciência brasileira ao extremo sul",
    subtitulo: "A história do navio se cruza com a consolidação da presença científica brasileira na Antártica.",
    fontes: ["antartica", "jornal-usp-protagonista", "fapesp-memoria"],
    paragrafos: [
      `Em 20 de dezembro de 1982, o Prof. W. Besnard deixou Santos enquanto o Navio de Apoio Oceanográfico Barão de Teffé, da Marinha do Brasil, partia do Rio de Janeiro. Os dois navios iniciavam a primeira expedição oficial brasileira à Antártica, marco fundador das operações do Programa Antártico Brasileiro.`,
      `A missão combinava pesquisa científica, experiência de navegação polar e reconhecimento de áreas de interesse para a futura presença permanente brasileira no continente. A participação de uma embarcação universitária ao lado de um navio da Marinha tornou visível uma característica que acompanharia o PROANTAR: a articulação entre ciência, logística naval, universidades e Estado.`,
      `O Besnard realizou seis expedições à Antártica entre 1982 e 1988. Para pesquisadores acostumados ao Atlântico Sul e à plataforma continental brasileira, eram campanhas que exigiam enfrentar baixas temperaturas, mares severos, longos períodos de isolamento e uma infraestrutura de comunicação incomparavelmente mais limitada que a atual.`,
      `A última campanha antártica do navio, em 1988, teve um episódio dramático. Segundo depoimento preservado pelo Jornal da USP, houve ruptura no eixo da hélice na Passagem de Drake. A embarcação ficou à deriva por horas e precisou ser rebocada pelo Barão de Teffé até o Chile. O Besnard não retornaria à Antártica depois dessa viagem.`,
      `O episódio não apaga o feito anterior; ajuda a revelar o custo material da ciência oceânica. Produzir conhecimento em regiões remotas depende de máquinas, pessoas, manutenção, logística e decisões tomadas sob risco. A ciência que chegou aos artigos começou, muitas vezes, em situações como essas.`,
    ],
    destaques: [
      "20 de dezembro de 1982 — início da primeira expedição oficial brasileira à Antártica.",
      "Seis campanhas antárticas entre 1982 e 1988.",
      "Participação na fase inicial do PROANTAR.",
      "1988 — avaria no eixo da hélice durante a passagem de Drake.",
    ],
  },
  {
    id: "desgaste",
    periodo: "1994–2008",
    numero: "06",
    titulo: "Envelhecimento, reformas e o limite material de uma infraestrutura científica",
    subtitulo: "Um navio histórico também é uma máquina que precisa ser continuamente mantida.",
    fontes: ["fapesp-adeus", "jornal-usp-protagonista"],
    paragrafos: [
      `Depois de décadas de atividade, manter o Besnard operacional tornou-se progressivamente mais difícil. Entre 1994 e 1997, a embarcação passou por uma ampla reforma. Em 1998, problemas no motor voltaram a retirá-la de operação. O navio retornou ao mar em 2000, depois de um período em que projetos e atividades de ensino do Instituto Oceanográfico foram afetados pela falta de sua principal plataforma de pesquisa.`,
      `Essa fase é essencial para compreender a história posterior. Navios científicos têm custo elevado de operação, manutenção e modernização. Sistemas de propulsão, geração de energia, navegação, hidráulica, segurança e equipamentos científicos envelhecem em ritmos diferentes. Quando uma infraestrutura desse porte atravessa décadas de serviço, cada nova manutenção passa a envolver decisões não apenas técnicas, mas também orçamentárias e institucionais.`,
      `O Besnard continuou associado a atividades científicas até a década de 2000; o catálogo histórico de cruzeiros do IOUSP se estende até 2006. Dois anos depois, um evento mudaria definitivamente sua trajetória.`,
    ],
    destaques: [
      "1994–1997 — ampla reforma.",
      "1998 — nova paralisação por problemas de motor.",
      "2000 — retorno às atividades no mar.",
      "O catálogo histórico do IOUSP registra cruzeiros até 2006.",
    ],
  },
  {
    id: "incendio",
    periodo: "13 de novembro de 2008",
    numero: "07",
    titulo: "O incêndio na Baía de Guanabara",
    subtitulo: "O momento em que a história operacional do Besnard foi interrompida.",
    fontes: ["incendio-2008", "fapesp-adeus"],
    paragrafos: [
      `Na tarde de 13 de novembro de 2008, o Prof. W. Besnard estava fundeado na Baía de Guanabara, no Rio de Janeiro. Por volta das 17h30, ocorreu um incêndio em um dos dormitórios da embarcação. A informação foi divulgada naquele mesmo dia em nota atribuída à Marinha do Brasil.`,
      `O fogo foi combatido pelo pessoal do próprio navio com apoio de militares, de um rebocador da Marinha, de dois rebocadores da empresa Camorim, de uma lancha destinada à contenção de óleo e de embarcações menores. Não houve vítimas e, segundo a nota contemporânea, não foi observada poluição hídrica.`,
      `A Capitania dos Portos do Rio de Janeiro acompanhou a emergência, anunciou uma inspeção na embarcação e informou que seria aberto o inquérito competente. O incêndio deixou o Besnard sem condições operacionais de pesquisa e se tornou o divisor entre a vida do navio como instrumento científico e sua longa fase de indefinição patrimonial.`,
      `Há relatos posteriores que atribuem o episódio a problemas anteriores na instalação elétrica. Este memorial, entretanto, não apresenta essa hipótese como causa comprovada enquanto o relatório conclusivo do inquérito ou outro laudo técnico primário não for localizado e analisado. Preservar a memória também significa distinguir o que está documentado daquilo que ainda precisa ser demonstrado.`,
    ],
    destaques: [
      "17h30 — horário aproximado registrado para o início do incêndio.",
      "O fogo começou em um dos dormitórios.",
      "Não houve vítimas.",
      "A Capitania anunciou inspeção e abertura de inquérito.",
    ],
    lacuna: {
      titulo: "Documento ainda procurado",
      texto:
        "Relatório conclusivo do inquérito e/ou laudo técnico produzido após o incêndio de 2008. Esse documento é fundamental para estabelecer com segurança a causa, a extensão dos danos e eventuais recomendações técnicas.",
    },
  },
  {
    id: "uruguai",
    periodo: "2009–2015",
    numero: "08",
    titulo: "Depois do fogo: o que fazer com o Besnard?",
    subtitulo: "Museu, recuperação, transferência internacional ou desmontagem passaram a disputar o futuro do navio.",
    fontes: ["uruguai-2014", "uruguai-2015", "fapesp-adeus"],
    paragrafos: [
      `Com a perda da capacidade operacional, surgiu um problema que deixou de ser apenas oceanográfico: qual deveria ser o destino de uma embarcação historicamente importante, tecnicamente degradada e cara de manter? Ao longo dos anos seguintes apareceram propostas de preservação, musealização, transferência e desmontagem.`,
      `A alternativa mais concreta foi internacional. Em 2014, a USP abriu formalmente o Processo 2014.1.289.21.9 para a doação do N/Oc Prof. W. Besnard à República Oriental do Uruguai, especificamente para a Facultad de Ciencias da Universidad de la República. A Congregação do Instituto Oceanográfico havia aprovado o mérito da doação em abril daquele ano.`,
      `O processo passou pela Procuradoria Geral da USP. Um laudo de inspeção de engenharia naval integrou a análise e o parecer jurídico registrou que a manutenção ou recuperação exigiria custo elevado. O documento discutiu inclusive providências necessárias para uma transferência internacional: representação do donatário, escritura pública, situação documental e baixa do navio perante o Tribunal Marítimo.`,
      `Em dezembro de 2014, o Conselho Universitário aprovou a doação. O processo chegou a registrar correspondência do Ministério de Relações Exteriores uruguaio solicitando a concretização da transferência e os encaminhamentos jurídicos e logísticos para levar a embarcação ao porto de destino.`,
      `A transferência, porém, nunca se concretizou. Em outubro de 2015, a própria USP registrou que o governo uruguaio havia desistido do processo. Diante disso, o Conselho Universitário aprovou a retirada dos equipamentos e o desmonte da estrutura física. A Universidade registrava então gastos mensais para manter a embarcação. O Besnard havia escapado de um destino, mas ainda não possuía outro.`,
    ],
    destaques: [
      "Processo USP 2014.1.289.21.9.",
      "Doação ao Uruguai aprovada pelo Conselho Universitário em dezembro de 2014.",
      "O processo incluiu laudo de inspeção e análise jurídica da transferência.",
      "2015 — desistência uruguaia; a USP volta a considerar o desmonte.",
    ],
    lacuna: {
      titulo: "Peça documental de grande interesse",
      texto:
        "Localizar e digitalizar integralmente a correspondência diplomática associada à proposta uruguaia, inclusive cartas e anexos anteriores à decisão do Conselho Universitário, permitiria reconstruir quem articulou a transferência e por que ela acabou abandonada.",
    },
  },
  {
    id: "ilhabela",
    periodo: "2016–2019",
    numero: "09",
    titulo: "Ilhabela: entre o recife artificial e o navio-museu",
    subtitulo: "O debate sobre preservação deixou de ser abstrato e virou política pública, licenciamento e disputa de projetos.",
    fontes: ["ilhabela-2017", "ilhabela-vistoria", "caso-juridico"],
    paragrafos: [
      `Em 2016, o Besnard foi doado pela USP ao Município de Ilhabela. Na concepção inicial, a embarcação seria preparada para um naufrágio controlado, transformando-se em recife artificial, ponto de mergulho e atração turística. Era uma solução que procurava dar nova função a um casco já retirado da pesquisa.`,
      `A execução mostrou-se muito mais complexa. Em 2017, a Prefeitura de Ilhabela registrou que havia contratado a FUNDESPA para estudos técnicos e licenciamento ambiental. Também informou que uma licitação de R$ 1 milhão para descontaminação, reboque e afundamento havia sido impugnada pelo Tribunal de Contas. O município convocou então uma reunião pública para comparar caminhos: naufrágio controlado ou transferência para uma entidade que transformasse o navio em museu.`,
      `Uma visita de autoridades municipais ao navio, ainda atracado em Santos, registrou a precariedade da estrutura e a necessidade de reformas elétricas, hidráulicas e mecânicas, além da recuperação de diferentes compartimentos. A questão deixou de ser apenas “preservar ou afundar”: qualquer opção exigia recursos, engenharia, licenciamento, responsabilidade jurídica e um operador capaz de executar o projeto.`,
      `Esse período também colocou em confronto duas formas diferentes de atribuir valor ao mesmo objeto. Para alguns, o casco poderia ganhar uma segunda vida ecológica e turística debaixo d'água. Para outros, sua importância histórica justificava a preservação como patrimônio material acessível ao público. Nenhuma das duas propostas avançou com facilidade.`,
    ],
    destaques: [
      "2016 — doação da USP para Ilhabela.",
      "Plano inicial: naufrágio controlado para criação de recife artificial.",
      "Estudos e licenciamento ambiental entraram no centro do processo.",
      "A alternativa de museu passou a disputar espaço com o projeto de afundamento.",
    ],
  },
  {
    id: "judicializacao",
    periodo: "2018–2023",
    numero: "10",
    titulo: "Quando a preservação se tornou um problema jurídico e ambiental",
    subtitulo: "A demora em definir um destino aumentou o custo e o risco de qualquer decisão.",
    fontes: ["caso-juridico", "mpf-2023"],
    paragrafos: [
      `Em 5 de julho de 2018, uma vistoria envolvendo equipes da antiga CODESP e técnicos do IBAMA registrou uma situação preocupante. Segundo os documentos posteriormente discutidos no processo judicial, a navegabilidade estava comprometida, havia sinais de adernamento, presença de recipientes com óleo, sistemas de geração e propulsão sem operação e ligações elétricas improvisadas. Também foi relatado uso da embarcação como moradia.`,
      `A situação chegou à Justiça na Comarca de Ilhabela. No processo nº 1001253-17.2018.8.26.0247, o Município foi responsabilizado, como proprietário, por providências relacionadas à retirada do navio do Porto de Santos e à redução dos riscos. Entre as medidas descritas na reconstrução jurídica do caso estavam assegurar a flutuabilidade, retirar resíduos oleosos, eliminar ligações elétricas irregulares e remover eventuais ocupantes.`,
      `O caso passou a condensar um dilema raro. De um lado, havia o valor histórico e cultural de um navio que participou da formação da oceanografia brasileira e das primeiras operações nacionais na Antártica. De outro, um casco deteriorado dentro de um dos portos mais movimentados do país poderia representar risco ambiental, estrutural e à navegação.`,
      `Em 2023, o Ministério Público Federal registrou que a questão da retirada já estava abrangida por cumprimento de sentença na 1ª Vara de Ilhabela, movido pela Companhia Docas contra o Município. No mesmo período, decisões e manifestações discutiam inclusive a possibilidade de desmantelamento em terra. O debate sobre patrimônio, que poderia parecer apenas memorialístico, tornou-se inseparável de direito ambiental, segurança portuária e responsabilidade administrativa.`,
    ],
    destaques: [
      "5 de julho de 2018 — vistoria ambiental e de segurança.",
      "Processo nº 1001253-17.2018.8.26.0247.",
      "Conflito entre preservação do patrimônio e prevenção de risco ambiental.",
      "2023 — retirada/desmantelamento volta ao centro da discussão judicial.",
    ],
    lacuna: {
      titulo: "Cuidado com o termo “tombado”",
      texto:
        "Há registros de procedimento e estudos ligados ao CONDEPHAAT, mas o memorial deve evitar afirmar que o navio foi definitivamente tombado sem anexar a decisão final correspondente. A formulação segura, por enquanto, é “objeto de procedimento/estudo de tombamento”.",
    },
  },
  {
    id: "instituto-do-mar",
    periodo: "2019–2024",
    numero: "11",
    titulo: "Instituto do Mar e Parque Valongo: uma nova promessa de preservação",
    subtitulo: "O navio voltou a ser imaginado como lugar de memória, educação e visitação.",
    fontes: ["caso-juridico", "santos-2024"],
    paragrafos: [
      `Em 2019, Ilhabela optou por transferir a embarcação ao Instituto do Mar, organização que defendia sua transformação em museu flutuante e/ou navio-escola. É importante não confundir essa entidade com o Instituto do Mar da Universidade Federal de São Paulo: tratava-se de outra organização, posteriormente identificada pela Prefeitura de Santos como uma OSCIP.`,
      `A mudança de responsável não eliminou o passivo acumulado. O navio continuou em Santos, enquanto decisões judiciais, custos de conservação e riscos técnicos permaneciam em discussão. Em 2023, chegou a ser determinada sua desmontagem, segundo registro posterior da Prefeitura de Santos.`,
      `Depois de audiência conciliatória com participação do Ministério Público, a decisão de desmontagem foi suspensa e o navio permaneceu sob responsabilidade do Instituto do Mar. Em 2024, com a implantação do Parque Valongo, a presença do Besnard passou a fazer parte do projeto de revitalização daquela área histórica do porto.`,
      `Voluntários realizaram trabalhos de limpeza externa e voltou a ganhar força a ideia de abrir a embarcação ao público. A proposta divulgada naquele momento previa um espaço interno dedicado à história do navio e outras estruturas de visitação. O Besnard, que havia sido pensado como recife artificial e esteve próximo do desmantelamento, voltava a ser apresentado como futuro equipamento de memória.`,
      `A mudança de narrativa, entretanto, não significava que os problemas técnicos estivessem resolvidos. O casco continuava envelhecido e dependente de intervenções especializadas. O ano de 2026 demonstraria de forma dramática a diferença entre um projeto de preservação desejado e as condições materiais necessárias para realizá-lo.`,
    ],
    destaques: [
      "2019 — transferência para o Instituto do Mar.",
      "Propostas de museu flutuante e navio-escola.",
      "2023 — ordem de desmontagem entra no histórico do caso.",
      "2024 — Parque Valongo recoloca o Besnard no horizonte de visitação pública.",
    ],
  },
  {
    id: "afundamento-2026",
    periodo: "2026",
    numero: "12",
    titulo: "Adernamento, submersão parcial e reflutuação",
    subtitulo: "O episódio que parecia encerrar a história do navio abriu um novo capítulo.",
    fontes: ["aps-2026", "situacao-2026"],
    paragrafos: [
      `Na noite de 13 de março de 2026, o Prof. W. Besnard adernou junto ao cais do Parque Valongo, em Santos, e ficou parcialmente submerso, assentado próximo ao cais. A Marinha instaurou inquérito para apurar o acidente. Depois de quase duas décadas sem atividade científica e de sucessivas tentativas de definir seu destino, a deterioração material do navio tornou-se visível de maneira incontornável.`,
      `A Autoridade Portuária de Santos passou a coordenar as medidas emergenciais. Em 26 de março, sua Diretoria Executiva aprovou contratação emergencial para uma operação completa de salvamento, estabilização, reflutuação e remoção controlada. O Conselho de Administração registrou posteriormente contrato de R$ 8,614 milhões com a empresa Marfort Serviços Marítimos, com prazo de 180 dias.`,
      `O próprio documento administrativo da APS explicita por que a intervenção deixou de ser opcional: a condição da embarcação era tratada como risco significativo para a segurança da navegação, a integridade do cais do Valongo e a fluidez do canal portuário. A APS também determinou procedimento para apurar as circunstâncias do evento, possíveis responsáveis e eventual ressarcimento das despesas.`,
      `Em 15 de junho de 2026, após 94 dias, a operação recuperou a condição de flutuabilidade do navio. O casco voltou a emergir completamente, mas reflutuar não equivale a restaurar. A embarcação continuou dependente de avaliação estrutural, monitoramento e planejamento para ser movimentada com segurança.`,
      `A atualização pública mais recente localizada para esta versão do memorial é de 6 de agosto de 2026. Segundo informação atribuída à APS, a Marfort elaborou um Plano de Reboque e o encaminhou à Capitania dos Portos, que ainda precisava autorizar a movimentação. Assim, o destino definitivo do Besnard permanece em aberto.`,
    ],
    destaques: [
      "13 de março de 2026 — adernamento e submersão parcial no Valongo.",
      "R$ 8,614 milhões — valor registrado para a operação emergencial de salvamento.",
      "15 de junho de 2026 — recuperação da condição de flutuabilidade.",
      "6 de agosto de 2026 — plano de reboque aguardava autorização da autoridade marítima.",
    ],
    lacuna: {
      titulo: "História em aberto",
      texto:
        "O inquérito instaurado após o acidente de março de 2026, os relatórios finais de salvamento, as avaliações estruturais e a decisão sobre o destino permanente do navio ainda poderão alterar este capítulo. Esta página deve ser atualizada à medida que esses documentos se tornarem públicos.",
    },
  },
];

const documentosProcurados = [
  {
    titulo: "Inquérito do incêndio de 2008",
    texto:
      "Relatório conclusivo da Capitania dos Portos do Rio de Janeiro, inspeções técnicas e anexos capazes de esclarecer causa e extensão dos danos.",
  },
  {
    titulo: "Dossiê completo da proposta uruguaia",
    texto:
      "Correspondências diplomáticas, carta de interesse, laudos, minutas e documentos logísticos associados ao Processo USP 2014.1.289.21.9.",
  },
  {
    titulo: "Instrumento de doação USP → Ilhabela",
    texto:
      "Termo integral de transferência, condições impostas ao Município e documentos que definiram a finalidade original da doação.",
  },
  {
    titulo: "Processo patrimonial do CONDEPHAAT",
    texto:
      "Pareceres, estudos e decisão final sobre o pedido/procedimento de tombamento da embarcação.",
  },
  {
    titulo: "Transferência Ilhabela → Instituto do Mar",
    texto:
      "Instrumento jurídico integral de 2019 e eventuais obrigações de conservação, remoção, musealização ou uso educacional.",
  },
  {
    titulo: "Inquérito e laudos de 2026",
    texto:
      "IAFN, avaliações de estabilidade, relatórios de engenharia, documentação do salvamento e decisão sobre reboque, estaleiro e destino definitivo.",
  },
];

function FonteLink({ id }) {
  const fonte = fontes.find((item) => item.id === id);
  if (!fonte) return null;

  return (
    <a
      href={fonte.url}
      target="_blank"
      rel="noreferrer"
      title={fonte.titulo}
      className="inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-bold text-cyan-100 transition hover:-translate-y-0.5 hover:bg-cyan-300/20"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-200" />
      {fonte.instituicao}
      <span aria-hidden="true">↗</span>
    </a>
  );
}

function Capitulo({ capitulo, indice }) {
  const lado = indice % 2 === 0 ? "md:pr-10" : "md:pl-10";

  return (
    <article
      id={capitulo.id}
      className={`relative scroll-mt-28 ${lado}`}
    >
      <div className="hidden md:block absolute top-10 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-slate-950 bg-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.75)]" />

      <div
        className={`md:w-[calc(50%-1.5rem)] ${
          indice % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
        }`}
      >
        <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.07] shadow-2xl backdrop-blur-xl">
          <div className="border-b border-white/10 bg-gradient-to-r from-cyan-300/10 via-emerald-300/5 to-transparent p-7 md:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-cyan-200/25 bg-cyan-300/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-cyan-100">
                Capítulo {capitulo.numero}
              </span>
              <span className="text-sm font-black text-yellow-100">
                {capitulo.periodo}
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-black leading-tight text-white md:text-4xl">
              {capitulo.titulo}
            </h2>

            <p className="mt-4 text-base leading-relaxed text-cyan-100/90">
              {capitulo.subtitulo}
            </p>
          </div>

          <div className="p-7 md:p-8">
            <div className="space-y-5">
              {capitulo.paragrafos.map((paragrafo) => (
                <p
                  key={paragrafo}
                  className="text-[15px] leading-7 text-slate-200 md:text-base md:leading-8"
                >
                  {paragrafo}
                </p>
              ))}
            </div>

            {capitulo.destaques?.length > 0 && (
              <div className="mt-7 rounded-2xl border border-emerald-200/15 bg-emerald-300/[0.07] p-5">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-200">
                  Marcos documentados
                </p>
                <ul className="mt-4 space-y-3">
                  {capitulo.destaques.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-slate-200"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {capitulo.lacuna && (
              <div className="mt-6 rounded-2xl border border-yellow-200/20 bg-yellow-200/[0.07] p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-yellow-100/30 bg-yellow-200/10 font-black text-yellow-100">
                    ?
                  </span>
                  <p className="font-black text-yellow-100">
                    {capitulo.lacuna.titulo}
                  </p>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {capitulo.lacuna.texto}
                </p>
              </div>
            )}

            <div className="mt-7 flex flex-wrap gap-2">
              {capitulo.fontes.map((fonteId) => (
                <FonteLink key={fonteId} id={fonteId} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Historia() {
  return (
    <main
      id="historia"
      className="relative min-h-screen overflow-hidden bg-[#020817] text-white"
    >
      {/* FUNDO */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(34,211,238,0.20),transparent_30%),radial-gradient(circle_at_88%_18%,rgba(16,185,129,0.14),transparent_28%),radial-gradient(circle_at_50%_90%,rgba(250,204,21,0.09),transparent_32%)]" />
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-[#020817]/30 via-[#061826]/80 to-[#020817]" />

      <div className="relative z-10">
        {/* HERO */}
        <header className="border-b border-white/10">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1.15fr_0.85fr] md:items-end md:py-28">
            <div>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-cyan-200/25 bg-cyan-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-100">
                  História documental
                </span>
                <span className="rounded-full border border-yellow-100/20 bg-yellow-200/10 px-4 py-2 text-xs font-bold text-yellow-100">
                  Atualizado em 11 de agosto de 2026
                </span>
              </div>

              <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.98] text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-emerald-200 to-yellow-100 md:text-7xl">
                Um navio, muitas vidas
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl md:leading-9">
                A história do N/Oc Prof. Wladimir Besnard é também a história de
                como o Brasil construiu capacidade para observar o oceano,
                formar pesquisadores e participar de grandes programas
                científicos. Esta página acompanha não apenas as expedições,
                mas também os projetos, contratos, acidentes, decisões
                administrativas, disputas patrimoniais e tentativas de
                preservação que moldaram o destino da embarcação.
              </p>

              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-400">
                O objetivo não é criar uma narrativa sem fissuras. Quando os
                documentos divergem, a divergência deve aparecer. Quando um
                laudo ainda não foi localizado, a lacuna é registrada. Memória
                científica de qualidade depende tanto do que sabemos quanto da
                clareza sobre aquilo que ainda precisamos investigar.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/15 bg-white/[0.07] p-6 shadow-2xl backdrop-blur-xl md:p-8">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-200">
                Nota editorial
              </p>
              <h2 className="mt-3 text-2xl font-black text-white">
                Esta é uma história em construção
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                A narrativa é atualizada quando surgem novos documentos.
                Divergências entre fontes e lacunas ainda não resolvidas são
                indicadas no próprio texto, em vez de serem escondidas.
              </p>
              <div className="mt-5 rounded-2xl border border-cyan-200/15 bg-black/20 p-4">
                <p className="text-sm font-bold text-cyan-100">
                  Último movimento público localizado
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-300">
                  Em 6 de agosto de 2026, o Plano de Reboque elaborado pela
                  empresa responsável pelo salvamento aguardava autorização da
                  Capitania dos Portos.
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* NÚMEROS */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {numeros.map((item) => {
              const fonte = fontes.find((f) => f.id === item.fonte);

              return (
                <a
                  key={item.legenda}
                  href={fonte?.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-[1.75rem] border border-white/12 bg-white/[0.06] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-200/30 hover:bg-cyan-300/[0.08]"
                >
                  <p className="text-4xl font-black text-cyan-200">
                    {item.numero}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.legenda}
                  </p>
                  <p className="mt-4 text-xs font-bold text-slate-500 transition group-hover:text-cyan-200">
                    consultar fonte ↗
                  </p>
                </a>
              );
            })}
          </div>
        </section>

        {/* CONSTRUÇÃO EM CONTEXTO */}
        <section className="mx-auto max-w-7xl px-6 pb-12">
          <div className="grid gap-6 rounded-[2rem] border border-cyan-200/20 bg-gradient-to-br from-cyan-300/10 via-white/[0.05] to-emerald-300/[0.08] p-7 md:grid-cols-[0.35fr_1.65fr] md:p-9">
            <div>
              <p className="text-5xl font-black text-cyan-200">1964–1967</p>
              <p className="mt-2 text-sm font-black uppercase tracking-[0.16em] text-slate-400">
                construção do navio
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-white">
                Um projeto brasileiro construído na Noruega
              </h2>
              <p className="mt-4 leading-7 text-slate-200">
                O contrato de construção foi assinado em abril de 1964 com o
                estaleiro A/S Mjellem Karlsen, em Bergen. O casco foi lançado ao
                mar em 18 de agosto de 1966 e a embarcação concluída e batizada
                em maio de 1967. O projeto teve participação decisiva da Escola
                Politécnica da USP e da nascente engenharia naval brasileira.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <FonteLink id="fapesp-memoria" />
                <FonteLink id="engenharia-naval" />
              </div>
            </div>
          </div>
        </section>

        {/* NAVEGAÇÃO INTERNA */}
        <section className="sticky top-0 z-30 border-y border-white/10 bg-slate-950/75 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl overflow-x-auto px-6 py-3">
            <div className="flex min-w-max gap-2">
              {capitulos.map((capitulo) => (
                <a
                  key={capitulo.id}
                  href={`#${capitulo.id}`}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-slate-300 transition hover:border-cyan-200/30 hover:bg-cyan-300/10 hover:text-cyan-100"
                >
                  {capitulo.numero} · {capitulo.periodo}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* LINHA DO TEMPO RESUMIDA */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-9 max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
              Visão geral
            </p>
            <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">
              Linha do tempo essencial
            </h2>
            <p className="mt-4 leading-7 text-slate-400">
              Uma leitura rápida antes de mergulhar nos capítulos documentais.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {marcos.map(([ano, texto]) => (
              <div
                key={`${ano}-${texto}`}
                className="rounded-2xl border border-white/10 bg-black/20 p-5"
              >
                <p className="text-xl font-black text-cyan-200">{ano}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{texto}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CAPÍTULOS */}
        <section className="relative mx-auto max-w-7xl px-6 pb-20">
          <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-cyan-300/0 via-cyan-300/30 to-cyan-300/0 md:block" />

          <div className="space-y-12 md:space-y-16">
            {capitulos.map((capitulo, indice) => (
              <Capitulo
                key={capitulo.id}
                capitulo={capitulo}
                indice={indice}
              />
            ))}
          </div>
        </section>

        {/* DOCUMENTOS PROCURADOS */}
        <section className="border-y border-yellow-100/10 bg-yellow-200/[0.035]">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-100">
                  Frente investigativa
                </p>
                <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">
                  Documentos que ainda podem mudar esta história
                </h2>
                <p className="mt-5 leading-7 text-slate-300">
                  Um memorial documental não precisa fingir completude. Estas
                  são algumas das lacunas cuja localização permitiria avançar
                  do relato histórico para um verdadeiro arquivo público sobre
                  o Besnard.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {documentosProcurados.map((item, indice) => (
                  <div
                    key={item.titulo}
                    className="rounded-2xl border border-yellow-100/15 bg-black/20 p-5"
                  >
                    <p className="text-xs font-black text-yellow-100">
                      Dossiê {String(indice + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 text-lg font-black text-white">
                      {item.titulo}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {item.texto}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MÉTODO */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-white/12 bg-white/[0.06] p-7">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
                01 · Fonte primária
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Primeiro os documentos
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Atas, processos, notas oficiais, laudos, páginas institucionais
                e registros contemporâneos têm prioridade na reconstrução de
                datas, decisões e responsabilidades.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/12 bg-white/[0.06] p-7">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-200">
                02 · Memória crítica
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Depoimento não é laudo
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Relatos de pesquisadores, tripulantes e gestores são
                fundamentais, mas devem ser identificados como testemunhos e
                confrontados com documentação quando tratam de causas,
                responsabilidades ou números.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/12 bg-white/[0.06] p-7">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-100">
                03 · História aberta
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                A página pode mudar
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Novos documentos, acervos e decisões oficiais devem ser
                incorporados com data de atualização. O memorial funciona
                melhor como arquivo vivo do que como texto congelado.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}