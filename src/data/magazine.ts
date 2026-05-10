import architecture from "@/assets/cat-architecture.jpg";
import desert from "@/assets/cat-desert.jpg";
import food from "@/assets/cat-food.jpg";
import bazaar from "@/assets/cat-bazaar.jpg";
import history from "@/assets/cat-history.jpg";
import nature from "@/assets/cat-nature.jpg";

export type Article = {
  slug: string;
  cover: string;
  category: string;
  date: string;
  readMin: number;
  titleKey: string;
  excerptKey: string;
  bodyKey: string;
};

export const articles: Article[] = [
  {
    slug: "isfahan-half-the-world",
    cover: architecture,
    category: "Architecture",
    date: "2026-04-12",
    readMin: 7,
    titleKey: "mag.a1.title",
    excerptKey: "mag.a1.excerpt",
    bodyKey: "mag.a1.body",
  },
  {
    slug: "lut-desert-silence",
    cover: desert,
    category: "Desert",
    date: "2026-03-28",
    readMin: 6,
    titleKey: "mag.a2.title",
    excerptKey: "mag.a2.excerpt",
    bodyKey: "mag.a2.body",
  },
  {
    slug: "saffron-pomegranate-bread",
    cover: food,
    category: "Food",
    date: "2026-03-10",
    readMin: 5,
    titleKey: "mag.a3.title",
    excerptKey: "mag.a3.excerpt",
    bodyKey: "mag.a3.body",
  },
  {
    slug: "tehran-bazaar-stories",
    cover: bazaar,
    category: "Culture",
    date: "2026-02-22",
    readMin: 6,
    titleKey: "mag.a4.title",
    excerptKey: "mag.a4.excerpt",
    bodyKey: "mag.a4.body",
  },
  {
    slug: "persepolis-stones-speak",
    cover: history,
    category: "History",
    date: "2026-02-04",
    readMin: 8,
    titleKey: "mag.a5.title",
    excerptKey: "mag.a5.excerpt",
    bodyKey: "mag.a5.body",
  },
  {
    slug: "alamut-valleys-untouched",
    cover: nature,
    category: "Nature",
    date: "2026-01-18",
    readMin: 6,
    titleKey: "mag.a6.title",
    excerptKey: "mag.a6.excerpt",
    bodyKey: "mag.a6.body",
  },
];
