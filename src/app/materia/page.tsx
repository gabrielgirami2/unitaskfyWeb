import Image from "next/image";
import Navbar from "@/components/Navbar";
import ImageComponent from "@/components/SubjectList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <h2>Matéria</h2>
      <ImageComponent/>
    </main>
  );
}
