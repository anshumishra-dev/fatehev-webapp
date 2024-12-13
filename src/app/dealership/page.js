import Dealership from '@/components/dealership';
import { webInfo } from '@/utils';
import React from 'react';

export const metadata = {
  title: `Dealership Inquiry - ${webInfo.name}`,
  description: `${webInfo.name} E-Rickshaw India's Best leading manufacturers exporter suppliers of e rickshaw, battery rickshaw, Li-ion rickshaw.`,
};

export default function DealershipPage() {
  return <Dealership />;
}
