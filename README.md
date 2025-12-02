# 🏆 Ranking Nacional de Roundnet (ABR)

> Plataforma oficial de ranking da Associação Brasileira de Roundnet.

![Status](https://img.shields.io/badge/Status-Em_Produção-success)
![Tech](https://img.shields.io/badge/Stack-Next.js_14-black)
![Deploy](https://img.shields.io/badge/Deploy-Vercel-black)

## 📄 Sobre o Projeto

Este projeto foi desenvolvido para solucionar um gargalo operacional da **Associação Brasileira de Roundnet (ABR)**. Anteriormente, o ranking nacional dos atletas era mantido em planilhas offline e divulgado manualmente, o que gerava atrasos na comunicação e dificultava a visualização por parte dos atletas e patrocinadores.

A solução desenvolvida é uma **aplicação Web Serverless** que consome dados diretamente das planilhas de gestão da ABR via API, atualizando o ranking em tempo real no site sem necessidade de input manual duplicado.

### 🎯 Objetivos Alcançados
- **Automação:** Eliminação de atualização manual do site (sincronização automática).
- **Experiência do Usuário:** Interface responsiva (Mobile-First), rápida e com filtros dinâmicos por categoria.
- **Custo Zero:** Arquitetura otimizada para rodar em tiers gratuitos (Vercel + Google Cloud).

---

## 🚀 Tecnologias Utilizadas

O projeto foi construído focando em performance (Core Web Vitals), SEO e facilidade de manutenção.

- **Frontend:** [Next.js](https://nextjs.org/) (App Router & Server Components)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Backend / Dados:** [Google Sheets API](https://developers.google.com/sheets/api) (Google Cloud Platform)
- **Deploy & CI/CD:** [Vercel](https://vercel.com/)
- **Estratégia de Cache:** ISR (Incremental Static Regeneration) para balancear performance e atualização de dados.

---

## ⚙️ Arquitetura da Solução

O sistema utiliza o padrão de **Headless CMS**, onde o Google Sheets atua como o gerenciador de conteúdo:

1.  A diretoria da ABR atualiza a pontuação na planilha oficial do Google Sheets (processo que já dominam).
2.  O Next.js, rodando no servidor (Server-Side), autentica-se no Google Cloud via chaves de serviço seguras.
3.  Os dados são tratados, limpos e tipados.
4.  O Frontend renderiza a tabela atualizada para o usuário final.
5.  **Cache:** Utilizamos `revalidate` para garantir que não estouremos a cota de requisições da API, mantendo o site extremamente rápido.

---

## 📦 Como rodar localmente

Se você deseja clonar e rodar este projeto na sua máquina para estudos:

### Pré-requisitos
- Node.js instalado.
- Uma conta no Google Cloud Platform (para gerar as credenciais da API Sheets).

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/luizfpss/roundnet-ranking-abr.git
   cd roundnet-ranking-abr
Instale as dependências:
code
Bash
npm install
Configure as Variáveis de Ambiente:
Crie um arquivo .env.local na raiz do projeto e adicione as credenciais da sua Service Account do Google:
code
Env
GOOGLE_SERVICE_ACCOUNT_EMAIL="seu-bot@projeto.iam.gserviceaccount.com"
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----..."
GOOGLE_SHEET_ID="ID_DA_SUA_PLANILHA"
Rode o servidor de desenvolvimento:
code
Bash
npm run dev
Acesse http://localhost:3000 no seu navegador.
🤝 Autor
Desenvolvido por Luiz Felipe Saraiva como solução tecnológica para modernização da comunidade de Roundnet no Brasil.
GitHub