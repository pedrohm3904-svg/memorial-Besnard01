import { useMemo, useState } from "react";

const fontes = [
  {
    id: "cruzeiros",
    tipo: "Catálogo institucional",
    instituicao: "Instituto Oceanográfico da USP",
    titulo: "Cruzeiros e Projetos — N/Oc Prof. W. Besnard",
    descricao:
      "Base institucional que reúne os cruzeiros do Besnard e contextualiza os principais programas científicos desenvolvidos com a embarcação.",
    url: "/documentos/cruzeiros-oceanograficos-besnard.pdf",
  },
  {
    id: "fisica-io",
    tipo: "Síntese científica institucional",
    instituicao: "Instituto Oceanográfico da USP",
    titulo: "Brazil Report on Physical Oceanography",
    descricao:
      "Retrospectiva da Oceanografia Física no IOUSP, incluindo FGGE, projetos integrados, COROAS, REVIZEE, DEPROAS e a contribuição do Besnard.",
    url: "https://www.mares.io.usp.br/aagn/aagn11/iapsoreport.html",
  },
  {
    id: "fapesp-adeus",
    tipo: "Memória científica",
    instituicao: "Pesquisa FAPESP",
    titulo: "O adeus ao Prof. Besnard",
    descricao:
      "Registra a dimensão científica do navio, os 68 diários de bordo, objetos preservados e cerca de 50 mil amostras biológicas associadas às viagens.",
    url: "https://revistapesquisa.fapesp.br/o-adeus-ao-prof-besnard/",
  },
  {
    id: "colbio",
    tipo: "Acervo científico",
    instituicao: "Instituto Oceanográfico da USP",
    titulo: "Coleção Biológica Prof. Edmundo F. Nonato — ColBIO",
    descricao:
      "Coleção que preserva material biológico e informações ambientais provenientes de décadas de pesquisa oceanográfica.",
    url: "https://www.io.usp.br/colecao-biologica/",
  },
  {
    id: "revizee-mma",
    tipo: "Programa nacional",
    instituicao: "Ministério do Meio Ambiente",
    titulo: "Programa REVIZEE",
    descricao:
      "Página oficial sobre a avaliação do potencial sustentável dos recursos vivos da Zona Econômica Exclusiva brasileira.",
    url: "https://www.gov.br/mma/pt-br/assuntos/biodiversidade-e-biomas/biomas-e-ecossistemas/ecossistemas-costeiros-e-marinhos/programa-revizee",
  },
  {
    id: "psrm",
    tipo: "Política pública do mar",
    instituicao: "Comissão Interministerial para os Recursos do Mar",
    titulo: "Plano Setorial para os Recursos do Mar",
    descricao:
      "Contextualiza o PSRM como instrumento de coordenação da pesquisa e do uso sustentável dos recursos marinhos brasileiros.",
    url: "https://www.marinha.mil.br/secirm/pt-br/psrm/sobre",
  },
  {
    id: "opiss",
    tipo: "Divulgação científica",
    instituicao: "Pesquisa FAPESP",
    titulo: "O mar de São Sebastião",
    descricao:
      "Apresenta resultados e a abordagem integrada dos estudos oceanográficos na plataforma interna de São Sebastião.",
    url: "https://revistapesquisa.fapesp.br/o-mar-de-sao-sebastiao/",
  },
];

const numeros = [
  ["263", "registros datados no catálogo histórico usado nesta página"],
  ["1967–2006", "intervalo coberto pelo arquivo de cruzeiros"],
  ["68", "diários de bordo preservados e catalogados pelo IOUSP em 2016"],
  ["≈ 50 mil", "amostras biológicas associadas às viagens, estimadas em 2016"],
];

const fluxoCientifico = [
  {
    n: "01",
    titulo: "Perguntar",
    texto:
      "Todo cruzeiro começa em terra: uma hipótese, uma região, um processo ou um organismo que precisa ser observado no mar.",
  },
  {
    n: "02",
    titulo: "Desenhar a amostragem",
    texto:
      "Definem-se transectos, estações, profundidades, horários, instrumentos, réplicas e o tipo de material que será coletado.",
  },
  {
    n: "03",
    titulo: "Navegar e posicionar",
    texto:
      "O navio transforma coordenadas planejadas em locais reais de observação, repetidos ao longo de dias, estações do ano ou anos.",
  },
  {
    n: "04",
    titulo: "Medir e coletar",
    texto:
      "Água, plâncton, bentos, peixes, sedimentos, correntes, temperatura, salinidade, profundidade e outras variáveis são observadas em conjunto.",
  },
  {
    n: "05",
    titulo: "Registrar",
    texto:
      "Diários, fichas de estação e registros instrumentais conectam cada amostra ao lugar, horário, método e contexto em que foi obtida.",
  },
  {
    n: "06",
    titulo: "Analisar",
    texto:
      "De volta aos laboratórios, amostras e séries de dados são processadas, comparadas e integradas entre diferentes áreas da Oceanografia.",
  },
  {
    n: "07",
    titulo: "Preservar",
    texto:
      "Parte do material entra em coleções, arquivos e bancos de dados, permitindo perguntas que nem existiam quando a coleta foi realizada.",
  },
  {
    n: "08",
    titulo: "Publicar e reusar",
    texto:
      "Artigos, teses e novos projetos podem nascer anos ou décadas depois. O fim de um cruzeiro não é o fim da vida científica de seus dados.",
  },
];

const areas = [
  {
    titulo: "Oceanografia Física",
    simbolo: "↝",
    texto:
      "Investiga a dinâmica do oceano: correntes, massas d'água, temperatura, salinidade, marés, ondas, mistura, ressurgência e transporte. No Besnard, essa dimensão aparece de COBRA e hidrodinâmica a COROAS, TRANSCOBRA e DEPROAS.",
  },
  {
    titulo: "Oceanografia Química",
    simbolo: "⚗",
    texto:
      "Observa nutrientes, gases, matéria orgânica, propriedades químicas da água e contaminantes. Projetos integrados e o ECOSAN mostram como química, circulação e impactos costeiros precisam ser analisados juntos.",
  },
  {
    titulo: "Oceanografia Biológica",
    simbolo: "◌",
    texto:
      "Estuda organismos e processos ecológicos: plâncton, bentos, peixes, ovos e larvas, produtividade, cadeias tróficas e recursos vivos. GEDIP, FAUNEC, REVIZEE e várias campanhas de sardinha são exemplos marcantes.",
  },
  {
    titulo: "Oceanografia Geológica",
    simbolo: "◇",
    texto:
      "Investiga sedimentos, formas do fundo, margens continentais e história ambiental registrada no substrato marinho. O REMAC é um dos exemplos mais expressivos dessa atuação.",
  },
  {
    titulo: "Oceanografia Integrada",
    simbolo: "∞",
    texto:
      "O oceano não separa Física, Química, Biologia e Geologia. Projetos como Integrado, OPISS, DEPROAS e ECOSAN usaram o navio justamente para observar processos acoplados no mesmo espaço e tempo.",
  },
];

