export interface ContactInterface {
  id?: string;
  date: number;
  name: string;
  email: string;
  message: string;
}

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  date: number;
}

export interface IOffer {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  degree: string;
  occupation: string;
  country: string;
  date: number;
}

export interface Project {
  id: number;
  title: string;
  img: string;
  summary: string;
}

export interface ProjectDetail {
  id: number;
  img: string;
  title: string;
  summary: string;
  desc: string;
  problem: string;
  solution: string;
  target: string;
  objective: string;
  project_link?: string;
  team: { name: string; title?: string; link: string }[];
}

export interface Founder {
  name: string;
  title: string;
  img: string;
  link: string;
}

export interface Track {
  title: string;
  duration: string;
  cost: string;
  img: string;
  isActive: boolean;
  form_link: string;
  brochure_link: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  country: string;
  title: string;
}

export interface Insight {
  title: string;
  img: string;
  link: string;
  description?: string;
}

export interface Event {
  id: number;
  title: string;
  slug: string;
  img: string;
}

export interface Partner {
  img: string;
  alt: string;
}
