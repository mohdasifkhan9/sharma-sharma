import { media } from "./media";

export const timeline = [
  {
    year: "1972",
    title: "The Foundation",
    text: "Sharma & Sharma opens its doors in the heart of Old Delhi, filing its first trademark applications for a newly liberalising Indian economy.",
    image: media.heritage[0],
  },
  {
    year: "1985",
    title: "Building Authority",
    text: "The firm becomes a trusted name for opposition and enforcement, representing pioneering domestic manufacturers and brands.",
    image: media.heritage[1],
  },
  {
    year: "2000",
    title: "Going Global",
    text: "With the Madrid Protocol on the horizon, we establish international filing desks and a global associate network across 40 countries.",
    image: media.global.globe,
  },
  {
    year: "2015",
    title: "Digital Portfolios",
    text: "We introduce technology-led portfolio management and real-time monitoring for brands operating across borders and marketplaces.",
    image: media.research[0],
  },
  {
    year: "Today",
    title: "A Heritage Continues",
    text: "Three generations of counsel, thousands of protected marks, and a reputation built on precision, discretion and results.",
    image: media.architecture[2],
  },
];

export const stats = [
  { value: 52, suffix: "+", label: "Years of Practice" },
  { value: 9500, suffix: "+", label: "Clients Represented" },
  { value: 40000, suffix: "+", label: "Applications Filed" },
  { value: 150, suffix: "+", label: "Jurisdictions" },
  { value: 98, suffix: "%", label: "Success Rate" },
];

export const journey = [
  { step: "01", title: "Search", text: "Comprehensive availability search across registries to assess distinctiveness and risk." },
  { step: "02", title: "Application", text: "Precise drafting and classification, filed with the Trade Marks Registry." },
  { step: "03", title: "Examination", text: "We respond to objections and examination reports with reasoned legal argument." },
  { step: "04", title: "Publication", text: "Your mark is advertised in the Trade Marks Journal for third-party review." },
  { step: "05", title: "Registration", text: "On clearing opposition, the mark proceeds to registration and certification." },
  { step: "06", title: "Protection", text: "Ongoing monitoring, renewal and enforcement to keep your rights alive." },
];

export const trademarkTypes = [
  { name: "Word Mark", example: "A brand name in plain text", detail: "Protects the name itself, in any font or style." },
  { name: "Logo Mark", example: "A distinctive symbol", detail: "Protects a visual device, emblem or crest." },
  { name: "Combination", example: "Name + logo lockup", detail: "Protects the composite as used in commerce." },
  { name: "Slogan", example: "A memorable tagline", detail: "Protects distinctive advertising phrases." },
  { name: "Shape Mark", example: "Product configuration", detail: "Protects a distinctive three-dimensional form." },
  { name: "Sound Mark", example: "A signature jingle", detail: "Protects a recognisable audio identity." },
];

export const industries = [
  { name: "Healthcare", image: "/media/medical.jpeg" },
  { name: "Technology", image: "/media/technology.jpeg" },
  { name: "Fashion", image: "/media/fashion.jpeg" },
  { name: "Manufacturing", image: "/media/manufacturing.jpeg" },
  { name: "Automobile", image: "/media/automobile.jpeg" },
  { name: "Education", image: "/media/education.jpeg" },
  { name: "Food & Beverage", image: "/media/food.jpeg" },
  { name: "Startups", image: "/media/startup.jpeg" },
];

export const stories = [
  {
    client: "A Heritage Textile House",
    title: "Reviving a century-old mark across three continents",
    text: "We recovered a lapsed family trademark, defended it against two oppositions, and extended protection into 14 export markets.",
    image: media.retail[2],
    result: "14 markets secured",
  },
  {
    client: "A D2C Beauty Brand",
    title: "From first filing to a defensible global portfolio",
    text: "A founder-led brand engaged us pre-launch. We built a layered portfolio of word, logo and packaging rights before the first sale.",
    image: media.packaging[0],
    result: "0 successful copycats",
  },
  {
    client: "An Industrial Design Studio",
    title: "Protecting form as fiercely as function",
    text: "We registered the configuration of a flagship product and enforced against imitators through swift cease-and-desist action.",
    image: media.design[0],
    result: "6 infringers removed",
  },
];

export const articles = [
  {
    category: "Trademark",
    title: "Choosing a mark that survives examination",
    read: "6 min read",
    image: media.packaging[3],
    excerpt: "Why distinctiveness is the single most important decision a founder makes.",
  },
  {
    category: "International",
    title: "The Madrid Protocol, explained simply",
    read: "8 min read",
    image: media.global.map,
    excerpt: "One application, many countries — and the nuances that trip brands up.",
  },
  {
    category: "Design",
    title: "When to register a design vs a trademark",
    read: "5 min read",
    image: media.design[2],
    excerpt: "The overlap between aesthetics and identity, and how to protect both.",
  },
  {
    category: "Enforcement",
    title: "Building a monitoring strategy that works",
    read: "7 min read",
    image: media.research[0],
    excerpt: "Detecting infringement early is cheaper than litigating it later.",
  },
];

export const trademarkFaqs = [
  { q: "How long does trademark registration take in India?", a: "A straightforward application typically proceeds to registration in 12 to 18 months, assuming no objections or oppositions. Protection, however, begins from the date of filing." },
  { q: "How long is a trademark valid?", a: "A registered trademark is valid for ten years from the date of application and can be renewed indefinitely in successive ten-year terms." },
  { q: "Can I use the ™ symbol before registration?", a: "Yes. The ™ symbol may be used as soon as you file, or even before, to indicate a claim. The ® symbol may only be used once the mark is registered." },
  { q: "What is a trademark opposition?", a: "After publication in the Trade Marks Journal, third parties have a window to oppose registration. We represent clients on both sides — defending applications and challenging conflicting marks." },
  { q: "Do I need to register in every country?", a: "Trademark rights are territorial. If you trade or intend to trade internationally, we recommend a filing strategy — often via the Madrid Protocol — matched to your commercial roadmap." },
];
