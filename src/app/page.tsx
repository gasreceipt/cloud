import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <TechStack />
      <Features />
      <Process />
      <Projects />
      <Testimonials />
    </main>
  );
}