const projetos = [
  {
    id: "vikindio",
    sigla: "VIKINDIO",
    periodo: "1967",
    titulo: "A primeira viagem já era um experimento científico",
    categoria: "Fundação",
    cor: "cyan",
    fontes: ["cruzeiros"],
    resumo:
      "A travessia que trouxe o Besnard da Noruega ao Brasil foi convertida em campanha científica internacional.",
    texto: [
      "VIKINDIO sintetiza a ambição original do navio: não ser apenas transporte, mas plataforma de observação. Durante a viagem entre Bergen e Santos, equipes brasileiras e norueguesas realizaram trabalhos de hidrografia, plâncton, bentos, água do mar e prospecção de peixes.",
      "O catálogo registra etapas entre Bergen, Ilhas Shetland, Las Palmas, Dakar, Recife, Vitória e Santos, seguidas ainda em 1967 por campanhas à Ilha da Trindade e ao largo de Santos. A embarcação, portanto, começou a produzir dados antes mesmo de chegar à sua base brasileira.",
      "VIKINDIO também é um bom exemplo de como um cruzeiro oceanográfico pode combinar navegação de transferência, formação de equipes, comparação de métodos e observação científica em grande escala.",
    ],
    importancia:
      "Marca a entrada do Brasil em uma nova fase de pesquisa oceânica autônoma e demonstra, desde a primeira viagem, o caráter internacional e multidisciplinar do Besnard.",
    termos: ["hidrografia", "plâncton", "bentos", "Atlântico", "primeira viagem"],
  },
  {
    id: "gedip",
    sigla: "GEDIP I e II",
    periodo: "1968–1973",
    titulo: "Oceanografia aplicada ao conhecimento dos recursos pesqueiros",
    categoria: "Recursos vivos",
    cor: "emerald",
    fontes: ["cruzeiros"],
    resumo:
      "Programa de pesquisa oceanográfica e pesqueira no Atlântico Sul, associado ao desenvolvimento da pesca no Rio Grande do Sul.",
    texto: [
      "O GEDIP foi uma das primeiras grandes utilizações continuadas do Besnard depois de VIKINDIO. O trabalho concentrou-se no Atlântico Sul, especialmente na faixa entre o sul do Brasil e o Uruguai, articulando levantamento pesqueiro e descrição oceanográfica do ambiente.",
      "A lógica era moderna para a época: avaliar recursos pesqueiros não apenas contando peixes, mas relacionando sua ocorrência às características físicas e biológicas da plataforma. Isso exigia séries de estações, coleta de organismos, informações hidrográficas e repetição de campanhas.",
      "O catálogo registra seis cruzeiros do GEDIP I em 1968–1969 e quatro cruzeiros numerados do GEDIP II em 1972, além de uma complementação em 1973. A documentação institucional do IOUSP descreve GEDIP I e II como um programa importante para o planejamento pesqueiro regional.",
    ],
    importancia:
      "Ajudou a consolidar a integração entre oceanografia e pesca e criou experiência institucional que seria retomada depois em levantamentos como FAUNEC e, em escala nacional, REVIZEE.",
    termos: ["pesca", "recursos vivos", "Atlântico Sul", "Rio Grande do Sul", "Uruguai"],
  },
  {
    id: "faunec",
    sigla: "FAUNEC",
    periodo: "1975",
    titulo: "Fauna nectônica da plataforma continental",
    categoria: "Recursos vivos",
    cor: "emerald",
    fontes: ["cruzeiros"],
    resumo:
      "Campanhas extensas de fauna nectônica entre Cabo Frio e o Chuí, retomando a lógica de levantamento pesqueiro em ampla faixa da plataforma.",
    texto: [
      "FAUNEC aparece no catálogo em quatro campanhas realizadas em 1975, cobrindo uma faixa extraordinariamente extensa da plataforma continental brasileira, de Cabo Frio ao Chuí.",
      "A própria memória institucional do IOUSP relaciona essa iniciativa à experiência anterior do GEDIP: estudar de forma sistemática organismos nectônicos e recursos potenciais dentro de uma leitura oceanográfica do ambiente.",
      "Em retrospecto, FAUNEC ajuda a mostrar uma continuidade metodológica: levantamentos regionais de fauna, pesca e ambiente foram ampliando a capacidade brasileira de inventariar seus recursos marinhos, caminho que décadas depois desembocaria no REVIZEE.",
    ],
    importancia:
      "É um elo entre os primeiros levantamentos pesqueiros regionais e a futura avaliação nacional dos recursos vivos da Zona Econômica Exclusiva.",
    termos: ["necton", "peixes", "plataforma", "Cabo Frio", "Chuí"],
  },
  {
    id: "remac",
    sigla: "REMAC",
    periodo: "1972–1974",
    titulo: "Reconhecimento da margem continental brasileira",
    categoria: "Geologia e geofísica",
    cor: "yellow",
    fontes: ["cruzeiros", "fisica-io"],
    resumo:
      "Um dos grandes esforços de reconhecimento geológico e geofísico da margem continental do país.",
    texto: [
      "REMAC — Reconhecimento Global da Margem Continental Brasileira — levou o Besnard para muito além da costa sudeste. As etapas do catálogo percorrem trechos sucessivos entre Santos, Rio Grande, Vitória, Salvador, Fortaleza, Belém, a região amazônica, Recife e Rio de Janeiro.",
      "O programa reuniu oceanografia, geologia e geofísica com interesse científico e estratégico: produzir conhecimento sobre a forma e a estrutura da margem continental, sedimentação e potencial de recursos do subsolo marinho.",
      "A reconstrução institucional associa o REMAC à Petrobras e a órgãos brasileiros ligados a recursos minerais e pesquisa, além de cooperação internacional. O Besnard funcionou como plataforma para uma leitura do fundo oceânico em escala quase continental.",
    ],
    importancia:
      "Contribuiu para a cartografia e o conhecimento geológico da margem brasileira em uma fase decisiva da exploração científica e econômica do mar profundo.",
    termos: ["margem continental", "geologia", "geofísica", "Petrobras", "sedimentos"],
  },
  {
    id: "ciencias-mar",
    sigla: "Ciências do Mar / OEA",
    periodo: "década de 1970",
    titulo: "Cooperação multinacional e construção de capacidade científica",
    categoria: "Cooperação internacional",
    cor: "cyan",
    fontes: ["cruzeiros"],
    resumo:
      "Projeto multinacional apoiado pela Organização dos Estados Americanos que sustentou pesquisa, formação e aquisição de equipamentos.",
    texto: [
      "O Projeto Multinacional de Ciências do Mar inseriu o Besnard em um programa internacional de longa duração, apoiado pela Organização dos Estados Americanos. A embarcação serviu a diferentes frentes de investigação e ajudou a ampliar a infraestrutura instrumental disponível.",
      "A importância desse programa está menos em uma única pergunta científica e mais na criação de capacidade: pesquisadores, equipamentos, protocolos, intercâmbios e cruzeiros que alimentaram diferentes linhas de Oceanografia.",
      "O catálogo traz explicitamente uma campanha 'Projeto OEA' em 1976, mas a documentação institucional descreve o programa em escala mais ampla. Isso lembra que os nomes registrados nos diários de bordo nem sempre coincidem perfeitamente com a estrutura administrativa maior de um programa.",
    ],
    importancia:
      "Fortaleceu a internacionalização do IOUSP e a infraestrutura necessária para programas oceanográficos mais complexos nas décadas seguintes.",
    termos: ["OEA", "internacional", "equipamentos", "cooperação", "formação"],
  },
  {
    id: "integrado-finep",
    sigla: "FINEP / Projeto Integrado",
    periodo: "1976–1983",
    titulo: "Uso e exploração racional do ambiente marinho",
    categoria: "Interdisciplinar",
    cor: "emerald",
    fontes: ["fisica-io", "cruzeiros"],
    resumo:
      "Programa integrado que ampliou observações sistemáticas da plataforma sudeste-sul e articulou processos físicos com outras dimensões do ambiente.",
    texto: [
      "Entre meados dos anos 1970 e o início dos anos 1980, o Besnard aparece repetidamente em campanhas identificadas como FINEP e em estudos de hidrodinâmica. A retrospectiva científica do IOUSP associa esse período ao Projeto Integrado para Uso e Exploração Racional do Ambiente Marinho.",
      "A área coberta se estendia aproximadamente de Cabo Frio a Cabo de Santa Marta. Correntes, nível do mar, temperatura, salinidade e meteorologia de superfície passaram a ser medidos de forma mais sistemática, criando uma base para compreender a plataforma como sistema e não como soma de pontos isolados.",
      "É importante distinguir este programa de outro 'Projeto Integrado' que aparece no catálogo a partir de 1985, ligado à investigação do ecossistema costeiro paulista. A semelhança dos nomes pode induzir a uma falsa continuidade administrativa; por isso o memorial os apresenta separadamente.",
    ],
    importancia:
      "Ajudou a transformar observações pontuais em séries integradas sobre circulação e ecossistemas da plataforma continental.",
    termos: ["FINEP", "hidrodinâmica", "plataforma", "Cabo Frio", "Santa Marta"],
  },
  {
    id: "fgge",
    sigla: "FGGE / GARP",
    periodo: "1979",
    titulo: "O Besnard em um experimento global oceano-atmosfera",
    categoria: "Clima e Oceanografia Física",
    cor: "cyan",
    fontes: ["fisica-io", "cruzeiros"],
    resumo:
      "Participação brasileira no First GARP Global Experiment, esforço internacional para observar atmosfera e oceanos em escala planetária.",
    texto: [
      "Em 1979, o catálogo registra duas longas campanhas no Atlântico Equatorial associadas a FGGE/GARP. FGGE significa First Global GARP Experiment, uma experiência internacional concebida para observar simultaneamente atmosfera e oceano em escala global.",
      "Para a Oceanografia Física brasileira, participar desse tipo de programa significava operar dentro de redes internacionais de observação: navios, estações meteorológicas, sondagens e, cada vez mais, dados de satélite.",
      "A retrospectiva do IOUSP destaca a participação do Besnard no FGGE como um momento em que medições brasileiras se integraram a uma campanha de alcance mundial. Isso também estimulou instrumentação e observações no Atlântico Equatorial.",
    ],
    importancia:
      "Colocou o navio dentro de uma das grandes experiências internacionais de observação do sistema oceano-atmosfera do século XX.",
    termos: ["FGGE", "GARP", "clima", "Atlântico Equatorial", "oceano-atmosfera"],
  },
  {
    id: "proantar",
    sigla: "PROANTAR",
    periodo: "1982–1988",
    titulo: "Ciência brasileira na Antártica",
    categoria: "Polar",
    cor: "cyan",
    fontes: ["cruzeiros", "fisica-io"],
    resumo:
      "Seis campanhas ligaram o Besnard à implantação da presença científica brasileira no continente antártico.",
    texto: [
      "O Besnard participou das seis primeiras fases antárticas registradas no catálogo entre 1982 e 1988. A embarcação universitária operou ao lado da estrutura logística do Programa Antártico Brasileiro, levando equipes e pesquisa para uma região onde o Brasil ainda construía experiência científica e operacional.",
      "As campanhas polares não se resumiam à presença simbólica. A Oceanografia Física dava suporte à compreensão das águas e à pesquisa biológica; outras áreas coletavam material e observavam ecossistemas que exigiam integração entre logística, navegação e ciência.",
      "A participação no PROANTAR tornou o navio um elo entre a oceanografia universitária paulista e uma política científica nacional de longo prazo. Em 1988, uma grave avaria no eixo da hélice durante a viagem marcou o encerramento da atuação antártica do Besnard.",
    ],
    importancia:
      "Ajudou a estabelecer a experiência brasileira de pesquisa polar e conecta diretamente o navio à consolidação do PROANTAR.",
    termos: ["Antártica", "PROANTAR", "polar", "Brasil", "ecossistemas"],
  },
  {
    id: "transcobra",
    sigla: "TRANSCOBRA",
    periodo: "1982–1987",
    titulo: "Medindo o transporte da Corrente do Brasil",
    categoria: "Oceanografia Física",
    cor: "cyan",
    fontes: ["cruzeiros", "fisica-io"],
    resumo:
      "Campanhas voltadas à estrutura e ao transporte da Corrente do Brasil e de sistemas de circulação associados.",
    texto: [
      "TRANSCOBRA é uma abreviação usada para campanhas de transporte da Corrente do Brasil. O catálogo registra viagens em 1982, duas em 1985 e outra em 1987, incluindo operações no litoral paulista e no Rio Grande do Sul.",
      "A pergunta central da Oceanografia Física era compreender quanto e como as águas são transportadas pelas correntes de contorno oeste do Atlântico Sul, sua estrutura vertical e suas interações com massas d'água intermediárias.",
      "Essas observações são difíceis de obter a partir da costa: exigem perfis no oceano, instrumentos de corrente e repetição espacial. Séries históricas desse tipo foram posteriormente reutilizadas em estudos da estrutura da Corrente do Brasil.",
    ],
    importancia:
      "Contribuiu para a construção de observações diretas da circulação do Atlântico Sul ocidental e alimentou trabalhos posteriores sobre correntes de contorno.",
    termos: ["Corrente do Brasil", "transporte", "correntes", "Atlântico Sul"],
  },
  {
    id: "integrado-ubatuba",
    sigla: "Projeto Integrado / PSRM",
    periodo: "1985–1990",
    titulo: "O ecossistema costeiro de Ubatuba como sistema integrado",
    categoria: "Interdisciplinar",
    cor: "emerald",
    fontes: ["psrm", "cruzeiros", "fisica-io"],
    resumo:
      "Campanhas multidisciplinares buscaram entender a estrutura e o funcionamento do ecossistema da plataforma costeira paulista.",
    texto: [
      "A partir de 1985, o catálogo passa a registrar repetidamente viagens chamadas INTEGRADO. Elas se relacionam à fase em que diferentes grupos do IOUSP procuravam compreender o ecossistema costeiro de Ubatuba e a plataforma paulista como uma unidade física, química, geológica e biológica.",
      "O interesse era perceber como circulação, massas d'água, nutrientes, produtividade, plâncton, bentos, peixes e sedimentos se conectavam. Em vez de cada área ir ao mar em momentos independentes, a embarcação permitia observar diferentes componentes do ecossistema em campanhas coordenadas.",
      "Esse tipo de desenho representa bem a lógica do Plano Setorial para os Recursos do Mar: produzir conhecimento integrado que desse suporte tanto à ciência básica quanto ao uso racional de ambientes e recursos marinhos.",
    ],
    importancia:
      "Ajudou a consolidar uma tradição de Oceanografia interdisciplinar no litoral paulista, que reapareceria em OPISS, DEPROAS e ECOSAN.",
    termos: ["Ubatuba", "integrado", "PSRM", "ecossistema", "interdisciplinar"],
  },
  {
    id: "equant",
    sigla: "EQUANT I e II",
    periodo: "1987–1988",
    titulo: "Geofísica na margem equatorial brasileira",
    categoria: "Geologia e geofísica",
    cor: "yellow",
    fontes: ["cruzeiros"],
    resumo:
      "Campanhas longas no Norte e Nordeste produziram observações geofísicas e oceanográficas na margem equatorial.",
    texto: [
      "EQUANT aparece no catálogo em duas grandes campanhas: uma em 1987, associada aos litorais do Rio Grande do Norte e Ceará, e outra em 1988 no litoral Norte.",
      "Trabalhos acadêmicos posteriores identificam EQUANT I como campanha do Atlântico Equatorial em que foram obtidos perfis gravimétricos e magnéticos ao longo da margem equatorial brasileira. Esses dados ajudam a interpretar estrutura crustal, feições geológicas e evolução da margem.",
      "Para o memorial, EQUANT é importante porque amplia a imagem geográfica do Besnard: embora a plataforma sudeste tenha sido sua região mais frequente, o navio também serviu a levantamentos extensos no Norte e Nordeste.",
    ],
    importancia:
      "Integra o Besnard à produção de dados geofísicos sobre uma das margens continentais mais complexas do território brasileiro.",
    termos: ["Equatorial", "geofísica", "gravimetria", "magnetometria", "Norte"],
  },
  {
    id: "coroas",
    sigla: "COROAS / WOCE",
    periodo: "1992–1998",
    titulo: "Circulação do oeste do Atlântico Sul",
    categoria: "Oceanografia Física",
    cor: "cyan",
    fontes: ["cruzeiros", "fisica-io"],
    resumo:
      "Programa dedicado à Corrente do Brasil, circulação regional, transporte de calor e massa e conexão brasileira com o WOCE.",
    texto: [
      "COROAS — Circulação Oceânica da Região Oeste do Atlântico Sul — foi um dos programas mais ambiciosos de Oceanografia Física associados ao Besnard. O catálogo registra uma sequência densa de campanhas entre 1992 e 1994 e novas operações na segunda metade da década.",
      "A intenção era caracterizar campos de velocidade e propriedades das águas, estudar a Corrente do Brasil e massas d'água associadas e compreender transportes de calor e massa. Algumas campanhas aparecem vinculadas ao WOCE e à cooperação com Kiel, inserindo observações brasileiras no World Ocean Circulation Experiment.",
      "COROAS também se cruzou com outros programas: o catálogo possui viagens COROAS/OPISS e OPISS/COROAS. Essas sobreposições mostram que um mesmo tempo de navio podia responder simultaneamente a perguntas regionais e de circulação de maior escala.",
    ],
    importancia:
      "Conectou séries brasileiras sobre a circulação do Atlântico Sul a um esforço internacional de compreensão da circulação global do oceano.",
    termos: ["COROAS", "WOCE", "Corrente do Brasil", "circulação", "Kiel"],
  },
  {
    id: "opiss",
    sigla: "OPISS",
    periodo: "1994 e 1997",
    titulo: "Oceanografia da Plataforma Interna de São Sebastião",
    categoria: "Interdisciplinar",
    cor: "emerald",
    fontes: ["opiss", "cruzeiros"],
    resumo:
      "Um estudo integrado da plataforma interna no entorno de São Sebastião, onde ilha, canal e oceano aberto criam uma dinâmica particular.",
    texto: [
      "OPISS investigou a Oceanografia da Plataforma Interna de São Sebastião. A Ilha de São Sebastião funciona como barreira e reorganiza circulação, estratificação, transporte e distribuição dos organismos. Era, portanto, um laboratório natural para estudar como processos físicos se traduzem em respostas químicas e biológicas.",
      "O catálogo registra cruzeiros em fevereiro e março de 1994 e uma sequência de etapas em setembro e outubro de 1997, com diferentes pesquisadores-chefes. Um dos levantamentos de 1994 utilizou dezenas de estações distribuídas em transectos, exemplificando a resolução espacial necessária para descrever aquele sistema.",
      "O próprio desenho em etapas — Física, produção, plâncton, bentos e outras abordagens — evidencia que OPISS não era uma viagem isolada, mas uma investigação ecossistêmica coordenada.",
    ],
    importancia:
      "Produziu uma das descrições integradas mais detalhadas da plataforma interna paulista e ajudou a formar um modelo de estudo regional interdisciplinar.",
    termos: ["São Sebastião", "plataforma interna", "circulação", "plâncton", "bentos"],
  },
  {
    id: "padct",
    sigla: "PADCT",
    periodo: "1997–2001",
    titulo: "A quebra da plataforma e a transição para o oceano profundo",
    categoria: "Interdisciplinar",
    cor: "yellow",
    fontes: ["cruzeiros"],
    resumo:
      "Levantamentos multidisciplinares examinaram recursos e estrutura oceanográfica na quebra da plataforma do Sudeste.",
    texto: [
      "O PADCT associado ao Besnard investigou a quebra da plataforma continental, zona de transição em que a plataforma rasa mergulha para o talude e onde circulação, topografia e ecossistemas podem mudar rapidamente.",
      "A documentação institucional descreve um levantamento de recursos vivos e não vivos e da estrutura tridimensional do ambiente entre Cabo Frio e Cabo de Santa Marta. As campanhas reuniam diferentes especialidades para relacionar hidrografia, produtividade e características do fundo.",
      "Resultados obtidos na região de Cabo Frio também dialogaram com a futura organização do REVIZEE no Sul e Sudeste, mostrando novamente que os programas não são ilhas: cada geração de campanhas prepara perguntas e métodos para a seguinte.",
    ],
    importancia:
      "Ajudou a conectar a plataforma continental ao talude e forneceu base científica para programas de avaliação de recursos em escala maior.",
    termos: ["quebra da plataforma", "talude", "recursos", "Cabo Frio", "Santa Marta"],
  },
  {
    id: "revizee",
    sigla: "REVIZEE",
    periodo: "1997–1998 no Besnard",
    titulo: "Quanto o Brasil realmente conhecia de sua Zona Econômica Exclusiva?",
    categoria: "Recursos vivos e soberania",
    cor: "emerald",
    fontes: ["revizee-mma", "cruzeiros"],
    resumo:
      "Programa nacional para inventariar recursos vivos da ZEE e estimar bases científicas para seu aproveitamento sustentável.",
    texto: [
      "REVIZEE significa Avaliação do Potencial Sustentável de Recursos Vivos na Zona Econômica Exclusiva. O programa surgiu no contexto em que o Brasil precisava conhecer melhor os recursos biológicos existentes na área marítima sobre a qual exerce direitos de exploração segundo o Direito do Mar.",
      "Isso exigia muito mais que localizar cardumes. Era necessário descrever distribuição, abundância, ambientes, fundo, relações oceanográficas e limites de exploração sustentável. O esforço mobilizou dezenas de laboratórios e instituições em diferentes regiões do país.",
      "No Besnard, o catálogo registra dez campanhas entre dezembro de 1997 e abril de 1998, cobrindo São Paulo, Rio de Janeiro, Paraná, Santa Catarina e Rio Grande do Sul. A documentação institucional menciona levantamentos batimétricos, amostras de fundo e respostas acústicas, entre outras atividades.",
    ],
    importancia:
      "Transformou conhecimento oceanográfico em base para soberania, gestão e uso sustentável da ZEE brasileira, conectando ciência de campo a política pública.",
    termos: ["REVIZEE", "ZEE", "recursos vivos", "sustentabilidade", "soberania"],
  },
  {
    id: "deproas",
    sigla: "DEPROAS",
    periodo: "2001–2004",
    titulo: "Ressurgência, ACAS e a dinâmica do ecossistema da plataforma",
    categoria: "Interdisciplinar",
    cor: "cyan",
    fontes: ["cruzeiros", "fisica-io"],
    resumo:
      "Um programa de alta intensidade observacional para entender como processos físicos controlam a entrada de água fria e rica em nutrientes e reorganizam o ecossistema.",
    texto: [
      "DEPROAS — Dinâmica do Ecossistema de Plataforma da Região Oeste do Atlântico Sul — investigou os mecanismos físicos que permitem a penetração sazonal da Água Central do Atlântico Sul, a ACAS, sobre a plataforma sudeste, especialmente no sistema Cabo Frio–Ubatuba.",
      "A importância ecológica é direta: quando águas mais frias e ricas em nutrientes alcançam regiões rasas ou ressurgem, elas alteram disponibilidade de nutrientes, produtividade primária, plâncton, bentos e transferência de energia pela teia alimentar.",
      "Por isso o projeto não se limitava à hidrografia. O catálogo mostra etapas de fundeios, recuperação de fundeios, trofodinâmica, sediment traps, mesoescala e campanhas com diferentes pesquisadores-chefes. A documentação institucional atribui dezenas de cruzeiros do Besnard ao programa.",
      "DEPROAS é um exemplo particularmente claro de Oceanografia moderna: observar simultaneamente força física, resposta biológica e transporte de matéria para entender um ecossistema como processo.",
    ],
    importancia:
      "Produziu uma visão integrada de ressurgência, circulação de plataforma e ecossistema no Sudeste e inseriu o IOUSP em redes internacionais de estudo de dinâmica de populações marinhas.",
    termos: ["DEPROAS", "ACAS", "ressurgência", "Cabo Frio", "Ubatuba", "trofodinâmica"],
  },
  {
    id: "ecosan",
    sigla: "ECOSAN",
    periodo: "2005–2006 no Besnard",
    titulo: "Da Baixada Santista para a plataforma adjacente",
    categoria: "Impactos costeiros",
    cor: "yellow",
    fontes: ["cruzeiros"],
    resumo:
      "O último grande programa operacional do Besnard investigou como o complexo estuarino santista influencia o ecossistema da plataforma.",
    texto: [
      "ECOSAN — A influência do Complexo Estuarino da Baixada Santista sobre o Ecossistema da Plataforma Adjacente — desloca o foco para uma pergunta ambiental muito contemporânea: o que acontece quando materiais, nutrientes e contaminantes exportados por um grande sistema urbano-estuarino alcançam o mar costeiro?",
      "As campanhas do Besnard entre 2005 e abril de 2006 mostram a interdisciplinaridade do programa de maneira quase didática. O catálogo registra fundeios, plataforma-bentos, trofodinâmica, hidrografia, radiometria, prospecção de plumas e recuperação de instrumentos, cobrindo a faixa entre São Sebastião e Peruíbe.",
      "O projeto buscava relacionar circulação e dispersão às respostas do ecossistema e à distribuição de contaminantes. Isso exigia saber não apenas 'quanto há' de uma substância ou organismo, mas para onde a água se move, onde partículas se depositam e como comunidades biológicas respondem.",
      "A última atividade científica registrada no catálogo histórico do Besnard é justamente uma recuperação de fundeios do ECOSAN, entre 17 e 20 de abril de 2006.",
    ],
    importancia:
      "Fecha a carreira científica do navio com uma pergunta que une oceanografia, poluição, ecossistemas e gestão costeira — temas centrais das Ciências do Mar atuais.",
    termos: ["ECOSAN", "Baixada Santista", "contaminantes", "plumas", "bentos", "hidrografia"],
  },
];

