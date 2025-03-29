// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './pages/Profile';
import ProfileDetails from './pages/ProfileDetails';
import ProfileSettings from './pages/ ProfileSettings';
import Home from './pages/  Home';
import NotFound from './pages/ NotFound';
import BlogPost from './pages/BlogPost';
function App() {
  return (
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
      <Route path="/post/:id" element={<BlogPost />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
