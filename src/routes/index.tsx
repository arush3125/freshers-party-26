import { createFileRoute } from "@tanstack/react-router";

import { NeonBackground } from "@/components/party/NeonBackground";
import { Navbar } from "@/components/party/Navbar";
import { Hero } from "@/components/party/Hero";
import { About } from "@/components/party/About";
import { Timeline } from "@/components/party/Timeline";
import { Gallery } from "@/components/party/Gallery";
import { Competitions } from "@/components/party/Competitions";
import { OrganizingTeam } from "@/components/party/OrganizingTeam";
import { Faqs } from "@/components/party/Faqs";
import { Footer } from "@/components/party/Footer";

const title = "Freshers' Party '26 | Fr. Agnel Polytechnic, Vashi";
const description =
  "Freshers' Party '26 at Fr. Agnel Polytechnic, Vashi — dance, singing, comedy, rap and more. Explore competitions, timeline and register online.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <NeonBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Gallery />
        <Competitions />
        <OrganizingTeam />
        <Faqs />
      </main>
      <Footer />
    </>
  );
}
