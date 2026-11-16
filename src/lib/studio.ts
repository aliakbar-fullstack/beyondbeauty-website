export const STUDIO = {
  name: 'DEZERT MAKEOVER STUDIO',
  address: 'Edappal–Tirur Road, Near Indian Oil Petrol Pump, Pottethappadi, Tirur, Kerala 676101, India',
  phoneDisplay: '+91 96459 60111',
  phoneTel: '+919645960111',
  whatsappNumber: '919645960111',
  hoursDisplay: 'Every day, 9:30 AM – 10:00 PM',
  opensMinutes: 9 * 60 + 30,
  closesMinutes: 22 * 60,
  mapsDirectionsUrl: 'https://www.google.co.in/maps/place/Dezert+Makeover+Studio+Tirur/',
  mapsEmbedUrl: 'https://www.google.com/maps?q=Dezert+Makeover+Studio+Tirur&output=embed',
  googleRating: '4.8',
} as const;

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${STUDIO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const GENERAL_BOOKING_MESSAGE =
  'Hello DEZERT Makeover Studio, I would like to book an appointment. Please let me know the available time slots.';
