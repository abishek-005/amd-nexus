import styles from './performance.module.css';

const scenarios = [
  { title: '4K Video Export', game: 'DaVinci Resolve', before: '47 min', after: '11 min', gain: '77%' },
  { title: 'Blender Render', game: 'Blender 3.6', before: '38 min', after: '9 min', gain: '76%' },
  { title: 'Gaming FPS', game: 'Cyberpunk 2077 (4K)', before: '45 FPS', after: '112 FPS', gain: '149%' },
  { title: 'AI Model Training', game: 'PyTorch CNN', before: '2.5 hrs', after: '38 min', gain: '75%' },
];

export default function PerformancePage() {
  return (
    <main className={styles.page}>
      <div className={`container ${styles.inner}`}>
        <header className={styles.header}>
          <h1 className={`hero-title ${styles.title}`}>PERFORMANCE<br/>REALITY CHECK</h1>
          <p className={styles.subtitle}>See what upgrading to AMD actually does, in real numbers.</p>
        </header>

        <div className={styles.grid}>
          {scenarios.map((s) => (
            <div key={s.title} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.game}>{s.game}</span>
                <span className={styles.gainBadge}>+{s.gain} FASTER</span>
              </div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <div className={styles.comparison}>
                <div className={styles.stat}>
                  <span className={styles.statLabel}>BEFORE</span>
                  <span className={styles.statValue} style={{ color: 'var(--muted-gray)' }}>{s.before}</span>
                </div>
                <span className={styles.arrow}>→</span>
                <div className={styles.stat}>
                  <span className={styles.statLabel}>AFTER</span>
                  <span className={styles.statValue} style={{ color: 'var(--success-green)' }}>{s.after}</span>
                </div>
              </div>
              <div className={styles.barTrack}>
                <div className={styles.barAfter}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
