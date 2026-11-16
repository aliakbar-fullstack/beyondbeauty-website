import {
  Crown,
  Droplets,
  Flower2,
  Hand,
  PartyPopper,
  Paintbrush,
  Scissors,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';

export interface SubService {
  name: string;
  price: number;
}

export interface ServiceCategory {
  id: string;
  name: string;
  tagline: string;
  icon: LucideIcon;
  services: SubService[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'hair-styling',
    name: 'Hair Styling & Haircuts',
    tagline: 'Precision cuts and polished styling for every occasion',
    icon: Scissors,
    services: [
      { name: 'Classic Cut', price: 500 },
      { name: 'Luxury Blowout', price: 800 },
      { name: 'Event Styling', price: 1500 },
    ],
  },
  {
    id: 'hair-colouring',
    name: 'Hair Colouring',
    tagline: 'Rich, dimensional colour tailored to your complexion',
    icon: Paintbrush,
    services: [
      { name: 'Root Touch-Up', price: 1800 },
      { name: 'Global Colour', price: 3500 },
      { name: 'Highlights / Balayage', price: 4500 },
    ],
  },
  {
    id: 'hair-spa',
    name: 'Hair Spa & Treatments',
    tagline: 'Restorative rituals for healthy, radiant hair',
    icon: Droplets,
    services: [
      { name: 'Deep Conditioning Spa', price: 1200 },
      { name: 'Anti-Dandruff Treatment', price: 1500 },
      { name: 'Keratin Treatment', price: 4500 },
    ],
  },
  {
    id: 'skin-care',
    name: 'Skin Care & Facials',
    tagline: 'Customised facials that leave skin visibly luminous',
    icon: Sparkles,
    services: [
      { name: 'Cleanup', price: 1000 },
      { name: 'Signature Glow Facial', price: 2500 },
      { name: 'Anti-Ageing Gold Facial', price: 3500 },
    ],
  },
  {
    id: 'bridal-makeup',
    name: 'Bridal Makeup',
    tagline: 'Timeless bridal looks that last through every ceremony',
    icon: Crown,
    services: [
      { name: 'Engagement Look', price: 8000 },
      { name: 'Classic Bridal Makeup', price: 12000 },
      { name: 'HD Airbrush Bridal', price: 18000 },
    ],
  },
  {
    id: 'party-makeup',
    name: 'Party & Occasion Makeup',
    tagline: 'Head-turning glam for celebrations and evenings out',
    icon: PartyPopper,
    services: [
      { name: 'Guest Party Makeup', price: 3500 },
      { name: 'Sangeet Special', price: 4500 },
      { name: 'Reception / Cocktail Look', price: 5000 },
    ],
  },
  {
    id: 'manicure-pedicure',
    name: 'Manicure & Pedicure',
    tagline: 'Pampering hand and foot care with a flawless finish',
    icon: Hand,
    services: [
      { name: 'Gel Polish Application', price: 800 },
      { name: 'Classic Mani-Pedi', price: 1200 },
      { name: 'Luxury Spa Mani-Pedi', price: 2000 },
    ],
  },
  {
    id: 'grooming',
    name: 'Beauty & Grooming Services',
    tagline: 'Clean, defined looks with everyday grooming essentials',
    icon: Flower2,
    services: [
      { name: 'Threading & Shaping', price: 150 },
      { name: 'Waxing Packages', price: 1000 },
      { name: 'Essential Grooming Combo', price: 2500 },
    ],
  },
];
