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
import Animated from './AnimatedImage';
import DealershipFormModal from './DealerShip';

export default function Home() {
  return (
    <HomeLayout>
      <HeroBar />
      {/* <Animated /> */}
      <DealershipFormModal />
      <Logo />
      <AboutDetails />
      <WhyUs />
      <FeaturedVehicles />
      <Quickcontact />
      <OurFeatures enabledTopSpace />
      <Contact />
    </HomeLayout>
  );
}
