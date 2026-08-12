// components/Header.tsx
import Link from 'next/link';
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-5xl h-16 flex items-center justify-between">
        <div className='container mx-auto max-w-5xl h-16 flex items-center gap-2'>
        {/* Logo / Projekttitel */}
          <Link href="/">
            <Image
              src="/tonundkohaerenz_rund.png"
              alt="Projektlogo"
              width={60}
              height={60}
              priority
            />
          </Link>
          <Link href="/" className="font-semibold text-lg tracking-wide text-slate-800 hover:text-[#1c82b3] transition leading-tight">
            Tone and<span className="text-[#1c82b3] font-bold"> Coherence</span>
          </Link>
        </div>
        <div className='container mx-auto max-w-5xl h-16 flex items-center gap-10 justify-end'>
        {/* Navigation */}
        <nav className="flex space-x-6 text-sm font-medium text-slate-600">
          <Link href="/" className="hover:text-[#f0af13] transition">
            Project
          </Link>
          <Link href="/en/team" className="hover:text-[#ae3761] transition">
            Team
          </Link>
          <Link href="/en/contact" className="hover:text-[#14686a] transition">
            Contact
          </Link>
        </nav>
        <nav className="flex space-x-1 text-sm font-medium text-slate-600">
          <Link href="/de/">
            German
          </Link>
          <p>|</p>
          <Link href="/en/">
            English
          </Link>
        </nav>
        </div>
      </div>
    </header>
  );
}