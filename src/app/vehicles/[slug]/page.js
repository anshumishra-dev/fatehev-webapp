import PageNotFound from '@/components/404error';
import VehiclesDetail from '@/components/VehiclesDetail';
import { productData } from '@/utils/data';
import React from 'react';

export async function generateMetadata({ params, searchParams }, parent) {
  const data = productData?.find((a) => a.slug === params.slug);
  if (!data) return {};
  return {
    title: data.name + ' -  E-Rickshaw | Vehicles',
    description:
      data.description ||
      ` FatehEV is India's leading manufacturer of e-rickshaw, Comfort Plus, FatehEV, e auto, e-rickshaw, e-rickshaw dealership`,
  };
}

export default function VehiclesDetailPage({ params }) {
  const data = productData?.find((a) => a.slug === params.slug);
  if (!data) return <PageNotFound />;
  return <VehiclesDetail data={data} />;
}
