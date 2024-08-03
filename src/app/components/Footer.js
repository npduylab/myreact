// src/app/components/Footer.js
const Footer = () => {
    return (
      <footer style={footerStyle}>
        <p>&copy; 2024 My Next.js Site. All rights reserved.</p>
      </footer>
    );
  };
  
  const footerStyle = {
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  };
  
  export default Footer;
  