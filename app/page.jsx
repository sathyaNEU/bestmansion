/**
 * app/page.jsx — Server Component (rendered on the server by Next.js)
 * This is what Google's crawler sees: fully rendered HTML, not a blank page.
 * BestMansion is a Client Component because it uses browser APIs (scroll, canvas, etc.)
 */
import BestMansion from "@/components/BestMansion";

export default function Page() {
  return <BestMansion />;
}