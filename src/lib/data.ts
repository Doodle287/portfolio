import {
  MapPin, GraduationCap, Languages, Rocket,
  Smartphone, Layers, Server, Settings2, GitBranch, Sparkles,
  Mail, Phone, Send, Linkedin, Github,
  CreditCard, Zap, BarChart3, Plane, Car, ReceiptText,
  Bot, TriangleAlert, ScanLine, Globe, Coins, Lock,
  Package, Bell, LayoutDashboard,
  Radar, MessagesSquare,
  Newspaper, Clapperboard, BookOpen,
  Bus, Map, WifiOff,
  Ticket, Armchair, QrCode,
  Pill, CalendarDays, Heart,
  type LucideIcon,
} from 'lucide-react'

/* ----------------------------------------------------------------------- */
/* Profile                                                                  */
/* ----------------------------------------------------------------------- */

export const profile = {
  firstName: 'Abdyjelil',
  lastName: 'Tuvakov',
  shortName: 'Jelil',
  role: 'Senior Flutter Developer',
  initials: 'JT',
  availability: 'Available for opportunities in UAE',
  location: 'Dubai, United Arab Emirates',
  tagline:
    'Senior Flutter Developer crafting scalable iOS & Android applications across fintech, logistics, transport, healthcare, and social platforms. Based in Dubai.',
  email: 'meindev.7@gmail.com',
  phone: '+971 58 189 4341',
  phoneHref: 'tel:+971581894341',
  phoneTm: '+993 62 63 84 37',
  phoneTmHref: 'tel:+99362638437',
  telegram: '@doodle_7',
  telegramHref: 'https://t.me/doodle_7',
  linkedin: 'https://www.linkedin.com/in/jelil-tuvakov-9864813a7',
  github: 'https://github.com/Doodle287',
}

export const stats: { value: number; suffix: string; label: string }[] = [
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 8, suffix: '+', label: 'Apps Delivered' },
  { value: 3, suffix: '', label: 'Languages Spoken' },
]

/* ----------------------------------------------------------------------- */
/* About                                                                    */
/* ----------------------------------------------------------------------- */

export const aboutParagraphs: string[] = [
  "I'm a Senior Flutter Developer with over five years of production experience building mobile applications that serve thousands of users daily. My work spans fintech payment systems, news platforms, logistics trackers, city transport monitors, and social networking apps.",
  'I specialize in clean, maintainable architectures and have managed full app lifecycles from initial planning through App Store and Play Store deployment. I thrive in agile teams and enjoy turning complex business requirements into elegant, performant mobile experiences.',
  "Currently based in Dubai, UAE, with a Bachelor's in Mobile and Network Engineering from Oguz Han Engineering and Technology University.",
]

export const aboutInfo: { icon: LucideIcon; label: string; value: string }[] = [
  { icon: MapPin, label: 'Location', value: 'Dubai, United Arab Emirates' },
  { icon: GraduationCap, label: 'Education', value: 'B.Sc. Mobile & Network Engineering' },
  { icon: Languages, label: 'Languages', value: 'Turkmen, Russian, English' },
  { icon: Rocket, label: 'Focus', value: 'Flutter & Cross-Platform Mobile' },
]

/* ----------------------------------------------------------------------- */
/* Skills                                                                   */
/* ----------------------------------------------------------------------- */

export const skills: { icon: LucideIcon; title: string; tags: string[] }[] = [
  { icon: Smartphone, title: 'Mobile Development', tags: ['Flutter', 'Dart', 'iOS', 'Android', 'Cross-Platform'] },
  { icon: Layers, title: 'Architecture & Patterns', tags: ['Clean Architecture', 'Modular Architecture', 'BLoC', 'Provider'] },
  { icon: Server, title: 'Backend & APIs', tags: ['REST APIs', 'Firebase', 'Hive', 'Local Storage'] },
  { icon: Settings2, title: 'DevOps & Tools', tags: ['CI/CD', 'Git', 'GitFlow', 'App Store Connect', 'Google Play Console'] },
  { icon: GitBranch, title: 'Workflow', tags: ['Agile Development', 'Team Collaboration', 'Code Review'] },
  { icon: Sparkles, title: 'Domains', tags: ['Fintech', 'Logistics', 'Media', 'Transport', 'Social', 'Healthcare'] },
]

