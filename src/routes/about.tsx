import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — Iran Tour Advisor" }, { name: "description", content: "About Iran Tour Advisor and our mission." }] }),
  component: () => (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container-luxe pt-40 pb-20">
        <div className="text-[11px] uppercase tracking-[0.3em] text-accent">About</div>
        <h1 className="mt-3 max-w-3xl font-display text-5xl md:text-6xl text-balance">A modern lens on a timeless civilization.</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Iran Tour Advisor exists to introduce the world to the real Iran — its art, its silence,
          its hospitality, its depth. We curate journeys that feel personal, considered and quietly
          luxurious.
        </p>
      </main>
      <Footer />
    </div>
  ),
});
