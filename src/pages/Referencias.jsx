export default function Referencias() {
  const links = [
    {
      title: "Documentário USP",
      text: "Besnard: histórias de um navio oceanográfico",
      url: "https://www.youtube.com/watch?v=BABF6sh2Qq8",
    },
    {
      title: "Mar Sem Fim",
      text: "A saga do navio oceanográfico Prof. W. Besnard",
      url: "https://marsemfim.com.br/a-saga-do-navio-oceanografico-prof-w-besnard-tera-final-feliz/",
    },
    {
      title: "Defesa Aérea & Naval",
      text: "Naufrágio parcial no Porto de Santos",
      url: "https://www.defesaaereanaval.com.br/acidentes-navais/navio-oceanografico-prof-w-besnard-afunda-parcialmente-no-porto-de-santos",
    },
    {
      title: "Wikipedia",
      text: "Resumo histórico do N/Oc Prof. Wladimir Besnard",
      url: "https://pt.wikipedia.org/wiki/NOc_Prof._Wladimir_Besnard",
    },
    {
      title: "Náutica",
      text: "Reportagem sobre o naufrágio em Santos",
      url: "https://nautica.com.br/historia-navio-professor-wladimir-besnard-afundou-santos/",
    },
    {
      title: "Instituto Oceanográfico da USP",
      text: "Histórico oficial do N/Oc Prof. Wladimir Besnard",
      url: "https://www.io.usp.br/index.php/embarcacoes/n-oc-prof-w-besnard.html",
    },
  ];

  return (
    <section className="py-16">
      <h1 className="text-5xl font-black text-[#D6B36A] mb-8">
        Referências
      </h1>

      <div className="grid md:grid-cols-2 gap-4">
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-[#0F1E2E]/70 border border-white/10 p-5 hover:bg-[#164E63]/25 hover:-translate-y-1 transition"
          >
            <h2 className="text-[#D6B36A] font-black">{link.title}</h2>
            <p className="text-slate-300 mt-1">{link.text}</p>
          </a>
        ))}
      </div>
    </section>
  );
}