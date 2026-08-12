// components/Header.tsx
'use client';
import Link from 'next/link';
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './theme-toggle';

export default function Header() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');
  const isActive = (href: string) =>{
    if (href === "/"){
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const germanPath = {
    "/en": "/",
    "/en/team": "/team",
    "/en/contact": "/kontakt",
  }[pathname] ?? "/";

  const englishPath = {
    "/": "/en",
    "/team": "/en/team",
    "/kontakt": "/en/contact",
  }[pathname] ?? "/en";

  return (
    <header>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {isEnglish ? (
          <>
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
            <Link href="/" className="font-semibold text-lg tracking-wide text-slate-800 hover:text-blue transition leading-tight">
              Tone and<span className="text-blue font-bold"> Coherence</span>
            </Link>
          </div>
          <div className='container mx-auto max-w-5xl h-16 flex items-center gap-10 justify-end'>
          {/* Navigation */}
          <nav className="flex space-x-6 text-sm font-medium">
            <Link
              href="/en"
              className={`transition ${
                pathname === "/en"
                  ? "font-bold text-yellow"
                  : "text-slate-600 hover:text-yellow"
              }`}
            >
              Project
            </Link>
            <Link
              href="/en/team"
              className={`transition ${
                pathname.startsWith("/en/team")
                  ? "font-bold text-red"
                  : "text-slate-600 hover:text-red"
              }`}
            >
              Team
            </Link>
            <Link
              href="/en/contact"
              className={`transition ${
                pathname.startsWith("/en/contact")
                  ? "font-bold text-green"
                  : "text-slate-600 hover:text-green"
              }`}
            >
              Contact
            </Link>
          </nav>
          <nav className="flex space-x-1 text-sm font-medium text-slate-600">
            <Link href={germanPath} className={
            !isEnglish
              ? "font-bold text-blue"
              : "text-slate-600 hover:text-blue"
            }>
              German
            </Link>
            <span>|</span>
            <Link href={englishPath} className={
              isEnglish
                ? "font-bold text-blue"
                : "text-slate-600 hover:text-blue"
            }>
              English
            </Link>
          </nav>
          <nav className="flex space-x-1 text-sm font-medium text-slate-600">
            <ThemeToggle/>
          </nav>
          </div>
          </>
        ) : (
          <>
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
              Ton und<span className="text-blue font-bold"> Kohärenz</span>
            </Link>
          </div>
          <div className='container mx-auto max-w-5xl h-16 flex items-center gap-10 justify-end'>
          {/* Navigation */}
         <nav className="flex space-x-6 text-sm font-medium">
            <Link
              href="/"
              className={`transition ${
                pathname === "/"
                  ? "font-bold text-yellow"
                  : "text-slate-600 hover:text-yellow"
              }`}
            >
              Projekt
            </Link>

            <Link
              href="/team"
              className={`transition ${
                pathname.startsWith("/team")
                  ? "font-bold text-red"
                  : "text-slate-600 hover:text-red"
              }`}
            >
              Team
            </Link>

            <Link
              href="/kontakt"
              className={`transition ${
                pathname.startsWith("/kontakt")
                  ? "font-bold text-green"
                  : "text-slate-600 hover:text-green"
              }`}
            >
              Kontakt
            </Link>
          </nav>
          <nav className="flex space-x-1 text-sm font-medium text-slate-600">
            <Link href={germanPath} className={
            !isEnglish
              ? "font-bold text-blue"
              : "text-slate-600 hover:text-blue"
            }>
              Deutsch
            </Link>
            <span>|</span>
            <Link href={englishPath} className={
              isEnglish
                ? "font-bold text-blue"
                : "text-slate-600 hover:text-blue"
            }>
              Englisch
            </Link>
          </nav>
          <nav className="flex space-x-1 text-sm font-medium text-slate-600">
            <ThemeToggle/>
          </nav>
          </div>
          </>)
        }
      </div>
    </header>
  );
}