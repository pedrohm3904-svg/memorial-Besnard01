export default function Home() {
  return (
    <>
      <header className="grid md:grid-cols-2 gap-10 items-center py-20">
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
              href="/galeria"
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-300 to-emerald-300 text-slate-950 font-black hover:scale-105 transition"
            >
              Ver arquivo visual
            </a>

            <a
              href="/historia"
              className="px-6 py-3 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/20 transition"
            >
              Conhecer a história
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

      <section className="mt-16 grid md:grid-cols-3 gap-6">
        <a
          href="/historia"
          className="rounded-[2rem] bg-white/10 border border-white/20 p-8 hover:bg-cyan-300/10 transition"
        >
          <h2 className="text-2xl font-black text-cyan-200 mb-3">História</h2>
          <p className="text-slate-300">
            Conheça a trajetória do navio desde sua construção até sua presença
            no Porto de Santos.
          </p>
        </a>

        <a
          href="/ciencia"
          className="rounded-[2rem] bg-white/10 border border-white/20 p-8 hover:bg-emerald-300/10 transition"
        >
          <h2 className="text-2xl font-black text-emerald-200 mb-3">Ciência</h2>
          <p className="text-slate-300">
            Entenda a importância do Besnard para a oceanografia brasileira e
            para as Ciências do Mar.
          </p>
        </a>

        <a
          href="/legado"
          className="rounded-[2rem] bg-white/10 border border-white/20 p-8 hover:bg-yellow-200/10 transition"
        >
          <h2 className="text-2xl font-black text-yellow-100 mb-3">Legado</h2>
          <p className="text-slate-300">
            Um símbolo da memória científica, da formação de pesquisadores e da
            história marítima nacional.
          </p>
        </a>
      </section>
    </>
  );
}