const regioes = [
  {
    titulo: "Sudeste brasileiro",
    texto:
      "A região mais intensamente revisitada: Santos, São Sebastião, Ubatuba e Cabo Frio aparecem repetidamente em séries sobre circulação, ecossistemas, pesca e impactos costeiros.",
    projetos: ["OPISS", "COROAS", "DEPROAS", "ECOSAN", "INTEGRADO"],
  },
  {
    titulo: "Sul do Brasil",
    texto:
      "GEDIP, FAUNEC, REMAC, PADCT e REVIZEE levaram o Besnard da plataforma paulista até Santa Catarina, Rio Grande do Sul, Chuí e águas próximas ao Uruguai.",
    projetos: ["GEDIP", "FAUNEC", "REMAC", "PADCT", "REVIZEE"],
  },
  {
    titulo: "Norte e Nordeste",
    texto:
      "REMAC percorreu a margem até Belém e a região amazônica; EQUANT investigou a margem equatorial; outras campanhas alcançaram Penedos de São Pedro e São Paulo.",
    projetos: ["REMAC", "EQUANT", "São Pedro e São Paulo"],
  },
  {
    titulo: "Atlântico Equatorial",
    texto:
      "Campanhas como FGGE/GARP colocaram o navio em redes de observação do sistema oceano-atmosfera de escala internacional.",
    projetos: ["FGGE / GARP", "EQUANT"],
  },
  {
    titulo: "Antártica",
    texto:
      "Seis campanhas do PROANTAR conectaram a pesquisa universitária a um dos maiores projetos científicos e geopolíticos brasileiros no mar.",
    projetos: ["PROANTAR I–VI"],
  },
];

