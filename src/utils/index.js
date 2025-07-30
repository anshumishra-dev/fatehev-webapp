import { Lexend_Deca } from 'next/font/google';

const lexendDeca = Lexend_Deca({ subsets: ['latin'] });

export const webInfo = {
  name: 'Fateh EV',
  logo: { main: '/logo.webp', light: '' },
  description: '',
  author: 'Imran Hossain',
  copyright: 'Copyright © 2022. All rights reserved.',
  version: '1.0.0',
  phone: ['+91 76500 42020'],
  email: ['info@fatehev.com'],
  address: `Khasra no. 500/3, Mustafabad, Opposite Devboomi Society, Bhopa 
Road, Muzaffarnagar, Uttar Pradesh, India 251001`,
  socialNetwork: {
    facebook: 'https://www.facebook.com/fatehev',
    x: 'https://x.com/fatehev',
    instagram: 'https://www.instagram.com/fatehev',
    linkedIn: 'https://www.linkedin.com/',
    youtube: 'https://www.youtube.com/',
  },
  colors: {
    primary: {
      light: '#15477a',
      main: '#0A3560',
      dark: '#091d31',
    },
    secondary: {
      main: '#FD0102',
      dark: '#b40d0e',
    },
    //new color 
    accent: {
      main: '#F7B500',
    },
    white: {
      main: '#fff',
      dark: '#f7f7f7',
    },
    dark: {
      main: '#212121',
      light: '#757575',
    },
  },
  typography: {
    fontFamily: lexendDeca.style.fontFamily,
    h1: {
      fontFamily: lexendDeca.style.fontFamily,
      fontSize: 50,
      fontWeight: 700,
    },
    h2: {
      fontFamily: lexendDeca.style.fontFamily,
      fontSize: 42,
      fontWeight: 700,
    },
    h3: {
      fontFamily: lexendDeca.style.fontFamily,
      fontSize: 30,
      fontWeight: 600,
    },
    h3: {
      fontFamily: lexendDeca.style.fontFamily,
      fontSize: 25,
      fontWeight: 600,
    },
    h4: {
      fontFamily: lexendDeca.style.fontFamily,
      fontSize: 18,
      fontWeight: 600,
    },
    h5: {
      fontFamily: lexendDeca.style.fontFamily,
      fontSize: 20,
      fontWeight: 500,
    },
    h6: {
      fontFamily: lexendDeca.style.fontFamily,
      fontSize: 18,
      fontWeight: 500,
    },
    body1: {
      fontSize: 14,
      opacity: '0.9',
      fontFamily: lexendDeca.style.fontFamily,
    },
    body2: {
      fontSize: 12,
      opacity: '0.9',
      fontFamily: lexendDeca.style.fontFamily,
    },
  },
  notification: { vertical: 'bottom', horizontal: 'right' },
};
