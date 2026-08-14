import { NeonBackground } from "@/components/party/NeonBackground";
import { Navbar } from "@/components/party/Navbar";
import { Hero } from "@/components/party/Hero";
import { About } from "@/components/party/About";
import { Timeline } from "@/components/party/Timeline";
import { Gallery } from "@/components/party/Gallery";
import { Competitions } from "@/components/party/Competitions";
import { OrganizingTeam } from "@/components/party/OrganizingTeam";
import { WhatsAppChannel } from "@/components/party/WhatsAppChannel";
import { InstagramFollow } from "@/components/party/InstagramFollow";
import { Faqs } from "@/components/party/Faqs";
import { Footer } from "@/components/party/Footer";

function App() {
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
        <WhatsAppChannel />
        <InstagramFollow />
        <Faqs />
      </main>
      <Footer />
    </>
  );
}

export default App;
