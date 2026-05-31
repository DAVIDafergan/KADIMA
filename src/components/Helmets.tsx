import { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const helmets = [
  {
    id: 1,
    src: '/pomegranate-helmet.jpg',
    fallbackSrc: 'https://arifuld.org/wp-content/uploads/2025/01/Kadima-Concierge.jpg',
    name: 'Rimon',
    hebrewName: 'רימון',
    artist: 'Michal Ben David',
    medium: 'Oil on Military Helmet',
    year: '2024',
    description:
      'The pomegranate — ancient symbol of abundance, fertility, and the 613 commandments — painted across a retired combat helmet. Where destruction once lived, life now blooms.',
    accent: '#C0392B',
    accentLight: 'rgba(192,57,43,0.15)',
  },
  {
    id: 2,
    src: '/flowers-helmet.jpg',
    fallbackSrc: 'https://arifuld.org/wp-content/uploads/2025/01/Kadima-Concierge.jpg',
    name: 'Where Have All the Flowers Gone',
    hebrewName: 'אן פרחו כל הפרחים',
    artist: 'Naomi Shemer',
    medium: 'Acrylic on Military Helmet',
    year: '2024',
    description:
      'Poppies and daisies cascade across steel — a question, a lament, a prayer. Named after the timeless song, this helmet speaks for those who cannot.',
    accent: '#E67E22',
    accentLight: 'rgba(230,126,34,0.15)',
  },
  {
    id: 3,
    src: '/creation-helmet.jpg',
    fallbackSrc: 'https://arifuld.org/wp-content/uploads/2025/01/Kadima-Concierge.jpg',
    name: 'The Creation',
    hebrewName: 'בראשית',
    artist: 'Yael Katz',
    medium: 'Mixed Media on Military Helmet',
    year: '2023',
    description:
      "Michelangelo's divine touch reimagined on a soldier's helmet. Between God's hand and Adam's — a soldier's outstretched arm, reaching toward something greater than war.",
    accent: '#BDC3C7',
    accentLight: 'rgba(189,195,199,0.12)',
  },
];

const DISPLAY_DURATION = 5000;
const EXIT_DURATION = 800;

export function Helmets({ setCurrentPage }: { setCurrentPage: (page: 'home' | 'join') => void }) {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const sectionRef = useRef                (null);
  const isInView = useInView(sectionRef, { margin: '-20%' });
  const timerRef = useRef
