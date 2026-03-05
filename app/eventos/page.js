export default function EventosPage() {
  
  // DADOS REAIS DO CALENDÁRIO 2026
  const eventos = [
    // MARÇO
    {
      data: "14 e 15 de Março",
      nome: "Circuito #RTS 1 2026",
      local: "São Paulo - SP",
      tipo: "Campeonato",
      cor: "yellow"
    },
    {
      data: "28 de Março",
      nome: "A Rata Rainha 1 / O Rato Rei 1",
      local: "Belo Horizonte - MG",
      tipo: "Torneio",
      cor: "gray"
    },
    // ABRIL
    {
      data: "11 e 12 de Abril",
      nome: "Tour Grand Slam Brasil 1 2026",
      local: "São Paulo - SP",
      tipo: "Grand Slam",
      cor: "green"
    },
    {
      data: "18 de Abril",
      nome: "2ª Edição - Torneio Balneário Camboriú",
      local: "Balneário Camboriú - SC",
      tipo: "Torneio",
      cor: "orange"
    },
    {
      data: "25 de Abril",
      nome: "12º Torneio Roundnet BH",
      local: "Belo Horizonte - MG",
      tipo: "Torneio",
      cor: "gray"
    },
    // MAIO
    {
      data: "16 de Maio",
      nome: "10º Campeonato Roundnet Campinas",
      local: "Campinas - SP",
      tipo: "Campeonato",
      cor: "yellow"
    },
    {
      data: "23 de Maio",
      nome: "Integração #TimeBrasil Mundial Paris",
      local: "São Paulo - SP",
      tipo: "Mundial",
      cor: "blue"
    },
    // JUNHO
    {
      data: "20 e 21 de Junho",
      nome: "Tour Grand Slam Brasil 2 2026",
      local: "Belo Horizonte - MG",
      tipo: "Grand Slam",
      cor: "green"
    },
    {
      data: "Junho (A definir)",
      nome: "Convocação da Seleção Brasileira 2026",
      local: "Online / Mídia",
      tipo: "Mundial",
      cor: "blue"
    },
    // JULHO
    {
      data: "11 de Julho",
      nome: "Torneio de Equipes Brasil 2026",
      local: "São Paulo - SP",
      tipo: "Torneio",
      cor: "orange"
    },
    {
      data: "25 de Julho",
      nome: "7º Campeonato Bunka São Caetano",
      local: "São Caetano do Sul - SP",
      tipo: "Campeonato",
      cor: "yellow"
    },
    // AGOSTO
    {
      data: "15 e 16 de Agosto",
      nome: "Circuito #RTS 2 2026",
      local: "São Paulo - SP",
      tipo: "Campeonato",
      cor: "yellow"
    },
    // SETEMBRO
    {
      data: "02 a 06 de Setembro",
      nome: "Roundnet World Championship Paris",
      local: "Paris - França",
      tipo: "Mundial",
      cor: "blue"
    },
    // OUTUBRO
    {
      data: "03 e 04 de Outubro",
      nome: "Tour Grand Slam Brasil 3 2026",
      local: "São Paulo - SP",
      tipo: "Grand Slam",
      cor: "green"
    },
    {
      data: "24 e 25 de Outubro",
      nome: "2º Campeonato de Roundnet BH",
      local: "Belo Horizonte - MG",
      tipo: "Campeonato",
      cor: "yellow"
    },
    // NOVEMBRO
    {
      data: "07 e 08 de Novembro",
      nome: "NACIONAL DE ROUNDNET 2026",
      local: "São Paulo - SP",
      tipo: "Nacional",
      cor: "red"
    },
    {
      data: "21 de Novembro",
      nome: "A Rata Rainha 2 / O Rato Rei 2",
      local: "Belo Horizonte - MG",
      tipo: "Torneio",
      cor: "gray"
    }
  ];

  // Função para pegar as classes de cor baseada no tipo
  const getCorClasses = (cor) => {
    switch (cor) {
      case 'red': return 'border-red-500 bg-red-50 text-red-700';
      case 'green': return 'border-green-500 bg-green-50 text-green-700';
      case 'yellow': return 'border-yellow-400 bg-yellow-50 text-yellow-800';
      case 'blue': return 'border-blue-500 bg-blue-50 text-blue-700';
      case 'orange': return 'border-orange-400 bg-orange-50 text-orange-800';
      default: return 'border-gray-400 bg-gray-50 text-gray-700';
    }
  };

  const getBadgeCor = (cor) => {
    switch (cor) {
      case 'red': return 'bg-red-500 text-white';
      case 'green': return 'bg-green-500 text-white';
      case 'yellow': return 'bg-yellow-400 text-black';
      case 'blue': return 'bg-blue-500 text-white';
      case 'orange': return 'bg-orange-400 text-white';
      default: return 'bg-gray-400 text-white';
    }
  };

  return (
    <main className="container mx-auto px-4 pb-10 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-2">
          Calendário 2026
        </h1>
        <p className="text-gray-600">Acompanhe as datas oficiais da temporada.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {eventos.map((evento, index) => (
          <div 
            key={index} 
            className={`relative border-l-8 rounded-r-xl p-6 shadow-md hover:shadow-xl transition-all bg-white ${getCorClasses(evento.cor).split(' ')[0]}`}
          >
            {/* Badge do Tipo */}
            <div className="flex justify-between items-start mb-3">
              <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${getBadgeCor(evento.cor)}`}>
                {evento.tipo}
              </span>
              <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {evento.local.split('-')[1] || 'BR'} {/* Pega só a Sigla do Estado */}
              </span>
            </div>

            {/* Data */}
            <div className="mb-2">
                <span className="text-lg font-bold text-gray-800 block">
                    🗓️ {evento.data}
                </span>
            </div>

            {/* Nome do Evento */}
            <h3 className="text-xl font-extrabold text-gray-900 leading-tight mb-2">
              {evento.nome}
            </h3>

            {/* Local Completo */}
            <p className="text-sm text-gray-600 flex items-center gap-1">
              📍 {evento.local}
            </p>

          </div>
        ))}
      </div>
      
      <div className="mt-10 text-center">
        <p className="text-xs text-gray-400">
          * Datas e locais sujeitos a alteração pela organização da ABR.
        </p>
      </div>
    </main>
  );
}