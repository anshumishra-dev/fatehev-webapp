import Contact from '@/components/contact';
import { webInfo } from '@/utils';
import React from 'react';

export const metadata = {
  title: `Contact Us - ${webInfo.name}`,
  description: `${webInfo.name} E-Rickshaw India's Best leading manufacturers exporter suppliers of e rickshaw, battery rickshaw, Li-ion rickshaw.`,
};

export default function ContactPage() {
  return <Contact />;
}
