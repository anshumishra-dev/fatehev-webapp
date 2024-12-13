import Vehicles from '@/components/vehicles';
import { webInfo } from '@/utils';
import React from 'react';

export const metadata = {
  title: `Our Vehicles - ${webInfo.name}`,
  description: `${webInfo.name} E-Rickshaw India's Best leading manufacturers exporter suppliers of e rickshaw, battery rickshaw, Li-ion rickshaw.`,
};

export default function VehiclesPage() {
  return <Vehicles />;
}
