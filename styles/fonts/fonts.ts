import { Space_Grotesk, Inria_Sans } from 'next/font/google';

export const spaceGrotesk = Space_Grotesk({
  weight: ['300', '400', '500', '600', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap'
})

export const inriaSans = Inria_Sans({
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
})