const cruzeiros = [
  {
    "atividade": "VIKINDIO I - CRUZEIRO",
    "periodo": "31/05 a 03/06/1967",
    "pesquisador": "Thor Kvinge",
    "regiao": "Atlântico Norte e Sul",
    "ano": 1967
  },
  {
    "atividade": "VIKINDIO I - BERGEN X LAS PALMAS",
    "periodo": "10 a 18/06/1967",
    "pesquisador": "Turpins",
    "regiao": "Atlântico Norte",
    "ano": 1967
  },
  {
    "atividade": "VIKINDIO I - LAS PALMAS X DAKAR",
    "periodo": "23 a 30/06/1967",
    "pesquisador": "Lars Sudmann Midttun",
    "regiao": "Atlântico Leste",
    "ano": 1967
  },
  {
    "atividade": "VIKINDIO I - DAKAR X LAS PALMAS",
    "periodo": "02 a 10/07/1967",
    "pesquisador": "Lars Sudmann Midttun",
    "regiao": "Atlântico Leste",
    "ano": 1967
  },
  {
    "atividade": "VIKINDIO II - LAS PALMAS X RECIFE",
    "periodo": "13 a 21/07/1967",
    "pesquisador": "Magnus Haughe",
    "regiao": "Atlântico Tropical",
    "ano": 1967
  },
  {
    "atividade": "VIKINDIO II - RECIFE X VITÓRIA",
    "periodo": "25/07 a 06/08/1967",
    "pesquisador": "Luiz Bruner de Miranda",
    "regiao": "Atlântico Leste",
    "ano": 1967
  },
  {
    "atividade": "VIKINDIO II - VITORIA X SANTOS",
    "periodo": "07 a 09/08/1967",
    "pesquisador": "Luiz Bruner de Miranda",
    "regiao": "Atlântico Sudeste",
    "ano": 1967
  },
  {
    "atividade": "VIKINDIO II - ILHA DA TRINDADE",
    "periodo": "21/09 a 22/10/1967",
    "pesquisador": "Odd Henrik Saelem",
    "regiao": "Atlântico Leste",
    "ano": 1967
  },
  {
    "atividade": "VIKINDIO II - LARGO DE SANTOS",
    "periodo": "18 a 22/12/1967",
    "pesquisador": "Argeo Maglioca",
    "regiao": "Litoral de São Paulo",
    "ano": 1967
  },
  {
    "atividade": "LARGO DE SANTOS",
    "periodo": "16 a 25/01/1968",
    "pesquisador": "Martha Vannucci",
    "regiao": "Litoral de São Paulo",
    "ano": 1968
  },
  {
    "atividade": "ILHA GRANDE",
    "periodo": "13 a 20/02/1968",
    "pesquisador": "Luiz Roberto Tommasi",
    "regiao": "Litoral de São Paulo",
    "ano": 1968
  },
  {
    "atividade": "GEDIP I - 1o CRUZEIRO",
    "periodo": "23/04 a 02/05/1968",
    "pesquisador": "Gelso Vazzoler",
    "regiao": "Atlântico Sul",
    "ano": 1968
  },
  {
    "atividade": "GEDIP I - 2o CRUZEIRO",
    "periodo": "19/06 a 02/07/1968",
    "pesquisador": "Motonaga lwai",
    "regiao": "Atlântico Sul",
    "ano": 1968
  },
  {
    "atividade": "VIAGEM N 2 DA FISICA",
    "periodo": "25 a 31/07/1968",
    "pesquisador": "Argeo Magliocca",
    "regiao": "Litoral de São Paulo",
    "ano": 1968
  },
  {
    "atividade": "GEDIP I - 3o CRUZEIRO",
    "periodo": "14 a 31/08/1968",
    "pesquisador": "Gelso Vazzoler",
    "regiao": "Atlântico Sul",
    "ano": 1968
  },
  {
    "atividade": "GEDIP I - 4o CRUZEIRO",
    "periodo": "23/10 a 08/11/1968",
    "pesquisador": "Motonaga Iwai",
    "regiao": "Atlântico Sul",
    "ano": 1968
  },
  {
    "atividade": "GEDIP I - 5o CRUZEIRO",
    "periodo": "02 a 17/12/1968",
    "pesquisador": "Motonaga lwai",
    "regiao": "Atlântico Sul",
    "ano": 1968
  },
  {
    "atividade": "CRUZEIRO CABO FRIO",
    "periodo": "16 a 22/01/1969",
    "pesquisador": "Argeo Magliocca",
    "regiao": "Litoral do Rio de Janeiro",
    "ano": 1969
  },
  {
    "atividade": "ADESTRAMENTO",
    "periodo": "03 a 04/02/1969",
    "pesquisador": "Luiz Roberto Tommasi",
    "regiao": "Litoral de São Paulo",
    "ano": 1969
  },
  {
    "atividade": "BENTOS II - PROGRAMA",
    "periodo": "06 a 13/02/1969",
    "pesquisador": "Plínio Soares Moreira",
    "regiao": "Litorais de São Paulo e Rio de Janeiro",
    "ano": 1969
  },
  {
    "atividade": "GEDIP I - 6o CRUZEIRO",
    "periodo": "03 a 26/03/1969",
    "pesquisador": "Motonaga lwai",
    "regiao": "Atlântico Sul",
    "ano": 1969
  },
  {
    "atividade": "VIAGEM N 3 DA FISICA",
    "periodo": "15 a 23/05/1969",
    "pesquisador": "Argeo Magliocca",
    "regiao": "de Cabo Frio (RJ) a Cabo de Santa Marta Grande (SC)",
    "ano": 1969
  },
  {
    "atividade": "PROJETO SERE",
    "periodo": "05 a 12/07/1969",
    "pesquisador": "Luiz Bruner de Miranda",
    "regiao": "Região de Cabo Frio (RJ)",
    "ano": 1969
  },
  {
    "atividade": "BENTOS - ILHA GRANDE",
    "periodo": "21 a 26/07/1969",
    "pesquisador": "Luiz Roberto Tommasi",
    "regiao": "Litoral de São Paulo",
    "ano": 1969
  },
  {
    "atividade": "ADESTRAMENTO",
    "periodo": "01 a 02/08/1969",
    "pesquisador": "Anna Emília Vazzoler",
    "regiao": "Litoral de São Paulo",
    "ano": 1969
  },
  {
    "atividade": "VIAGEM COSANTA LESTE",
    "periodo": "08 a 13/08/1969",
    "pesquisador": "Norivoshi Yamal!:uti",
    "regiao": "Litoral de São Paulo",
    "ano": 1969
  },
  {
    "atividade": "ESTUDO DA FAUNA DOS PEIXES E CAMARÕES",
    "periodo": "06 a 11/10/1969",
    "pesquisador": "Motonaga Iwai",
    "regiao": "Litoral de São Paulo",
    "ano": 1969
  },
  {
    "atividade": "ADESTRAMENTO",
    "periodo": "10/11/1969",
    "pesquisador": "Luiz Roberto Tommasi",
    "regiao": "Litoral de São Paulo",
    "ano": 1969
  },
  {
    "atividade": "SOL: SARDINHA, OVOS E LARVAS",
    "periodo": "20 a 26/11/1969",
    "pesquisador": "Yasunobu Matsuura",
    "regiao": "de Cabo Frio (RJ) a Cabo de Santa Marta Grande (SC)",
    "ano": 1969
  },
  {
    "atividade": "PRODUÇÃO MARINHA",
    "periodo": "10 a 18/12/1969",
    "pesquisador": "Vicente Maria Verrone",
    "regiao": "de Cabo Frio (RJ) a Cabo de Santa Marta Grande (SC)",
    "ano": 1969
  },
  {
    "atividade": "SOL - ISOT AN",
    "periodo": "05 a 17/01/1970",
    "pesquisador": "Plinio Soares Moreira",
    "regiao": "Litorais de São Paulo e Rio de Janeiro",
    "ano": 1970
  },
  {
    "atividade": "COBRA",
    "periodo": "27/01 a 05/02/1970",
    "pesquisador": "Luiz Bruner de Miranda",
    "regiao": "Litorais de São Paulo e Rio de Janeiro",
    "ano": 1970
  },
  {
    "atividade": "COBRA",
    "periodo": "20 a 30/04/1970",
    "pesquisador": "Luiz Bruner de Miranda",
    "regiao": "Litorais de São Paulo e Rio de Janeiro",
    "ano": 1970
  },
  {
    "atividade": "ISOTAN - DRAGA",
    "periodo": "06 a 13/05/1970",
    "pesquisador": "Plínio Soares Moreira",
    "regiao": "Litoral de São Paulo",
    "ano": 1970
  },
  {
    "atividade": "RCP - 1o CRUZEIRO",
    "periodo": "22/05 a 05/06/1970",
    "pesquisador": "Motonaga Iwai",
    "regiao": "Litorais de São Paulo e Rio de Janeiro",
    "ano": 1970
  },
  {
    "atividade": "ISOTAN - DRAGA",
    "periodo": "16 a 29/06/1970",
    "pesquisador": "Plínio Soares Moreira",
    "regiao": "Litoral de São Paulo",
    "ano": 1970
  },
  {
    "atividade": "COBRA",
    "periodo": "15 a 24/07/1970",
    "pesquisador": "Luiz Bruner de Miranda",
    "regiao": "Litorais de São Paulo e Rio de Janeiro",
    "ano": 1970
  },
  {
    "atividade": "RCP - 2o CRUZEIRO",
    "periodo": "05 a 19/08/1970",
    "pesquisador": "Motonaga Iwai",
    "regiao": "Litorais de São Paulo e Rio de Janeiro",
    "ano": 1970
  },
  {
    "atividade": "ISOTAN - DRAGA",
    "periodo": "01 a 09/09/1970",
    "pesquisador": "Plínio Soares Moreira",
    "regiao": "Litoral de São Paulo",
    "ano": 1970
  },
  {
    "atividade": "COBRA",
    "periodo": "05 a 12/11/1970",
    "pesquisador": "Argeo Magliocca",
    "regiao": "Litorais de São Paulo e Rio de Janeiro",
    "ano": 1970
  },
  {
    "atividade": "RCP - 3 CRUZEIRO",
    "periodo": "26/11 a 11/12/1970",
    "pesquisador": "Motonaga Iwai",
    "regiao": "Litorais de São Paulo e Rio de Janeiro",
    "ano": 1970
  },
  {
    "atividade": "SOL",
    "periodo": "15 a 22/01/1971",
    "pesquisador": "Gelso Vazzoler",
    "regiao": "Litoral de São Paulo",
    "ano": 1971
  },
  {
    "atividade": "COBRA",
    "periodo": "03 a 16/02/1971",
    "pesquisador": "Luiz Bruner de Miranda",
    "regiao": "Litorais de São Paulo e Rio de Janeiro",
    "ano": 1971
  },
  {
    "atividade": "RCP - 4o CRUZEIRO E SOL",
    "periodo": "26/02 a 13/03/1971",
    "pesquisador": "Motonaga Iwai",
    "regiao": "Litorais de São Paulo e Rio de Janeiro",
    "ano": 1971
  },
  {
    "atividade": "PLACO",
    "periodo": "20 a 27/03/1971",
    "pesquisador": "Frank Schaffer",
    "regiao": "Litoral de São Paulo",
    "ano": 1971
  },
  {
    "atividade": "OCEANOFAUNA",
    "periodo": "26/05 a 09/06/1971",
    "pesquisador": "Plínio Soares Moreira",
    "regiao": "Litorais do Rio de Janeiro e Rio Grande do Sul",
    "ano": 1971
  },
  {
    "atividade": "COBRA E SEREMAR",
    "periodo": "09 a 16/08/1971",
    "pesquisador": "Luiz Bruner de Miranda",
    "regiao": "Litoral do Rio de Janeiro",
    "ano": 1971
  },
  {
    "atividade": "SOL",
    "periodo": "10 a 19/12/1971",
    "pesquisador": "Yasunobu Matsuura",
    "regiao": "Litorais de São Paulo e Paraná",
    "ano": 1971
  },
  {
    "atividade": "GEDIP II - 1 CRUZEIRO",
    "periodo": "16/01 a 02/02/1972",
    "pesquisador": "Motonaga Iwai",
    "regiao": "Atlântico Sul",
    "ano": 1972
  },
  {
    "atividade": "GEDIP II - 2o CRUZEIRO",
    "periodo": "04 a 23/04/1972",
    "pesquisador": "Gelso Vazzoler",
    "regiao": "Atlântico Sul",
    "ano": 1972
  },
  {
    "atividade": "PROJETO RIO DOCE",
    "periodo": "03 a 17/07/1972",
    "pesquisador": "Frank R. Schaffer",
    "regiao": "Litorais do Espírito Santo e Bahia",
    "ano": 1972
  },
  {
    "atividade": "GEDIP II - 3o CRUZEIRO",
    "periodo": "31/07 a 23/08/1972",
    "pesquisador": "Carlos Porto da Silva",
    "regiao": "Atlântico Sul",
    "ano": 1972
  },
  {
    "atividade": "SEREMAR",
    "periodo": "25/08 a 25/10/1972",
    "pesquisador": "Affonso da Silveira Mascarenhas Jr.",
    "regiao": "Litorais de São Paulo e Rio de Janeiro",
    "ano": 1972
  },
  {
    "atividade": "GEDIP II - 4o CRUZEIRO",
    "periodo": "25/10 a 05/11/1972",
    "pesquisador": "Carlos Porto da Silva",
    "regiao": "Atlântico Sul",
    "ano": 1972
  },
  {
    "atividade": "REMAC / PETROBRAS - ETAPAS: A a D",
    "periodo": "15/11 a 18/12/1972",
    "pesquisador": "Especificados abaixo",
    "regiao": "Especificadas abaixo",
    "ano": 1972
  },
  {
    "atividade": "A - SANTOS - RIO GRANDE",
    "periodo": "15/11 a 20/11/1972",
    "pesquisador": "John D. Milliman",
    "regiao": "Litorais de Santos (SP) a Rio Grande (RS)",
    "ano": 1972
  },
  {
    "atividade": "B - RIO GRANDE - ITAJAÍ",
    "periodo": "23/11 a 03/12/1972",
    "pesquisador": "John D. Milliman",
    "regiao": "Litorais de Rio Grande (SC) a Itajaí (SC)",
    "ano": 1972
  },
  {
    "atividade": "C - ITAJAÍ - ITAJAÍ",
    "periodo": "06 a 11/12/1972",
    "pesquisador": "John D. Milliman",
    "regiao": "Litoral de ltajaí (SC)",
    "ano": 1972
  },
  {
    "atividade": "D - ITAJAÍ - SANTOS",
    "periodo": "11 a 18/12/1972",
    "pesquisador": "John D. Milliman",
    "regiao": "Litorais de ltajaí (SC) a Santos (SP)",
    "ano": 1972
  },
  {
    "atividade": "REMAC / PETROBRAS - ETAPAS: A a H",
    "periodo": "06/01 a 07/04/1973",
    "pesquisador": "Especificados abaixo",
    "regiao": "Especificadas abaixo",
    "ano": 1973
  },
  {
    "atividade": "A - SANTOS - VITÓRIA",
    "periodo": "06 a 15/01/1973",
    "pesquisador": "Jeffrev Ellis",
    "regiao": "Litorais de Santos (SP) a Vitória (ES)",
    "ano": 1973
  },
  {
    "atividade": "B - VITÓRIA - SALVADOR",
    "periodo": "16/01 a 24/02/1973",
    "pesquisador": "Jeffrey Ellis",
    "regiao": "Litorais de Vitória (ES) a Salvador (BA)",
    "ano": 1973
  },
  {
    "atividade": "C - SALVADOR- FORTALEZA",
    "periodo": "27/01 a 08/02/1973",
    "pesquisador": "Jeffrey Ellis",
    "regiao": "Litorais de Salvador (BA) a Fortaleza (CE)",
    "ano": 1973
  },
  {
    "atividade": "D - FORTALEZA - BELEM",
    "periodo": "11 a 23/02/1973",
    "pesquisador": "John D. Milliman",
    "regiao": "Litorais de Fortaleza (CE) a Belém (PA)",
    "ano": 1973
  },
  {
    "atividade": "E - BELÉM - RIO AMAZONAS - BELÉM",
    "periodo": "25/02 a 03/03/1973",
    "pesquisador": "John D. Milliman",
    "regiao": "Litorais de Belém (PA) / Amazonas (AM) a Belém (PA)",
    "ano": 1973
  },
  {
    "atividade": "F - BELÉM - RECIFE",
    "periodo": "07 a 23/03/1973",
    "pesquisador": "Colin P. Summerhayes",
    "regiao": "Litorais de Belém (PA) a Recife (PE)",
    "ano": 1973
  },
  {
    "atividade": "G - RECIFE – RIO DE JANEIRO",
    "periodo": "23/03 a 05/04/1973",
    "pesquisador": "Colin P. Summerhayes",
    "regiao": "Litorais de Recife (PE) a Rio de Janeiro (RJ)",
    "ano": 1973
  },
  {
    "atividade": "H - RIO DE JANEIRO – SANTOS",
    "periodo": "06 a 07/04/1973",
    "pesquisador": "Não informado no catálogo",
    "regiao": "Litorais do Rio de Janeiro (RJ) a Santos (SP)",
    "ano": 1973
  },
  {
    "atividade": "CURSO DE PÓS GRADUAÇÃO",
    "periodo": "03 a 14/07/1973",
    "pesquisador": "Luiz Bruner de Miranda",
    "regiao": "Litorais de São Paulo e Rio de Janeiro",
    "ano": 1973
  },
  {
    "atividade": "SEREMAR",
    "periodo": "06 a 18/08/1973",
    "pesquisador": "Affonso S. Mascarenhas Jr.",
    "regiao": "Litorais de São Paulo e Rio de Janeiro",
    "ano": 1973
  },
  {
    "atividade": "GEDIP II – COMPLEMENTAÇÃO",
    "periodo": "16 a 28/10/1973",
    "pesquisador": "Valdenir Veronese Furtado",
    "regiao": "Atlântico Sul",
    "ano": 1973
  },
  {
    "atividade": "REMAC / PETROBRAS - ETAPAS: A a G",
    "periodo": "26/05 a 25/08/1974",
    "pesquisador": "Especificados abaixo",
    "regiao": "Especificadas abaixo",
    "ano": 1974
  },
  {
    "atividade": "A - SANTOS – VITÓRIA",
    "periodo": "26/05 a 06/06/1974",
    "pesquisador": "Sílvio Zembruscki",
    "regiao": "Litorais de Santos (SP) a Vitória (ES)",
    "ano": 1974
  },
  {
    "atividade": "B - VITÓRIA – SALVADOR",
    "periodo": "09 a 21/06/1974",
    "pesquisador": "Augusto França",
    "regiao": "Litorais de Vitória (ES) a Salvador (BA)",
    "ano": 1974
  },
  {
    "atividade": "C - SALV ADOR – FORTALEZA",
    "periodo": "26/06 a 07/07/1974",
    "pesquisador": "Waltir Guazelli",
    "regiao": "Litorais de Salvador (BA) a Fortaleza (CE)",
    "ano": 1974
  },
  {
    "atividade": "D - FORTALEZA – RECIFE",
    "periodo": "11 a 17/07/1974",
    "pesquisador": "Márcio CoSanta",
    "regiao": "Litorais de Fortaleza (CE) a Recife (PE)",
    "ano": 1974
  },
  {
    "atividade": "E - RECIFE – SALV ADOR",
    "periodo": "22 a 28/07/1974",
    "pesquisador": "Márcio CoSanta",
    "regiao": "Litorais de Recife (PE) a Salvador (BA)",
    "ano": 1974
  },
  {
    "atividade": "F - SALVADOR – RIO DE JANEIRO",
    "periodo": "29/07 a 10/08/1974",
    "pesquisador": "Jorge Palma",
    "regiao": "Litorais de Salvador (BA) a Rio de Janeiro (RJ)",
    "ano": 1974
  },
  {
    "atividade": "G - RIO DE JANEIRO – COSANTA SUL – SANTOS",
    "periodo": "13 a 25/08/1974",
    "pesquisador": "Renato O. Koswmann",
    "regiao": "Litorais do Rio de Janeiro (RJ) a Santos (SP)",
    "ano": 1974
  },
  {
    "atividade": "ICTIOPLÂNCTON – 1a ETAPA",
    "periodo": "18 a 28/11/1974",
    "pesquisador": "Yasunobu Matsuura",
    "regiao": "Litorais de São Paulo e Paraná",
    "ano": 1974
  },
  {
    "atividade": "ICTIOPLÂNCTON – 2a ETAPA",
    "periodo": "06 a 16/12/1974",
    "pesquisador": "Yasunobu Matsuura",
    "regiao": "Litorais de São Paulo e Paraná",
    "ano": 1974
  },
  {
    "atividade": "ICTIOPLÂNCTON",
    "periodo": "15 a 23/01/1975",
    "pesquisador": "Yasunobu Matsuura",
    "regiao": "Litorais de São Paulo e Rio de Janeiro",
    "ano": 1975
  },
  {
    "atividade": "FAUNEC",
    "periodo": "18/02 a 07/03/1975",
    "pesquisador": "Gelso Vazzoler",
    "regiao": "de Cabo Frio (RJ) a Chuí (RS)",
    "ano": 1975
  },
  {
    "atividade": "FAUNEC",
    "periodo": "08 a 24/05/1975",
    "pesquisador": "Gelso Vazzoler",
    "regiao": "de Cabo Frio (RJ) a Chuí (RS)",
    "ano": 1975
  },
  {
    "atividade": "IOF-804",
    "periodo": "16 a 22/06/1975",
    "pesquisador": "Luiz Bruner de Miranda",
    "regiao": "Litorais de São Paulo e Rio de Janeiro",
    "ano": 1975
  },
  {
    "atividade": "BRUS",
    "periodo": "15/07 a 01/09/1975",
    "pesquisador": "Frank Zabloswki",
    "regiao": "Litoral de Fortaleza (CE)",
    "ano": 1975
  },
  {
    "atividade": "FAUNEC",
    "periodo": "17 a 29/09/1975",
    "pesquisador": "Gelso Vazzoler",
    "regiao": "de Cabo Frio (RJ) a Chuí (RS)",
    "ano": 1975
  },
  {
    "atividade": "FAUNEC",
    "periodo": "06 a 18/11/1975",
    "pesquisador": "Phan Van Ngan",
    "regiao": "de Cabo Frio (RJ) a Chuí (RS)",
    "ano": 1975
  },
  {
    "atividade": "FINEP",
    "periodo": "28/11 a 19/12/1975",
    "pesquisador": "Yasunobu Matsuura",
    "regiao": "de Cabo Frio (RJ) a Cabo de Santa Marta Grande (SC)",
    "ano": 1975
  },
  {
    "atividade": "FINEP",
    "periodo": "08 a 29/01/1976",
    "pesquisador": "Yasunobu Matsuura",
    "regiao": "de Cabo Frio (RJ) a Cabo de Santa Marta Grande (SC)",
    "ano": 1976
  },
  {
    "atividade": "FÍSICA",
    "periodo": "16 a 21/02/1976",
    "pesquisador": "Luiz Bruner de Miranda",
    "regiao": "Litoral de São Paulo",
    "ano": 1976
  },
  {
    "atividade": "FINEP",
    "periodo": "07 a 27/05/1976",
    "pesquisador": "Yasunobu Matsuura",
    "regiao": "de Cabo Frio (RJ) a Cabo de Santa Marta Grande (SC)",
    "ano": 1976
  },
  {
    "atividade": "PROJETO OEA",
    "periodo": "10 a 15/06/1976",
    "pesquisador": "Yoshimine Ykeda",
    "regiao": "Litoral de São Paulo",
    "ano": 1976
  },
  {
    "atividade": "PROJETO PRS",
    "periodo": "09 a 18/07/1976",
    "pesquisador": "Valdenir Veronese Furtado",
    "regiao": "Litoral de São Paulo",
    "ano": 1976
  },
  {
    "atividade": "FINEP",
    "periodo": "22/09 a 18/10/1976",
    "pesquisador": "Yasunobu Matsuura",
    "regiao": "de Cabo Frio (RJ) a Cabo de Santa Marta Grande (SC)",
    "ano": 1976
  },
  {
    "atividade": "HlDRODINÂMICA",
    "periodo": "25 a 29/10/1976",
    "pesquisador": "Afrânio Rubens de Mesquita",
    "regiao": "Litoral de São Paulo",
    "ano": 1976
  },
  {
    "atividade": "FINEP",
    "periodo": "01 a 21/12/1976",
    "pesquisador": "Gosuke Sato",
    "regiao": "de Cabo Frio (RJ) a Cabo de Santa Marta Grande (SC)",
    "ano": 1976
  },
  {
    "atividade": "FINEP",
    "periodo": "17/01 a 08/02/1977",
    "pesquisador": "Gosuke Sato",
    "regiao": "de Cabo Frio (RJ) a Cabo de Santa Marta Grande (SC)",
    "ano": 1977
  },
  {
    "atividade": "FINEP / HIDRODINÂMICA",
    "periodo": "19/07 a 05/08/1977",
    "pesquisador": "Afrânio Rubens de Mesquita",
    "regiao": "Litoral de São Paulo",
    "ano": 1977
  },
  {
    "atividade": "HIDRODlNÂMICA COSTEIRA",
    "periodo": "12 a 18/09/1977",
    "pesquisador": "Sérgio Signorini",
    "regiao": "Litoral do Rio de Janeiro",
    "ano": 1977
  },
  {
    "atividade": "MARÉGRAFO",
    "periodo": "26 a 29/09/1977",
    "pesquisador": "Afrânio Rubens de Mesquita",
    "regiao": "Litoral de São Paulo",
    "ano": 1977
  },
  {
    "atividade": "PROJETO PDP",
    "periodo": "03 a 06/11/1977",
    "pesquisador": "Yasunobu Matsuura",
    "regiao": "Litoral de São Paulo",
    "ano": 1977
  },
  {
    "atividade": "FINEP",
    "periodo": "10/01 a 01/02/1978",
    "pesquisador": "Yasunobu Matsuura",
    "regiao": "de Cabo Frio (RJ) a Cabo de Santa Marta Grande (SC)",
    "ano": 1978
  },
  {
    "atividade": "TRAMANDAÍ",
    "periodo": "21 a 24/04/1978",
    "pesquisador": "Argeo Magliocca",
    "regiao": "Litoral do Rio Grande do Sul",
    "ano": 1978
  },
  {
    "atividade": "BENTOS",
    "periodo": "22 a 24/05/1978",
    "pesquisador": "Airton S. Tararam",
    "regiao": "Litoral de São Paulo",
    "ano": 1978
  },
  {
    "atividade": "FINEP",
    "periodo": "05 a 22/06/1978",
    "pesquisador": "Yasunobu Matsuura",
    "regiao": "de Cabo Frio (RJ) a Santa Marta Grande (SC)",
    "ano": 1978
  },
  {
    "atividade": "HIDRODlNÂMICA",
    "periodo": "18/07 a 04/08/1978",
    "pesquisador": "Afrânio Rubens de Mesquita",
    "regiao": "Litoral de São Paulo",
    "ano": 1978
  },
  {
    "atividade": "BENTOS",
    "periodo": "02 a 04/10/1978",
    "pesquisador": "Jorge Abreu",
    "regiao": "Litoral de São Paulo",
    "ano": 1978
  },
  {
    "atividade": "FINEP",
    "periodo": "27/11 a 14/12/1978",
    "pesquisador": "Yasunobu Matsuura",
    "regiao": "de Cabo Frio (RJ) a Cabo de Santa Marta Grande (SC)",
    "ano": 1978
  },
  {
    "atividade": "FGGE / GARP",
    "periodo": "06/01 a 17/03/1979",
    "pesquisador": "Afrânio Rubens de Mesquita",
    "regiao": "Atlântico Equatorial",
    "ano": 1979
  },
  {
    "atividade": "FGGE",
    "periodo": "12/06 a 21/07/1979",
    "pesquisador": "Afrânio Rubens de Mesquita",
    "regiao": "Atlântico Equatorial",
    "ano": 1979
  },
  {
    "atividade": "CURSO DE BIOLOGIA E PESCA",
    "periodo": "26/10/1979",
    "pesquisador": "Yasunobu Matsuura",
    "regiao": "Litoral de São Paulo",
    "ano": 1979
  },
  {
    "atividade": "HIDRODlNÂMICA COSTEIRA",
    "periodo": "16 a 25/01/1980",
    "pesquisador": "Afrânio Rubens de Mesquita",
    "regiao": "de Cabo Frio (RJ) a Cabo de Santa Marta Grande (SC)",
    "ano": 1980
  },
  {
    "atividade": "VEMA CHANNEL",
    "periodo": "18 a 28/03/1980",
    "pesquisador": "Hogg",
    "regiao": "Alto-mar",
    "ano": 1980
  },
  {
    "atividade": "TESTE BATIUSP",
    "periodo": "13 a 15/11/1980",
    "pesquisador": "Afrânio Rubens de Mesquita",
    "regiao": "Litoral de São Paulo",
    "ano": 1980
  },
  {
    "atividade": "HIDRODlNÂMICA COSTEIRA",
    "periodo": "25/11 a 15/12/1980",
    "pesquisador": "Afrânio Rubens de Mesquita",
    "regiao": "de Cabo Frio (RJ) a Cabo de Santa Marta Grande (SC)",
    "ano": 1980
  },
  {
    "atividade": "FINEP",
    "periodo": "15 a 24/01/1981",
    "pesquisador": "Yasunobu Matsuura",
    "regiao": "de Cabo Frio (RJ) a Cabo de Santa Marta Grande (SC)",
    "ano": 1981
  },
  {
    "atividade": "REDE WATTER – TRAWL – TESTE",
    "periodo": "25 a 26/02/1981",
    "pesquisador": "Yasunobu Matsuura",
    "regiao": "Litoral de São Paulo",
    "ano": 1981
  },
  {
    "atividade": "GAIOLA DE MERGULHO – TESTE",
    "periodo": "09 a 11/04/1981",
    "pesquisador": "Mergulhador Assis Francisco",
    "regiao": "Litoral de São Paulo",
    "ano": 1981
  },
  {
    "atividade": "LOP-CLASA",
    "periodo": "22 a 26/04/1981",
    "pesquisador": "Sérgio Signorini",
    "regiao": "Litoral de São Paulo",
    "ano": 1981
  },
  {
    "atividade": "LOP-CLASA",
    "periodo": "25 a 29/05/1981",
    "pesquisador": "Sérgio Signorini",
    "regiao": "Litoral de São Paulo",
    "ano": 1981
  },
  {
    "atividade": "PROJETO: SÃO PEDRO E SÃO PAULO",
    "periodo": "15/06 a 18/07/1981",
    "pesquisador": "Afrânio Rubens de Mesquita",
    "regiao": "Penedos de São Pedro e São Paulo",
    "ano": 1981
  },
  {
    "atividade": "LOP-CLASA",
    "periodo": "24 a 28/08/1981",
    "pesquisador": "Sérgio Signorini",
    "regiao": "Litoral de São Paulo",
    "ano": 1981
  },
  {
    "atividade": "FINEP",
    "periodo": "23 a 30/10/1981",
    "pesquisador": "Yasunobu Matsuura",
    "regiao": "Litorais de São Paulo e Rio de Janeiro",
    "ano": 1981
  },
  {
    "atividade": "LOP-CLASA",
    "periodo": "30/10 a 05/11/1981",
    "pesquisador": "Sérgio Signorini",
    "regiao": "Litoral de São Paulo",
    "ano": 1981
  },
  {
    "atividade": "SEICHES",
    "periodo": "19 a 29/01/1982",
    "pesquisador": "Afrânio Rubens de Mesquita",
    "regiao": "Litoral de São Paulo",
    "ano": 1982
  },
  {
    "atividade": "LOP-CLASA",
    "periodo": "08 a 12/02/1982",
    "pesquisador": "Luiz Bruner de Miranda",
    "regiao": "Litoral de São Paulo",
    "ano": 1982
  },
  {
    "atividade": "FINEP",
    "periodo": "08 a 16/03/1982",
    "pesquisador": "Yasunobu Matsuura",
    "regiao": "de Cabo Frio (RJ) a Cabo de Santa Marta Grande (SC)",
    "ano": 1982
  },
  {
    "atividade": "EXPERIMENTO PESQUEIRO",
    "periodo": "25 a 27/03/1982",
    "pesquisador": "Motonaga Iwai",
    "regiao": "Litoral de São Paulo",
    "ano": 1982
  },
  {
    "atividade": "TRANSCOBRA",
    "periodo": "23/04 a 03/05/1982",
    "pesquisador": "Luiz Bruner de Miranda",
    "regiao": "Litoral de São Paulo",
    "ano": 1982
  },
  {
    "atividade": "PROANTAR I",
    "periodo": "20/12/1982 a 23/02/1983",
    "pesquisador": "Motonaga Iwai e Valdenir Veronese Furtado",
    "regiao": "Antártica",
    "ano": 1983
  },
  {
    "atividade": "CIRCULAÇÃO / TRANSPORTE / MISTURA",
    "periodo": "21 a 31/10/1983",
    "pesquisador": "Yoshimine Ykeda",
    "regiao": "Litorais de São Paulo e Rio de Janeiro",
    "ano": 1983
  },
  {
    "atividade": "PROANTAR II",
    "periodo": "26/12/1983 a 14/03/1984",
    "pesquisador": "Yoshimine Ykeda",
    "regiao": "Antártica",
    "ano": 1984
  },
  {
    "atividade": "FINEP",
    "periodo": "24 a 29/05/1984",
    "pesquisador": "Yasunobu Matsuura",
    "regiao": "Litoral de São Paulo",
    "ano": 1984
  },
  {
    "atividade": "CIRCULAÇAO / TRANSPORTE / MISTURA",
    "periodo": "25/09 a 09/10/1984",
    "pesquisador": "Yoshimine Ykeda",
    "regiao": "Litorais de São Paulo e Rio de Janeiro",
    "ano": 1984
  },
  {
    "atividade": "PROANTAR III",
    "periodo": "05/01 a 06/03/1985",
    "pesquisador": "Phan Van Ngan e",
    "regiao": "Antártica",
    "ano": 1985
  },
  {
    "atividade": "TRANSCOBRA",
    "periodo": "04 a 11/04/1985",
    "pesquisador": "Affonso S. Mascarenhas Jr.",
    "regiao": "Litoral do Rio Grande do Sul",
    "ano": 1985
  },
  {
    "atividade": "TRANSCOBRA",
    "periodo": "25/11 a 01/12/1985",
    "pesquisador": "Affonso S. Mascarenhas Jr.",
    "regiao": "Litoral do Rio Grande do Sul",
    "ano": 1985
  },
  {
    "atividade": "INTEGRADO",
    "periodo": "10 a 19/12/1985",
    "pesquisador": "Yasunobu Matsuura",
    "regiao": "Litoral de São Paulo",
    "ano": 1985
  },
  {
    "atividade": "PROANTAR IV",
    "periodo": "13/01 a 12/03/1986",
    "pesquisador": "Airton S. Tararam",
    "regiao": "Antártica",
    "ano": 1986
  },
  {
    "atividade": "INTEGRADO",
    "periodo": "12 a 29/07/1986",
    "pesquisador": "Yasunobu Matsuura",
    "regiao": "Litoral de São Paulo",
    "ano": 1986
  },
  {
    "atividade": "INTEGRADO",
    "periodo": "10 a 20/12/1986",
    "pesquisador": "Yasunobu Matsuura",
    "regiao": "Litoral de São Paulo",
    "ano": 1986
  },
  {
    "atividade": "TRANSCOBRA",
    "periodo": "08 a 14/01/1987",
    "pesquisador": "Affonso S. Mascarenhas Jr.",
    "regiao": "Litoral do Rio Grande do Sul",
    "ano": 1987
  },
  {
    "atividade": "PROANTAR V",
    "periodo": "23/01 a 27/03/1987",
    "pesquisador": "Airton S. Tararam",
    "regiao": "Antártica",
    "ano": 1987
  },
  {
    "atividade": "INTEGRADO",
    "periodo": "09 a 27/07/1987",
    "pesquisador": "Mário Katsuragawa",
    "regiao": "Litoral de São Paulo",
    "ano": 1987
  },
  {
    "atividade": "EQUANT I",
    "periodo": "06/08 a 03/11/1987",
    "pesquisador": "Jean Paul",
    "regiao": "Litorais do Rio Grande do Norte e Ceará",
    "ano": 1987
  },
  {
    "atividade": "PROANTAR VI",
    "periodo": "02/11 a 22/03/1988",
    "pesquisador": "Luz Amelia Vega-Pérez",
    "regiao": "Antártica",
    "ano": 1988
  },
  {
    "atividade": "INTEGRADO",
    "periodo": "01 a 27/07/1988",
    "pesquisador": "Mário Katsuragawa",
    "regiao": "Litoral de São Paulo",
    "ano": 1988
  },
  {
    "atividade": "EQUANT II",
    "periodo": "18/08 a 17/11/1988",
    "pesquisador": "Ness",
    "regiao": "Litoral Norte",
    "ano": 1988
  },
  {
    "atividade": "INTEGRADO",
    "periodo": "01 a 19/12/1988",
    "pesquisador": "Airton S. Tararam",
    "regiao": "Litoral de São Paulo",
    "ano": 1988
  },
  {
    "atividade": "INTEGRADO",
    "periodo": "03 a 07/03/1989",
    "pesquisador": "Valdenir Veronese Furtado",
    "regiao": "Litoral de São Paulo",
    "ano": 1989
  },
  {
    "atividade": "HIDROCASS",
    "periodo": "25/11 a 29/1/1991",
    "pesquisador": "Belmiro Mendes Castro Filho e Luiz Bruner de Miranda",
    "regiao": "Litoral de São Paulo",
    "ano": 1991
  },
  {
    "atividade": "ADESTRAMENTO PÓS-GRADUANDOS",
    "periodo": "05 a 06/12/1991",
    "pesquisador": "Moysés Gonsalez Tessler",
    "regiao": "Litoral de São Paulo",
    "ano": 1991
  },
  {
    "atividade": "CICLO INICIAL DA SARDINHA",
    "periodo": "07 a 19/12/1991",
    "pesquisador": "Mário Katsuragawa",
    "regiao": "Litorais do Rio de Janeiro, São Paulo, Paraná e Santa Catarina",
    "ano": 1991
  },
  {
    "atividade": "HIDROCASS",
    "periodo": "17 a 21/02/1992",
    "pesquisador": "Belmiro Mendes Castro Filho e Luiz Bruner de Miranda",
    "regiao": "Litoral de São Paulo",
    "ano": 1992
  },
  {
    "atividade": "HIDROCASS",
    "periodo": "25 a 29/05/1992",
    "pesquisador": "Belmiro Mendes Castro Filho e Luiz Bruner de Miranda",
    "regiao": "Litoral de São Paulo",
    "ano": 1992
  },
  {
    "atividade": "IOB -728",
    "periodo": "27 a 28/06/1992",
    "pesquisador": "Elizabeth Aidar",
    "regiao": "Litoral de São Paulo",
    "ano": 1992
  },
  {
    "atividade": "HIDROCASS",
    "periodo": "24 a 28/08/1992",
    "pesquisador": "Belmiro Mendes Castro Filho e Luiz Bruner de Miranda",
    "regiao": "Litoral de São Paulo",
    "ano": 1992
  },
  {
    "atividade": "WOCW - IOUSP / IFM KIEL",
    "periodo": "11 a 18/09/1992",
    "pesquisador": "Yoshimine Ykeda",
    "regiao": "Litoral do Rio de Janeiro",
    "ano": 1992
  },
  {
    "atividade": "COROAS",
    "periodo": "14 a 17/11/1992",
    "pesquisador": "Merrit R. Stevenson",
    "regiao": "Litoral de São Paulo",
    "ano": 1992
  },
  {
    "atividade": "HIDROCASS / COROAS",
    "periodo": "10 a 17/12/1992",
    "pesquisador": "Belmiro Mendes Castro Filho, Luiz Bruner de Miranda e Merrit R. Stevenson",
    "regiao": "Litoral de São Paulo",
    "ano": 1992
  },
  {
    "atividade": "CICLO INICIAL DA SARDINHA",
    "periodo": "08 a 20/01/1993",
    "pesquisador": "Yasunobu Matsuura",
    "regiao": "Litorais do Rio de Janeiro, São Paulo, Paraná e Santa Catarina",
    "ano": 1993
  },
  {
    "atividade": "COROAS",
    "periodo": "25/01 a 05/02/1993",
    "pesquisador": "Edmo José Dias Campos",
    "regiao": "Litoral de São Paulo",
    "ano": 1993
  },
  {
    "atividade": "COROAS",
    "periodo": "15 a 18/02/1993",
    "pesquisador": "Merrit R. Stevenson",
    "regiao": "Litoral de São Paulo",
    "ano": 1993
  },
  {
    "atividade": "COROAS",
    "periodo": "02 a 16/03/1993",
    "pesquisador": "Salvador Airton Gaeta",
    "regiao": "Canal de Vema e litorais de São Paulo, Paraná,",
    "ano": 1993
  },
  {
    "atividade": "ADESTRAMENTO PÓS GRADUAÇÃO",
    "periodo": "20 a 21/03/1993",
    "pesquisador": "Sônia Maria F. Gianesella-Galvão",
    "regiao": "Litoral de São Paulo",
    "ano": 1993
  },
  {
    "atividade": "COROAS",
    "periodo": "24 a 28/03/1993",
    "pesquisador": "Belmiro Mendes de Castro Filho",
    "regiao": "Litoral de São Paulo",
    "ano": 1993
  },
  {
    "atividade": "WOCE - IOUSP / UFM KIEL",
    "periodo": "30 a 31/03/1993",
    "pesquisador": "Paulo Leão",
    "regiao": "Cruzeiro Cancelado",
    "ano": 1993
  },
  {
    "atividade": "COROAS",
    "periodo": "07 a 12/07/1993",
    "pesquisador": "Belmiro Mendes de Castro Filho",
    "regiao": "Litoral de São Paulo",
    "ano": 1993
  },
  {
    "atividade": "COROAS",
    "periodo": "18 a 29/07/1993",
    "pesquisador": "Edmo José Dias Campos / Merrit R. Stevenson",
    "regiao": "Litoral de São Paulo",
    "ano": 1993
  },
  {
    "atividade": "COROAS / IOUSP / UFM KIEL",
    "periodo": "11 a 15/08/1993",
    "pesquisador": "Zangenberg",
    "regiao": "Litoral do Rio de Janeiro",
    "ano": 1993
  },
  {
    "atividade": "COROAS",
    "periodo": "06 a 09/10/1993",
    "pesquisador": "Belmiro Mendes de Castro Filho",
    "regiao": "Litoral de São Paulo",
    "ano": 1993
  },
  {
    "atividade": "COROAS",
    "periodo": "04 a 07/01/1994",
    "pesquisador": "Belmiro Mendes de Castro Filho",
    "regiao": "Litoral de São Paulo",
    "ano": 1994
  },
  {
    "atividade": "COROAS",
    "periodo": "17 a 30/01/1994",
    "pesquisador": "Edmo José Dias Campos",
    "regiao": "Litoral de São Paulo",
    "ano": 1994
  },
  {
    "atividade": "OPISS",
    "periodo": "05 a 11/02/1994",
    "pesquisador": "Mário Katsuragawa",
    "regiao": "Litoral de São Paulo",
    "ano": 1994
  },
  {
    "atividade": "OPISS",
    "periodo": "19/02 a 01/03/1994",
    "pesquisador": "Ana Maria Setubal Pires Vanin",
    "regiao": "Litoral de São Paulo",
    "ano": 1994
  },
  {
    "atividade": "COROAS",
    "periodo": "15 a 28/03/1994",
    "pesquisador": "Salvador Airton Gaeta",
    "regiao": "Canal de Vema e litorais de São Paulo, Paraná,",
    "ano": 1994
  },
  {
    "atividade": "COROAS / OPISS",
    "periodo": "18 a 22/05/1994",
    "pesquisador": "Belmiro Mendes de Castro Filho",
    "regiao": "Litoral de São Paulo",
    "ano": 1994
  },
  {
    "atividade": "Projeto OPISS – 1ª Etapa",
    "periodo": "26 a 28/09/1997",
    "pesquisador": "Belmiro Mendes de Castro Filho",
    "regiao": "Litoral Norte de São Paulo",
    "ano": 1997
  },
  {
    "atividade": "Projeto OPISS – 2ª Etapa)",
    "periodo": "28/9 a 03/10/1997",
    "pesquisador": "Sonia Maria F. Gianesella-Galvão",
    "regiao": "Litoral Norte de São Paulo",
    "ano": 1997
  },
  {
    "atividade": "Projeto OPISS – 3ª Etapa",
    "periodo": "03 a 09/10/1997",
    "pesquisador": "Ana Maria Setubal Pires Vanim",
    "regiao": "Litoral Norte de São Paulo",
    "ano": 1997
  },
  {
    "atividade": "Projeto OPISS",
    "periodo": "14 a 18/10/1997",
    "pesquisador": "Mario Katsuragawa",
    "regiao": "Litoral Norte de São Paulo",
    "ano": 1997
  },
  {
    "atividade": "Projeto PADCT – Testes",
    "periodo": "21 a 24/10/1997",
    "pesquisador": "Airton Santo Tararan",
    "regiao": "Proximidades da Baía de Santos",
    "ano": 1997
  },
  {
    "atividade": "Projeto OPISS / COROAS",
    "periodo": "29/10 a 05/11/1997",
    "pesquisador": "Rosane Gonçalves Ito",
    "regiao": "Litoral de São Paulo",
    "ano": 1997
  },
  {
    "atividade": "Projeto PADCT",
    "periodo": "13 a 22/11/1997",
    "pesquisador": "Yasunobu Matsuura",
    "regiao": "Litoral Sul do Rio de Janeiro e Norte de São Paulo",
    "ano": 1997
  },
  {
    "atividade": "Projeto PADCT",
    "periodo": "24/11 a 03/12/1997",
    "pesquisador": "Valdenir Veronese Furtado",
    "regiao": "Litoral Sul de São Paulo até Cabo de Santa Marta (SC)",
    "ano": 1997
  },
  {
    "atividade": "Projeto PADCT",
    "periodo": "05 a 11/12/1997",
    "pesquisador": "Airton Santo Tararan",
    "regiao": "de Cabo Frio (RJ) ao Cabo de Santa Marta Grande (SC)",
    "ano": 1997
  },
  {
    "atividade": "Projeto REVIZEE",
    "periodo": "13 a 17/12/1997",
    "pesquisador": "Moysés Gonzalez Tessler",
    "regiao": "Litoral de Santa Catarina, Paraná e Sul de São Paulo",
    "ano": 1997
  },
  {
    "atividade": "Projeto REVIZEE",
    "periodo": "08 a 14/01/1998",
    "pesquisador": "Valdenir Veronese Furtado",
    "regiao": "Litoral Norte de São Paulo",
    "ano": 1998
  },
  {
    "atividade": "Projeto REVIZEE",
    "periodo": "17 a 22/01/1998",
    "pesquisador": "Moysés Gonsalez Tessler",
    "regiao": "Litoral Sul de São Paulo, Paraná e Santa Catarina",
    "ano": 1998
  },
  {
    "atividade": "Projeto COROAS",
    "periodo": "29/01 a 07/02/1998",
    "pesquisador": "Rosane Gonçalves Ito",
    "regiao": "Litoral Sul de São Paulo, Paraná e Santa Catarina",
    "ano": 1998
  },
  {
    "atividade": "Projeto REVIZEE",
    "periodo": "12 a 18/02/1998",
    "pesquisador": "Airton Santo Tararam",
    "regiao": "Litoral Sul do Rio de Janeiro e Norte de São Paulo",
    "ano": 1998
  },
  {
    "atividade": "Projeto REVIZEE",
    "periodo": "26/02 a 05/03/1998",
    "pesquisador": "Alberto G. Figueiredo",
    "regiao": "Litoral do Rio de Janeiro",
    "ano": 1998
  },
  {
    "atividade": "Projeto REVIZEE – 1ª etapa",
    "periodo": "11 a 20/03/1998",
    "pesquisador": "Cinthya S. G. dos Santos",
    "regiao": "Litoral do Paraná e Santa Catarina",
    "ano": 1998
  },
  {
    "atividade": "Projeto REVIZEE – 2ª etapa",
    "periodo": "21 a 27/03/1998",
    "pesquisador": "Rosemary Aparecida Brogim",
    "regiao": "Litoral de Santa Catarina e Rio Grande do Sul",
    "ano": 1998
  },
  {
    "atividade": "Projeto REVIZEE – 3ª etapa",
    "periodo": "01 a 07/04/1998",
    "pesquisador": "Gilberto H. Griep",
    "regiao": "Litoral do Rio Grande do Sul",
    "ano": 1998
  },
  {
    "atividade": "Projeto REVIZEE – 4ª etapa",
    "periodo": "14 a 20/04/1998",
    "pesquisador": "Weschenfelder",
    "regiao": "Litoral do Rio Grande do Sul",
    "ano": 1998
  },
  {
    "atividade": "Projeto REVIZEE – 5ª etapa / Recuperação de Fundeios da FURG",
    "periodo": "22 a 25/04/1998",
    "pesquisador": "Não informado no catálogo",
    "regiao": "Sul da Bacia de Santos",
    "ano": 1998
  },
  {
    "atividade": "Projeto COROAS",
    "periodo": "18 a 26/06/1998",
    "pesquisador": "Yoshimine Ikeda",
    "regiao": "Litoral de São Paulo",
    "ano": 1998
  },
  {
    "atividade": "Projeto DEPROAS",
    "periodo": "02 a 05/02/2001",
    "pesquisador": "Belmiro Mendes de Castro Filho",
    "regiao": "Cabo Frio (RJ)",
    "ano": 2001
  },
  {
    "atividade": "Projeto DEPROAS",
    "periodo": "05 a 13/02/2001",
    "pesquisador": "Mario Katsuragawa",
    "regiao": "Cabo Frio (RJ)",
    "ano": 2001
  },
  {
    "atividade": "Projeto DEPROAS",
    "periodo": "15 a 21/02/2001",
    "pesquisador": "Ana Maria Setubal Pires Vanin",
    "regiao": "Cabo Frio (RJ)",
    "ano": 2001
  },
  {
    "atividade": "Projeto PADCT – 2ª etapa",
    "periodo": "18 a 27/05/2001",
    "pesquisador": "Elisabete de Santis Braga",
    "regiao": "de São Sebastião (SP) a Cabo de Santa Marta Grande (SC)",
    "ano": 2001
  },
  {
    "atividade": "Projeto DEPROAS – Etapa Fundeios",
    "periodo": "25 a 30/06/2001",
    "pesquisador": "Belmiro Mendes de Castro Filho",
    "regiao": "Cabo Frio (RJ)",
    "ano": 2001
  },
  {
    "atividade": "Projeto DEPROAS – Etapa Trofodinâmica",
    "periodo": "01 a 20/07/2001",
    "pesquisador": "Salvador Airton Gaeta",
    "regiao": "de Rio de Janeiro a Cabo Frio (RJ)",
    "ano": 2001
  },
  {
    "atividade": "Projeto DEPROAS",
    "periodo": "23 a 31/07/2001",
    "pesquisador": "Ana Maria Setubal Pires Vanin",
    "regiao": "Cabo Frio (RJ)",
    "ano": 2001
  },
  {
    "atividade": "Projeto DEPROAS – Etapa Fundeios",
    "periodo": "09 a 13/08/2001",
    "pesquisador": "Não informado no catálogo",
    "regiao": "de Ubatuba (SP) a Cabo Frio (RJ)",
    "ano": 2001
  },
  {
    "atividade": "Projeto DEPROAS – Etapa Fundeios",
    "periodo": "10 a 17/12/2001",
    "pesquisador": "Francisco Luiz Vicentini Neto",
    "regiao": "de Ubatuba (SP) a Cabo Frio (RJ)",
    "ano": 2001
  },
  {
    "atividade": "Projeto DEPROAS III – 1ª Etapa",
    "periodo": "04 a 15/01/2002",
    "pesquisador": "June Ferraz Dias",
    "regiao": "de São Sebastião (SP) a Rio de Janeiro (RJ)",
    "ano": 2002
  },
  {
    "atividade": "Projetos DEPROAS III e PRONEX – 2ª etapa",
    "periodo": "15 a 27/01/2002",
    "pesquisador": "Mario Katsuragawa",
    "regiao": "de Rio de Janeiro a Macaé (RJ)",
    "ano": 2002
  },
  {
    "atividade": "DEPROAS - Sediment – Trap",
    "periodo": "27 a 05/02/2002",
    "pesquisador": "Salvador Airton Gaeta",
    "regiao": "de Rio de Janeiro a Cabo Frio (RJ)",
    "ano": 2002
  },
  {
    "atividade": "Projeto DEPROAS – Etapa: Trofodinâmica",
    "periodo": "14 a 24/02/2002",
    "pesquisador": "Ana Maria Setubal Pires Vanin",
    "regiao": "de São Sebastião (SP) a Cabo Frio (RJ)",
    "ano": 2002
  },
  {
    "atividade": "Projeto DEPROAS – Etapa: Recuperação de Fundeios",
    "periodo": "17 a 22/03/2002",
    "pesquisador": "Francisco Luiz Vicentini Neto",
    "regiao": "de Ubatuba (SP) a Cabo Frio (RJ)",
    "ano": 2002
  },
  {
    "atividade": "Disciplina Pós-Graduação",
    "periodo": "25 a 27/03/2002",
    "pesquisador": "Michel Michaelovitch de Mahiques",
    "regiao": "Santos (SP)",
    "ano": 2002
  },
  {
    "atividade": "Disciplina Pós-Graduação",
    "periodo": "04/04/02",
    "pesquisador": "Rolf Roland Weber",
    "regiao": "Santos (SP)",
    "ano": null
  },
  {
    "atividade": "Disciplina Pós-Graduação",
    "periodo": "05/04/02",
    "pesquisador": "Elisabete de Santis Braga",
    "regiao": "Santos (SP)",
    "ano": null
  },
  {
    "atividade": "Disciplina IOF-850",
    "periodo": "12 a 14/04/2002",
    "pesquisador": "Ilson Carlos Almeida da Silveira",
    "regiao": "São Sebastião (SP)",
    "ano": 2002
  },
  {
    "atividade": "Projeto DEPROAS",
    "periodo": "24 a 30/4/2002",
    "pesquisador": "Valdenir Veronese Furtado",
    "regiao": "de Ilha Grande (RJ) a São Sebastião (SP)",
    "ano": 2002
  },
  {
    "atividade": "Projeto DEPROAS – Etapa: Fundeios",
    "periodo": "24 a 30/7/2002",
    "pesquisador": "Francisco Luiz Vicentini Neto",
    "regiao": "de Ubatuba (SP) a Cabo Frio (RJ)",
    "ano": 2002
  },
  {
    "atividade": "Projeto DEPROAS – Etapa: Mesoescala II",
    "periodo": "14 a 22/8/2002",
    "pesquisador": "June Ferraz Dias",
    "regiao": "de Rio de Janeiro a Cabo Frio (RJ)",
    "ano": 2002
  },
  {
    "atividade": "Projeto DEPROAS – Etapa: Trofodinâmica",
    "periodo": "10 a 17/09/2002",
    "pesquisador": "Ana Maria Setubal Pires Vanin",
    "regiao": "de Ubatuba (SP) a Cabo Frio (RJ)",
    "ano": 2002
  },
  {
    "atividade": "Projeto DEPROAS – Etapa: Fundeios",
    "periodo": "25 a 28/11/2002",
    "pesquisador": "Luiz Viana Nonato",
    "regiao": "Cabo Frio (RJ)",
    "ano": 2002
  },
  {
    "atividade": "Projeto DEPROAS",
    "periodo": "30/11 a 09/12/2002",
    "pesquisador": "Ilson Carlos Almeida da Silveira",
    "regiao": "Bacia de Campos (RJ)",
    "ano": 2002
  },
  {
    "atividade": "Disciplina de Graduação",
    "periodo": "10 a 14/12/2002",
    "pesquisador": "Salvador Airton Gaeta",
    "regiao": "Ubatuba (SP)",
    "ano": 2002
  },
  {
    "atividade": "Projeto DEPROAS-BR",
    "periodo": "14 a 15/12/2002",
    "pesquisador": "Francisco Luiz Vicentini Neto",
    "regiao": "Ubatuba (SP)",
    "ano": 2002
  },
  {
    "atividade": "Teste de equipamento",
    "periodo": "17 a 18/12/2002",
    "pesquisador": "Francisco Luiz Vicentini Neto",
    "regiao": "Montão de Trigo (SP)",
    "ano": 2002
  },
  {
    "atividade": "Projeto DEPROAS-BR – Etapa: Fundeios",
    "periodo": "06 a 14/01/2003",
    "pesquisador": "Francisco Luiz Vicentini Neto",
    "regiao": "Ubatuba (SP) a Cabo Frio (RJ)",
    "ano": 2003
  },
  {
    "atividade": "Investigação Científica – Projeto FAPESP",
    "periodo": "20 a 26/01/2003",
    "pesquisador": "Michel Michaelovitch de Mahiques",
    "regiao": "de São Sebastião (SP) a Ilha Grande (RJ)",
    "ano": 2003
  },
  {
    "atividade": "Projeto DEPROAS",
    "periodo": "08 a 21/02/2003",
    "pesquisador": "Salvador Airton Gaeta",
    "regiao": "de Ubatuba (SP) a Cabo Frio (RJ)",
    "ano": 2003
  },
  {
    "atividade": "Projeto DEPROAS",
    "periodo": "22 a 26/02/2003",
    "pesquisador": "Valdenir Veronese Furtado",
    "regiao": "de Ilha Grande (RJ) a Santos (SP)",
    "ano": 2003
  },
  {
    "atividade": "Disciplina de Graduação",
    "periodo": "10 a 16/04/2003",
    "pesquisador": "Mario Katsuragawa",
    "regiao": "Ubatuba (SP)",
    "ano": 2003
  },
  {
    "atividade": "Projeto DEPROAS-BR – Etapa: Fundeios",
    "periodo": "25/04 a 09/05/2003",
    "pesquisador": "Francisco Luiz Vicentini Neto",
    "regiao": "de Ubatuba (SP) a Cabo Frio (RJ)",
    "ano": 2003
  },
  {
    "atividade": "Projeto DEPROAS – BR",
    "periodo": "12 a 16/05/2003",
    "pesquisador": "Ilson Carlos Almeida Silveira",
    "regiao": "Ilha Grande (RJ)",
    "ano": 2003
  },
  {
    "atividade": "Projeto Petrobrás – Bio III",
    "periodo": "09 a 21/06/2003",
    "pesquisador": "Ilson Carlos Almeida Silveira",
    "regiao": "Bacia de Campos (RJ)",
    "ano": 2003
  },
  {
    "atividade": "Projeto DEPROAS-BR – Etapa: Fundeios",
    "periodo": "20/08 a 03/09/2003",
    "pesquisador": "Francisco Luiz Vicentini Neto",
    "regiao": "de Ubatuba (SP) a Cabo Frio (RJ)",
    "ano": 2003
  },
  {
    "atividade": "Investigação Científica – Projeto FAPESP",
    "periodo": "05 a 12/09/2003",
    "pesquisador": "Michel Michaelovitch de Mahiques",
    "regiao": "São Sebastião (SP)",
    "ano": 2003
  },
  {
    "atividade": "Projeto DEPROAS-BR",
    "periodo": "21/09 a 01/10/2003",
    "pesquisador": "Ilson Carlos Almeida da Silveira",
    "regiao": "de São Sebastião (SP) a Ilha Grande (RJ)",
    "ano": 2003
  },
  {
    "atividade": "Projeto DEPROAS – Etapa: Fundeios",
    "periodo": "31/01 a 11/02/2004",
    "pesquisador": "Francisco Luiz Vicentini Neto",
    "regiao": "de Ubatuba (SP) a Cabo Frio (RJ)",
    "ano": 2004
  },
  {
    "atividade": "Projeto DEPROAS – Etapa: Fundeios",
    "periodo": "08 e 09/03/2004",
    "pesquisador": "Francisco Luiz Vicentini Neto",
    "regiao": "Ubatuba (SP)",
    "ano": 2004
  },
  {
    "atividade": "Projeto DEPROAS – Etapa: Fundeios",
    "periodo": "04 a 13/05/2004",
    "pesquisador": "Francisco Luiz Vicentini Neto",
    "regiao": "de Ubatuba (SP) a Cabo Frio (RJ)",
    "ano": 2004
  },
  {
    "atividade": "Projeto Petrobrás – Abrolhos",
    "periodo": "06 a 19/09/2004",
    "pesquisador": "Ilson Carlos Almeida da Silveira",
    "regiao": "Abrolhos (BA)",
    "ano": 2004
  },
  {
    "atividade": "Projeto Variações Holocênicas na Paleoprodutividade",
    "periodo": "02 a 14/12/2004",
    "pesquisador": "Michel Michaelovitch Mahiques",
    "regiao": "de Santa Catarina a Cabo Frio (RJ)",
    "ano": 2004
  },
  {
    "atividade": "Projeto ECOSAN – Etapa Fundeios",
    "periodo": "27 a 30/01/2005",
    "pesquisador": "Francisco Luiz Vicentini Neto",
    "regiao": "São Sebastião (SP)",
    "ano": 2005
  },
  {
    "atividade": "Projeto Petrobrás – Abrolhos",
    "periodo": "09 a 24/3/2005",
    "pesquisador": "IIson Carlos Almeida da Silveira",
    "regiao": "Abrolhos (BA)",
    "ano": 2005
  },
  {
    "atividade": "Disciplina Métodos e Técnicas de Estudo em Oceanografia",
    "periodo": "06 a 10/04/2005",
    "pesquisador": "IIson Carlos Almeida da Silveira",
    "regiao": "Ubatuba (SP)",
    "ano": 2005
  },
  {
    "atividade": "Projeto ECOSAN – Etapa: Fundeios",
    "periodo": "26 a 28/06/2005",
    "pesquisador": "Francisco Luiz Vicentini Neto",
    "regiao": "de São Sebastião a Peruibe (SP)",
    "ano": 2005
  },
  {
    "atividade": "Projeto ECOSAN – Etapa: Fundeios",
    "periodo": "18 e 19/08/2005",
    "pesquisador": "Francisco Luiz Vicentini Neto",
    "regiao": "de São Sebastião a Peruibe (SP)",
    "ano": 2005
  },
  {
    "atividade": "Projeto ECOSAN – Etapa: Plataforma Bentos",
    "periodo": "26/08 a 05/09/2005",
    "pesquisador": "Ana Maria Setubal Pires Vanin",
    "regiao": "de São Sebastião a Peruibe (SP)",
    "ano": 2005
  },
  {
    "atividade": "Projeto ECOSAN – Etapa: Trofodinâmica",
    "periodo": "09 a 15/09/2005",
    "pesquisador": "Thais Navajas Corbisier",
    "regiao": "de São Sebastião a Peruibe (SP)",
    "ano": 2005
  },
  {
    "atividade": "Projeto ECOSAN – Etapa: Plataforma Hidrografia",
    "periodo": "19 a 26/09/2005",
    "pesquisador": "June Ferraz Dias",
    "regiao": "de São Sebastião a Peruíbe (SP)",
    "ano": 2005
  },
  {
    "atividade": "Projeto ECOSAN – Etapa: Radiometria",
    "periodo": "11 a 15/10/2005",
    "pesquisador": "Sonia Maria F. Gianesella-Galvão",
    "regiao": "de São Sebastião a Peruíbe (SP)",
    "ano": 2005
  },
  {
    "atividade": "Projeto ECOSAN – Etapa: Plataforma Hidrografia",
    "periodo": "28 a 30/10/2005",
    "pesquisador": "June Ferraz Dias",
    "regiao": "de São Sebastião a Peruíbe (SP)",
    "ano": 2005
  },
  {
    "atividade": "Projeto ECOSAN – Etapa Recuperação de Fundeios",
    "periodo": "03 a 07/11/2005",
    "pesquisador": "Francisco Luiz Vicentini Neto",
    "regiao": "de São Sebastião a Peruíbe (SP)",
    "ano": 2005
  },
  {
    "atividade": "Projeto ECOSAN – Etapa: Prospecção de Plumas",
    "periodo": "28 a 30/11/2005",
    "pesquisador": "Belmiro Mendes de Castro Filho",
    "regiao": "de São Sebastião a Peruíbe (SP)",
    "ano": 2005
  },
  {
    "atividade": "Projeto ECOSAN – Etapa: Fundeios",
    "periodo": "06 a 10/02/2006",
    "pesquisador": "Francisco Luiz Vicentini Neto",
    "regiao": "de Peruíbe a Ilha de São Sebastião (SP)",
    "ano": 2006
  },
  {
    "atividade": "Projeto ECOSAN – Etapa: Plataforma Bentos",
    "periodo": "12 a 22/02/2006",
    "pesquisador": "Ana Maria Setubal Pires Vanin",
    "regiao": "de Peruíbe a Ilha de São Sebastião (SP)",
    "ano": 2006
  },
  {
    "atividade": "Projeto ECOSAN – Etapa: Trofodinâmica",
    "periodo": "01 a 06/03/2006",
    "pesquisador": "Thais Navajas Corbisier",
    "regiao": "de Peruíbe a Ilha de São Sebastião (SP)",
    "ano": 2006
  },
  {
    "atividade": "Projeto ECOSAN – Etapa: Fundeios",
    "periodo": "6/3/2006",
    "pesquisador": "Francisco Luiz Vicentini Neto",
    "regiao": "de Peruíbe a Ilha de São Sebastião (SP)",
    "ano": 2006
  },
  {
    "atividade": "Projeto ECOSAN – Etapa: Plataforma Hidrografia",
    "periodo": "11 a 19/03/2006",
    "pesquisador": "June Ferraz Dias",
    "regiao": "de Peruíbe a Ilha de São Sebastião (SP)",
    "ano": 2006
  },
  {
    "atividade": "Projeto ECOSAN – Etapa: Radiometria",
    "periodo": "22 a 26/03/2006",
    "pesquisador": "Flávia Marisa Prado Saldanha Correa",
    "regiao": "de Peruíbe a Ilha de São Sebastião (SP)",
    "ano": 2006
  },
  {
    "atividade": "Projeto ECOSAN – Etapa: Prospecção de Plumas",
    "periodo": "28/03 a 01/04/2006",
    "pesquisador": "Belmiro Mendes de Castro Filho",
    "regiao": "de Peruíbe a Ilha de São Sebastião (SP)",
    "ano": 2006
  },
  {
    "atividade": "Disciplina Métodos e Técnicas de Estudo em Oceanografia",
    "periodo": "04 a 09/04/2006",
    "pesquisador": "Mario Katsuragawa",
    "regiao": "Proximidades das Ilhas Anchieta e Vitória (SP)",
    "ano": 2006
  },
  {
    "atividade": "Projeto ECOSAN – Etapa: Recuperação de Fundeios",
    "periodo": "17 a 20/04/2006",
    "pesquisador": "Francisco Luiz Vicentini Neto",
    "regiao": "de Peruíbe à Ilha de São Sebastião (SP)",
    "ano": 2006
  }
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
      {fonte.instituicao}
      <span aria-hidden="true">↗</span>
    </a>
  );
}

