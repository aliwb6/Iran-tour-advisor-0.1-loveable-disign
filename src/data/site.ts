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
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  includes: string[];
  outcomes: string[];
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
    itinerary: [
      { day: 1, title: "Arrival in Shiraz", description: "Welcome to Shiraz, check into hotel and evening walk through the Eram Garden" },
      { day: 2, title: "Shiraz City Tour", description: "Visit Nasir al-Mulk Mosque, Vakil Bazaar, and Karim Khan Citadel" },
      { day: 3, title: "Persepolis Day Trip", description: "Explore the ancient ruins of Persepolis and Naqsh-e Rustam" },
      { day: 4, title: "Pasargadae", description: "Visit the tomb of Cyrus the Great and Pasargadae complex" },
      { day: 5, title: "Yazd Journey", description: "Travel to Yazd, explore the old city and Jameh Mosque" },
      { day: 6, title: "Yazd Exploration", description: "Visit Zoroastrian Fire Temple, Towers of Silence, and Yazd Water Museum" },
      { day: 7, title: "Desert Experience", description: "Day trip to nearby desert villages and traditional workshops" },
      { day: 8, title: "Departure", description: "Morning at leisure before transfer to airport" },
    ],
    includes: ["4★/5★ boutique stays", "Private driver", "Expert local guide", "Cultural experiences"],
    outcomes: [
      "Deep understanding of Persian history and architecture",
      "Experience with traditional Iranian arts and crafts",
      "Memorable encounters with local artisans and storytellers",
      "Professional photography portfolio of Iran's most iconic sites",
    ]
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
    itinerary: [
      { day: 1, title: "Arrival in Yazd", description: "Welcome to Yazd, check into hotel and introduction to desert culture" },
      { day: 2, title: "Yazd Old City", description: "Explore the UNESCO-listed old city, Jameh Mosque, and Amir Chakhmaq complex" },
      { day: 3, title: "Zoroastrian Heritage", description: "Visit Fire Temple, Towers of Silence, and Zoroastrian Museum" },
      { day: 4, title: "Maranjab Desert", description: "Excursion to Maranjab caravanserai and salt lake, sunset over dunes" },
      { day: 5, title: "Garmeh Oasis", description: "Visit the ancient village of Garmeh and traditional desert life experience" },
      { day: 6, title: "Departure", description: "Morning at leisure before transfer to airport" },
    ],
    includes: ["Heritage caravanserai stay", "Desert expedition", "Private 4×4", "Local cuisine"],
    outcomes: [
      "Authentic desert survival and navigation skills",
      "Understanding of desert ecosystems and traditional water management",
      "Experience with nomadic cultures and traditional hospitality",
      "Stunning astrophotography opportunities in dark sky reserves",
    ]
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
    itinerary: [
      { day: 1, title: "Arrival in Isfahan", description: "Welcome to Isfahan, check into hotel and evening walk along the Zayandeh River" },
      { day: 2, title: "Isfahan City Tour", description: "Visit Naqsh-e Jahan Square, Imam Mosque, Sheikh Lotfollah Mosque, and Ali Qapu Palace" },
      { day: 3, title: "Isfahan Gardens", description: "Explore Chehel Sotoun Palace, Hasht Behesht Palace, and the beautiful city gardens" },
      { day: 4, title: "Isfahan Bazaar", description: "Full day exploring the historic bazaar, workshops, and traditional crafts" },
      { day: 5, title: "Kashan Day Trip", description: "Visit Fin Garden, Tabatabai House, and Kashan's historic covered bazaar" },
      { day: 6, title: "Teheran Journey", description: "Travel to Tehran, explore Golestan Palace and the Grand Bazaar" },
      { day: 7, title: "Tehran Museums", description: "Visit National Museum, Carpet Museum, and Museum of Contemporary Art" },
      { day: 8, title: "Cultural Experiences", description: "Traditional music performance, calligraphy workshop, and Persian cooking class" },
      { day: 9, title: "Isfahan Return", description: "Return to Isfahan for final exploration and shopping" },
      { day: 10, title: "Departure", description: "Morning at leisure before transfer to airport" },
    ],
    includes: ["5★ heritage hotels", "Chef-led dinners", "Private guide", "Workshop visits"],
    outcomes: [
      "Mastery of Persian artistic traditions and techniques",
      "Deep appreciation for Safavid architecture and urban planning",
      "Hands-on experience with traditional crafts and culinary arts",
      "Professional portfolio documenting Iran's artistic heritage",
    ]
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
  suggestedPlan: {
    title: string;
    duration: string;
    description: string;
    highlights: string[];
  };
  reviews: {
    rating: number;
    comment: string;
    date: string;
  }[];
};
  reviews: {
    rating: number;
    comment: string;
    date: string;
  }[];
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
    suggestedPlan: {
      title: "Isfahan Cultural Discovery",
      duration: "1 day",
      description: "Explore Isfahan's most iconic sites with a focus on photography and architecture",
      highlights: [
        "Naqsh-e Jahan Square at golden hour",
        "Private photography session at Imam Mosque",
        "Visit to traditional miniature workshops",
        "Evening walk along the Zayandeh River with historic bridges",
      ]
    },
    reviews: [
      { rating: 5, comment: "Arman's knowledge of Safavid architecture is incredible. He showed us details we would have missed on our own.", date: "2024-12-15" },
      { rating: 5, comment: "As a photographer, I appreciated his guidance to the best light spots and hidden courtyards.", date: "2024-11-28" },
    ]
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
    suggestedPlan: {
      title: "Literary Gardens of Shiraz",
      duration: "1 day",
      description: "A poetic journey through Shiraz's gardens and literary heritage",
      highlights: [
        "Morning at Hafez Tomb with poetry reading",
        "Exploration of Eram Garden and its botanical wonders",
        "Visit to Saadi Tomb and surrounding gardens",
        "Traditional tea house experience with Persian conversation",
      ]
    },
    reviews: [
      { rating: 5, comment: "Niloofar brought Persian poetry to life in a way I've never experienced before.", date: "2024-12-10" },
      { rating: 4, comment: "The garden tour was beautiful and relaxing. Perfect for a slow travel day.", date: "2024-11-20" },
    ]
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
    suggestedPlan: {
      title: "Desert Survival Experience",
      duration: "1 day",
      description: "Learn traditional desert survival skills from an expert",
      highlights: [
        "Star navigation and astronomy session",
        "Finding water in the desert techniques",
        "Traditional desert cooking experience",
        "Off-road driving basics in desert terrain",
      ]
    },
    reviews: [
      { rating: 5, comment: "Hossein's desert knowledge is unmatched. We felt safe and learned incredible skills.", date: "2024-12-05" },
      { rating: 5, comment: "The astronomy session under the Lut sky was the highlight of our trip.", date: "2024-11-15" },
    ]
  },
];
