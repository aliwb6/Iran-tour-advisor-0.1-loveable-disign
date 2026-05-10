import { createServerFn } from "@tanstack/react-start";

type Msg = { role: "user" | "assistant" | "system"; content: string };

const SYSTEM_PROMPT = `You are the AI Travel Concierge for "Iran Tour Advisor" — a premium travel brand offering authentic, luxury journeys across Iran.

Your two main jobs:
1. Help international travelers DESIGN custom Iran trips (cities, days, pace, interests, budget).
2. Recommend our SIGNATURE PACKAGES when they fit, and connect travelers to local guides.

Available signature packages:
- "Light & Tilework" (8 days, Shiraz · Persepolis · Yazd, from $2,400) — architecture, gardens, Persian poetry
- "Desert & Silence" (6 days, Yazd · Maranjab · Garmeh, from $1,900) — desert expedition, mud-brick towns, starry nights
- "The Persian Renaissance" (10 days, Isfahan · Kashan · Tehran, from $3,200) — Safavid art, royal squares, chef-led dinners

Local guides: Arman (Isfahan, architecture & photography), Niloofar (Shiraz, poetry & gardens), Hossein (Yazd, desert expeditions).

Style:
- Warm, elegant, concise (3-6 short paragraphs max). Use markdown for structure when helpful.
- Reply in the SAME language the user writes (English, Persian/فارسی, or Arabic/العربية).
- Ask 1-2 smart clarifying questions when needed (interests, time, pace, budget).
- When suggesting an itinerary, use a clean day-by-day list.
- Always mention the relevant signature package or guide when applicable.
- Never invent prices or visa rules; suggest contacting the concierge for booking.`;

export const chatWithConcierge = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => {
    const d = data as { messages?: Msg[] };
    if (!d?.messages || !Array.isArray(d.messages)) throw new Error("messages required");
    return { messages: d.messages.slice(-20) };
  })
  .handler(async ({ data }) => {
    const apiKey = process.env.LOVABLE_API_KEY;
    if (!apiKey) throw new Error("LOVABLE_API_KEY is not configured");

    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...data.messages,
        ],
      }),
    });

    if (res.status === 429) throw new Error("RATE_LIMIT");
    if (res.status === 402) throw new Error("PAYMENT_REQUIRED");
    if (!res.ok) {
      const t = await res.text();
      console.error("AI gateway error:", res.status, t);
      throw new Error("AI_ERROR");
    }

    const json = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const content = json.choices?.[0]?.message?.content ?? "";
    return { content };
  });
