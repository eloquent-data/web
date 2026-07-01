import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';
import type { ContactInterface, IUser, IOffer } from '../data/types';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function randomId(): string {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

export async function saveContact(data: Omit<ContactInterface, 'id' | 'date'>): Promise<void> {
  const id = randomId();
  await setDoc(doc(collection(db, 'contact'), id), { ...data, id, date: Date.now() });
}

export async function registerEvent(data: Omit<IUser, 'date'>): Promise<void> {
  const id = randomId();
  await setDoc(doc(collection(db, 'user'), id), { ...data, date: Date.now() });
}

export async function registerOffer(data: Omit<IOffer, 'date'>): Promise<void> {
  const id = randomId();
  await setDoc(doc(collection(db, 'offer'), id), { ...data, date: Date.now() });
}
