export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  role: string;
  image?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  category: string;
}

export interface BonusItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
}

export interface Affirmation {
  id: string;
  category: string;
  text: string;
  quoteBy: string;
}

export interface MythItem {
  id: string;
  myth: string;
  truth: string;
  explanation: string;
}
