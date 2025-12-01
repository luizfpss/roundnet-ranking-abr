import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

// Configura a autenticação usando as chaves que você colocou no .env.local
const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

export const getRanking = async (abaNome) => {
  try {
    // Conecta na planilha usando o ID que está no .env.local
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);
    
    await doc.loadInfo(); // Carrega as informações básicas da planilha

    // Tenta pegar a aba pelo nome que passamos (ex: "Misto - Individual")
    const sheet = doc.sheetsByTitle[abaNome];
    
    // Se a aba não existir, retorna uma lista vazia para não quebrar o site
    if (!sheet) {
      console.error(`Aba "${abaNome}" não encontrada.`);
      return [];
    }

    // AVISO: Sua planilha tem o cabeçalho na linha 2.
    // Carregamos o cabeçalho dessa linha específica.
    await sheet.loadHeaderRow(2);

    // Pega todas as linhas de dados
    const rows = await sheet.getRows();

    // Formata os dados para ficarem limpinhos para o site
    const dadosFormatados = rows.map((row) => {
      return {
        posicao: row.get('#'),             // Coluna da posição
        nome: row.get('Nome do Atleta'),   // Coluna do nome
        pontos: row.get('Pontuação'),      // Coluna dos pontos
      };
    });

    return dadosFormatados;

  } catch (error) {
    console.error("Erro ao carregar planilha:", error);
    return [];
  }
};