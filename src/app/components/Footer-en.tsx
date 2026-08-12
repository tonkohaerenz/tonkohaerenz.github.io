// components/Footer.tsx
import Link from 'next/link';
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 text-sm mt-auto">
      <div className="container mx-auto px-4 max-w-5xl flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <p>© {new Date().getFullYear()} Tone and Coherence. All rights reserved.</p>
          <Image
                        src="/dfg_logo_schriftzug_weiss_foerderung_en.gif"
                        alt="DFG-Logo"
                        width={300}
                        height={200}
                        priority
                      />
        </div>
        <div className="flex space-x-4 text-s">
          <Link href="/kontakt" className="hover:underline">Legal Notice</Link>
          <Link href="/kontakt" className="hover:underline">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}