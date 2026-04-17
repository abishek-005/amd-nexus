'use client';
import { useState } from 'react';
import { processors } from '@/data/mockProducts';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import SpecBadge from '@/components/ui/SpecBadge';
import styles from './products.module.css';

const USE_CASES = ['All', 'Gaming', 'Video Editing', 'AI / ML', 'Office'];

export default function ProductsPage() {
  const [selectedUseCase, setSelectedUseCase] = useState('All');

  const filtered = processors.filter(p =>
    selectedUseCase === 'All' || p.useCases.some(u => u.includes(selectedUseCase))
  );

  return (
    <main className={styles.page}>
      <div className={`container ${styles.inner}`}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <h3 className={styles.filterTitle}>USE CASE</h3>
          <ul className={styles.filterList}>
            {USE_CASES.map(uc => (
              <li key={uc}>
                <button
                  className={`${styles.filterBtn} ${selectedUseCase === uc ? styles.active : ''}`}
                  onClick={() => setSelectedUseCase(uc)}
                >
                  {uc}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Product Grid */}
        <section className={styles.grid}>
          <div className={styles.header}>
            <h1 className={styles.title}>PRODUCTS</h1>
            <p className={styles.subtitle}>{filtered.length} result{filtered.length !== 1 ? 's' : ''}</p>
          </div>

          <div className={styles.cardGrid}>
            {filtered.map((product) => (
              <Card key={product.id} className={styles.productCard}>
                {/* 3D Chip Placeholder visual */}
                <div className={styles.chipVisual}>
                  <div className={styles.chip}>
                    <div className={styles.chipInner}>
                      <span className={styles.chipLabel}>AMD</span>
                    </div>
                  </div>
                  <div className={styles.chipGlow}></div>
                </div>

                {/* Info */}
                <div className={styles.cardBody}>
                  <div className={styles.tags}>
                    {product.useCases.map(t => <SpecBadge key={t}>{t}</SpecBadge>)}
                  </div>
                  <h2 className={styles.productName}>{product.name}</h2>
                  <p className={styles.tagline}>{product.tagline}</p>

                  <p className={styles.specLine}>{product.specs.cores} Cores · {product.specs.boostClock}</p>

                  <div className={styles.cardFooter}>
                    <span className={styles.price}>{product.price}</span>
                    <Button variant="ghost">View</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
