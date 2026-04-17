import { processors } from '@/data/mockProducts';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import SpecBadge from '@/components/ui/SpecBadge';
import styles from './shop.module.css';

export default function ShopPage() {
  return (
    <main className={styles.page}>
      <div className={`container ${styles.inner}`}>
        <header className={styles.header}>
          <div className={styles.ariaRec}>
            <span className={styles.ariaTag}>ARIA</span>
            <p>Recommended picks based on trending use cases this week.</p>
          </div>
          <h1 className={`hero-title ${styles.title}`}>SMART SHOP</h1>
          <p className={styles.subtitle}>ARIA-curated picks, just for you.</p>
        </header>

        <div className={styles.grid}>
          {processors.map((p) => (
            <Card key={p.id} className={styles.shopCard}>
              <div className={styles.chipVisual}>
                <div className={styles.chip}><span className={styles.chipLogo}>AMD</span></div>
                <div className={styles.chipGlow} />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.topRow}>
                  <SpecBadge>{p.specs.cores} CORES</SpecBadge>
                  <SpecBadge>{p.specs.boostClock}</SpecBadge>
                </div>
                <h2 className={styles.pName}>{p.name}</h2>
                <p className={styles.pTagline}>{p.tagline}</p>
                <div className={styles.footer}>
                  <span className={styles.price}>{p.price}</span>
                  <Button variant="primary">Add to Cart</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
