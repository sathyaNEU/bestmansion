import "./globals.css";

// ─── Metadata exported for Next.js <head> ────────────────────────────────────
export const metadata = {
  // ── Primary ──────────────────────────────────────────────────────────────
  title: {
    default:
      "Best Mansion – PG Accommodation for Men in Arumbakkam, Chennai | ₹3,600/month",
    template: "%s | Best Mansion PG Chennai",
  },
  description:
    "Best Mansion offers top-rated paying guest accommodation exclusively for men in Arumbakkam, Chennai. Free WiFi, AC & Non-AC rooms, 24/7 hot water, generator backup, RO water. Near Koyambedu CMBT, Anna Nagar & Vadapalani. Starting ₹3,600/month.",
  keywords: [
    "PG in Chennai",
    "paying guest Chennai",
    "PG Arumbakkam",
    "mens PG Chennai",
    "paying guest Arumbakkam",
    "PG near Koyambedu",
    "PG near Anna Nagar",
    "PG near Vadapalani",
    "PG near Aminjikarai",
    "bachelor accommodation Chennai",
    "best PG Chennai",
    "affordable PG Chennai",
    "sharing room Chennai",
    "PG with WiFi Chennai",
    "PG with AC Chennai",
    "Best Mansion Arumbakkam",
    "pg accommodation men chennai",
  ],
  authors: [{ name: "Best Mansion" }],
  creator: "Best Mansion",
  publisher: "Best Mansion",

  // ── Canonical URL ─────────────────────────────────────────────────────────
  alternates: {
    canonical: "https://bestmansion.in", // ← update to your real domain
  },

  // ── Open Graph (WhatsApp, Facebook, LinkedIn previews) ───────────────────
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://bestmansion.in",
    siteName: "Best Mansion PG Chennai",
    title:
      "Best Mansion – Paying Guest for Men in Arumbakkam, Chennai | From ₹3,600",
    description:
      "Top-rated men's PG in Arumbakkam, Chennai. Free WiFi, AC rooms, 24/7 hot water & security. Near Koyambedu CMBT. Starting ₹3,600/month.",
    images: [
      {
        url: "https://bestmansion.in/images/image1.jpg", // ← update to real domain
        width: 1200,
        height: 630,
        alt: "Best Mansion PG Accommodation – Arumbakkam, Chennai",
      },
    ],
  },

  // ── Twitter / X card ─────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title:
      "Best Mansion – PG for Men in Arumbakkam, Chennai | From ₹3,600/month",
    description:
      "Top-rated paying guest accommodation for men near Koyambedu, Chennai. Free WiFi, AC rooms. Starting ₹3,600/month.",
    images: ["https://bestmansion.in/images/image1.jpg"],
  },

  // ── Robots ───────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Verification (add once you verify in Google Search Console) ──────────
  // verification: {
  //   google: "YOUR_GOOGLE_SITE_VERIFICATION_TOKEN",
  // },
};

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Best Mansion",
  alternateName: "Best Mansion PG Chennai",
  description:
    "Top-rated paying guest accommodation exclusively for men in Arumbakkam, Chennai. Features free WiFi, AC & Non-AC rooms, 24/7 hot water, generator backup and RO drinking water.",
  url: "https://bestmansion.in",
  telephone: ["+919381019882", "+919025812030"],
  email: "", // add if you have one
  address: {
    "@type": "PostalAddress",
    streetAddress: "21-A, Anna Avenue, Arumbakkam",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600106",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 13.074169,
    longitude: 80.208209,
  },
  hasMap:
    "https://www.google.com/maps/place/BEST+MANSION+CHENNAI/@13.074169,80.208209,17z",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Bank Transfer",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "6",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Chandrakant Sarode" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Hygiene — clean rooms, washrooms. 24/7 usable as well as drinking water, WiFi. Security — CCTV camera, locker facility. Polite and helpful owner/staff. Peaceful and convenient location.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Jeevan TC" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "As per the name it's the BEST mansion in Chennai for working people with a good hygienic place to stay. Owner is very kind and friendly. Highly recommended.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Kavi Mech" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "One of the best places for men's accommodation in terms of peaceful environment, cleanliness, calm rooms and comfortable beds. Best place to stay — worth every rupee.",
    },
  ],
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Free High-Speed WiFi",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Air Conditioning",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "24/7 Hot Water",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Generator Backup",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "RO Drinking Water",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "CCTV Security",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Washing Machine",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Two-Wheeler Parking",
      value: true,
    },
  ],
};

// ─── FAQ Schema (boosts rich results for "PG in Chennai" searches) ───────────
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the rent at Best Mansion PG Chennai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rent at Best Mansion starts at ₹3,600 per month. Both AC and Non-AC room options are available.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Best Mansion PG located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Best Mansion is located at 21-A, Anna Avenue, Arumbakkam, Chennai – 600 106. It is approximately 5 minutes from Koyambedu CMBT bus stand and 7 minutes from Koyambedu Metro Station.",
      },
    },
    {
      "@type": "Question",
      name: "Is WiFi included at Best Mansion PG?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, free high-speed WiFi is included for all residents at no extra charge.",
      },
    },
    {
      "@type": "Question",
      name: "Is Best Mansion PG only for men?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Best Mansion is exclusively a paying guest accommodation for men in Chennai.",
      },
    },
    {
      "@type": "Question",
      name: "What amenities does Best Mansion offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Best Mansion offers free WiFi, AC and Non-AC rooms, 24/7 hot water, generator backup, RO drinking water, CCTV security, washing machine, two-wheeler parking, housekeeping, and a common TV hall.",
      },
    },
  ],
};

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD: Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* JSON-LD: FAQ Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* Favicon — place a favicon.ico in /public */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}