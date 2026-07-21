import { Testimonial, FAQItem, GalleryItem, BonusItem, Affirmation, MythItem } from './types';

export const GAYBRIEL_IMAGES = {
  portrait: '/src/assets/images/gaybriel_portrait_1784627870102.jpg',
  guideCover: '/src/assets/images/coming_out_guide_1784627883418.jpg',
  community: '/src/assets/images/community_moments_1784627898608.jpg',
  stage: '/src/assets/images/speaking_on_stage_1784627918814.jpg',
  couple: '/src/assets/images/happy_couple_1784627932452.jpg'
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Miguel Silva',
    location: 'Porto, Portugal',
    role: 'Community Member',
    rating: 5,
    text: 'Gaybriel’s story was the exact spark of hope I needed. Growing up in a traditional northern Portuguese family, I felt like a shadow of myself. Today, I am living authentically, hand-in-hand with my partner, with peace in my heart.',
  },
  {
    id: 't2',
    name: 'Sarah Jenkins',
    location: 'London, UK',
    role: 'Course Graduate',
    rating: 5,
    text: 'The "Authentic You" guide is a masterclass in empathy and practical self-love. It goes way beyond typical advice—it actually guides you through the emotional, psychological, and conversational steps of self-acceptance.',
  },
  {
    id: 't3',
    name: 'João Mendes',
    location: 'Lisbon, Portugal',
    role: 'Private Circle Member',
    rating: 5,
    text: 'I was so terrified of being rejected by my childhood friends. Gaybriel helped me realize that those who truly love me will step into the light with me. If you’re questioning your path, do not hesitate—this community will catch you.',
  },
  {
    id: 't4',
    name: 'Sophia Rossi',
    location: 'Boston, USA',
    role: 'Student & Community Member',
    rating: 5,
    text: 'It’s incredible how connected I feel to Gaybriel’s coastal roots. The Lisbon vibe, the warmth, the open heart... his teachings crossed oceans and gave me the courage to come out at university. 10/10 recommend!',
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Radiating Pride on Stage',
    subtitle: 'Speaking to over 5,000 allies and members of our global community about the power of self-love.',
    image: GAYBRIEL_IMAGES.stage,
    category: 'Advocacy'
  },
  {
    id: 'g2',
    title: 'Chosen Family at Cascais Beach',
    subtitle: 'Celebrating freedom and sunset laughter with friends who became the anchors of my authentic life.',
    image: GAYBRIEL_IMAGES.community,
    category: 'Lifestyle'
  },
  {
    id: 'g3',
    title: 'Love in the Streets of Alfama',
    subtitle: 'Living out loud means holding hands in the historic, sunlit alleyways of Lisbon without a single fear.',
    image: GAYBRIEL_IMAGES.couple,
    category: 'Empowerment'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'f1',
    question: 'Is this course for me if I’m not ready to come out yet?',
    answer: 'Absolutely! In fact, the first half of "The Authentic You" is entirely internal. It focuses on your relationship with yourself, healing shame, and building radical self-love. You do not have to share your truth with anyone else until you feel 100% ready, safe, and supported.'
  },
  {
    id: 'f2',
    question: 'What if I live in a highly traditional or unsupportive family environment?',
    answer: 'This is one of the most vital topics we cover. We provide strategic safety-first guidance, scripts for complicated conversations, and—most importantly—tools to find and cultivate your "Chosen Family." Your safety is always our absolute highest priority.'
  },
  {
    id: 'f3',
    question: 'Will I get to connect with Gaybriel and others directly?',
    answer: 'Yes! When you secure the guide, you gain instant access to our private, moderated Discord Community. Gaybriel hosts monthly live Q&As, sharing wisdom, holding space for your stories, and creating a safe sanctuary of belonging.'
  },
  {
    id: 'f4',
    question: 'How is my privacy protected during checkout?',
    answer: 'We use fully encrypted, 100% secure processing. Your bank statement will show a highly discreet, standard generic charge ("EMPOWERMENT MEDIA") with no reference to the LGBTQ+ theme, keeping your journey entirely confidential.'
  },
  {
    id: 'f5',
    question: 'Is there a money-back guarantee?',
    answer: 'Yes. I am so confident in this material that I offer a 14-day, 100% money-back guarantee. If you open the guide and don’t feel its healing energy, simply send me an email and you will get every single cent back, no questions asked.'
  }
];

