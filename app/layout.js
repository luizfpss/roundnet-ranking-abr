import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // <--- IMPORTANTE: Importando o menu

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ranking ABR - Associação Brasileira de Roundnet",
  description: "Portal oficial da Associação Brasileira de Roundnet.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        {/* O MENU ENTRA AQUI: */}
        <Navbar />
        
        {/* O CONTEÚDO DAS PÁGINAS (RANKING, EVENTOS...) ENTRA AQUI: */}
        {children}
        
      </body>
    </html>
  );
}