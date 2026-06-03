export default function Home() {
  return (
    <>
      <header className="py-16 md:py-24">
        <div className="max-w-5xl">
          <p className="inline-block px-5 py-2 mb-6 rounded-full bg-[#164E63]/25 border border-white/10 text-[#D6B36A] text-sm">
            Memorial digital • Ciências do Mar • Santos-SP
          </p>

          <h1
            translate="no"
            className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight text-slate-100"
          >
            N/Oc Prof. Wladimir Besnard
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-4xl">
            Este memorial digital é dedicado à trajetória do Navio Oceanográfico
            Professor Wladimir Besnard, uma embarcação científica que marcou a
            história da oceanografia brasileira e ajudou a formar gerações de
            pesquisadores das Ciências do Mar.
          </p>
        </div>
      </header>

      <section className="rounded-[2rem] bg-[#0F1E2E]/70 backdrop-blur-xl border border-white/10 p-6 sm:p-8 md:p-10">
        <figure className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-[#0F1E2E]/70 mb-10">
          <img
            src="/imagens/besnard-naufragio-1.jpg"
            alt="N/Oc Prof. Wladimir Besnard no Porto de Santos"
            className="w-full h-[320px] sm:h-[460px] md:h-[560px] object-cover grayscale-[20%]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#08111F]/90 via-transparent to-transparent" />

          <figcaption className="absolute bottom-0 p-6 text-slate-300 text-sm sm:text-base">
            Registro visual do Besnard na região portuária de Santos.
          </figcaption>
        </figure>

        <div className="max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-black text-[#D6B36A] mb-6">
            Um laboratório flutuante para o Brasil
          </h2>

          <div className="space-y-5 text-slate-200 leading-relaxed text-base md:text-lg">
            <p>
              Construído na Noruega em 1950 e incorporado ao Brasil em 1967, o
              Professor Wladimir Besnard respondeu a uma demanda central da
              oceanografia nacional: a necessidade de uma embarcação capaz de
              operar como laboratório flutuante, permitindo pesquisas em mar
              aberto e em diferentes regiões da costa brasileira.
            </p>

            <p>
              Ao longo de sua trajetória, o navio apoiou pesquisas
              oceanográficas no Atlântico Sul, participou de campanhas
              científicas e contribuiu para a consolidação de uma cultura de
              pesquisa em campo nas Ciências do Mar. Sua importância ultrapassa
              a dimensão técnica da embarcação: o Besnard também representa uma
              fase de construção institucional da oceanografia brasileira.
            </p>

            <p>
              A bordo, pesquisadores, estudantes e equipes técnicas puderam
              desenvolver atividades ligadas à oceanografia física, química,
              biológica e geológica. Por isso, o navio se tornou uma referência
              para a formação prática de profissionais e para a produção de
              conhecimento sobre o oceano.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-[2rem] bg-[#08111F]/60 border border-white/10 p-6 sm:p-8 md:p-10">
        <div className="max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-black text-[#D6B36A] mb-5">
            Memória científica e território santista
          </h2>

          <div className="space-y-5 text-slate-300 leading-relaxed text-base md:text-lg">
            <p>
              A presença do Besnard em Santos aproxima a história da
              oceanografia brasileira do território onde hoje se desenvolvem
              diversas iniciativas acadêmicas e de divulgação científica
              relacionadas ao mar. Seu naufrágio parcial no Porto de Santos, em
              2026, reforçou a necessidade de pensar formas de preservação,
              registro e comunicação pública de sua trajetória.
            </p>

            <p>
              Este site nasce como uma primeira etapa de um memorial em
              construção. A proposta é reunir informações históricas, registros
              visuais, referências e futuras contribuições de pessoas que
              tenham vivenciado, estudado ou acompanhado a história do navio.
            </p>

            <p>
              O memorial também dialoga com a ideia de criar materiais físicos,
              como cartazes, pôsteres, placas e QR Codes, capazes de conectar
              espaços presenciais a um acervo digital mais amplo. Dessa forma,
              a memória do Besnard pode circular entre eventos, instituições de
              ensino, espaços culturais e ações de extensão universitária.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-[2rem] bg-[#0F1E2E]/70 border border-white/10 p-6 sm:p-8 md:p-10">
        <div className="max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-black text-[#D6B36A] mb-5">
            Um acervo em desenvolvimento
          </h2>

          <div className="space-y-5 text-slate-300 leading-relaxed text-base md:text-lg">
            <p>
              O conteúdo reunido neste memorial parte de referências públicas,
              registros jornalísticos, fontes institucionais e documentos de
              apoio ao projeto. A intenção não é encerrar a história do navio em
              uma única narrativa, mas abrir um espaço organizado para
              preservação, consulta e ampliação gradual do acervo.
            </p>

            <p>
              Com o tempo, novas páginas poderão incluir mapas de expedições,
              imagens históricas, depoimentos, documentos, linhas do tempo mais
              detalhadas e materiais educativos sobre a contribuição do Besnard
              para a oceanografia brasileira.
            </p>

            <p>
              Assim, o memorial busca valorizar o navio não apenas como objeto
              histórico, mas como símbolo de uma tradição científica ligada ao
              mar, à pesquisa pública, à universidade e à formação de pessoas
              dedicadas a compreender o oceano.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-[2rem] bg-[#08111F]/60 border border-white/10 p-6 sm:p-8 md:p-10">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            ["1950", "Construção na Noruega"],
            ["1967", "Incorporação ao Brasil"],
            ["2006", "Última missão registrada"],
            ["2026", "Naufrágio parcial em Santos"],
          ].map(([ano, texto]) => (
            <div key={ano} className="border-l border-[#D6B36A]/50 pl-5">
              <p className="text-3xl font-black text-[#D6B36A]">{ano}</p>
              <p className="text-sm text-slate-400 mt-2">{texto}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}