export const marquee: string[] = [
  'Flutter', 'Dart', 'BLoC', 'Clean Architecture', 'Firebase', 'REST APIs', 'iOS', 'Android',
  'CI/CD', 'AI / LLM', 'Hive', 'In-App Purchases', 'Provider', 'Geolocation', 'Push Notifications', 'OCR',
]

/* ----------------------------------------------------------------------- */
/* Experience                                                               */
/* ----------------------------------------------------------------------- */

export const experience: {
  date: string
  role: string
  company: string
  desc: string
  current?: boolean
}[] = [
  {
    date: 'Feb 2024 — Present',
    role: 'Flutter Developer',
    company: 'TurkmenPocta Company',
    desc: 'Lead mobile developer for ChaparPay fintech application. Designed scalable architecture, integrated payment APIs, and managed full app lifecycle.',
    current: true,
  },
  {
    date: 'Aug 2023 — Feb 2024',
    role: 'Flutter Developer',
    company: 'Turkmenportal Company',
    desc: "Maintained and optimized Turkmenistan's largest news application. Delivered UI/UX improvements and contributed to transport platforms.",
  },
  {
    date: 'Feb 2023 — May 2023',
    role: 'Flutter Developer',
    company: 'LS Express',
    desc: 'Developed logistics tracking features, responsive UI flows, and real-time shipment status logic.',
  },
  {
    date: 'Jun 2022 — Nov 2022',
    role: 'Flutter Developer',
    company: 'Tasin Yyldyz',
    desc: 'Contributed to feature implementation, API integration, form validation, and caching logic improvements.',
  },
]

/* ----------------------------------------------------------------------- */
/* Contact                                                                  */
/* ----------------------------------------------------------------------- */

export const contactLinks: { icon: LucideIcon; label: string; value: string; href: string }[] = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone (UAE)', value: profile.phone, href: profile.phoneHref },
  { icon: Smartphone, label: 'Phone (TM)', value: profile.phoneTm, href: profile.phoneTmHref },
  { icon: Send, label: 'Telegram', value: profile.telegram, href: profile.telegramHref },
  { icon: Linkedin, label: 'LinkedIn', value: 'jelil-tuvakov', href: profile.linkedin },
  { icon: Github, label: 'GitHub', value: 'github.com/Doodle287', href: profile.github },
]

export const contactBlurb =
  "I'm currently open to new opportunities across Dubai, Abu Dhabi, Sharjah, and remote positions within the UAE. Whether you have a project in mind, want to collaborate, or just want to say hello — I'd love to hear from you."

/* ----------------------------------------------------------------------- */
/* Projects                                                                 */
/* ----------------------------------------------------------------------- */

export type BadgeTone = 'lead' | 'solo' | 'scratch' | 'contrib'
export interface Badge { label: string; tone: BadgeTone }
export interface StoreLink { kind: 'appstore' | 'googleplay'; url: string }
export interface Feature { icon: LucideIcon; title: string; desc: string }
export interface Shot { src: string; caption: string }

export interface Project {
  id: string
  name: string
  type: string
  badge: Badge
  tagline: string
  subtitle: string
  intro: string
  cardStack: string[]
  cover: string
  accent: [string, string]
  stores: StoreLink[]
  shots: Shot[]
  features: Feature[]
  tech: string[]
  about: string[]
}

const A = (p: string) => `/portfolio-assets/${p}`

