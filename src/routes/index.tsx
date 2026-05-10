import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Categories } from "@/components/site/Categories";
import { Packages } from "@/components/site/Packages";
import { Guides } from "@/components/site/Guides";
import { AiAssistant } from "@/components/site/AiAssistant";
import { Testimonials } from "@/components/site/Testimonials";
import { CtaBuilder } from "@/components/site/CtaBuilder";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Iran Tour Advisor — Authentic, Premium Travel in Iran" },
      { name: "description", content: "Curated luxury journeys, local guides and AI-crafted itineraries through the architecture, deserts and culture of Iran." },
      { property: "og:title", content: "Iran Tour Advisor — Discover Authentic Iran" },
      { property: "og:description", content: "Premium, modern travel experiences across Persia." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Packages />
        <AiAssistant />
        <Categories />
        <Guides />
        <Testimonials />
        <CtaBuilder />
      </main>
      <Footer />
    </div>
  );
}
