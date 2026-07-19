export type NavItem = {
  href: string;
  label: string;
};

export type Program = {
  name: string;
  age: string;
  description: string;
  highlights: string[];
  color: string;
};

export type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  caption: string;
  span?: string;
};

export const site = {
  name: "Strawberry Little Star Pre-Primary School",
  shortName: "Strawberry Little Star",
  society: "An initiative of Samruddhi Women's Multipurpose Society",
  title: "Premium Preschool in Ahmednagar",
  description:
    "A warm, joyful pre-primary school in Savedi, Ahmednagar where early learning, care, creativity, and community come together for Playgroup, Nursery, LKG, and UKG children.",
  addressLine1: "House No. 58, Mahesh Colony, Bhutkarwadi, Savedi",
  addressLine2: "Ahmednagar, Maharashtra",
  fullAddress:
    "House No. 58, Mahesh Colony, Bhutkarwadi, Savedi, Ahmednagar, Maharashtra",
  hours: "Monday to Saturday, 10:00 AM to 1:00 PM",
  phones: ["+91 9096294569", "+91 9960585115"],
  whatsappNumber: "919096294569",
  mapsQuery:
    "House No.58 Mahesh Colony Bhutkarwadi Savedi Ahmednagar Maharashtra",
};

export const navigation: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/campus", label: "Campus" },
  { href: "/gallery", label: "Gallery" },
  { href: "/admissions", label: "Admissions" },
  { href: "/contact", label: "Contact" },
];

export const trustPillars = [
  {
    title: "Care that feels personal",
    body:
      "Every child is welcomed into a close-knit environment where comfort, kindness, and confidence come first.",
  },
  {
    title: "Learning through joy",
    body:
      "Songs, stories, movement, art, and playful routines help young learners build strong foundations naturally.",
  },
  {
    title: "Community-rooted guidance",
    body:
      "The school's connection with Samruddhi Women's Multipurpose Society reflects a deeper commitment to families and future growth.",
  },
  {
    title: "A bright everyday rhythm",
    body:
      "Short, focused school hours create an age-appropriate routine filled with activity, expression, and care.",
  },
];

export const programs: Program[] = [
  {
    name: "Playgroup",
    age: "Ages 2-3",
    description:
      "A gentle first step into school life with music, movement, sensory play, and warm social interaction.",
    highlights: ["Comfort-first routine", "Motor play", "Rhymes and storytelling"],
    color: "from-rose-300 via-pink-200 to-orange-100",
  },
  {
    name: "Nursery",
    age: "Ages 3-4",
    description:
      "Children build confidence through circle time, creative expression, early language, and joyful classroom rituals.",
    highlights: ["Early language", "Social confidence", "Creative discovery"],
    color: "from-sky-300 via-cyan-200 to-emerald-100",
  },
  {
    name: "LKG",
    age: "Ages 4-5",
    description:
      "Structured yet playful learning introduces pre-literacy, number familiarity, and hands-on classroom participation.",
    highlights: ["Alphabet readiness", "Number play", "Group activity"],
    color: "from-amber-300 via-yellow-200 to-orange-100",
  },
  {
    name: "UKG",
    age: "Ages 5-6",
    description:
      "A bridge toward primary school with stronger routines, classroom confidence, expression, and readiness skills.",
    highlights: ["School readiness", "Independent habits", "Confident expression"],
    color: "from-lime-300 via-green-200 to-emerald-100",
  },
];

