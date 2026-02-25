export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://bestmansion.in/sitemap.xml",  // ← update to your real domain
  };
}