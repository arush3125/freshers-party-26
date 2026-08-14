import type { LucideIcon } from "lucide-react";
import {
  Music2,
  Mic2,
  Laugh,
  Guitar,
  AudioLines,
  Feather,
  Drama,
  Sparkles,
  Shirt,
  Mic,
  Crown,
} from "lucide-react";

import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import arushVideo from "/Arush.mp4";
import amolSirVideo from "/Anol Sir.mp4";
import kanishkaVideo from "/Kanishka.mp4";
import deeptiMamVideo from "/Deepti Mam.mp4";
import memo1 from "/memo1.png";
import memo2 from "/memo2.png";
import memo3 from "/memo3.png";
import memo4 from "/memo4.png";
import memo5 from "/memo5.png";
import memo6 from "/memo6.png";

/* ------------------------------------------------------------------
 * EDIT EVERYTHING BELOW — placeholder content for Freshers' Party '26
 * ------------------------------------------------------------------ */

export const FORM_PLACEHOLDER = "https://forms.google.com/";

export type Organizer = {
  id: string;
  name: string;
  designation: string;
  department?: string;
  phone: string;
  email?: string;
  whatsapp?: string;
  instagram?: string;
  image: string;
  video?: string;
};

export const organizers: Organizer[] = [
  {
    id: "1",
    name: "Arush Wavhal",
    designation: "OCM Head",
    phone: "+7977600390",
    whatsapp: "+7977600390",
    instagram: "Shana_.aruzz",
    image: g1,
    video: arushVideo,
  },
  {
    id: "2",
    name: "Amol Suryavanshi",
    designation: "Council Incharge",
    phone: "83569 99573",
    whatsapp: "83569 99573",
    instagram: "1987amols",
    image: g2,
    video: amolSirVideo,
  },
  {
    id: "3",
    name: "Kanishka Tannkar",
    designation: "General Secretary",
    phone: "70218 72879",
    whatsapp: "70218 72879",
    instagram: "_.kani8hkaaaa",
    image: g3,
    video: kanishkaVideo,
  },
  {
    id: "4",
    name: "Deepti Hurgat",
    designation: "Council Incharge",
    phone: "98921 09585",
    whatsapp: "98921 09585",
    image: g5,
    video: deeptiMamVideo,
  },
];

export type Competition = {
  id: string;
  name: string;
  type: string;
  icon: LucideIcon;
  short: string;
  description: string;
  instructions: string[];
  rules: string[];
  eligibility: string;
  performanceTime: string;
  judging: string[];
  formUrl: string;
  image: string;
};

const baseRules = [
  "Reporting time 30 minutes before the event",
  "College ID card is compulsory",
  "Judges' decision will be final and binding",
  "Any vulgar or offensive content leads to disqualification",
];

