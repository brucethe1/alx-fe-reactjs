import React from 'react';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';  // Import MainContent here
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <UserProfile name="John Doe" age={28} bio="A software developer who loves traveling and exploring new cities." />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
