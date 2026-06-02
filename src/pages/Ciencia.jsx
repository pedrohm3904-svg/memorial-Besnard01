export default function Ciencia() {
  const areas = [
    "Oceanografia Biológica",
    "Oceanografia Física",
    "Oceanografia Química",
    "Oceanografia Geológica",
    "Expedições científicas",
    "Formação de pesquisadores",
  ];

  return (
    <section className="py-16">
      <h1 className="text-5xl font-black text-cyan-200 mb-8">
        Ciência e Pesquisa
      </h1>

      <p className="text-slate-100 text-lg leading-relaxed max-w-4xl mb-10">
        O Besnard funcionou como um laboratório flutuante, permitindo a coleta
        de dados oceanográficos, biológicos, químicos e geológicos em diferentes
        regiões do oceano Atlântico Sul.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {areas.map((area) => (
          <div
            key={area}
            className="rounded-[2rem] bg-white/10 border border-white/20 p-7 hover:bg-cyan-300/10 transition"
          >
            <h2 className="text-2xl font-black text-cyan-200">{area}</h2>
            <p className="mt-3 text-slate-300">
              Área associada às atividades científicas realizadas a bordo do
              N/Oc Prof. Wladimir Besnard.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}