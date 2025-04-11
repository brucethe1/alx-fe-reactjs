import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#4CAF50',
      padding: '15px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '60px'
    }}>
      <ul style={{
        display: 'flex',
        justifyContent: 'center',
        listStyleType: 'none',
        padding: '0'
      }}>
        <li style={{ margin: '0 15px' }}>
          <Link 
            to="/" 
            style={{
              color: 'white',
              fontSize: '18px',
              fontWeight: 'bold',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}
          >
            Home
          </Link>
        </li>
        <li style={{ margin: '0 15px' }}>
          <Link 
            to="/about" 
            style={{
              color: 'white',
              fontSize: '18px',
              fontWeight: 'bold',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}
          >
            About
          </Link>
        </li>
        <li style={{ margin: '0 15px' }}>
          <Link 
            to="/services" 
            style={{
              color: 'white',
              fontSize: '18px',
              fontWeight: 'bold',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}
          >
            Services
          </Link>
        </li>
        <li style={{ margin: '0 15px' }}>
          <Link 
            to="/contact" 
            style={{
              color: 'white',
              fontSize: '18px',
              fontWeight: 'bold',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
