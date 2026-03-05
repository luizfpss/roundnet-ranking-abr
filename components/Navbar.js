import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 py-4 mb-6 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Logo que clica e volta pra Home */}
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer">
            <Image src="/logoABR.jpg" alt="Logo ABR" width={50} height={50} className="object-contain" />
            <span className="font-bold text-green-700 text-lg">ROUNDNET BRASIL</span>
          </div>
        </Link>

        {/* Links do Menu */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-xs md:text-sm font-bold text-gray-600">
          <Link href="/" className="hover:text-green-600 transition">RANKING</Link>
          <Link href="/pontuacao" className="hover:text-green-600 transition">PONTUAÇÃO</Link>
          <Link href="/comunidades" className="hover:text-green-600 transition">COMUNIDADES</Link>
          <Link href="/eventos" className="hover:text-green-600 transition">EVENTOS</Link>
          {/*<Link href="/regras" className="hover:text-green-600 transition">REGRAS</Link>*/}
          
          {/* Botão de Loja (Strike) */}
          <a 
            href="https://www.strike360.com.br/" 
            target="_blank" 
            className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition shadow-lg flex items-center gap-2"
          >
            🛒 LOJA STRIKE
          </a>
        </div>
      </div>
    </nav>
  );
}