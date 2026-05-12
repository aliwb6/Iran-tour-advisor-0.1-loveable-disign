import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ChatBot } from "@/components/site/ChatBot";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/chat")({
  head: () => ({
    meta: [
      { title: "AI Travel Concierge — Iran Tour Advisor" },
      { name: "description", content: "Plan your perfect Iran trip with our AI Travel Concierge" },
    ],
  }),
  component: ChatPage,
});

function ChatPage() {
  const { t } = useI18n();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container-luxe pt-24 pb-20">
        <div className="text-center mb-12">
          <div className="text-[11px] uppercase tracking-[0.3em] text-accent">{t("cta.kicker")}</div>
          <h1 className="mt-3 font-display text-4xl md:text-5xl">{t("cta.title")}</h1>
          <p className="mt-6 text-base text-muted-foreground">{t("ai.desc")}</p>
        </div>
        <ChatBot />
      </main>
      <Footer />
    </div>
  );
}