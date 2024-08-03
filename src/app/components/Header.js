// src/app/components/Header.js
import Link from 'next/link';

const Header = () => {
  return (
    <header style={headerStyle}>
      <nav>
        <ul style={navListStyle}>
          <li style={navItemStyle}><Link href="/">Home</Link></li>
          <li style={navItemStyle}><Link href="/contact">Contact</Link></li>
          <li style={navItemStyle}><Link href="/blog">Blog</Link></li>
        </ul>
      </nav>
    </header>
  );
};

const headerStyle = {
  padding: '10px 20px',
  backgroundColor: '#333',
  color: '#fff',
};

const navListStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
};

const navItemStyle = {
  marginRight: '20px',
};

export default Header;
