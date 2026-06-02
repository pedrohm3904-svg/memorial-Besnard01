export default function Galeria() {
  const imagens = [
    [
      "/imagens/besnard-naufragio-1.jpg",
      "Registro do Besnard parcialmente submerso no Porto de Santos.",
    ],
    [
      "/imagens/besnard-naufragio-2.jpg",
      "Vista ampla da embarcação na região portuária de Santos.",
    ],
  ];

  return (
    <section className="py-16">
      <h1 className="text-center text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-emerald-200 to-yellow-100 mb-4">
        Arquivo Visual
      </h1>

      <p className="text-center text-slate-200 max-w-3xl mx-auto mb-10">
        Registros fotográficos do N/Oc Prof. Wladimir Besnard e de sua presença
        na região portuária de Santos.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {imagens.map(([src, caption]) => (
          <figure
            key={src}
            className="group rounded-[2rem] overflow-hidden bg-white/10 border border-white/20 shadow-2xl"
          >
            <img
              src={src}
              alt={caption}
              className="w-full h-[540px] object-cover group-hover:scale-110 transition duration-700"
            />

            <figcaption className="p-5 text-slate-200 bg-slate-950/40">
              {caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}