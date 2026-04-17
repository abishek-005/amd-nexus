'use client';
import { useState } from 'react';
import { processors } from '@/data/mockProducts';
import Button from '@/components/ui/Button';
import styles from './arena.module.css';

const CATEGORIES = [
  { key: 'raw', label: '⚡ Raw Performance' },
  { key: 'gaming', label: '🎮 Gaming Score' },
  { key: 'creation', label: '🎬 Content Creation' },
  { key: 'ai', label: '🤖 AI Workloads' },
  { key: 'value', label: '💰 Value for Money' },
];

function getVerdict(p1, p2) {
  if (!p1 || !p2) return null;
  const p1Total = Object.values(p1.scores).reduce((a,b) => a+b, 0);
  const p2Total = Object.values(p2.scores).reduce((a,b) => a+b, 0);
  const winner = p1Total >= p2Total ? p1 : p2;
  const loser = p1Total < p2Total ? p1 : p2;
  const diff = Math.abs(Math.round(((p1Total - p2Total) / p2Total) * 100));
  return { winner, loser, diff };
}

export default function ArenaPage() {
  const [select1, setSelect1] = useState('');
  const [select2, setSelect2] = useState('');

  const p1 = processors.find(p => p.id === select1);
  const p2 = processors.find(p => p.id === select2);
  const verdict = getVerdict(p1, p2);

  return (
    <main className={styles.page}>
      <div className={`container ${styles.inner}`}>
        <header className={styles.header}>
          <h1 className={`hero-title ${styles.title}`}>BATTLE ARENA</h1>
          <p className={styles.subtitle}>Pick two AMD processors. Let AI decide the winner.</p>
        </header>

        {/* Selection Cards */}
        <div className={styles.selectionRow}>
          <div className={styles.selectorCard}>
            <p className={styles.selectorLabel}>PROCESSOR 1</p>
            <select 
              className={styles.dropdown} 
              value={select1} 
              onChange={e => setSelect1(e.target.value)}
            >
              <option value="">Choose processor...</option>
              {processors.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
            </select>
          </div>

          {/* VS Badge */}
          <div className={styles.vsBadge}>
            <span className={styles.vs}>VS</span>
          </div>

          <div className={styles.selectorCard}>
            <p className={styles.selectorLabel}>PROCESSOR 2</p>
            <select 
              className={styles.dropdown} 
              value={select2} 
              onChange={e => setSelect2(e.target.value)}
            >
              <option value="">Choose processor...</option>
              {processors.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
            </select>
          </div>
        </div>

        {/* Battle Stats */}
        {p1 && p2 && (
          <>
            <div className={styles.statsSection}>
              <div className={styles.nameRow}>
                <span className={styles.chipName}>{p1.name.split(' ').slice(-2).join(' ')}</span>
                <span style={{ color: 'var(--muted-gray)' }}>vs</span>
                <span className={styles.chipName}>{p2.name.split(' ').slice(-2).join(' ')}</span>
              </div>

              {CATEGORIES.map(cat => {
                const score1 = p1.scores[cat.key];
                const score2 = p2.scores[cat.key];
                const winner1 = score1 >= score2;
                return (
                  <div key={cat.key} className={styles.statRow}>
                    <span className={styles.catLabel}>{cat.label}</span>
                    <div className={styles.barContainer}>
                      <div className={styles.barWrap}>
                        <div
                          className={`${styles.bar} ${winner1 ? styles.winBar : styles.loseBar}`}
                          style={{ width: `${score1}%` }}
                        >
                          <span className={styles.barScore}>{score1}</span>
                        </div>
                      </div>
                      <div className={styles.barWrap} style={{ direction: 'rtl' }}>
                        <div
                          className={`${styles.bar} ${!winner1 ? styles.winBar : styles.loseBar}`}
                          style={{ width: `${score2}%` }}
                        >
                          <span className={styles.barScore}>{score2}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* AI Verdict */}
            {verdict && (
              <div className={`glass-panel ${styles.verdictCard}`}>
                <div className={styles.ariaIcon}>ARIA</div>
                <p className={styles.verdictText}>
                  For overall dominance, the <strong style={{ color: 'var(--success-green)' }}>{verdict.winner.name}</strong> wins. 
                  If {verdict.loser.name.split(' ').slice(-2).join(' ')} suits your budget or use-case (Gaming or Streaming), 
                  it still delivers excellent performance at a lower price point.
                </p>
                <Button variant="primary">Buy {verdict.winner.name.split(' ').slice(-2).join(' ')}</Button>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
