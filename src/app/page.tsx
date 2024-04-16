import Image from "next/image";
import Navbar from "@/components/Navbar";
import ImageComponent from "@/components/SubjectList";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <ImageComponent/>
    </main>
  );
}
