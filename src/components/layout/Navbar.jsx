import Link from 'next/link';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar glass-panel">
      <div className="container nav-container">
        <Link href="/" className="logo">
          <span className="logo-amd">AMD</span>
          <span className="logo-nexus">NEXUS</span>
        </Link>
        
        <ul className="nav-links">
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/arena">Battle Arena</Link></li>
          <li><Link href="/builder">PC Builder</Link></li>
          <li><Link href="/performance">Performance</Link></li>
          <li><Link href="/shop">Shop</Link></li>
        </ul>
        
        <div className="nav-actions">
          <Link href="/builder" className="btn-primary">Build My PC</Link>
        </div>
      </div>
    </nav>
  );
}
