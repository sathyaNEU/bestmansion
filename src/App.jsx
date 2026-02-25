import { useState, useEffect, useRef } from "react";
import { Home, MapPin, Droplets, Zap, Phone, Menu, X, Check, Shield, Coffee, Wind, Bike, Wifi, Star, Quote } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

const REVIEWS = [
  {
    name: "Chandrakant Sarode",
    tenure: "Local Guide · 1 review · a month ago",
    avatar: "CS",
    color: "from-purple-500 to-pink-500",
    text: "Hi, writing this review after 1 week of stay and happy to give 5 stars on below points, suggest everyone who are looking for PG in Chennai. Hygiene — clean rooms, washrooms. Rooms with proper ventilation available. Amenities — 24/7 usable as well as drinking water, WiFi. Security — CCTV camera, locker facility. Polite and helpful owner/staff. Location — peaceful and convenient and easily accessible to transportation. Suggest, GO FOR IT ✌",
    highlight: "Polite and helpful owner/staff",
  },
  {
    name: "Jeevan TC",
    tenure: "4 reviews · a month ago",
    avatar: "JT",
    color: "from-blue-500 to-purple-500",
    text: "As per the name it's the BEST mansion in Chennai for working people with a good hygienic place to stay. Owner is very kind and friendly. Maintenance at its best. 24/7 CCTV security and locked gate were great at the cost of safety. Highly recommended stay for without food with minimal cost of rental. Thank you.",
    highlight: "BEST mansion in Chennai for working people",
  },
  {
    name: "Kavi Mech",
    tenure: "7 reviews · 3 years ago",
    avatar: "KM",
    color: "from-emerald-500 to-teal-500",
    text: "I have stayed here for 6 months and based on my experience, this is one of the best places for men's accommodation in terms of peaceful environment, cleanliness, calm rooms and comfortable beds. They clean the bathrooms and rooms almost every day and change the bedsheets and pillow covers often. As it is located in the main area which is a great advantage — transport is easily accessible for maximum places in Chennai. In simple terms, the best place to stay as the name indicates and is worth every rupee.",
    highlight: "Best place to stay — worth every rupee",
  },
  {
    name: "Kumar Velmurugan",
    tenure: "1 review · 6 photos · 4 months ago",
    avatar: "KV",
    color: "from-orange-500 to-amber-500",
    text: "I had a wonderful experience at best mansion. I stay here 1 month of periods. The rooms and bathroom both of daily cleaning, and well maintained, the staff was friendly and helpful with a smile... I recommend this Mansion for bachelors.",
    highlight: "Staff friendly and helpful with a smile",
  },
  {
    name: "Jerald J",
    tenure: "2 reviews · a month ago",
    avatar: "JJ",
    color: "from-cyan-500 to-blue-500",
    text: "The Wi-Fi connection is very good and works smoothly. Washing machine facility is available and well maintained. Hygienic water supply is provided at all times. The restroom is very clean and hygienic. During winter time, heater facility is available and works well. Overall, the place is comfortable, clean, and well maintained.",
    highlight: "Comfortable, clean, and well maintained",
  },
  {
    name: "Google Reviewer",
    tenure: "a month ago",
    avatar: "GR",
    color: "from-pink-500 to-rose-500",
    text: "The Wi-Fi connection is very good and works smoothly. Washing machine facility is available and well maintained. Hygienic water supply is provided at all times. The restroom is very clean and hygienic. During winter time, heater facility is available and works well. Overall, the place is comfortable, clean, and well maintained.",
    highlight: "Comfortable, clean, and well maintained",
  },
];

