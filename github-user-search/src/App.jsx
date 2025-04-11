import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './ pages/ Home';
import UserDetail from './ pages/UserDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:username" element={<UserDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;