export const competitions: Competition[] = [
  {
    id: "mr-ms-freshers",
    name: "Mr & Ms Freshers",
    type: "Solo",
    icon: Crown,
    short: "The crown awaits — show your personality, confidence and talent.",
    description:
      "The most prestigious title of Freshers' Party '26. Showcase your personality, confidence, and talent to become the face of the batch.",
    instructions: [
      "Ramp walk introduction round",
      "Talent showcase (if any)",
      "Q&A round with judges",
      "Formal or smart casual attire",
    ],
    rules: baseRules,
    eligibility: "Open to all first-year students",
    performanceTime: "5 minutes",
    judging: ["Confidence", "Personality", "Stage presence", "Talent", "Audience response"],
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSecMmVIfV4GqsjI4U3zEvUEzTRZQ74-OAm0oNLYIztOOqUWIQ/viewform?usp=dialog",
    image: g1,
  },
  {
    id: "dance",
    name: "Dance",
    type: "Solo / Group",
    icon: Music2,
    short: "Own the stage with your best moves — solo or with your crew.",
    description:
      "Bring energy, rhythm and attitude to the Fresher's stage. Any style is welcome — hip hop, classical, freestyle or fusion.",
    instructions: [
      "Solo and group (max 10 members) entries allowed",
      "Maximum 4 minutes of performance",
      "Submit your audio track beforehand",
      "Props allowed, but no fire or liquids",
    ],
    rules: baseRules,
    eligibility: "Open to all first-year students",
    performanceTime: "4 minutes",
    judging: ["Choreography", "Synchronisation", "Stage presence", "Audience impact"],
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScPU5vEk7kMiKvgwaVCjYUTZ7ECe8aXeqXKxR1utIvZdQw7sw/viewform?usp=dialog",
    image: g1,
  },
  {
    id: "singing",
    name: "Singing",
    type: "Solo / Duet",
    icon: Mic2,
    short: "One mic, one voice, one unforgettable moment.",
    description:
      "Take the mic and let your voice fill the hall. Any language, any genre — from soulful ballads to high-energy anthems.",
    instructions: [
      "Karaoke track must be submitted in advance",
      "Live instrument accompaniment allowed",
      "Maximum 3 minutes",
    ],
    rules: baseRules,
    eligibility: "Open to all first-year students",
    performanceTime: "3 minutes",
    judging: ["Pitch & rhythm", "Voice quality", "Expression", "Song selection"],
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeeVUqEq1OgqeGIr0f0PoSjoQryx4LHfVSTewo577yZ8yQxOA/viewform?usp=dialog",
    image: g1,
  },
  {
    id: "open-talent",
    name: "Open Talent",
    type: "Solo / Group",
    icon: Sparkles,
    short: "Magic, art, martial arts — anything that wows.",
    description:
      "Have a talent that doesn't fit a category? This is your stage. Surprise us.",
    instructions: [
      "Describe your act clearly in the registration form",
      "Maximum 4 minutes",
      "Prior approval required for unusual props",
    ],
    rules: baseRules,
    eligibility: "Open to all first-year students",
    performanceTime: "4 minutes",
    judging: ["Uniqueness", "Skill", "Presentation", "Audience impact"],
    formUrl:"https://docs.google.com/forms/d/e/1FAIpQLSeeyu1YveloKrOMWP3HZe47woiob5F5NdFEdZbNnDIhtSKRaQ/viewform?usp=dialog",
    image: g1,
  },
];

export const timeline = [
  {
    title: "Registration Starts",
    date: "14th Aug",
    detail: "Forms go live for all first-year students.",
  },
  {
    title: "Registration Deadline",
    date: "19th Aug",
    detail: "Last date to Register for Fresher's Party '26.",
  },
  {
    title: "Auditions",
    date: "20th & 21st Aug",
    detail: "Shortlisting rounds held in the college Foyer.",
  },
  {
    title: "Freshers' Party Day",
    date: "22nd Aug",
    detail: "The big day — performances, prizes and the after-party.",
  },
];

export const gallery = [
  { src: memo1, alt: "Memory from Freshers' Party" },
  { src: memo2, alt: "Memory from Freshers' Party" },
  { src: memo3, alt: "Memory from Freshers' Party" },
  { src: memo4, alt: "Memory from Freshers' Party" },
  { src: memo5, alt: "Memory from Freshers' Party" },
  { src: memo6, alt: "Memory from Freshers' Party" },
];

export const committee = [
  { name: "John Doe", role: "General Secretary", phone: "9876543210" },
  { name: "Jane Doe", role: "Cultural Secretary", phone: "9876543211" },
  { name: "Alex Placeholder", role: "Events Head", phone: "9876543212" },
  { name: "Riya Placeholder", role: "Publicity Head", phone: "9876543213" },
  { name: "Sam Placeholder", role: "Technical Head", phone: "9876543214" },
  { name: "Neha Placeholder", role: "Discipline Head", phone: "9876543215" },
];

export const faqs = [
  {
    q: "Who can participate?",
    a: "All first-year students of Fr. Agnel Polytechnic, Vashi can participate.",
  },
  {
    q: "Can I register for multiple competitions?",
    a: "Yes. You can register for as many competitions as you like, as long as the performance slots do not clash. Fill a separate form for each.",
  },
  {
    q: "Is there any registration fee?",
    a: "No. Participation in Freshers' Party '26 is completely free for all first-year students.",
  },
  {
    q: "Can groups participate?",
    a: "Yes. Dance, Instrumental and Open Talent accept group entries. Group size limits are listed in each competition's details.",
  },
  {
    q: "How do I know my audition timing?",
    a: "Audition slots will be shared on the official or Unoffical WhatsApp group.",
  },
  {
    q: "How will winners be selected?",
    a: "A panel of faculty scores every performance on the criteria listed in each competition. The judges' decision is final.",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Timeline", href: "#timeline" },
  { label: "Gallery", href: "#gallery" },
  { label: "Competitions", href: "#competitions" },
  { label: "Contact", href: "#team" },
  { label: "FAQs", href: "#faqs" },
];
