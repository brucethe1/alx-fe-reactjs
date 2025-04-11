// App.jsx
import React from 'react';
import Header from './components/ Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';


function App() {
  return (
    <div style={{ fontFamily: 'Orbitron, sans-serif', backgroundColor: '#121212', color: '#E6E6E6', padding: '20px' }}>
      {/* Header Component */}
      <Header />

      {/* UserProfile Component */}
      <UserProfile 
        name="Warrior X" 
        age={27} 
        bio="Master of the battlefield, skilled in both sword and strategy." 
        style={{ margin: '20px 0', backgroundColor: '#333', borderRadius: '10px', boxShadow: '0 0 15px rgba(0, 255, 0, 0.5)', padding: '15px' }}
      />

      {/* MainContent Component */}
      <MainContent 
        style={{ 
          backgroundColor: '#222', 
          padding: '20px', 
          borderRadius: '8px', 
          boxShadow: '0px 4px 6px rgba(255, 0, 0, 0.7)', 
          color: '#E6E6E6' 
        }} 
      />

      {/* Footer Component */}
      <Footer style={{ textAlign: 'center', padding: '10px', marginTop: '20px', backgroundColor: '#000', color: '#FF4500' }} />
    </div>
  );
}

export default App;
