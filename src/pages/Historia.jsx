export default function Historia() {
  const timeline = [
    ["1950", "Construção do navio na Noruega."],
    ["1967", "Incorporação ao Brasil como laboratório flutuante."],
    ["1967–2006", "Período de expedições oceanográficas. Última missão em 20/04/2006."],
    ["2008", "Incêndio compromete a navegabilidade e funções operacionais."],
    ["2026", "Naufrágio parcial no Porto de Santos."],
  ];

  return (
    <section className="py-16">
      <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-emerald-200 mb-8">
        História do Navio
      </h1>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/20 p-8">
          <h2 className="text-3xl font-black text-cyan-200 mb-5">
            Contextualização Histórica
          </h2>

          <p className="text-slate-100 leading-relaxed">
            O navio oceanográfico Professor Wladimir Besnard foi construído na
            Noruega em 1950 e incorporado ao Brasil em 1967, atuando como
            laboratório flutuante do Instituto Oceanográfico da USP.
          </p>
        </div>

        <div className="rounded-[2rem] bg-gradient-to-br from-cyan-300/20 via-emerald-300/10 to-yellow-200/10 backdrop-blur-xl border border-cyan-200/30 p-8">
          <h2 className="text-3xl font-black text-emerald-200 mb-5">
            Expedições Oceanográficas
          </h2>

          <p className="text-slate-100 leading-relaxed">
            O período de atividade científica do Besnard ocorreu entre 1967 e
            2006. Após o incêndio de 2008, sua navegabilidade e funções
            operacionais ficaram comprometidas.
          </p>
        </div>
      </div>

      <div className="rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/20 p-8">
        <h2 className="text-4xl font-black text-center text-cyan-200 mb-10">
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
      </div>
    </section>
  );
}