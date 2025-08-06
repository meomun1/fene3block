import  '@/app/ui/global.css'
import { inter } from './ui/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Fene3block',
  description: 'Fene3block',
  metadataBase: new URL('https://fene3block.vercel.app/'),
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