export const projects: Project[] = [
  {
    id: 'chaparpay',
    name: 'ChaparPay',
    type: 'Fintech',
    badge: { label: 'Lead Developer', tone: 'lead' },
    tagline:
      'One-stop payment platform for utilities, travel tickets, traffic fines, and courier tracking — serving TurkmenPocta users nationwide.',
    subtitle: 'Fintech Payment Platform',
    intro:
      'Your one-stop solution for payments and tickets. Effortlessly purchase train and airplane tickets, manage payments for telecom, television, electricity, water, and gas — all through a single, intuitive app. Check and pay traffic fines, track courier packages, and view balances for internet, IP-TV, and phone services instantly.',
    cardStack: ['Flutter', 'BLoC', 'REST API', 'Payment APIs'],
    cover: A('chaparpay-1.png'),
    accent: ['#6366f1', '#22d3ee'],
    stores: [
      { kind: 'appstore', url: 'https://apps.apple.com/tm/app/%C3%A7aparpay/id1564491971' },
      { kind: 'googleplay', url: 'https://play.google.com/store/apps/details?id=tm.gov.turkmenpost.caparpay' },
    ],
    shots: [
      { src: A('chaparpay-1.png'), caption: 'Home — Services' },
      { src: A('chaparpay-2.png'), caption: 'Internet & Media' },
      { src: A('chaparpay-3.png'), caption: 'PYGG — Vehicle Services' },
      { src: A('chaparpay-4.png'), caption: 'Flight Booking' },
      { src: A('chaparpay-5.png'), caption: 'Payment History' },
      { src: A('chaparpay-6.png'), caption: 'Payment Confirmation' },
      { src: A('chaparpay-7.png'), caption: 'Expense Analytics' },
    ],
    features: [
      { icon: CreditCard, title: 'Multi-Service Payments', desc: 'Pay for utilities, internet, phone, TV, and transport all in one place with seamless integration.' },
      { icon: Zap, title: 'Real-Time Transactions', desc: 'Instant payment processing with direct bank integration and immediate confirmation.' },
      { icon: BarChart3, title: 'Expense Analytics', desc: 'Monthly spending breakdown with visual charts and intelligent categorization of expenses.' },
      { icon: Plane, title: 'Flight & Bus Tickets', desc: 'Book domestic travel directly in-app with real-time availability and instant e-tickets.' },
      { icon: Car, title: 'Vehicle Services (PYGG)', desc: 'Pay traffic fines, view protocols, manage vehicle documents, and monitor compliance.' },
      { icon: ReceiptText, title: 'Payment History', desc: 'Complete transaction log with advanced filtering, receipts, and detailed payment information.' },
    ],
    tech: ['Flutter', 'Dart', 'BLoC', 'REST API', 'Firebase', 'Hive', 'Payment APIs', 'CI/CD'],
    about: [
      'ChaparPay is the official digital payment platform of TurkmenPocta (Turkmenistan Postal Service), serving as a comprehensive hub for everyday financial transactions. The app combines utility payments, travel booking, vehicle services, and courier tracking into a single seamless mobile experience.',
      'Users can pay for TMCell and Telekom mobile subscriptions, ASTU Internet, IP-TV, cable television, electricity, water, and natural gas. The built-in PYGG module handles traffic fine checks and payments, vehicle protocol viewing, and compliance documents. The travel section offers real-time flight and train ticket booking with seat selection and instant e-tickets.',
      'Built with Flutter using the BLoC architecture pattern, the app employs cutting-edge security technology to protect user information. Automated payment scheduling, real-time transaction confirmation, expense analytics with monthly breakdowns, and offline-first capabilities with Hive local storage ensure a fast, reliable experience across all device types.',
    ],
  },
  {
    id: 'contractly',
    name: 'Contractly AI',
    type: 'AI · Legal Tech',
    badge: { label: 'Built from Scratch — Solo', tone: 'solo' },
    tagline:
      'AI contract review companion — upload a PDF, image, or scan and get a plain-language summary, risk flags, and key clause highlights before you sign.',
    subtitle: 'AI-Powered Contract Review Companion',
    intro:
      'Understand contracts with confidence. Upload a PDF, scan with your camera, or pick an image, and Contractly AI delivers a plain-language summary, surfaces potential risks, and highlights the clauses you should review before signing — all in seconds. Designed and built end-to-end as a solo project from architecture and AI integration through App Store and Play Store release.',
    cardStack: ['Flutter', 'AI / LLM', 'BLoC', 'In-App Purchases'],
    cover: A('contractly-2.png'),
    accent: ['#a78bfa', '#22d3ee'],
    stores: [
      { kind: 'appstore', url: 'https://apps.apple.com/ae/app/contractly-ai/id6762138259' },
      { kind: 'googleplay', url: 'https://play.google.com/store/apps/details?id=com.contractly.dev' },
    ],
    shots: [
      { src: A('contractly-1.png'), caption: 'Sign In — Get Started' },
      { src: A('contractly-2.png'), caption: 'Home — Upload Contract' },
      { src: A('contractly-3.png'), caption: 'PDF, Image or Camera' },
      { src: A('contractly-4.png'), caption: 'Analysis History' },
      { src: A('contractly-5.png'), caption: 'Credit Balance' },
      { src: A('contractly-6.png'), caption: 'Credit Activity' },
      { src: A('contractly-7.png'), caption: 'Profile & Settings' },
    ],
    features: [
      { icon: Bot, title: 'AI Contract Analysis', desc: 'Plain-language explanation of what the contract actually says — obligations, dates, parties, and what each clause means in everyday words.' },
      { icon: TriangleAlert, title: 'Risk & Clause Highlights', desc: 'Surfaces potential issues, unusual terms, and important clauses so users know exactly what to negotiate or question before signing.' },
      { icon: ScanLine, title: 'PDF, Image & Camera', desc: 'Three flexible input modes — import an existing PDF, pick an image from the library, or scan a paper contract live with the camera.' },
      { icon: Globe, title: 'Bilingual Support', desc: 'Full English and Arabic interface and analysis, built with localization-first architecture so adding new languages is a configuration change.' },
      { icon: Coins, title: 'Credit-Based Pricing', desc: 'Start free, pay only when you need to. One credit per analysis, with transparent activity tracking and seamless in-app credit packs.' },
      { icon: Lock, title: 'Account-Synced History', desc: "Past analyses stay attached to the user's account and are available across devices — reopen, compare, and reference any time." },
    ],
    tech: ['Flutter', 'Dart', 'BLoC', 'Clean Architecture', 'REST API', 'AI / LLM', 'OCR', 'PDF Parsing', 'In-App Purchases', 'Firebase', 'Localization (EN / AR)', 'CI/CD'],
    about: [
      'Contractly AI is a solo project I conceived, designed, and shipped end-to-end — product strategy, UX, Flutter implementation, AI integration, monetization, and store submission to both the App Store and Google Play. The mission is simple: give everyday users the confidence to understand any contract before they sign it, without paying for a lawyer to read every paragraph.',
      'The app accepts contracts as PDFs, images, or live camera scans. Documents flow through a parsing and OCR pipeline, then into a large language model that produces a structured, plain-language analysis — a summary, party and date extraction, risk flags, and per-clause highlights. The UX is intentionally minimal so non-legal users feel comfortable, with Arabic and English as first-class languages from day one.',
      'Architecturally, Contractly AI follows Clean Architecture with the BLoC pattern for predictable state management, a clear separation between data, domain, and presentation layers, and a feature-first folder structure that keeps each capability independently testable. A credit-based model powered by in-app purchases keeps the entry point free while sustaining usage costs, and analysis history is synced to the user account so reviews remain accessible across devices.',
      "Shipping this app alone meant owning every decision — from picking the LLM provider and tuning prompts for legal accuracy, to writing App Store metadata, designing the credit economy, handling refunds, and configuring CI/CD pipelines for both stores. It's the project that best captures how I think about building mobile products end-to-end.",
    ],
  },
  {
    id: 'kargo76',
    name: '76 Kargo',
    type: 'Logistics',
    badge: { label: 'Built from Scratch', tone: 'scratch' },
    tagline:
      'Shipment monitoring tool with real-time tracking, status updates, and dark/light theme support. Built end-to-end from scratch.',
    subtitle: 'Logistics Monitoring Platform',
    intro:
      'A convenient tool for tracking your shipments. Monitor current location and status, navigate an intuitive interface designed for everyone, and switch between dark and light themes.',
    cardStack: ['Flutter', 'Firebase', 'Push Notifications'],
    cover: A('76kargo-1.png'),
    accent: ['#22d3ee', '#6366f1'],
    stores: [{ kind: 'googleplay', url: 'https://play.google.com/store/apps/details?id=tm.kargo76.com' }],
    shots: [
      { src: A('76kargo-1.png'), caption: 'Main Screen' },
      { src: A('76kargo-2.png'), caption: 'Tracking' },
      { src: A('76kargo-3.png'), caption: 'Shipment Details' },
      { src: A('76kargo-4.png'), caption: 'Notifications' },
    ],
    features: [
      { icon: Package, title: 'Shipment Tracking', desc: 'Real-time tracking of packages and shipments with live status updates.' },
      { icon: Bell, title: 'Push Notifications', desc: 'Instant notifications for status changes, delivery updates, and alerts.' },
      { icon: LayoutDashboard, title: 'Monitoring Dashboard', desc: 'Overview of all active shipments with filtering and sorting capabilities.' },
    ],
    tech: ['Flutter', 'Firebase', 'Push Notifications', 'REST API'],
    about: [
      '76 Kargo is a shipment monitoring application I built end-to-end, giving customers a clean, fast way to follow packages from dispatch to delivery. The interface is intentionally simple so anyone can track a shipment at a glance, with full dark and light theme support.',
      'Real-time status updates are delivered through push notifications, and a monitoring dashboard lets users see every active shipment with filtering and sorting. The app is built on Flutter with Firebase powering messaging and backend services.',
    ],
  },
  {
    id: 'hingo',
    name: 'Hingo',
    type: 'Social',
    badge: { label: 'Lead Developer', tone: 'lead' },
    tagline:
      'Meet new people nearby for socializing, dating, travel, business networking, and shared hobbies — making real-life connections easy.',
    subtitle: 'Social Networking App',
    intro:
      'Meet new people nearby, make friends, and connect over shared interests. Whether you want to chat, find a travel buddy, join local hangouts, network professionally, or discover activities — Hingo makes social connection simple, fun, and real.',
    cardStack: ['Flutter', 'Geolocation', 'Firebase'],
    cover: A('hingo-1.png'),
    accent: ['#d946ef', '#8b5cf6'],
    stores: [
      { kind: 'appstore', url: 'https://apps.apple.com/tm/app/hingo-meet-new-people-nearby/id6749272317' },
      { kind: 'googleplay', url: 'https://play.google.com/store/apps/details?id=com.hingo' },
    ],
    shots: [
      { src: A('hingo-1.png'), caption: 'Home' },
      { src: A('hingo-2.png'), caption: 'Discovery' },
      { src: A('hingo-3.png'), caption: 'Profile' },
      { src: A('hingo-4.png'), caption: 'Matching' },
      { src: A('hingo-5.png'), caption: 'Chat' },
      { src: A('hingo-6.png'), caption: 'Explore' },
      { src: A('hingo-7.png'), caption: 'Settings' },
      { src: A('hingo-8.png'), caption: 'Activity' },
    ],
    features: [
      { icon: Radar, title: 'Nearby Discovery', desc: 'Find people nearby for socializing, dating (18+), travel, business networking, and shared hobbies.' },
      { icon: MessagesSquare, title: 'Hangout Chats', desc: 'Create or join interest-based hangouts for meetups, sports, entertainment, skill sharing, and more.' },
      { icon: Plane, title: 'Travel & Activities', desc: 'Connect with travel companions, discover local events, and organize group activities in real life.' },
    ],
    tech: ['Flutter', 'Geolocation', 'Firebase', 'BLoC'],
    about: [
      'Hingo is a social networking app focused on real-life connection — finding people nearby for friendship, dating, travel, professional networking, and shared hobbies. As lead developer I shaped the architecture and core experiences from discovery to chat.',
      'The app combines geolocation-based discovery with interest-driven hangouts, letting users create or join meetups around sports, entertainment, skill sharing, and travel. It is built with Flutter and Firebase, with location services powering the nearby-people experience.',
    ],
  },
  {
    id: 'turkmenportal',
    name: 'Turkmenportal',
    type: 'Media',
    badge: { label: 'Contributor', tone: 'contrib' },
    tagline:
      "Turkmenistan's leading news source — 24/7 breaking news in three languages, event guides, and video reports with millions of readers.",
    subtitle: 'News Platform',
    intro:
      "The official app of Turkmenportal — Turkmenistan's most recognized and widely cited news source. Breaking news around the clock in three languages (Turkmen, Russian, English), exclusive video reports, an entertainment guide with local events, and ultra-fast content loading.",
    cardStack: ['Flutter', 'Content Delivery', 'Performance'],
    cover: A('turkmenportal-1.png'),
    accent: ['#6366f1', '#8b5cf6'],
    stores: [
      { kind: 'appstore', url: 'https://apps.apple.com/tm/app/turkmenportal/id1544019509' },
      { kind: 'googleplay', url: 'https://play.google.com/store/apps/details?id=com.takykcheshme.turkmenportal' },
    ],
    shots: [
      { src: A('turkmenportal-1.png'), caption: 'News Feed' },
      { src: A('turkmenportal-2.png'), caption: 'Article View' },
      { src: A('turkmenportal-3.png'), caption: 'Categories' },
      { src: A('turkmenportal-4.png'), caption: 'Search' },
    ],
    features: [
      { icon: Newspaper, title: 'Trilingual News', desc: '24/7 breaking news in Turkmen, Russian, and English with push notifications for urgent stories.' },
      { icon: Clapperboard, title: 'Events & Entertainment', desc: 'Built-in "Afisha" guide covering films, concerts, exhibitions, and family activities across Turkmenistan.' },
      { icon: BookOpen, title: 'Reader Experience', desc: 'Dark mode, adjustable font sizes, bookmarks, social sharing, and ultra-fast content loading.' },
    ],
    tech: ['Flutter', 'Content Delivery', 'Performance', 'REST API'],
    about: [
      "Turkmenportal is the official mobile app of Turkmenistan's most recognized and widely cited news source, reaching millions of readers. I contributed to maintaining and optimizing the app, delivering UI/UX improvements and performance gains.",
      'The app delivers around-the-clock breaking news in three languages, exclusive video reports, and a built-in entertainment guide for films, concerts, and exhibitions — all engineered for ultra-fast content loading and a smooth reading experience.',
    ],
  },
  {
    id: 'duralga',
    name: 'Duralga',
    type: 'Transport',
    badge: { label: 'Contributor', tone: 'contrib' },
    tagline:
      'Public transport app for Ashgabat and Arkadag — live bus tracking, route search, and full offline mode with map and compass.',
    subtitle: 'City Transport Monitoring',
    intro:
      'A simple and convenient app for public transport and navigation in Turkmenistan. View bus stops in Ashgabat and Arkadag, track buses on route maps, search stops and routes, and use the offline mode with map, compass, and bus routes — no internet required.',
    cardStack: ['Flutter', 'Maps', 'Real-time'],
    cover: A('duralga-1.png'),
    accent: ['#06b6d4', '#6366f1'],
    stores: [
      { kind: 'appstore', url: 'https://apps.apple.com/tm/app/duralga/id1607990462' },
      { kind: 'googleplay', url: 'https://play.google.com/store/apps/details?id=com.takykcheshme.gps' },
    ],
    shots: [
      { src: A('duralga-1.png'), caption: 'Map View' },
      { src: A('duralga-2.png'), caption: 'Routes' },
      { src: A('duralga-3.png'), caption: 'Bus Tracking' },
      { src: A('duralga-4.png'), caption: 'Schedule' },
      { src: A('duralga-5.png'), caption: 'Stops' },
    ],
    features: [
      { icon: Bus, title: 'Live Bus Tracking', desc: 'Real-time bus positions on interactive maps covering Ashgabat and Arkadag with route visualization.' },
      { icon: Map, title: 'Stop & Route Search', desc: 'Search bus stops and routes quickly with optimized mobile data consumption and fast refresh rates.' },
      { icon: WifiOff, title: 'Offline Mode', desc: 'Full offline support with map, compass, and bus route information — no internet connection needed.' },
    ],
    tech: ['Flutter', 'Maps', 'Real-time', 'Geolocation'],
    about: [
      'Duralga is a public-transport companion for Ashgabat and Arkadag, helping commuters find stops, search routes, and track buses live on a map. I contributed to the app as part of the Turkmenportal team.',
      'A standout capability is the full offline mode — map, compass, and route information all work without an internet connection, with data consumption carefully optimized for fast, reliable refreshes on the move.',
    ],
  },
  {
    id: 'shaherarabilet',
    name: 'Shaherarabilet',
    type: 'Travel',
    badge: { label: 'Contributor', tone: 'contrib' },
    tagline:
      'Buy bus tickets online — no queues or ticket offices. Routes to all velayats with real-time seat availability.',
    subtitle: 'Bus Ticketing Platform',
    intro:
      'No queues, no ticket offices — buy bus tickets online anytime. Browse routes to any velayat in Turkmenistan and check real-time seat availability for your chosen destination.',
    cardStack: ['Flutter', 'Booking System', 'Payments'],
    cover: A('shaherarabilet-1.png'),
    accent: ['#8b5cf6', '#6366f1'],
    stores: [{ kind: 'googleplay', url: 'https://play.google.com/store/apps/details?id=com.takykcheshme.auh' }],
    shots: [
      { src: A('shaherarabilet-1.png'), caption: 'Home' },
      { src: A('shaherarabilet-2.png'), caption: 'Route Search' },
      { src: A('shaherarabilet-3.png'), caption: 'Seat Selection' },
      { src: A('shaherarabilet-4.png'), caption: 'Booking' },
    ],
    features: [
      { icon: Ticket, title: 'Online Booking', desc: "Buy tickets anytime without queues — browse all routes across Turkmenistan's velayats." },
      { icon: Armchair, title: 'Seat Availability', desc: 'Check real-time seat availability for your chosen direction before purchasing.' },
      { icon: QrCode, title: 'E-Tickets', desc: 'Receive digital tickets instantly — no need for ticket offices or paper receipts.' },
    ],
    tech: ['Flutter', 'Booking System', 'Payments', 'REST API'],
    about: [
      'Shaherarabilet brings intercity bus ticketing online, letting travelers buy tickets to any velayat without standing in line at a ticket office. I contributed to the app within the Turkmenportal team.',
      'Riders browse routes, check real-time seat availability for a chosen direction, select seats, and receive instant digital tickets — a fast, queue-free booking experience built with Flutter.',
    ],
  },
  {
    id: 'embraya',
    name: 'Embraya',
    type: 'Healthcare',
    badge: { label: 'Contributor', tone: 'contrib' },
    tagline:
      'IVF companion app that organizes medications, appointments, and emotions — giving clarity, confidence, and compassionate support.',
    subtitle: 'IVF Companion App',
    intro:
      'IVF can be complex. Embraya organizes medications, appointments, and emotions, giving you clarity, confidence, and compassionate support in one simple app.',
    cardStack: ['Flutter', 'Healthcare', 'IVF Support'],
    cover: A('embraya-1.png'),
    accent: ['#e879f9', '#a78bfa'],
    stores: [
      { kind: 'appstore', url: 'https://apps.apple.com/ae/app/embraya-ivf-tracker/id6753602848' },
      { kind: 'googleplay', url: 'https://play.google.com/store/apps/details?id=com.embraya.app' },
    ],
    shots: [
      { src: A('embraya-1.png'), caption: 'Home' },
      { src: A('embraya-2.png'), caption: 'Medications' },
      { src: A('embraya-3.png'), caption: 'Schedule' },
      { src: A('embraya-4.png'), caption: 'Tracking' },
      { src: A('embraya-5.png'), caption: 'Support' },
      { src: A('embraya-6.png'), caption: 'Insights' },
      { src: A('embraya-7.png'), caption: 'Profile' },
    ],
    features: [
      { icon: Pill, title: 'Medication Management', desc: 'Organize complex IVF medication schedules with reminders and dosage tracking.' },
      { icon: CalendarDays, title: 'Appointment Tracking', desc: 'Keep all treatment appointments organized with calendar integration and notifications.' },
      { icon: Heart, title: 'Emotional Support', desc: 'Compassionate guidance and emotional wellness tools throughout the IVF journey.' },
    ],
    tech: ['Flutter', 'Dart', 'Healthcare', 'BLoC'],
    about: [
      'Embraya is an IVF companion app designed to reduce the complexity and stress of fertility treatment by organizing medications, appointments, and emotional wellbeing in one calm, supportive place. I contributed to building the app.',
      'It pairs practical tools — medication schedules with reminders and dosage tracking, appointment management, and progress insights — with compassionate emotional support, helping people feel clear and confident throughout their IVF journey.',
    ],
  },
]

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]
