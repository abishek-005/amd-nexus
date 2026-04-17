import './SpecBadge.css';

export default function SpecBadge({ children, className = '' }) {
  return (
    <span className={`spec-badge ${className}`}>
      {children}
    </span>
  );
}
