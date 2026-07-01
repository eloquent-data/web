import type { IEvent, Partner, HomeInsight } from './types';

export const training_link =
  'https://docs.google.com/forms/d/e/1FAIpQLSfAHxjW5mVLHaw7nZc0M4sAWvBd_hmSsCLw0YmVgv3XNmi4UA/viewform?usp=sf_link';

export const project_link =
  'https://docs.google.com/forms/d/e/1FAIpQLScdjofTrZQvEBzKNnhFnowZB3OqMX8qDtTOH3IkOBr7JP-8bw/viewform?usp=sf_link';

export const events: IEvent[] = [
  {
    id: 1,
    title: 'UmojaHack',
    slug: 'umojahack',
    img: 'assets/img/umojahack.png',
  },
];

export const homePartner: Partner[] = [
  { img: 'assets/img/partner1.png', alt: 'Pan African Women Network' },
  { img: 'assets/img/partner2.png', alt: 'AI Ghana' },
  { img: 'assets/img/partner3.png', alt: 'Yard Initiative' },
];

export const homeInsight: HomeInsight[] = [
  {
    img: 'assets/img/insight2.png',
    title: 'Fraud on the RISE: Increase in Internet Fraud',
    description:
      'Fraud is an intentional deception to secure unfair or unlawful gain. Internet fraud is the use of Internet services or software with Internet access to defraud victims or to otherwise take advantage of them. In 2018, the Internet Crime Complaint Center (IC3) received a total of 351,936 complaints with losses exceeding $2.7 Billion which grew from $1.4 Billion in 2017 (92.86% growth in a year).',
    link: 'https://medium.com/@solomon.igori/fraud-on-the-rise-4730713a58e4',
  },
  {
    img: 'assets/img/insight1.png',
    title: 'Credit Risk Modelling In Python',
    description:
      'Credit risk is the risk of a borrower not repaying a loan, credit card or any other type of credit facility. Credit risk is an important topic in the field of finance because banks and other financial institutions heavily invest in reducing their credit risk. The main reason behind the global financial crisis in 2008 was that mortgage loans were given to customers with poor credit scores.',
    link: 'https://medium.com/analytics-vidhya/credit-risk-modelling-in-python-3ab4b00f6505',
  },
];
