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
    "/en/digitalEdition":"/digitaleEdition",
  }[pathname] ?? "/";

  const englishPath = {
    "/": "/en",
    "/team": "/en/team",
    "/kontakt": "/en/contact",
    "/digitaleEdition":"/en/digitalEdition",
  }[pathname] ?? "/en";

  return (
    <header className="header-primary">
      <div className="header-primary-container">
        {isEnglish ? (
          <>
          <div className='header-primary-content'>
          {/* Logo / Projekttitel */}
            <Link href="/en/">
              <Image
                src="/tonundkohaerenz_rund.png"
                alt="Projektlogo"
                width={60}
                height={60}
                priority
              />
            </Link>
            <Link href="/en/" className="logo">
              Tone and<span className="text-blue font-bold"> Coherence</span>
            </Link>
          </div>
          <div className='header-primary-actions'>
          {/* Navigation */}
          <nav className="nav-links-pages">
            <Link
              href="/en"
              className={`transition ${
                (pathname === "/en" || pathname === "/en/")
                  ? "font-bold text-yellow"
                  : "hover:text-yellow"
              }`}
            >
              Project
            </Link>
            <Link
              href="/en/digitalEdition"
              className={`transition ${
                pathname.startsWith("/en/digitalEdition")
                  ? "font-bold text-red"
                  : "hover:text-red"
              }`}
            >
              Digital Edition
            </Link>
            <Link
              href="/en/team"
              className={`transition ${
                pathname.startsWith("/en/team")
                  ? "font-bold text-green"
                  : "hover:text-green"
              }`}
            >
              Team
            </Link>
            <Link
              href="/en/contact"
              className={`transition ${
                pathname.startsWith("/en/contact")
                  ? "font-bold text-blue"
                  : "hover:text-blue"
              }`}
            >
              Contact
            </Link>
          </nav>
          <nav className="nav-links-language">
            <Link href={germanPath} className={
            !isEnglish
              ? "font-bold text-blue"
              : "hover:text-blue"
            }>
              German
            </Link>
            <span>|</span>
            <Link href={englishPath} className={
              isEnglish
                ? "font-bold text-blue"
                : "hover:text-blue"
            }>
              English
            </Link>
          </nav>
          <nav className="nav-links-language">
            <ThemeToggle/>
          </nav>
          </div>
          </>
        ) : (
          <>
          <div className='header-primary-content'>
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
            <Link href="/" className="logo">
              Ton und<span className="text-blue font-bold"> Kohärenz</span>
            </Link>
          </div>
          <div className='header-primary-actions'>
          {/* Navigation */}
         <nav className="nav-links-pages">
            <Link
              href="/"
              className={`transition ${
                pathname === "/"
                  ? "font-bold text-yellow"
                  : "hover:text-yellow"
              }`}
            >
              Projekt
            </Link>

            <Link
              href="/digitaleEdition"
              className={`transition ${
                pathname.startsWith("/digitaleEdition")
                  ? "font-bold text-red"
                  : "hover:text-red"
              }`}
            >
              Digitale Edition
            </Link>

            <Link
              href="/team"
              className={`transition ${
                pathname.startsWith("/team")
                  ? "font-bold text-green"
                  : "hover:text-green"
              }`}
            >
              Team
            </Link>

            <Link
              href="/kontakt"
              className={`transition ${
                pathname.startsWith("/kontakt")
                  ? "font-bold text-blue"
                  : "hover:text-blue"
              }`}
            >
              Kontakt
            </Link>
          </nav>
          <nav className="nav-links-language">
            <Link href={germanPath} className={
            !isEnglish
              ? "font-bold text-blue"
              : "hover:text-blue"
            }>
              Deutsch
            </Link>
            <span className="language-divider" aria-hidden="true"/>
            <Link href={englishPath} className={
              isEnglish
                ? "font-bold text-blue"
                : "hover:text-blue"
            }>
              Englisch
            </Link>
          </nav>
          <nav className="nav-links-language">
            <ThemeToggle/>
          </nav>
          </div>
          </>)
        }
      </div>
    </header>
  );
}