function ProjetoCard({ projeto }) {
  const cores = {
    cyan: "border-cyan-200/20 bg-cyan-300/[0.06]",
    emerald: "border-emerald-200/20 bg-emerald-300/[0.06]",
    yellow: "border-yellow-100/20 bg-yellow-200/[0.06]",
  };

  return (
    <details
      id={projeto.id}
      className={`group scroll-mt-32 overflow-hidden rounded-[2rem] border ${cores[projeto.cor]} backdrop-blur-xl`}
    >
      <summary className="cursor-pointer list-none p-7 md:p-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-cyan-100">
                {projeto.sigla}
              </span>
              <span className="text-xs font-bold text-yellow-100">
                {projeto.periodo}
              </span>
              <span className="text-xs text-slate-400">{projeto.categoria}</span>
            </div>
            <h3 className="mt-4 text-2xl font-black leading-tight text-white md:text-3xl">
              {projeto.titulo}
            </h3>
            <p className="mt-3 max-w-4xl leading-7 text-slate-300">
              {projeto.resumo}
            </p>
          </div>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xl font-black text-cyan-100 transition group-open:rotate-45">
            +
          </div>
        </div>
      </summary>

      <div className="border-t border-white/10 px-7 pb-8 pt-7 md:px-8">
        <div className="space-y-5">
          {projeto.texto.map((paragrafo) => (
            <p
              key={paragrafo}
              className="max-w-5xl text-[15px] leading-7 text-slate-200 md:text-base md:leading-8"
            >
              {paragrafo}
            </p>
          ))}
        </div>

        <div className="mt-7 rounded-2xl border border-emerald-200/15 bg-black/20 p-5">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
            Por que isso importa
          </p>
          <p className="mt-3 leading-7 text-slate-200">{projeto.importancia}</p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {projeto.termos.map((termo) => (
            <span
              key={termo}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
            >
              {termo}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {projeto.fontes.map((fonte) => (
            <FonteChip key={fonte} id={fonte} />
          ))}
        </div>
      </div>
    </details>
  );
}

function normalizar(texto = "") {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export default function Ciencia() {
  const [buscaProjeto, setBuscaProjeto] = useState("");
  const [buscaCruzeiro, setBuscaCruzeiro] = useState("");
  const [ano, setAno] = useState("todos");
  const [mostrar, setMostrar] = useState(30);

  const projetosFiltrados = useMemo(() => {
    const termo = normalizar(buscaProjeto.trim());
    if (!termo) return projetos;
    return projetos.filter((projeto) =>
      normalizar(
        [
          projeto.sigla,
          projeto.titulo,
          projeto.categoria,
          projeto.resumo,
          ...projeto.texto,
          ...projeto.termos,
        ].join(" ")
      ).includes(termo)
    );
  }, [buscaProjeto]);

  const anos = useMemo(
    () =>
      [...new Set(cruzeiros.map((item) => item.ano).filter(Boolean))].sort(
        (a, b) => a - b
      ),
    []
  );

  const cruzeirosFiltrados = useMemo(() => {
    const termo = normalizar(buscaCruzeiro.trim());
    return cruzeiros.filter((item) => {
      const bateAno = ano === "todos" || String(item.ano) === ano;
      const bateBusca =
        !termo ||
        normalizar(
          [
            item.atividade,
            item.periodo,
            item.pesquisador,
            item.regiao,
            item.ano,
          ].join(" ")
        ).includes(termo);
      return bateAno && bateBusca;
    });
  }, [buscaCruzeiro, ano]);

  const exibidos = cruzeirosFiltrados.slice(0, mostrar);

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#020817] text-white">
      {/* FUNDO */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_10%_10%,rgba(34,211,238,0.20),transparent_28%),radial-gradient(circle_at_90%_18%,rgba(16,185,129,0.15),transparent_26%),radial-gradient(circle_at_50%_90%,rgba(250,204,21,0.08),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-[#020817]/30 via-[#061826]/85 to-[#020817]" />

      <div className="relative z-10">
        {/* HERO */}
        <header className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-emerald-200/25 bg-emerald-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-emerald-100">
                Ciência e Pesquisa
              </span>
              <span className="rounded-full border border-cyan-200/20 bg-cyan-300/10 px-4 py-2 text-xs font-bold text-cyan-100">
                1967–2006
              </span>
            </div>

            <h1 className="mt-7 max-w-6xl text-5xl font-black leading-[0.98] text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-emerald-200 to-yellow-100 md:text-7xl">
              Do navio ao conhecimento
            </h1>

            <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-12">
              <p className="text-lg leading-8 text-slate-200 md:text-xl md:leading-9">
                O Prof. W. Besnard não transportava apenas pesquisadores. Ele
                transformava perguntas em estações oceanográficas, estações em
                amostras e séries de dados, e essas evidências em conhecimento
                sobre circulação, clima, ecossistemas, pesca, geologia,
                poluição e recursos do mar.
              </p>

              <p className="leading-7 text-slate-400 lg:pt-1">
                Esta página reconstrói os principais programas científicos da
                embarcação e abre o catálogo histórico de cruzeiros à
                exploração. Quando a expansão de uma sigla ou a finalidade de
                uma campanha ainda não pôde ser verificada em documentação
                segura, o nome original do catálogo é preservado em vez de se
                completar a história por suposição.
              </p>
            </div>
          </div>
        </header>

        {/* NÚMEROS */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {numeros.map(([numero, texto]) => (
              <div
                key={texto}
                className="rounded-[1.75rem] border border-white/12 bg-white/[0.06] p-6 backdrop-blur-xl"
              >
                <p className="text-4xl font-black text-cyan-200">{numero}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{texto}</p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs leading-5 text-slate-500">
            Nota: fontes institucionais usam métricas diferentes para
            "estações" e "pontos de coleta"; por isso esta página evita
            transformar estimativas distintas em um único número aparentemente
            exato.
          </p>
        </section>

        {/* COMO A CIÊNCIA ACONTECE */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-200">
              O trabalho invisível
            </p>
            <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">
              Como um cruzeiro se transforma em ciência?
            </h2>
            <p className="mt-5 max-w-3xl leading-7 text-slate-300">
              A coleta no mar é apenas uma etapa de uma cadeia longa. É essa
              cadeia que faz uma amostra manter valor científico décadas depois.
            </p>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {fluxoCientifico.map((item) => (
              <div
                key={item.n}
                className="rounded-[1.75rem] border border-white/10 bg-black/20 p-6"
              >
                <p className="text-sm font-black text-cyan-200">{item.n}</p>
                <h3 className="mt-2 text-xl font-black text-white">
                  {item.titulo}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ÁREAS */}
        <section className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="max-w-4xl">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
                Um oceano, várias lentes
              </p>
              <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">
                As Oceanografias se encontravam a bordo
              </h2>
              <p className="mt-5 leading-7 text-slate-300">
                A força do Besnard não estava em servir apenas a uma área, mas
                em permitir que diferentes disciplinas observassem o mesmo mar,
                muitas vezes durante a mesma campanha.
              </p>
            </div>

            <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {areas.map((area) => (
                <div
                  key={area.titulo}
                  className="rounded-[1.75rem] border border-white/10 bg-black/20 p-6"
                >
                  <span className="text-3xl text-emerald-200">
                    {area.simbolo}
                  </span>
                  <h3 className="mt-4 text-xl font-black text-white">
                    {area.titulo}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {area.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJETOS */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-100">
                Programas científicos
              </p>
              <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">
                O que cada grande projeto queria descobrir?
              </h2>
            </div>

            <div>
              <p className="leading-7 text-slate-300">
                Os cartões abaixo não são simples expansões de siglas. Cada um
                procura reconstruir a pergunta científica, a escala do estudo,
                a forma como o Besnard foi usado e a importância do programa.
                Os textos são sínteses originais construídas a partir das fontes
                indicadas.
              </p>

              <input
                value={buscaProjeto}
                onChange={(e) => setBuscaProjeto(e.target.value)}
                placeholder="Buscar projeto, região ou tema — ex.: ressurgência, pesca, Antártica..."
                className="mt-5 w-full rounded-2xl border border-white/15 bg-black/25 px-5 py-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-200/40"
              />
            </div>
          </div>

          <div className="mt-9 space-y-4">
            {projetosFiltrados.map((projeto) => (
              <ProjetoCard key={projeto.id} projeto={projeto} />
            ))}
          </div>
        </section>

        {/* CATÁLOGO */}
        <section className="border-y border-cyan-200/10 bg-cyan-300/[0.035]">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
                  Arquivo operacional
                </p>
                <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">
                  Explore os 263 registros datados do catálogo
                </h2>
                <p className="mt-5 leading-7 text-slate-300">
                  Aqui o visitante pode procurar nomes de projetos,
                  pesquisadores, regiões, disciplinas ou anos. A grafia foi
                  mantida tão próxima quanto possível do catálogo histórico;
                  pequenas inconsistências de nomes e OCR deverão ser
                  conferidas futuramente contra os diários originais.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-[1fr_180px]">
                <input
                  value={buscaCruzeiro}
                  onChange={(e) => {
                    setBuscaCruzeiro(e.target.value);
                    setMostrar(30);
                  }}
                  placeholder="Buscar: DEPROAS, Matsuura, Cabo Frio, bentos..."
                  className="rounded-2xl border border-white/15 bg-black/25 px-5 py-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-200/40"
                />

                <select
                  value={ano}
                  onChange={(e) => {
                    setAno(e.target.value);
                    setMostrar(30);
                  }}
                  className="rounded-2xl border border-white/15 bg-[#06121f] px-4 py-4 text-sm text-white outline-none focus:border-cyan-200/40"
                >
                  <option value="todos">Todos os anos</option>
                  {anos.map((item) => (
                    <option key={item} value={String(item)}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-bold text-cyan-100">
                {cruzeirosFiltrados.length} registro
                {cruzeirosFiltrados.length === 1 ? "" : "s"} encontrado
                {cruzeirosFiltrados.length === 1 ? "" : "s"}
              </p>
              <a
                href="/documentos/cruzeiros-oceanograficos-besnard.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-300/10 px-4 py-2 text-sm font-black text-cyan-100 transition hover:bg-cyan-300/20"
              >
                Abrir PDF original dos cruzeiros ↗
              </a>
            </div>

            <div className="mt-5 overflow-hidden rounded-[2rem] border border-white/10 bg-black/20">
              <div className="hidden grid-cols-[1.15fr_0.65fr_1fr_1fr] gap-4 border-b border-white/10 bg-white/5 px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-slate-400 lg:grid">
                <span>Projeto / atividade</span>
                <span>Período</span>
                <span>Pesquisador-chefe</span>
                <span>Região</span>
              </div>

              <div className="divide-y divide-white/[0.07]">
                {exibidos.map((item, index) => (
                  <div
                    key={`${item.atividade}-${item.periodo}-${index}`}
                    className="grid gap-3 px-6 py-5 text-sm transition hover:bg-cyan-300/[0.05] lg:grid-cols-[1.15fr_0.65fr_1fr_1fr] lg:gap-4"
                  >
                    <div>
                      <p className="font-black leading-6 text-white">
                        {item.atividade}
                      </p>
                      <p className="mt-1 text-xs text-cyan-200 lg:hidden">
                        {item.ano}
                      </p>
                    </div>
                    <p className="leading-6 text-yellow-100">{item.periodo}</p>
                    <p className="leading-6 text-slate-300">
                      {item.pesquisador}
                    </p>
                    <p className="leading-6 text-slate-400">{item.regiao}</p>
                  </div>
                ))}
              </div>

              {exibidos.length === 0 && (
                <div className="p-10 text-center text-slate-400">
                  Nenhum registro corresponde aos filtros atuais.
                </div>
              )}
            </div>

            {mostrar < cruzeirosFiltrados.length && (
              <div className="mt-6 text-center">
                <button
                  type="button"
                  onClick={() => setMostrar((valor) => valor + 30)}
                  className="rounded-2xl border border-cyan-200/20 bg-cyan-300/10 px-6 py-3 font-black text-cyan-100 transition hover:bg-cyan-300/20"
                >
                  Mostrar mais registros
                </button>
              </div>
            )}
          </div>
        </section>

        {/* REGIÕES */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-200">
              Atlas científico
            </p>
            <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">
              Não é apenas por onde o navio passou, mas onde produziu
              observações
            </h2>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {regioes.map((regiao) => (
              <div
                key={regiao.titulo}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6"
              >
                <h3 className="text-xl font-black text-white">
                  {regiao.titulo}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {regiao.texto}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {regiao.projetos.map((projeto) => (
                    <span
                      key={projeto}
                      className="rounded-full border border-emerald-200/15 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-100"
                    >
                      {projeto}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DIÁRIOS */}
        <section className="border-y border-yellow-100/10 bg-yellow-200/[0.035]">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-100">
                  Fonte-mãe
                </p>
                <p className="mt-3 text-7xl font-black text-yellow-100">68</p>
                <h2 className="mt-3 text-3xl font-black text-white">
                  diários de bordo
                </h2>
                <p className="mt-5 leading-7 text-slate-300">
                  Em 2016, Pesquisa FAPESP e o próprio IOUSP registraram que os
                  68 diários estavam preservados em uma sala refrigerada da
                  coleção biológica e sendo catalogados pela equipe do Museu.
                </p>
              </div>

              <div className="space-y-5">
                <div className="rounded-[2rem] border border-white/10 bg-black/20 p-7">
                  <h3 className="text-2xl font-black text-white">
                    O que existe nesses volumes?
                  </h3>
                  <p className="mt-4 leading-7 text-slate-300">
                    A catalogação procurava identificar pesquisas, instrumentos,
                    projetos e pesquisadores de cada viagem. Esses registros
                    dão contexto às amostras e aos dados: ajudam a reconstruir
                    quando, onde e em qual missão uma observação foi produzida.
                  </p>
                  <p className="mt-4 leading-7 text-slate-300">
                    O catálogo de cruzeiros utilizado nesta página é uma
                    síntese histórica ligada aos registros de bordo. Os diários
                    originais, porém, têm potencial para revelar muito mais:
                    rotina operacional, mudanças de estação, problemas de
                    equipamento, participantes e decisões que uma tabela
                    resumida não conserva.
                  </p>
                </div>

                <div className="rounded-[2rem] border border-yellow-100/20 bg-yellow-200/[0.07] p-7">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-100">
                    Situação desta investigação
                  </p>
                  <h3 className="mt-3 text-xl font-black text-white">
                    Não localizamos uma digitalização pública integral dos 68
                    diários
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Foram encontrados registros públicos sobre sua preservação
                    e catalogação, mas não um repositório aberto com os 68
                    volumes digitalizados. Por isso, esta página não reproduz
                    páginas que não tivemos acesso. O próximo passo documental
                    é buscar o Museu, a Biblioteca e a coleção do IOUSP para
                    verificar catálogo atual, condições de consulta e eventual
                    possibilidade de digitalização.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <FonteChip id="fapesp-adeus" />
                  <FonteChip id="colbio" />
                  <FonteChip id="cruzeiros" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DADOS CONTINUAM */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-[2rem] border border-emerald-200/15 bg-gradient-to-br from-emerald-300/10 via-cyan-300/[0.06] to-transparent p-8 md:p-10">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-200">
              Depois da última viagem
            </p>
            <h2 className="mt-3 max-w-4xl text-4xl font-black text-white md:text-5xl">
              O navio parou. Os dados não.
            </h2>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-200">
              Uma amostra coletada em 1985 pode ser medida novamente com uma
              técnica que ainda não existia naquela época. Uma série de
              ictioplâncton pode ser combinada com campanhas posteriores para
              investigar padrões de décadas. Um registro de bordo pode
              recuperar o contexto de uma coleta esquecida.
            </p>
            <p className="mt-5 max-w-4xl leading-7 text-slate-400">
              Esse é um dos legados mais profundos de uma infraestrutura
              científica: o valor de uma campanha pode crescer depois que ela
              termina. Publicações recentes continuam combinando séries
              históricas obtidas a bordo do Besnard com material de outras
              embarcações.
            </p>
          </div>
        </section>

        {/* PONTE PARA LEGADO */}
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="rounded-[2rem] border border-cyan-200/15 bg-gradient-to-r from-cyan-300/10 via-emerald-300/[0.08] to-yellow-200/[0.06] p-8 md:p-10">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-100">
              Da ciência ao legado
            </p>
            <h2 className="mt-3 max-w-4xl text-4xl font-black leading-tight text-white md:text-5xl">
              O Besnard foi um elo, não um ponto final.
            </h2>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-200">
              O conhecimento acumulado, a formação de equipes, as coleções, os
              procedimentos de bordo e a própria expectativa de que a
              oceanografia brasileira precisa de plataformas de pesquisa
              continuaram depois dele. Alpha Crucis e Alpha Delphini pertencem
              a outra geração tecnológica, mas existem dentro de uma história
              institucional que o Besnard ajudou a construir.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}