export const dailyFlow = [
  {
    title: "Warm welcome",
    detail: "Arrival, greeting rituals, and settling into a calm start.",
  },
  {
    title: "Morning circle",
    detail: "Rhymes, conversation, movement, and shared attention.",
  },
  {
    title: "Creative learning",
    detail: "Letters, numbers, visual learning, and playful guided activities.",
  },
  {
    title: "Expression time",
    detail: "Art, music, recitation, role play, and imagination-building moments.",
  },
  {
    title: "Social play",
    detail: "Friendship, coordination, confidence, and independent interaction.",
  },
  {
    title: "Gentle close",
    detail: "Reflection, goodbye routine, and a positive end to the day.",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    src: "/images/strawberry-school/classroom-session.jpeg",
    alt: "Children seated in a classroom activity session with colorful wall art.",
    title: "Joyful classroom rhythm",
    caption: "Focused group learning in a bright, mural-filled classroom.",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/strawberry-school/annual-function.jpeg",
    alt: "Annual function stage moment at Strawberry Little Star Pre-Primary School.",
    title: "Annual function spotlight",
    caption: "Public speaking, confidence, and celebration on stage.",
  },
  {
    src: "/images/strawberry-school/christmas.jpeg",
    alt: "Children in festive Christmas outfits celebrating together.",
    title: "Festivals with delight",
    caption: "Seasonal celebrations that create warm childhood memories.",
  },
  {
    src: "/images/strawberry-school/newspaper.jpeg",
    alt: "Newspaper coverage featuring the school's community activity.",
    title: "Community recognition",
    caption: "Real local presence that builds trust with families.",
    span: "md:col-span-2",
  },
  {
    src: "/images/strawberry-school/poster.jpeg",
    alt: "Admissions poster for Strawberry Little Star Pre-Primary School.",
    title: "Admissions now open",
    caption: "Programs available across Playgroup, Nursery, LKG, and UKG.",
  },
];

export const parentVoices = [
  {
    title: "Warm environment",
    quote:
      "Parents look for a place where children feel comfortable quickly, and that sense of warmth shapes everything here.",
  },
  {
    title: "Visible engagement",
    quote:
      "Classroom participation, cultural moments, and daily activity make the learning experience feel lively and memorable.",
  },
  {
    title: "Trust through presence",
    quote:
      "A school becomes reassuring when families can see genuine involvement, community connection, and joyful children.",
  },
];

export const faqs = [
  {
    question: "Which programs are available?",
    answer:
      "The school currently offers Playgroup, Nursery, LKG, and UKG programs for early learners.",
  },
  {
    question: "What are the school timings?",
    answer:
      "School operates Monday to Saturday from 10:00 AM to 1:00 PM, making the day focused and age-appropriate.",
  },
  {
    question: "Where is the school located?",
    answer:
      "The campus is located at House No. 58, Mahesh Colony, Bhutkarwadi, Savedi, Ahmednagar, Maharashtra.",
  },
  {
    question: "How can parents inquire about admissions?",
    answer:
      "Families can call +91 9960585115 or +91 9096294569 to ask about admissions, availability, and campus visits.",
  },
];

export const admissionSteps = [
  {
    step: "01",
    title: "Connect",
    body: "Call the school to understand program options, timings, and the admission process.",
  },
  {
    step: "02",
    title: "Visit",
    body: "Experience the campus atmosphere, classroom energy, and daily environment in person.",
  },
  {
    step: "03",
    title: "Choose the right program",
    body: "Select Playgroup, Nursery, LKG, or UKG according to your child's stage and readiness.",
  },
  {
    step: "04",
    title: "Complete enrollment",
    body: "Finish the remaining admission formalities with guidance from the school team.",
  },
];

export const stats = [
  { value: "4", label: "foundational programs" },
  { value: "6", label: "school days each week" },
  { value: "3", label: "focused learning hours daily" },
  { value: "1", label: "community-rooted mission" },
];

export const campusHighlights = [
  "Bright activity-led classroom setting",
  "Festive celebrations and event participation",
  "Wall murals designed to spark imagination",
  "A local environment that feels familiar to families",
];

export const socialLinks = [
  {
    label: "Call now",
    href: `tel:${site.phones[0].replace(/\s+/g, "")}`,
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/${site.whatsappNumber}?text=Hello%20I%20want%20to%20know%20more%20about%20admissions%20for%20Strawberry%20Little%20Star%20Pre-Primary%20School`,
  },
  {
    label: "Open map",
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`,
  },
];
