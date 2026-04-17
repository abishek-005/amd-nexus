import './Button.css';

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  ...props 
}) {
  return (
    <button 
      className={`nexus-btn nexus-btn-${variant} ${className}`} 
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
