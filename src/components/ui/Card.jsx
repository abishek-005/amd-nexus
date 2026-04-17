import './Card.css';

export default function Card({ children, className = '' }) {
  return (
    <div className={`nexus-card ${className}`}>
      {children}
    </div>
  );
}
