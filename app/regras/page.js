export default function RegrasPage() {
  return (
    <main className="container mx-auto px-4 pb-10 max-w-3xl text-gray-700">
      <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">Regras Básicas</h1>
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <p><strong>1. O Jogo:</strong> Jogado 2 contra 2. O objetivo é fazer a bola bater na rede de forma que o adversário não consiga devolver.</p>
        <p><strong>2. Toques:</strong> Cada time tem até 3 toques para devolver a bola na rede.</p>
        <p><strong>3. Pontuação:</strong> Pontos são marcados quando a bola toca o chão ou o aro.</p>
        <div className="mt-4 p-4 bg-green-50 rounded text-center">
            <a href="https://www.youtube.com/watch?v=tc1p3b9x2qw" target="_blank" className="text-green-700 font-bold underline">Assistir Vídeo de Regras</a>
        </div>
      </div>
    </main>
  );
}