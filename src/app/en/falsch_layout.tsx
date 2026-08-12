// app/layout.tsx
import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import '@/app/globals.css';

export const metadata = {
  title: 'Ton und Kohärenz',
  description: 'Präsentation und digitale Edition unseres Forschungsprojekts.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
        {/* Header/Navigation */}
        <Header locale="en"/>

        {/* Hauptinhalt */}
        <main className="flex-grow container mx-auto px-4 py-8 max-w-5xl">
          {children}
        </main>

        {/* Footer */}
        <Footer locale="en"/>
      </body>
    </html>
  );
}