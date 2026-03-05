import Image from 'next/image';

export default function ComunidadesPage() {
  
  const comunidades = [
    {
      nome: "Roundnet Belo Horizonte",
      cidade: "Belo Horizonte - MG",
      descricao: "Comunidade vibrante de BH. Treinos técnicos, torneios e muita diversão.",
      link: "https://www.instagram.com/roundnet.bh/",
      logo: "/comunidades/bh.jpeg" 
    },
    {
      nome: "Roundnet Campinas",
      cidade: "Campinas - SP",
      descricao: "Galera de Campinas unida pelo Roundnet. Todos os níveis são bem-vindos para treinar.",
      link: "https://www.instagram.com/roundnet.campinas/",
      logo: "/comunidades/campinas.jpeg"
    },
    {
      nome: "Roundnet Taboão da Serra",
      cidade: "Taboão da Serra - SP",
      descricao: "Treinos e jogos na região de Taboão. Venha conhecer a nossa galera!",
      link: "https://www.instagram.com/roundnet.taboao/",
      logo: "/comunidades/rts.PNG"
    },
    {
      nome: "Roundnet Bunka São Caetano do Sul",
      cidade: "São Caetano do Sul - SP",
      descricao: "Comunidade tradicional e forte no ABC paulista. Foco em performance.",
      link: "https://www.instagram.com/roundnet.bunkasaocaetano/",
      logo: "/comunidades/sanka.jpeg"
    },
    {
      nome: "Pudimnet",
      cidade: "São Paulo - SP",
      descricao: "Onde o Roundnet e a resenha se encontram. Uma das comunidades mais animadas de SP.",
      link: "https://www.instagram.com/pudimnet.sp",
      logo: "/comunidades/pudimnet.jpg"
    }
  ];

  return (
    <main className="container mx-auto px-4 py-12 min-h-screen bg-gray-50">
      {/* Cabeçalho da Página */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-green-700 mb-4 tracking-tight">
          COMUNIDADES
        </h1>
        <div className="h-1.5 w-24 bg-green-500 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          O Roundnet cresce a cada dia. Encontre o grupo mais próximo e comece a jogar!
        </p>
      </div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {comunidades.map((comunidade, index) => (
          <div 
            key={index} 
            className="group bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col"
          >
            {/* CONTAINER DA IMAGEM COM EFEITO DE FUNDO BORRADO */}
            <div className="relative h-64 w-full overflow-hidden bg-black flex items-center justify-center">
              {/* 1. Camada de Fundo Borrada (Preenche o card) */}
              <div className="absolute inset-0 opacity-40">
                <Image 
                  src={comunidade.logo} 
                  alt=""
                  fill
                  style={{ objectFit: 'cover', filter: 'blur(15px)' }}
                  className="scale-125" // Evita bordas brancas no borrão
                />
              </div>

              {/* 2. Camada da Logo Nítida e Centralizada */}
              <div className="relative h-[75%] w-[75%] transition-transform duration-500 group-hover:scale-110">
                <Image 
                  src={comunidade.logo} 
                  alt={`Logo ${comunidade.nome}`} 
                  fill 
                  style={{ objectFit: 'contain' }} 
                  className="drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                  priority
                />
              </div>
            </div>

            {/* CONTEÚDO DO CARD */}
            <div className="p-8 flex-1 flex flex-col">
              <div className="mb-4">
                <span className="text-green-600 text-xs font-black uppercase tracking-widest">
                  {comunidade.cidade}
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mt-1 group-hover:text-green-700 transition-colors">
                  {comunidade.nome}
                </h2>
              </div>
              
              <p className="text-gray-600 mb-8 text-sm leading-relaxed flex-1">
                {comunidade.descricao}
              </p>
              
              <a 
                href={comunidade.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-zinc-900 text-white font-bold py-4 rounded-xl hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-green-200"
              >
                VER NO INSTAGRAM <span className="ml-2 text-xl">📸</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}