import type { Track, Testimonial } from './types';

export const academyStat = {
  enthusiast: 56,
  fellows: 4,
  countries: 8,
};

export const testimonials: Testimonial[] = [
  {
    quote: 'I sharpened my data analysis skills and at the end of the program, I was able to research and publish an article on Credit risk analysis with python.',
    name: 'Paul Bananzi',
    country: '🇬🇭',
    title: 'Data Enthusiast',
  },
  {
    quote: 'Learnt from the basis of data analysis, the classes where fun and very interactive.',
    title: 'Data Enthusiast',
    name: 'Amazinggrace',
    country: '🇳🇬',
  },
];

export const tracks: Track[] = [
  {
    title: 'Data Analysis Fundamentals',
    duration: '4 weeks',
    cost: 'free',
    img: 'assets/img/market-analyst.png',
    isActive: true,
    form_link: 'https://docs.google.com/forms/d/e/1FAIpQLSfAHxjW5mVLHaw7nZc0M4sAWvBd_hmSsCLw0YmVgv3XNmi4UA/viewform',
    brochure_link: '/assets/pdf/data_literacy.pdf',
  },
  {
    title: 'Data for Business',
    duration: '6 months',
    cost: '$149',
    img: 'assets/img/business-analyst.jpeg',
    isActive: false,
    form_link: 'https://docs.google.com/forms/d/e/1FAIpQLSfAHxjW5mVLHaw7nZc0M4sAWvBd_hmSsCLw0YmVgv3XNmi4UA/viewform',
    brochure_link: '/assets/pdf/data_for_business.pdf',
  },
  {
    title: 'Data Analysis',
    duration: '6 months',
    cost: '$149',
    img: 'assets/img/data-analyst.jpg',
    isActive: false,
    form_link: 'https://docs.google.com/forms/d/e/1FAIpQLSfAHxjW5mVLHaw7nZc0M4sAWvBd_hmSsCLw0YmVgv3XNmi4UA/viewform',
    brochure_link: '/assets/pdf/data_analysis.pdf',
  },
];
