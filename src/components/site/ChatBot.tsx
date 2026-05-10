import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, Sparkles, X } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { chatWithConcierge } from "@/lib/chat.functions";
import { useI18n } from "@/lib/i18n";

type Msg = { role: "user" | "assistant"; content: string };

export function ChatBot() {
  const { t, lang } = useI18n();
  const chat = useServerFn(chatWithConcierge);

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Seed greeting per language
  useEffect(() => {
    setMessages([{ role: "assistant", content: t("chat.greeting") }]);
  }, [lang, t]);

  // External open trigger (from CTAs across the site)
  useEffect(() => {
    const onOpen = () => setOpen(true);
    if (typeof window !== "undefined") window.addEventListener("open-chat", onOpen);
    return () => {
      if (typeof window !== "undefined") window.removeEventListener("open-chat", onOpen);
    };
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const send = async (text?: string) => {
    const content = (text ?? input).trim();
    if (!content || busy) return;
    setInput("");
    const next: Msg[] = [...messages, { role: "user", content }];
    setMessages(next);
    setBusy(true);
    try {
      const res = await chat({ data: { messages: next } });
      setMessages([...next, { role: "assistant", content: res.content || "…" }]);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "AI_ERROR";
      const errKey =
        msg === "RATE_LIMIT" ? "chat.err.rate" :
        msg === "PAYMENT_REQUIRED" ? "chat.err.credits" : "chat.err.generic";
      setMessages([...next, { role: "assistant", content: t(errKey) }]);
    } finally {
      setBusy(false);
    }
  };

  const suggestions = [t("chat.s1"), t("chat.s2"), t("chat.s3")];

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={t("chat.open")}
        className={`fixed bottom-6 end-6 z-[60] grid h-14 w-14 place-items-center rounded-full bg-foreground text-background shadow-luxe transition hover:scale-110 hover:bg-accent ${open ? "rotate-90" : ""}`}
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
        {!open && (
          <span className="absolute -top-1 -end-1 grid h-5 w-5 place-items-center rounded-full bg-gold text-foreground">
            <Sparkles className="h-2.5 w-2.5" />
          </span>
        )}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 end-6 z-[60] flex h-[min(640px,80vh)] w-[min(420px,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl border border-border/60 bg-background shadow-luxe">
          {/* Header */}
          <div className="relative overflow-hidden bg-foreground p-5 text-background">
            <div className="pattern-persian absolute inset-0 opacity-10" />
            <div className="absolute -end-10 -top-10 h-32 w-32 rounded-full bg-accent/30 blur-3xl" />
            <div className="relative flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gold/20 text-gold">
                <Sparkles className="h-4 w-4" />
              </span>
              <div className="leading-tight">
                <div className="font-display text-lg">{t("chat.title")}</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-background/60">{t("chat.sub")}</div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-muted/20 p-4 text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user"
                    ? "ms-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-foreground px-4 py-2.5 text-background"
                    : "max-w-[90%] rounded-2xl rounded-tl-sm border border-border bg-background px-4 py-2.5 text-foreground"
                }
              >
                <div className="whitespace-pre-wrap leading-relaxed">{m.content}</div>
              </div>
            ))}
            {busy && (
              <div className="max-w-[90%] rounded-2xl rounded-tl-sm border border-border bg-background px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-foreground/60" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-foreground/60 [animation-delay:120ms]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-foreground/60 [animation-delay:240ms]" />
                </div>
              </div>
            )}
          </div>

          {/* Suggestions */}
          {messages.length <= 1 && !busy && (
            <div className="flex flex-wrap gap-2 border-t border-border/60 bg-background px-4 pt-3">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="rounded-full border border-border px-3 py-1.5 text-xs text-foreground/80 transition hover:border-accent hover:text-accent"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={(e) => { e.preventDefault(); send(); }}
            className="flex items-center gap-2 border-t border-border/60 bg-background p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t("chat.input")}
              className="flex-1 rounded-full border border-border bg-muted/30 px-4 py-2.5 text-sm focus:border-accent focus:outline-none"
              disabled={busy}
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              className="grid h-10 w-10 place-items-center rounded-full bg-foreground text-background transition hover:bg-accent disabled:opacity-40"
              aria-label="Send"
            >
              <Send className="h-4 w-4 rtl:-scale-x-100" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
