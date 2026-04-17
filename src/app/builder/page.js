'use client';
import { useState } from 'react';
import { processors } from '@/data/mockProducts';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import styles from './builder.module.css';

const USE_CASES = [
  { id: 'gaming', icon: '🎮', label: 'Gaming', rec: 'ryzen-7-7800x3d' },
  { id: 'editing', icon: '🎬', label: 'Video Editing', rec: 'ryzen-9-7950x' },
  { id: 'coding', icon: '💻', label: 'Coding / Dev', rec: 'ryzen-7-7800x3d' },
  { id: 'ai', icon: '🤖', label: 'AI / ML Work', rec: 'threadripper-pro-7995wx' },
  { id: 'office', icon: '🏢', label: 'Office Work', rec: 'ryzen-5-7600x' },
];

export default function BuilderPage() {
  const [step, setStep] = useState(1);
  const [useCase, setUseCase] = useState(null);
  const [budget, setBudget] = useState(50000);

  const recommended = useCase ? processors.find(p => p.id === useCase.rec) : null;

  return (
    <main className={styles.page}>
      <div className={`container ${styles.inner}`}>
        <header className={styles.header}>
          <h1 className={`hero-title ${styles.title}`}>PC BUILDER</h1>
          <p className={styles.subtitle}>Tell us your needs. ARIA builds your ideal PC.</p>
        </header>

        {/* Step Indicator */}
        <div className={styles.steps}>
          {['Use Case', 'Budget', 'Your Build'].map((s, i) => (
            <div key={s} className={`${styles.stepItem} ${step === i + 1 ? styles.stepActive : ''} ${step > i + 1 ? styles.stepDone : ''}`}>
              <span className={styles.stepNum}>{i + 1}</span>
              <span className={styles.stepLabel}>{s}</span>
            </div>
          ))}
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div className={styles.useCaseGrid}>
            {USE_CASES.map(uc => (
              <button
                key={uc.id}
                className={`${styles.ucCard} ${useCase?.id === uc.id ? styles.ucSelected : ''}`}
                onClick={() => { setUseCase(uc); }}
              >
                <span className={styles.ucIcon}>{uc.icon}</span>
                <span className={styles.ucLabel}>{uc.label}</span>
              </button>
            ))}
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className={styles.budgetStep}>
            <h2 className={styles.stepTitle}>SET YOUR BUDGET</h2>
            <div className={styles.budgetDisplay}>
              <span className={styles.budgetValue}>₹{budget.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min={30000}
              max={500000}
              step={5000}
              value={budget}
              onChange={e => setBudget(Number(e.target.value))}
              className={styles.slider}
            />
            <div className={styles.sliderLabels}>
              <span>₹30,000</span>
              <span>₹5,00,000+</span>
            </div>

            {recommended && (
              <Card className={styles.previewCard}>
                <div className={styles.previewContent}>
                  <div className={styles.previewChip}>
                    <div className={styles.miniChip}><span>AMD</span></div>
                  </div>
                  <div>
                    <p className={styles.previewName}>{recommended.name}</p>
                    <p className={styles.previewMeta}>{recommended.specs.cores} cores · {recommended.specs.boostClock} · {recommended.price}</p>
                  </div>
                  <span className={styles.ariaMatch}>ARIA PICK ✓</span>
                </div>
              </Card>
            )}
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && recommended && (
          <div className={styles.buildResult}>
            <Card className={styles.buildCard}>
              <div className={styles.buildCardInner}>
                <div className={styles.chipArt}>
                  <div className={styles.buildChip}><span>AMD</span><br/><span className={styles.buildChipSub}>{recommended.specs.cores}C</span></div>
                </div>
                <div className={styles.buildInfo}>
                  <h2 className={styles.buildName}>{recommended.name}</h2>
                  <p className={styles.buildTagline}>{recommended.tagline}</p>
                  <div className={styles.specGrid}>
                    {Object.entries(recommended.specs).map(([k, v]) => (
                      <div key={k} className={styles.specItem}>
                        <span className={styles.specKey}>{k.toUpperCase()}</span>
                        <span className={styles.specVal}>{v}</span>
                      </div>
                    ))}
                  </div>
                  <div className={styles.compatLine}>
                    <span className={styles.compat}>✅ Compatible with AM5 Motherboards</span>
                    <span className={styles.compat}>✅ DDR5 Memory Support</span>
                  </div>
                  <div className={styles.buildCtas}>
                    <Button variant="primary">Add to Cart — {recommended.price}</Button>
                    <Button variant="ghost" onClick={() => setStep(1)}>Modify Build</Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className={styles.navButtons}>
          {step > 1 && <Button variant="ghost" onClick={() => setStep(s => s - 1)}>← Back</Button>}
          {step < 3 && (
            <Button
              variant="primary"
              onClick={() => setStep(s => s + 1)}
            >
              {step === 1 ? 'Set Budget →' : 'See My Build →'}
            </Button>
          )}
        </div>
      </div>
    </main>
  );
}
