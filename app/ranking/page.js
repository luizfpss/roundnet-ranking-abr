import { getRanking } from '../../lib/sheets';
import Image from 'next/image';

// Atualiza os dados a cada 60 segundos automaticamente
export const revalidate = 60;

export default async function Home({ searchParams }) {
  // Pega a categoria da URL. Se não tiver nenhuma, usa "Misto - Individual"
  // O await searchParams é necessário nas versões mais novas do Next.js
  const params = await searchParams;
  const categoria = params?.categoria || "Misto - Individual";
  
  // Busca os dados na nossa função
  const ranking = (await getRanking(categoria)) || [];

  return (
    <main className="min-h-screen bg-gray-50 px-4 pt-4 pb-10 md:px-10 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* -- CABEÇALHO NOVO (Lado a Lado) -- */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 mb-0">
          
          <div className="relative w-20 h-20 md:w-56 md:h-56 mx-auto shrink-0 mb-2"> {/* mudei de w-28 para w-20 e mb-4 para mb-2 */}
  <Image 
    src="/logoABR.jpg" 
    alt="Logo Roundnet Brasil" 
    fill
    className="object-contain"
    priority
  />
</div>

          {/* 2. O Texto */}
          <div className="text-center md:text-left">
            
            <h1 className="text-xl md:text-4xl font-black text-green-700 text-center leading-tight mb-1 px-4">
              RANKING NACIONAL DE ROUNDNET
            </h1>
            
            <p className="text-xs md:text-lg text-gray-600 text-center mb-4">
              Associação Brasileira de Roundnet (ABR)
            </p>
            
          </div>

        </div>

        {/* -- BOTÕES DE FILTRO -- */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {/* Botão Misto */}
          <a href="?categoria=Misto - Individual" 
             className={`px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 ${categoria === 'Misto - Individual' ? 'bg-green-600 text-white shadow-lg' : 'bg-white text-gray-700 shadow hover:bg-gray-100'}`}>
             Misto
          </a>
          
          {/* Botão Feminino */}
          <a href="?categoria=Feminino - Individual" 
             className={`px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 ${categoria === 'Feminino - Individual' ? 'bg-pink-600 text-white shadow-lg' : 'bg-white text-gray-700 shadow hover:bg-gray-100'}`}>
             Feminino
          </a>

          {/* Botão Livre */}
          <a href="?categoria=Livre - Individual" 
             className={`px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 ${categoria === 'Livre - Individual' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 shadow hover:bg-gray-100'}`}>
             Livre
          </a>
        </div>

        {/* -- TABELA DE DADOS -- */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
  <div className="overflow-x-auto">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="bg-gray-100 text-gray-600 uppercase text-[10px] md:text-xs tracking-wider leading-normal">
          {/* Reduzi o padding lateral px-6 para px-2 no mobile */}
          <th className="py-4 px-2 md:px-6 text-center w-14 md:w-24">Pos</th>
          <th className="py-4 px-2 md:px-6 text-left">Atleta</th>
          <th className="py-4 px-2 md:px-6 text-right font-bold">Pontos</th>
        </tr>
      </thead>
      <tbody className="text-gray-700 text-sm">
        {ranking.length > 0 ? (
          ranking.map((atleta, index) => (
            <tr key={index} className="border-b border-gray-100 hover:bg-green-50 transition duration-150">
              <td className="py-3 px-2 md:px-6 text-center">
                {/* O círculo da posição fica um pouco menor no mobile */}
                <span className={`inline-block w-7 h-7 md:w-8 md:h-8 leading-7 md:leading-8 rounded-full font-bold text-xs md:text-base ${index === 0 ? 'bg-yellow-400 text-yellow-900' : index === 1 ? 'bg-gray-300 text-gray-800' : index === 2 ? 'bg-orange-300 text-orange-900' : 'text-gray-500'}`}>
                  {atleta.posicao}
                </span>
              </td>
              <td className="py-3 px-2 md:px-6 text-left whitespace-nowrap font-semibold text-base md:text-lg text-gray-800">
                {atleta.nome}
              </td>
              <td className="py-3 px-2 md:px-6 text-right font-bold text-base md:text-lg text-green-600 font-mono">
                {atleta.pontos}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3" className="text-center py-12 text-gray-400">
              <p className="text-lg">Carregando dados...</p>
              <p className="text-sm mt-2">(Ou verifique se o nome da aba na planilha está correto)</p>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</div>
        
        <p className="text-center text-gray-400 text-xs mt-8">
          Atualizado via Google Sheets API • Desenvolvido para ABR
        </p>
      </div>
    </main>
  );
}