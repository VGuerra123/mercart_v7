/* app/ofertas/page.tsx */
'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { OfertasPage } from '@/components/pages/ofertas-page';

const Header = dynamic(
  () => import('@/components/layout/header').then((m) => m.Header),
  { ssr: false },
);

const Footer = dynamic(
  () => import('@/components/layout/footer').then((m) => m.Footer),
  { ssr: false },
);

const LoadingRing = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="loading-ring">
      <div /> <div /> <div /> <div />
    </div>
  </div>
);

export default function Ofertas() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <Suspense fallback={<LoadingRing />}>
          <OfertasPage />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
