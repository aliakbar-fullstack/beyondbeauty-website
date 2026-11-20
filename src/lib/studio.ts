export const STUDIO = {
  name: 'BEYOND BEAUTY',
  address: 'Moulana Space, Ring Road, Opposite Axis Bank, Tirur, Kerala 676101, India',
  phoneDisplay: '+91 92077 87787',
  phoneTel: '+919207787787',
  whatsappNumber: '919207787787',
  hoursDisplay: 'Every day, 9:30 AM – 9:00 PM',
  opensMinutes: 9 * 60 + 30,
  closesMinutes: 21 * 60,
  mapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=Beyond+Beauty+Ladies+Beauty+Salon+Ring+Road+Tirur',
  mapsEmbedUrl: 'https://www.google.com/maps?q=Beyond+Beauty+Ladies+Beauty+Salon+Ring+Road+Tirur&output=embed',
  googleRating: '4.9',
} as const;

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${STUDIO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const GENERAL_BOOKING_MESSAGE =
  'Hello Beyond Beauty, I would like to book an appointment. Please let me know the available time slots.';