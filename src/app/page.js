import HeroScene from '@/components/three/HeroScene';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroScene />
      
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.textContent}>
          <h1 className={`hero-title ${styles.title}`}>POWER REDEFINED.</h1>
          <p className={styles.subtitle}>
            Explore AMD's lineup with AI. Compare processors, build your PC, and find your perfect match.
          </p>
          
          <div className={styles.ctaGroup}>
            <Link href="/products">
              <Button variant="primary">Explore Products</Button>
            </Link>
            <Button variant="ghost">Talk to ARIA</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
