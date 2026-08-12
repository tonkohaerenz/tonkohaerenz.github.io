// app/layout.tsx
import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import '@/app/globals-LW.css';
import { Providers } from "./providers";

export const metadata = {
  title: 'Ton und Kohärenz',
  description: 'Präsentation und digitale Edition unseres Forschungsprojekts.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
        <Providers>
          {/* Header/Navigation */}
          <Header/>

          {/* Hauptinhalt */}
          <main className="flex-grow container max-w-6xl mx-auto px-4 py-8 items-center">
            {children}
          </main>

          {/* Footer */}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}