"use client";
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        
        {/* PRIMEIRA LINHA: Logo ABR (Strike360 Oculto temporariamente) */}
        <div className="flex justify-between items-center py-2 md:py-3">
          <Link href="/">
            <div className="flex items-center gap-2 md:gap-4 cursor-pointer">
              {/* Logo ABR: Mantido em 80px no desktop */}
              <div className="w-[30px] h-[30px] md:w-[80px] md:h-[80px] relative">
                <Image src="/logoABR.jpg" alt="Logo ABR" fill className="object-contain" priority />
              </div>
              <span className="font-bold text-green-700 text-sm md:text-2xl whitespace-nowrap uppercase tracking-tight">
                Roundnet Brasil
              </span>
            </div>
          </Link>

          {/* O BLOCO ABAIXO FOI COMENTADO PARA OCULTAR O LOGO DA STRIKE360 ATÉ A AUTORIZAÇÃO */}
          {/* 
          <a 
            href="https://www.strike360.com.br/" 
            target="_blank" 
            className="hover:scale-105 transition-transform shrink-0 ml-2 md:ml-4 flex items-center"
          >
            <div className="relative w-20 h-8 md:w-44 md:h-16">
              <Image 
                src="/logo-strike.png" 
                alt="Strike360" 
                fill
                className="object-contain px-1"
                priority
              />
            </div>
          </a> 
          */}
        </div>

        {/* SEGUNDA LINHA: Links com scroll lateral */}
        <div className="w-full overflow-x-auto no-scrollbar border-t border-gray-50 md:border-none">
          <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center items-center gap-5 md:gap-10 py-3 text-[10px] md:text-sm font-bold text-gray-500 pr-10">
            <Link href="/" className="hover:text-green-600 transition whitespace-nowrap uppercase">Ranking</Link>
            <Link href="/pontuacao" className="hover:text-green-600 transition whitespace-nowrap uppercase">Pontuação</Link>
            <Link href="/comunidades" className="hover:text-green-600 transition whitespace-nowrap uppercase">Comunidades</Link>
            <Link href="/eventos" className="hover:text-green-600 transition whitespace-nowrap uppercase">Eventos</Link>
            
            <div className="w-8 h-1 md:hidden shrink-0"></div>
          </div>
        </div>

      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </nav>
  );
}