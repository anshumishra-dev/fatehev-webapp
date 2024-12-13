import HomeLayout from '@/assets/layout/HomeLayout';
import React from 'react';
import HeroBar from './HeroBar';
import AboutDetails from './About';
import WhyUs from './WhyUs';
import FeaturedVehicles from './FeaturedVehicles';
import Quickcontact from './quickcontact';
import OurFeatures from './OurFeatures';
import Contact from './Contact';
import Logo from './Logo';

export default function Home() {
  return (
    <HomeLayout>
      <HeroBar />
      <AboutDetails />
      <WhyUs />
      <Logo />
      <FeaturedVehicles />
      <Quickcontact />
      <OurFeatures enabledTopSpace />
      <Contact />
    </HomeLayout>
  );
}
