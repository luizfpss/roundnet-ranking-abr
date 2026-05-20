import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* HERO SECTION - FOTO ÚNICA DO TIME */}
      <section className="relative w-full h-[65vh] md:h-[85vh] flex items-center justify-center bg-black overflow-hidden">
        <Image 
          src="/capa-time.jpg" 
          alt="Time Brasil Roundnet"
          fill
          className="object-cover opacity-60" 
          priority
        />
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-7xl font-black text-white italic uppercase tracking-tighter drop-shadow-2xl">
            Roundnet Brasil
          </h1>
          <p className="mt-4 text-white text-lg md:text-2xl font-bold max-w-3xl mx-auto drop-shadow-md">
            Portal Oficial da Associação Brasileira de Roundnet.
          </p>
        </div>
      </section>

      {/* CARDS DE ATALHOS */}
      <section className="container mx-auto px-4 -mt-16 relative z-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          <Link href="/ranking" className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:border-green-400 transition-all">
            <span className="text-4xl block mb-2">🏆</span>
            <h3 className="font-bold text-xl text-gray-800 uppercase">Ranking</h3>
            <p className="text-gray-500 text-sm mt-2">Classificação atualizada das categorias Misto, Feminino e Livre.</p>
          </Link>

          <Link href="/pontuacao" className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:border-green-400 transition-all">
            <span className="text-4xl block mb-2">📊</span>
            <h3 className="font-bold text-xl text-gray-800 uppercase">Regras</h3>
            <p className="text-gray-500 text-sm mt-2">Entenda o sistema oficial de pontuação e as regras do esporte.</p>
          </Link>

          <Link href="/comunidades" className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:border-green-400 transition-all">
            <span className="text-4xl block mb-2">🤝</span>
            <h3 className="font-bold text-xl text-gray-800 uppercase">Comunidade</h3>
            <p className="text-gray-500 text-sm mt-2">Encontre o grupo de Roundnet mais próximo da sua cidade.</p>
          </Link>

        </div>
      </section>

      <footer className="py-10 text-center bg-gray-50 text-gray-400 text-[10px] font-bold uppercase tracking-widest px-6">
        © {new Date().getFullYear()} ABR • Associação Brasileira de Roundnet
      </footer>
    </main>
  );
}