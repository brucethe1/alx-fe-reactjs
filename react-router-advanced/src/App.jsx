import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './pages/Profile';
import ProfileDetails from './pages/ProfileDetails';
import ProfileSettings from './pages/ProfileSettings';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <Router>  {/* Wrap your routes with BrowserRouter */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/blog/:id" element={<BlogPost />} />  {/* Change path to /blog/:id */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
