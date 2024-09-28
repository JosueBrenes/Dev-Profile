"use client";

import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Experience from "@/components/main/sub/Experience";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="h-full w-full">
        <div className="flex flex-col gap-20">
          <Hero />
          <Skills />
          <Experience />
        </div>
      </main>
    </div>
  );
}
