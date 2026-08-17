"use client";
import { Header } from "../Features/Header";
import { Footer } from "../Features/Footer";
import { TopRated } from "../Features/TopRated";


export default function TopRatedPage() {
  return (
    <div>
      <Header />
      <TopRated/>
      <Footer />
    </div>
  );
}
