import { Metadata } from 'next';
import { AboutClient } from './about-client';

export const metadata: Metadata = {
  title: 'About | WelliQo',
  description: 'Health advice is everywhere. Understanding your body is rare.',
};

export default function AboutPage() {
  return <AboutClient />;
}
