export type HelmetItem = {
  id: number;
  imageSrc: string;
  name: string;
  artist: string;
  medium: string;
  year: string;
  description: string;
};

export const helmetsData: HelmetItem[] = [
  {
    id: 1,
    imageSrc: '/creation-helmet.jpg',
    name: 'Creation Helmet',
    artist: 'Kadima Artist',
    medium: 'Mixed Media on Military Helmet',
    year: '2024',
    description: 'A restored combat helmet transformed into an artwork of resilience and hope.',
  },
  {
    id: 2,
    imageSrc: '/flowers-helmet.jpg',
    name: 'Flowers Helmet',
    artist: 'Kadima Artist',
    medium: 'Mixed Media on Military Helmet',
    year: '2024',
    description: 'A restored combat helmet transformed into an artwork of resilience and hope.',
  },
  {
    id: 3,
    imageSrc: '/pomegranate-helmet.jpg',
    name: 'Pomegranate Helmet',
    artist: 'Kadima Artist',
    medium: 'Mixed Media on Military Helmet',
    year: '2024',
    description: 'A restored combat helmet transformed into an artwork of resilience and hope.',
  },
];
