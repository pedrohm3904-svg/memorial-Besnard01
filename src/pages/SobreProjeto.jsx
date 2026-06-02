export default function SobreProjeto() {
  return (
    <section className="py-16">
      <h1 className="text-5xl font-black text-cyan-200 mb-8">
        Sobre o Projeto
      </h1>

      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2 rounded-[2rem] bg-white/10 border border-white/20 p-8">
          <p className="text-slate-100 leading-relaxed">
            Este memorial nasce como uma proposta colaborativa de preservação
            da memória científica e afetiva do N/Oc Prof. Wladimir Besnard,
            articulando história da oceanografia brasileira, território
            santista, extensão universitária e divulgação científica.
          </p>

          <p className="mt-4 text-slate-300 leading-relaxed">
            O projeto se alinha a iniciativas de extensão universitária do
            SEAlegre, promovendo memória oceânica e conexão entre universidade
            e sociedade.
          </p>
        </div>

        <div className="rounded-[2rem] bg-slate-950/35 border border-white/20 p-6 text-center">
          <img
            src="/imagens/sealegre-logo.png"
            alt="Logo do SEAlegre"
            className="w-44 h-44 object-contain mx-auto rounded-full bg-white"
          />

          <p className="mt-5 text-cyan-100 font-bold">
            Extensão, ciência e comunidade
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-[2rem] bg-cyan-300/10 border border-cyan-200/20 p-8">
        <h2 className="text-3xl font-black text-cyan-200 mb-4">
          Contribua com o Memorial
        </h2>

        <p className="text-slate-200 leading-relaxed mb-6">
          Pessoas que tenham fotos, relatos, documentos ou memórias relacionadas
          ao Besnard podem enviar contribuições pelo formulário. O conteúdo será
          revisado antes de qualquer publicação.
        </p>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeasF6Rqmz-a6omaOirhSEUFWUDuegpMxnIrKBoRVOC4HfczQ/viewform?usp=publish-editor"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-gradient-to-r from-cyan-300 to-emerald-300 text-slate-950 font-black px-8 py-4 rounded-2xl hover:scale-105 transition"
        >
          Enviar contribuição
        </a>
      </div>
    </section>
  );
}