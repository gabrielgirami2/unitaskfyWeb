import Image from "next/image";
import React from 'react';
import Navbar from "@/components/Navbar";
import DeleteMateria from "@/components/DeleteMateria"
import dynamic from 'next/dynamic';

const Delete = dynamic(() => import('@/components/DeleteMateria'), { ssr: false });

export default function Home() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <main className="flex min-h-screen flex-col items-center">
        <Navbar />
        <h2>Deletar Matéria</h2>
        <DeleteMateria/>
      </main>
    </React.Suspense>
  );
}

