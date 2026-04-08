export default function PontuacaoPage() {
  
  const dadosPontuacao = [
    { pos: 1, nacional: 750, grandSlam: 500, campeonato: 250, torneio: 50 },
    { pos: 2, nacional: 525, grandSlam: 350, campeonato: 175, torneio: 35 },
    { pos: 3, nacional: 375, grandSlam: 250, campeonato: 125, torneio: 25 },
    { pos: 4, nacional: 270, grandSlam: 180, campeonato: 90, torneio: 18 },
    { pos: 5, nacional: 180, grandSlam: 120, campeonato: 60, torneio: 12 },
    { pos: 6, nacional: 168, grandSlam: 112, campeonato: 56, torneio: "11,2" },
    { pos: 7, nacional: 156, grandSlam: 104, campeonato: 52, torneio: "10,4" },
    { pos: 8, nacional: 144, grandSlam: 96, campeonato: 48, torneio: "9,6" },
    { pos: 9, nacional: 120, grandSlam: 80, campeonato: 40, torneio: 8 },
    { pos: 10, nacional: 111, grandSlam: 74, campeonato: 37, torneio: "7,4" },
    { pos: 11, nacional: 102, grandSlam: 68, campeonato: 34, torneio: "6,8" },
    { pos: 12, nacional: 93, grandSlam: 62, campeonato: 31, torneio: "6,2" },
    { pos: 13, nacional: 75, grandSlam: 50, campeonato: 25, torneio: 5 },
    { pos: 14, nacional: 69, grandSlam: 46, campeonato: 23, torneio: "4,6" },
    { pos: 15, nacional: 63, grandSlam: 42, campeonato: 21, torneio: "4,2" },
    { pos: 16, nacional: 57, grandSlam: 38, campeonato: 19, torneio: "3,8" },
    { pos: 17, nacional: 45, grandSlam: 30, campeonato: 15, torneio: 3 },
    { pos: 18, nacional: "43,5", grandSlam: 29, campeonato: "14,5", torneio: "2,9" },
    { pos: 19, nacional: 42, grandSlam: 28, campeonato: 14, torneio: "2,8" },
    { pos: 20, nacional: "40,5", grandSlam: 27, campeonato: "13,5", torneio: "2,7" },
  ];

  return (
    <main className="container mx-auto px-2 md:px-4 pb-10 max-w-5xl">
      {/* Cabeçalho mais compacto no mobile */}
      <div className="text-center mt-4 mb-6">
        <h1 className="text-xl md:text-4xl font-black text-green-800 mb-1 px-2 leading-tight">
          Sistema de Pontuação Oficial
        </h1>
        <p className="text-[11px] md:text-lg text-gray-600 px-4">
          Distribuição de pontos por colocação e categoria de evento.
        </p>
      </div>

      {/* Tabela com melhorias de espaço */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-center border-collapse min-w-[500px]">
            <thead>
              <tr className="bg-green-700 text-white uppercase text-[10px] md:text-sm font-bold tracking-wider">
                <th className="py-3 px-2 text-left w-16 md:w-24">#</th>
                <th className="py-3 px-2 bg-green-800">Nacional</th>
                <th className="py-3 px-2">Grand Slam</th>
                <th className="py-3 px-2 bg-green-800">Campeonato</th>
                <th className="py-3 px-2">Torneio</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 font-medium text-xs md:text-base">
              {dadosPontuacao.map((linha) => (
                <tr key={linha.pos} className="border-b hover:bg-green-50/50 transition">
                  <td className="py-2.5 px-2 text-left font-bold whitespace-nowrap">
                    {linha.pos === 1 && <span>🥇 1º</span>}
                    {linha.pos === 2 && <span>🥈 2º</span>}
                    {linha.pos === 3 && <span>🥉 3º</span>}
                    {linha.pos > 3 && <span className="ml-1">{linha.pos}º</span>}
                  </td>
                  
                  <td className="py-2.5 px-2 font-bold text-green-700 bg-gray-50/50 md:text-lg">{linha.nacional}</td>
                  <td className="py-2.5 px-2 md:text-lg">{linha.grandSlam}</td>
                  <td className="py-2.5 px-2 bg-gray-50/50 md:text-lg">{linha.campeonato}</td>
                  <td className="py-2.5 px-2 text-gray-500 md:text-lg">{linha.torneio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Cards informativos ajustados para mobile */}
      <div className="mt-6 grid md:grid-cols-2 gap-3 px-1">
        <div className="bg-green-50 border-l-4 border-green-600 p-3 rounded shadow-sm">
          <h3 className="font-bold text-green-900 text-sm md:text-base">Critérios de Desempate</h3>
          <p className="text-[11px] md:text-sm text-green-800 mt-1 leading-relaxed">
            Maior número de 1º lugares, seguido de 2º lugares e assim sucessivamente.
          </p>
        </div>
        <div className="bg-gray-50 border-l-4 border-gray-400 p-3 rounded shadow-sm">
          <h3 className="font-bold text-gray-900 text-sm md:text-base">Observação</h3>
          <p className="text-[11px] md:text-sm text-gray-700 mt-1 leading-relaxed">
            Pontuações fracionadas mantêm a proporcionalidade entre torneios de portes diferentes.
          </p>
        </div>
      </div>
    </main>
  );
}