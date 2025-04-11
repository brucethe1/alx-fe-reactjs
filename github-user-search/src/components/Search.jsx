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
    setUserData(result.data);
    setError(result.error ? "Looks like we cant find the user" : null);
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>

      {/* Loading State */}
      {loading && <div className="text-center py-4"><p>Loading...</p></div>}

      {/* Error State */}
      {error && <div className="text-center py-4 text-red-500"><p>{error}</p></div>}

      {/* Results Display */}
      {userData && !error && (
        <div className="border-t pt-4">
          <div className="flex items-center gap-4">
            <img
              src={userData.avatar_url}
              alt={userData.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="text-xl font-bold">{userData.name || userData.login}</h2>
              <p className="text-gray-600">{userData.bio}</p>
              <a
                href={userData.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mt-2 inline-block"
              >
                View Profile
              </a>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 text-center">
            <div className="bg-gray-100 p-2 rounded">
              <p className="font-bold">{userData.public_repos}</p>
              <p className="text-sm">Repos</p>
            </div>
            <div className="bg-gray-100 p-2 rounded">
              <p className="font-bold">{userData.followers}</p>
              <p className="text-sm">Followers</p>
            </div>
            <div className="bg-gray-100 p-2 rounded">
              <p className="font-bold">{userData.following}</p>
              <p className="text-sm">Following</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
