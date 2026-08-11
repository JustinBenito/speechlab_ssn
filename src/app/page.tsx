import { Hero } from "@/components/Hero";
import { PartnersStrip } from "@/components/PartnersStrip";
import { Expertise } from "@/components/Expertise";
import { Thesis } from "@/components/Thesis";
import { Projects } from "@/components/Projects";
import { RecentPublications } from "@/components/RecentPublications";
import { People } from "@/components/People";

export default function Home() {
  return (
    <>
      <Hero />
      <PartnersStrip />
      <Expertise />
      <Thesis />
      <Projects />
      <RecentPublications />
      <People />
    </>
  );
}
