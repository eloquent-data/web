import type { Partner, Insight, Event, Project } from './types';

export const training_link =
  'https://docs.google.com/forms/d/e/1FAIpQLSfAHxjW5mVLHaw7nZc0M4sAWvBd_hmSsCLw0YmVgv3XNmi4UA/viewform?usp=sf_link';

export const project_link =
  'https://docs.google.com/forms/d/e/1FAIpQLScdjofTrZQvEBzKNnhFnowZB3OqMX8qDtTOH3IkOBr7JP-8bw/viewform?usp=sf_link';

export const events: Event[] = [
  {
    id: 1,
    title: 'UmojaHack',
    slug: 'umojahack',
    img: 'assets/img/umojahack.png',
  },
];

export const homeProjects: Project[] = [
  {
    id: 1,
    title: 'Virdash',
    img: 'assets/img/virdash.jpeg',
    summary:
      'Virdash aims to flatten the curve of COVID-19 in Africa by providing real-time information and access to digital health tools.',
  },
  {
    id: 2,
    title: 'Gender Based Violence',
    img: 'assets/img/gbv.jpg',
    summary:
      'To build a platform that tackles the issues of GBV with data through storytelling and help victims overcome the trauma.',
  },
];

export const homePartner: Partner[] = [
  { img: 'assets/img/partner1.png', alt: 'Pan African Women Network' },
  { img: 'assets/img/partner2.png', alt: 'AI Ghana' },
  { img: 'assets/img/partner3.png', alt: 'Yard Initiative' },
];

export const homeInsight: Insight[] = [
  {
    img: 'assets/img/insight2.png',
    title: 'Fraud on the RISE: Increase in Internet Fraud',
    description:
      'Fraud is an intentional deception to secure unfair or unlawful gain. Internet fraud is the use of Internet services or software with Internet access to defraud victims or to otherwise take advantage of them.',
    link: 'https://medium.com/@solomon.igori/fraud-on-the-rise-4730713a58e4',
  },
  {
    img: 'assets/img/insight1.png',
    title: 'Credit Risk Modelling In Python',
    description:
      'Credit risk is the risk of a borrower not repaying a loan, credit card or any other type of credit facility.',
    link: 'https://medium.com/analytics-vidhya/credit-risk-modelling-in-python-3ab4b00f6505',
  },
];