export const MYTHS: MythItem[] = [
  {
    id: 'm1',
    myth: 'Coming out is a single, terrifying, dramatic event.',
    truth: 'Coming out is a lifelong, gentle journey of self-sharing.',
    explanation: 'You do not owe the world a big theatrical announcement. Coming out can be a series of quiet, warm conversations over tea with one safe person at a time, strictly at your own pace.'
  },
  {
    id: 'm2',
    myth: 'You must sacrifice your culture, faith, or family history to be gay.',
    truth: 'Being gay is an expansion of your identity, not a subtraction.',
    explanation: 'You can love traditional Portuguese fado, cherish your spiritual roots, and hold onto your heritage while fully embracing your orientation. True pride integrates who you are, it does not erase your roots.'
  },
  {
    id: 'm3',
    myth: 'If people judge you initially, they will never accept you.',
    truth: 'Acceptance is often a process of grieving and learning for others.',
    explanation: 'Sometimes, family members react out of immediate fear or cultural conditioning. With healthy boundaries, patience, and time, many initial reactions transform into fierce, protective support.'
  },
  {
    id: 'm4',
    myth: 'You can only find true happiness and fulfillment after coming out to everyone.',
    truth: 'Inner self-acceptance is the real gold; outer coming out is secondary.',
    explanation: 'The most high-converting truth is that you are whole right now. Once you stop judging yourself, the opinions of others lose their power to break you.'
  }
];

export const AFFIRMATIONS: Affirmation[] = [
  {
    id: 'a1',
    category: 'Self-Acceptance',
    text: 'My identity is not a burden, a mistake, or a phase. It is a beautiful, natural, and beautiful expression of human love and diversity.',
    quoteBy: 'Gaybriel'
  },
  {
    id: 'a2',
    category: 'Courage',
    text: 'I am reclaiming my voice. I am allowed to breathe, take up space, and show up as my whole, authentic self in every room I enter.',
    quoteBy: 'Gaybriel'
  },
  {
    id: 'a3',
    category: 'Chosen Family',
    text: 'I will find my tribe. Somewhere out there, people are waiting to love me exactly as I am, and we will build a beautiful, unbreakable bond.',
    quoteBy: 'Gaybriel'
  },
  {
    id: 'a4',
    category: 'Healing Shame',
    text: 'I release the guilt of not meeting expectations that were never mine to carry. My life is mine, and it is beautiful to be gay.',
    quoteBy: 'Gaybriel'
  }
];

export const BONUS_ITEMS: BonusItem[] = [
  {
    id: 'b1',
    title: 'Live Q&A Monthly Invitation',
    subtitle: 'Direct Mentorship (Value: $49)',
    description: 'Get exclusive access to my private Zoom circle where we meet once a month to talk about boundaries, healing, and living proudly.',
    badge: 'EXCLUSIVE ACCESS'
  },
  {
    id: 'b2',
    title: 'The Portuguese Coastal Mindfulness Routine',
    subtitle: 'Audio Guide (Value: $19)',
    description: 'A 10-minute daily breathing routine inspired by the rolling waves of Cascais, designed to calm your central nervous system before tough talks.',
    badge: 'INNER CALM'
  },
  {
    id: 'b3',
    title: 'The Chosen Family Blueprint',
    subtitle: 'Networking Worksheet (Value: $25)',
    description: 'A step-by-step workbook mapping out how to connect safely with local and global LGBTQ+ circles, build lasting friendships, and find safe havens.',
    badge: 'SUPPORT COMMUNITY'
  }
];
