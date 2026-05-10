import shiraz from "@/assets/pkg-shiraz.jpg";
import yazd from "@/assets/pkg-yazd.jpg";
import isfahan from "@/assets/pkg-isfahan.jpg";
import g1 from "@/assets/guide-1.jpg";
import g2 from "@/assets/guide-2.jpg";
import g3 from "@/assets/guide-3.jpg";

export type Pkg = {
  slug: string;
  img: string;
  days: number;
  level: "easy" | "moderate" | "challenging";
  priceFrom: number;
  titleKey: string;
  citiesKey: string;
  descKey: string;
  longKey: string;
  itineraryKeys: string[]; // optional, can stay empty for now
  includes: string[];
};

export const packages: Pkg[] = [
  {
    slug: "light-and-tilework",
    img: shiraz,
    days: 8,
    level: "easy",
    priceFrom: 2400,
    titleKey: "pkg.shiraz.title",
    citiesKey: "pkg.shiraz.cities",
    descKey: "pkg.shiraz.desc",
    longKey: "pkg.shiraz.long",
    itineraryKeys: [],
    includes: ["4★/5★ boutique stays", "Private driver", "Expert local guide", "Cultural experiences"],
  },
  {
    slug: "desert-and-silence",
    img: yazd,
    days: 6,
    level: "moderate",
    priceFrom: 1900,
    titleKey: "pkg.yazd.title",
    citiesKey: "pkg.yazd.cities",
    descKey: "pkg.yazd.desc",
    longKey: "pkg.yazd.long",
    itineraryKeys: [],
    includes: ["Heritage caravanserai stay", "Desert expedition", "Private 4×4", "Local cuisine"],
  },
  {
    slug: "persian-renaissance",
    img: isfahan,
    days: 10,
    level: "easy",
    priceFrom: 3200,
    titleKey: "pkg.isfahan.title",
    citiesKey: "pkg.isfahan.cities",
    descKey: "pkg.isfahan.desc",
    longKey: "pkg.isfahan.long",
    itineraryKeys: [],
    includes: ["5★ heritage hotels", "Chef-led dinners", "Private guide", "Workshop visits"],
  },
];

export type Guide = {
  slug: string;
  name: string;
  city: string;
  langs: string;
  rating: number;
  img: string;
  specKey: string;
  bioKey: string;
  email: string;
  phone: string;
  skills: string[];
};

export const guides: Guide[] = [
  {
    slug: "arman-r",
    name: "Arman R.",
    city: "Isfahan",
    langs: "EN · FR · FA",
    rating: 4.97,
    img: g1,
    specKey: "guide.arman.spec",
    bioKey: "guide.arman.bio",
    email: "arman@irantouradvisor.com",
    phone: "+98 913 000 0001",
    skills: ["Architecture", "Photography", "Safavid history", "Miniature workshops"],
  },
  {
    slug: "niloofar-s",
    name: "Niloofar S.",
    city: "Shiraz",
    langs: "EN · IT · FA",
    rating: 4.95,
    img: g2,
    specKey: "guide.niloofar.spec",
    bioKey: "guide.niloofar.bio",
    email: "niloofar@irantouradvisor.com",
    phone: "+98 917 000 0002",
    skills: ["Persian poetry", "Gardens", "Slow travel", "Storytelling"],
  },
  {
    slug: "hossein-m",
    name: "Hossein M.",
    city: "Yazd",
    langs: "EN · AR · FA",
    rating: 5.0,
    img: g3,
    specKey: "guide.hossein.spec",
    bioKey: "guide.hossein.bio",
    email: "hossein@irantouradvisor.com",
    phone: "+98 935 000 0003",
    skills: ["Desert expeditions", "Astronomy", "Off-road driving", "Survival"],
  },
];
