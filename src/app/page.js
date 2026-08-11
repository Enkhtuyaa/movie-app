import Image from "next/image";
import { Header } from "./Features/Header";
import { Hero } from "./Features/Hero";
import { Footer } from "./Features/Footer";

export default function Home() {
  return (
    <div className="w-screen h-screen  dark:bg-black">
      <Header />
      <Hero />

      <Footer />
    </div>
  );
}
