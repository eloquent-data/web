import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';
import type { ContactInterface, IUser, IOffer } from '@/data/types';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function generateId(): string {
  return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
}

export async function saveContact(data: Omit<ContactInterface, 'id'>): Promise<void> {
  const id = generateId();
  await setDoc(doc(collection(db, 'contact'), id), { ...data, id });
}

export async function registerEvent(data: IUser): Promise<void> {
  const id = generateId();
  await setDoc(doc(collection(db, 'user'), id), data);
}

export async function registerOffer(data: IOffer): Promise<void> {
  const id = generateId();
  await setDoc(doc(collection(db, 'offer'), id), data);
}
