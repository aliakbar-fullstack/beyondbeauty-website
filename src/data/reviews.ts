export interface Review {
  id: string;
  name: string;
  service: string;
  rating: number;
  quote: string;
}

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Anjali N.',
    service: 'Bridal Makeup',
    rating: 5,
    quote: 'My bridal look lasted the entire day and through every ceremony. The team listened carefully and made me feel like the most comfortable, confident version of myself.',
  },
  {
    id: 'r2',
    name: 'Revathi K.',
    service: 'Hair Colouring & Care',
    rating: 5,
    quote: 'The shade and finish were exactly the soft, natural look I had been looking for. The salon feels calm, spotless and very welcoming.',
  },
  {
    id: 'r3',
    name: 'Fathima S.',
    service: 'Signature Glow Facial',
    rating: 5,
    quote: 'Friendly staff, unhurried care and a facial that left my skin glowing for days. Booking on WhatsApp was quick and easy.',
  },
];