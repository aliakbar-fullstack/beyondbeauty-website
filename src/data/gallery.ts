export type GalleryCategory =
  | 'Bridal Makeovers'
  | 'Party Makeup'
  | 'Hair Styling'
  | 'Beauty Treatments'
  | 'Studio Interiors'
  | 'Makeup Results';

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  tall?: boolean;
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  'Bridal Makeovers',
  'Party Makeup',
  'Hair Styling',
  'Beauty Treatments',
  'Studio Interiors',
  'Makeup Results',
];

const px = (id: string) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&h=650&w=940`;

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'g1', src: px('35983950'), alt: 'Bride receiving elegant bridal makeup', category: 'Bridal Makeovers' },
  { id: 'g2', src: px('33927084'), alt: 'Close-up of bridal lip makeup artistry', category: 'Bridal Makeovers', tall: true },
  { id: 'g3', src: px('35983907'), alt: 'Indoor bridal makeup session', category: 'Bridal Makeovers' },
  { id: 'g4', src: px('17905958'), alt: 'Woman in a sequined dress with warm party lighting', category: 'Party Makeup', tall: true },
  { id: 'g5', src: px('11334142'), alt: 'Portrait with bold party makeup', category: 'Party Makeup' },
  { id: 'g6', src: px('6155638'), alt: 'Festive makeup with pearl jewellery', category: 'Party Makeup' },
  { id: 'g7', src: px('6391646'), alt: 'Ombre curly hair styling', category: 'Hair Styling', tall: true },
  { id: 'g8', src: px('3993323'), alt: 'Hair colouring treatment in a modern salon', category: 'Hair Styling' },
  { id: 'g9', src: px('37229301'), alt: 'Soothing facial mask at a spa', category: 'Beauty Treatments' },
  { id: 'g10', src: px('10420563'), alt: 'Long manicured nails with silver rings', category: 'Beauty Treatments', tall: true },
  { id: 'g11', src: px('7750117'), alt: 'Elegant salon interior with chic design', category: 'Studio Interiors' },
  { id: 'g12', src: px('13068377'), alt: 'Modern salon with black and white decor', category: 'Studio Interiors', tall: true },
  { id: 'g13', src: px('10279714'), alt: 'Makeup artist applying eyeshadow and lipstick', category: 'Makeup Results' },
  { id: 'g14', src: px('1020051'), alt: 'Fashionable woman with artistic makeup', category: 'Makeup Results' },
  { id: 'g15', src: px('23349912'), alt: 'Hair dessing and combing', category: 'Hair Styling' },
];
