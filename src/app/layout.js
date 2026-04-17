import './globals.css';
import Navbar from '@/components/layout/Navbar';
import AriaWidget from '@/components/ui/AriaWidget';

export const metadata = {
  title: 'AMD Nexus | Experience AMD',
  description: 'Design a cinematic, dark-themed AMD product experience website with AI companion, 3D processor models, and smart recommendations.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <AriaWidget />
      </body>
    </html>
  );
}
