import  '@/app/ui/global.css'
import { inter } from './ui/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    default: 'Fene3block - Blockchain Learning Platform',
    template: '%s | Fene3block'
  },
  description: 'Learn blockchain technology with Fene3block. Comprehensive tutorials, interactive demos, and hands-on projects for developers and enthusiasts.',
  keywords: ['blockchain', 'cryptocurrency', 'web3', 'ethereum', 'smart contracts', 'defi', 'nft', 'learning', 'tutorials', 'development'],
  authors: [{ name: 'Fene3block Team' }],
  creator: 'Fene3block',
  publisher: 'Fene3block',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://fene3block.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fene3block.vercel.app/',
    title: 'Fene3block - Blockchain Learning Platform',
    description: 'Learn blockchain technology with Fene3block. Comprehensive tutorials, interactive demos, and hands-on projects for developers and enthusiasts.',
    siteName: 'Fene3block',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Fene3block - Blockchain Learning Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fene3block - Blockchain Learning Platform',
    description: 'Learn blockchain technology with Fene3block. Comprehensive tutorials, interactive demos, and hands-on projects for developers and enthusiasts.',
    images: ['/opengraph-image.png'],
    creator: '@fene3block',
    site: '@fene3block',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>{children}</body>
    </html>
  );
}
