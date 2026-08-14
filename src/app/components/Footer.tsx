// components/Footer.tsx

'use client';
import Link from 'next/link';
import Image from "next/image";

import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');

  return (
    <footer> {/*Für einen bunten Footer: bg-[#1c82b3]/50 text-[#1c82b3]*/}
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
      {isEnglish ? (
         // englische Grafik
        <div>
          <p className='p-footer'>© {new Date().getFullYear()}  Tone and Coherence. All rights reserved.</p>
          <Image
                      src="/dfg_logo_schriftzug_weiss_foerderung_en.gif"
                      alt="DFG-Logo"
                      width={300}
                      height={200}
                      priority
                    />
        </div>
       ) : (
            // deutsche Grafik
          <div>
          <p className="p-footer">© {new Date().getFullYear()} Ton und Kohärenz. Alle Rechte vorbehalten.</p>
            <Image
                      src="/dfg_logo_schriftzug_weiss_foerderung_de.gif"
                      alt="DFG-Logo"
                      width={300}
                      height={200}
                      priority
                    />
          </div>
       )
      }
          
      
      <div className="social-links">
        {isEnglish ? (
          <>
          <Link href="/en/contact" className="hover:underline">Legal Notice</Link>
          <Link href="/en/contact" className="hover:underline">Privacy Policy</Link>
          </>
          ) : (
            <>
          <Link href="/kontakt" className="hover:underline">Impressum</Link>
          <Link href="/kontakt" className="hover:underline">Datenschutz</Link>
          </>
          )
        }
      </div>
      </div>
    </footer>
  );
}