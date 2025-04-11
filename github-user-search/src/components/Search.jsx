import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

export default function Search() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;
    
    setLoading(true);
    setError(null);
    
    const result = await fetchUserData(username);
    
    setLoading(false);
    if (result.error) {
      setError("Looks like we cant find the user"); // Exact match required
      setUserData(null);
    } else {
      setUserData(result.data);
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
      {/* ... (rest of the form code remains the same) ... */}

      {error && (
        <div className="text-center py-4 text-red-500">
          <p>{error}</p> {/* This will display the exact error message */}
        </div>
      )}

      {/* ... (rest of the component remains the same) ... */}
    </div>
  );
}