function FloatingBubbles() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -999, y: -999 });
  const bubblesRef = useRef([]);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);
    const handleMouseMove = e => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    window.addEventListener("mousemove", handleMouseMove);
    const W = () => canvas.width, H = () => canvas.height;
    bubblesRef.current = [
      { r: 38, lag: 0.022, offX: 80, offY: -60, hue: 270, alpha: 0.07 },
      { r: 26, lag: 0.016, offX: -90, offY: 40, hue: 300, alpha: 0.06 },
      { r: 50, lag: 0.010, offX: 20, offY: 110, hue: 260, alpha: 0.05 },
      { r: 20, lag: 0.030, offX: -40, offY: -90, hue: 320, alpha: 0.08 },
      { r: 34, lag: 0.014, offX: 130, offY: 60, hue: 280, alpha: 0.06 },
    ].map((b, i) => ({ ...b, x: W() * 0.5 + b.offX, y: H() * 0.5 + b.offY, pulse: (i / 5) * Math.PI * 2, pulseSpeed: 0.008 + i * 0.003 }));
    const draw = () => {
      const w = W(), h = H();
      ctx.clearRect(0, 0, w, h);
      const mx = mouseRef.current.x < 0 ? w / 2 : mouseRef.current.x;
      const my = mouseRef.current.y < 0 ? h / 2 : mouseRef.current.y;
      bubblesRef.current.forEach(b => {
        b.x += (mx + b.offX - b.x) * b.lag;
        b.y += (my + b.offY - b.y) * b.lag;
        b.pulse += b.pulseSpeed;
        const cr = b.r * (1 + Math.sin(b.pulse) * 0.04);
        const halo = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, cr * 2.8);
        halo.addColorStop(0, `hsla(${b.hue},70%,65%,${b.alpha * 0.5})`);
        halo.addColorStop(1, `hsla(${b.hue},70%,65%,0)`);
        ctx.beginPath(); ctx.arc(b.x, b.y, cr * 2.8, 0, Math.PI * 2); ctx.fillStyle = halo; ctx.fill();
        const grad = ctx.createRadialGradient(b.x - cr * 0.28, b.y - cr * 0.28, cr * 0.05, b.x, b.y, cr);
        grad.addColorStop(0, `hsla(${b.hue + 20},80%,88%,${b.alpha * 1.6})`);
        grad.addColorStop(0.55, `hsla(${b.hue},65%,55%,${b.alpha})`);
        grad.addColorStop(1, `hsla(${b.hue},50%,30%,0)`);
        ctx.beginPath(); ctx.arc(b.x, b.y, cr, 0, Math.PI * 2); ctx.fillStyle = grad; ctx.fill();
        ctx.beginPath(); ctx.arc(b.x - cr * 0.3, b.y - cr * 0.3, cr * 0.18, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${b.alpha * 1.2})`; ctx.fill();
      });
      animRef.current = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animRef.current); window.removeEventListener("resize", resize); window.removeEventListener("mousemove", handleMouseMove); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }} />;
}

function StarRow() {
  return (
    <div className="flex items-center space-x-0.5">
      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
    </div>
  );
}

function ReviewCard({ r }) {
  const [expanded, setExpanded] = useState(false);
  const short = r.text.length > 180;
  return (
    <div className="relative bg-white bg-opacity-5 backdrop-blur-xl border border-white border-opacity-10 rounded-3xl p-7 flex flex-col justify-between hover:bg-opacity-10 transition-all hover:-translate-y-1 group">
      <div className="absolute top-5 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
        <Quote className="w-12 h-12 text-purple-400" />
      </div>
      <div className="flex items-center justify-between mb-4">
        <StarRow />
        <span className="text-xs text-gray-500">Google Review</span>
      </div>
      <div className="mb-4 inline-block bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-400/20 rounded-full px-3 py-1 text-xs text-purple-300 italic">
        "{r.highlight}"
      </div>
      <p className="text-gray-300 text-sm leading-relaxed mb-5 flex-1">
        {short && !expanded ? r.text.slice(0, 180) + "…" : r.text}
        {short && (
          <button onClick={() => setExpanded(e => !e)} className="ml-1 text-purple-400 hover:text-purple-300 text-xs underline underline-offset-2">
            {expanded ? "less" : "more"}
          </button>
        )}
      </p>
      <div className="flex items-center space-x-3 pt-4 border-t border-white border-opacity-10">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${r.color} flex items-center justify-center text-sm font-bold flex-shrink-0`}>
          {r.avatar}
        </div>
        <div>
          <div className="font-semibold text-sm">{r.name}</div>
          <div className="text-gray-500 text-xs">{r.tenure}</div>
        </div>
        <div className="ml-auto">
          <svg viewBox="0 0 48 48" className="w-5 h-5 opacity-60" xmlns="http://www.w3.org/2000/svg">
            <path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.2 33.3 29.7 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 7.9 3l6-6C34.5 6.1 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-7.9 19.7-20 0-1.3-.1-2.7-.2-4z"/>
            <path fill="#34A853" d="M6.3 14.7l7 5.1C15 16.1 19.2 13 24 13c3.1 0 5.8 1.1 7.9 3l6-6C34.5 6.1 29.6 4 24 4c-7.8 0-14.5 4.3-17.7 10.7z"/>
            <path fill="#FBBC05" d="M24 44c5.5 0 10.5-1.9 14.3-5.1l-6.6-5.6C29.7 35.2 27 36 24 36c-5.7 0-10.4-3.8-11.9-8.9l-7 5.4C8.3 39.9 15.6 44 24 44z"/>
            <path fill="#EA4335" d="M44.5 20H24v8.5h11.7c-1 3-3.2 5.4-6.1 7l6.6 5.6C40.5 37.9 44 31.5 44 24c0-1.3-.1-2.7-.5-4z"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function BestMansion() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedWord, setTypedWord] = useState("Modern");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["Modern", "Quality", "Affordable"];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = ["home","experience","location","features","gallery","reviews","contact"];
      const cur = sections.find(s => { const el = document.getElementById(s); if (el) { const r = el.getBoundingClientRect(); return r.top <= 150 && r.bottom >= 150; } return false; });
      if (cur) setActiveSection(cur);
    };
    const handleMouseMove = e => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => { window.removeEventListener("scroll", handleScroll); window.removeEventListener("mousemove", handleMouseMove); };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const cur = words[wordIndex];
      if (!isDeleting && typedWord === cur) { setTimeout(() => setIsDeleting(true), 2000); }
      else if (isDeleting && typedWord === "") { setIsDeleting(false); setWordIndex(p => (p + 1) % words.length); }
      else { setTypedWord(isDeleting ? cur.substring(0, typedWord.length - 1) : cur.substring(0, typedWord.length + 1)); }
    }, isDeleting ? 80 : 150);
    return () => clearTimeout(timer);
  }, [typedWord, isDeleting, wordIndex]);

  const scrollToSection = id => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }); setMobileMenuOpen(false); };
  const parallaxOffset = scrollY * 0.5;
  const headerOpacity = Math.min(scrollY / 100, 1);
  const navItems = ["Home","Experience","Location","Features","Gallery","Reviews","Contact"];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Mouse glow */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background:"radial-gradient(circle, #7c3aed, transparent)", left: mousePosition.x-192, top: mousePosition.y-192, transition:"left 0.3s ease, top 0.3s ease" }} />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900 rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-900 rounded-full opacity-10 blur-3xl" />
      </div>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300"
        style={{ backgroundColor:`rgba(0,0,0,${headerOpacity*0.8})`, backdropFilter: scrollY>50?"blur(20px)":"none" }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Home className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-sm">Best Mansion</div>
              <div className="text-xs text-gray-400">Arumbakkam, Chennai</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map(item => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase())}
                className={`px-4 py-2 text-sm rounded-lg transition-all ${activeSection===item.toLowerCase()?"bg-white bg-opacity-10 text-white":"text-gray-400 hover:text-white hover:bg-white hover:bg-opacity-5"}`}>
                {item}
              </button>
            ))}
          </nav>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white border-opacity-10">
            <div className="flex flex-col space-y-1 pt-4">
              {navItems.map(item => (
                <button key={item} onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left py-3 px-4 text-gray-300 hover:text-white hover:bg-white hover:bg-opacity-5 rounded-lg transition-all">
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-purple-950" style={{ transform:`translateY(${parallaxOffset}px)` }} />
        <FloatingBubbles />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24">
          <div className="inline-flex items-center space-x-2 bg-white bg-opacity-10 backdrop-blur-xl border border-white border-opacity-20 rounded-full px-6 py-2 mb-4 text-sm text-gray-300">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>Best PG &amp; Paying Guest Accommodation in Chennai</span>
          </div>
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-xl border border-purple-400 border-opacity-40 rounded-full px-5 py-2 text-sm font-semibold text-purple-200">
              <Wifi className="w-4 h-4 text-purple-300" />
              <span>Free High-Speed WiFi Included</span>
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none mb-6">
            <span className="block text-white">Redefining</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent min-h-[1.2em]">
              {typedWord}<span className="animate-pulse">|</span>
            </span>
            <span className="block text-white">PG Living</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-4">
            Affordable <strong className="text-white">Paying Guest accommodation for men</strong> in{" "}
            <strong className="text-white">Arumbakkam, Chennai</strong> — near Koyambedu CMBT, Anna Nagar &amp; Vadapalani.
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-sm">
            Free WiFi · AC &amp; Non-AC rooms · 24/7 hot water · Generator backup · Starting ₹3,600/month
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button onClick={() => scrollToSection("contact")}
              className="group relative px-8 py-4 bg-white text-black rounded-full font-medium overflow-hidden transition-all hover:scale-105">
              <span className="relative z-10">Reserve Your Space</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity" />
            </button>
            <button onClick={() => scrollToSection("experience")}
              className="px-8 py-4 bg-white bg-opacity-10 backdrop-blur-xl border border-white border-opacity-20 rounded-full font-medium hover:bg-opacity-20 transition-all">
              Explore More
            </button>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="relative pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm text-gray-400 tracking-widest uppercase mb-4">The Experience</div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              Where Every Detail
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Matters</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-8">
              <p className="text-xl text-gray-300 leading-relaxed">
                Are you planning to or just landed in Chennai, looking for the best{" "}
                <strong className="text-white">sharing room or PG accommodation</strong> near Anna Nagar,
                Arumbakkam, Aminjikarai, Vadapalani or Koyambedu? Best Mansion is the right choice.
                Exclusively for men, we're strategically located just minutes from{" "}
                <strong className="text-white">Koyambedu Main Bus Terminal (CMBT)</strong>.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Whether you are working, studying, or on a temporary business trip to Chennai, Best Mansion
                provides clean, peaceful paying guest accommodation that feels like home — because you
                deserve comfort after a hard day's work.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Wifi,   title: "Free High-Speed WiFi",      desc: "Stay connected — complimentary internet included" },
                  { icon: Shield, title: "24/7 Security",             desc: "Your safety is our top priority" },
                  { icon: Zap,    title: "Generator Backup",          desc: "Uninterrupted power — never worry about outages" },
                  { icon: Coffee, title: "Community & Common TV Hall", desc: "Connect, relax and unwind" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-gray-400 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden" style={{ width:"100%", aspectRatio:"630/315" }}>
                <img src={`${BASE}images/image1.jpg`} alt="Best Mansion Arumbakkam Chennai — Exterior View"
                  className="w-full h-full object-cover object-center" loading="eager" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white bg-opacity-10 backdrop-blur-xl border border-white border-opacity-20 rounded-2xl p-6">
                <div className="text-3xl font-bold">₹3,600</div>
                <div className="text-gray-400 text-sm">Starting per month</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="location" className="relative pt-16 pb-24 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-sm text-gray-400 tracking-widest uppercase mb-4">Location</div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              At The Heart Of
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Chennai</span>
            </h2>
            <address className="not-italic text-gray-400 mt-4 max-w-xl mx-auto">
              <strong>Best Mansion</strong> — 21-A, Anna Avenue, Arumbakkam, Chennai – 600 106.<br />
              Strategically positioned for seamless connectivity to Anna Nagar, Koyambedu, Vadapalani &amp; Aminjikarai.
            </address>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title:"VR Mall", time:"10 mins", desc:"Shopping & Entertainment" },
              { title:"AMPA Skywalk", time:"5 mins", desc:"Entertainment Hub" },
              { title:"Koyambedu CMBT Bus Stand", time:"5 mins", desc:"Major Transit Hub" },
              { title:"Anna Nagar", time:"8 mins", desc:"Business & Residential District" },
              { title:"Vadapalani", time:"10 mins", desc:"Commercial Center" },
              { title:"Koyambedu Metro Station", time:"7 mins", desc:"Rapid Transit" },
            ].map((loc, idx) => (
              <div key={idx} className="group relative bg-white bg-opacity-5 backdrop-blur-xl border border-white border-opacity-10 rounded-2xl p-6 hover:bg-opacity-10 transition-all hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span className="text-sm font-semibold text-purple-400 bg-purple-400 bg-opacity-10 px-3 py-1 rounded-full">{loc.time}</span>
                </div>
                <h3 className="text-xl font-bold mb-1">{loc.title}</h3>
                <p className="text-gray-400 text-sm">{loc.desc}</p>
              </div>
            ))}
          </div>
          {/* Map */}
          <div className="mt-16 rounded-3xl overflow-hidden border border-white border-opacity-10" style={{ height: 320 }}>
            <iframe
              title="Best Mansion Location — Arumbakkam, Chennai"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.430080883965!2d80.20820931482316!3d13.074169990790656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260e8d4a7c4b1%3Adfa41b46176f657d!2sBEST%20MANSION%20CHENNAI!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%" height="100%"
              style={{ border: 0, filter: "grayscale(60%) invert(90%)" }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-sm text-gray-400 tracking-widest uppercase mb-4">Features &amp; Amenities</div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              Built For
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Excellence</span>
            </h2>
          </div>

          {/* WiFi highlight banner */}
          <div className="mb-12 rounded-3xl bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/30 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                <Wifi className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Free High-Speed WiFi</h3>
                <p className="text-gray-300 mt-1">Complimentary internet access throughout Best Mansion — perfect for remote work, streaming &amp; staying connected.</p>
              </div>
            </div>
            <div className="flex-shrink-0 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-2xl px-6 py-3 text-center">
              <div className="text-2xl font-bold text-green-400">FREE</div>
              <div className="text-xs text-gray-400">No extra charge</div>
            </div>
          </div>

          {/* Feature image cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            {[
              { icon: Zap,      title: "Generator Backup",    img: `${BASE}images/image4.jpg` },
              { icon: Droplets, title: "Hot Water 24/7",      img: `${BASE}images/image7.jpg` },
              { icon: Bike,     title: "Two-Wheeler Parking", img: `${BASE}images/image9.jpg` },
              { icon: Wind,     title: "RO Drinking Water",   img: `${BASE}images/image8.jpg` },
            ].map((feature, idx) => (
              <div key={idx} className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer">
                <img src={feature.img} alt={`${feature.title} — Best Mansion PG Chennai`}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <feature.icon className="w-8 h-8 mb-3 text-purple-400" />
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Amenities checklist */}
          <div className="relative bg-white bg-opacity-5 backdrop-blur-xl border border-white border-opacity-10 rounded-3xl p-12">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-3xl" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 text-center">Premium Amenities at Best Mansion PG, Arumbakkam</h3>
              <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">All-inclusive paying guest facilities for men in Chennai — no hidden charges.</p>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                {["Free High-Speed WiFi","AC Rooms","Non-AC Rooms","Attached Bathrooms","Premium Mattresses","Wardrobes","Outdoor Patio","Common TV Hall","Housekeeping","24/7 Security","First Aid Kit","Fire Safety Equipment","Laundry Service","RO Drinking Water","Hot Water 24/7","Generator Backup"].map((amenity, idx) => (
                  <div key={idx} className="flex items-center space-x-3 group cursor-pointer">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className={`group-hover:text-white transition-colors ${amenity === "Free High-Speed WiFi" ? "text-purple-300 font-semibold" : "text-gray-300"}`}>
                      {amenity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="relative py-32 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-sm text-gray-400 tracking-widest uppercase mb-4">Gallery</div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              See Best Mansion
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">For Yourself</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { src: `${BASE}images/image1.jpg`, title: "Exterior — Best Mansion Arumbakkam", span: "md:col-span-2", style: { aspectRatio: "630/297" } },
              { src: `${BASE}images/image3.jpg`, title: "Sharing Rooms — PG Chennai" },
              { src: `${BASE}images/image6.jpg`, title: "Comfortable PG Accommodation" },
              { src: `${BASE}images/image7.jpg`, title: "24/7 Hot Water" },
              { src: `${BASE}images/image8.jpg`, title: "RO Drinking Water" },
              { src: `${BASE}images/image4.jpg`, title: "Generator — Uninterrupted Power" },
            ].map((img, idx) => (
              <div key={idx} className={`group relative overflow-hidden rounded-2xl ${img.span || "aspect-square"} cursor-pointer`} style={img.style}>
                <img src={img.src} alt={img.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6"><p className="text-2xl font-bold">{img.title}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="relative py-16 px-6">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500 opacity-5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <div className="text-sm text-gray-400 tracking-widest uppercase mb-4">Google Reviews</div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              What Our Residents
              <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Say About Us</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((r, idx) => <ReviewCard key={idx} r={r} />)}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="text-sm text-gray-400 tracking-widest uppercase">Get In Touch</div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Your New PG Home
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">in Chennai Awaits</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Best <strong className="text-white">PG accommodation for men in Arumbakkam, Chennai</strong>.
              Starting at just <strong className="text-white">₹3,600/month</strong>.
            </p>
            <div className="pt-8 space-y-4">
              <a href="https://wa.me/+919381019882?text=Hi, I'm interested in finding a room at Best Mansion."
                target="_blank" rel="noopener noreferrer"
                className="inline-block group relative px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg overflow-hidden transition-all hover:scale-105">
                <span className="relative z-10">Connect on WhatsApp</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <div className="text-gray-400 space-y-2">
                <p className="flex items-center justify-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+919381019882" className="hover:text-white transition-colors">93810 19882</a>
                  <span>/</span>
                  <a href="tel:+919025812030" className="hover:text-white transition-colors">90258 12030</a>
                </p>
                <p className="flex items-center justify-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>21-A, Anna Avenue, Arumbakkam, Chennai – 600 106</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white border-opacity-10 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center text-gray-500 space-y-2">
          <p>© 2026 Best Mansion — Best PG &amp; Paying Guest Accommodation for Men in Arumbakkam, Chennai.</p>
          <p className="text-xs text-gray-600">
            Free WiFi · AC Rooms · Serving men looking for PG in Anna Nagar · Arumbakkam · Koyambedu · Vadapalani · Aminjikarai · Chennai.
          </p>
        </div>
      </footer>
    </div>
  );
}