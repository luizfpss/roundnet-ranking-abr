export default function PontuacaoPage() {
  
  // Dados exatos da tabela que você mandou no print
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
    <main className="container mx-auto px-4 pb-10 max-w-5xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-4">
          Sistema de Pontuação Oficial
        </h1>
        <p className="text-gray-600 text-lg">
          Distribuição de pontos por colocação e categoria de evento.
        </p>
      </div>

      {/* Container com scroll lateral para celular */}
      <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden overflow-x-auto">
        <table className="w-full text-center border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-green-700 text-white uppercase text-sm font-bold tracking-wider">
              <th className="py-4 px-4 text-left w-20">#</th>
              <th className="py-4 px-4 bg-green-800">Nacional</th>
              <th className="py-4 px-4">Grand Slam</th>
              <th className="py-4 px-4 bg-green-800">Campeonato</th>
              <th className="py-4 px-4">Torneio</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 font-medium text-sm md:text-base">
            {dadosPontuacao.map((linha) => (
              <tr key={linha.pos} className="border-b hover:bg-gray-50 transition">
                {/* Coluna da Posição com destaque para Top 3 */}
                <td className="py-3 px-4 text-left font-bold">
                  {linha.pos === 1 && <span className="text-xl">🥇 1º</span>}
                  {linha.pos === 2 && <span className="text-xl">🥈 2º</span>}
                  {linha.pos === 3 && <span className="text-xl">🥉 3º</span>}
                  {linha.pos > 3 && `${linha.pos}º`}
                </td>
                
                <td className="py-3 px-4 font-bold text-green-700 bg-gray-50">{linha.nacional}</td>
                <td className="py-3 px-4">{linha.grandSlam}</td>
                <td className="py-3 px-4 bg-gray-50">{linha.campeonato}</td>
                <td className="py-3 px-4 text-gray-500">{linha.torneio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-4">
        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
          <h3 className="font-bold text-green-800">Critérios de Desempate</h3>
          <p className="text-sm text-green-800 mt-1">
            Em caso de empate na pontuação final do ranking, o critério de desempate será o número de primeiros lugares, seguido pelo número de segundos lugares e assim sucessivamente.
          </p>
        </div>
        <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded">
          <h3 className="font-bold text-gray-800">Observação</h3>
          <p className="text-sm text-gray-700 mt-1">
            Pontuações fracionadas (ex: 11,2) são aplicadas em torneios de menor porte para manter a proporcionalidade do ranking.
          </p>
        </div>
      </div>
    </main>
  );
}