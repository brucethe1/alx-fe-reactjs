import { useState } from 'react';
import { searchUsers, getUserDetails } from '../services/githubService';

export default function Search() {
  const [searchParams, setSearchParams] = useState({
    username: '',
    location: '',
    reposMin: '',
    reposMax: '',
    followersMin: ''
  });
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [expandedUser, setExpandedUser] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setPage(1);
    
    const response = await searchUsers(searchParams);
    
    if (response.error) {
      setError(response.error);
      setResults([]);
    } else {
      setResults(response.data);
      setTotalResults(response.total);
    }
    setLoading(false);
  };

  const loadMore = async () => {
    setLoading(true);
    const nextPage = page + 1;
    const response = await searchUsers({ ...searchParams, page: nextPage });
    
    if (!response.error) {
      setResults(prev => [...prev, ...response.data]);
      setPage(nextPage);
    }
    setLoading(false);
  };

  const showUserDetails = async (username) => {
    const details = await getUserDetails(username);
    setExpandedUser(details);
  };

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
      {/* Advanced Search Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={searchParams.username}
              onChange={handleInputChange}
              placeholder="e.g. octocat"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={searchParams.location}
              onChange={handleInputChange}
              placeholder="e.g. San Francisco"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Min Repositories</label>
            <input
              type="number"
              name="reposMin"
              value={searchParams.reposMin}
              onChange={handleInputChange}
              placeholder="e.g. 10"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Max Repositories</label>
            <input
              type="number"
              name="reposMax"
              value={searchParams.reposMax}
              onChange={handleInputChange}
              placeholder="e.g. 100"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Min Followers</label>
            <input
              type="number"
              name="followersMin"
              value={searchParams.followersMin}
              onChange={handleInputChange}
              placeholder="e.g. 100"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {/* Results Section */}
      {loading && results.length === 0 && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
        </div>
      )}

      {error && (
        <div className="text-center py-4 text-red-500">
          <p>{error}</p>
        </div>
      )}

      {results.length > 0 && (
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">
              {totalResults} {totalResults === 1 ? 'result' : 'results'} found
            </h3>
            {totalResults > results.length && (
              <button
                onClick={loadMore}
                disabled={loading}
                className="px-4 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded"
              >
                {loading ? 'Loading...' : 'Load More'}
              </button>
            )}
          </div>

          {results.map(user => (
            <div key={user.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-lg">
                        <a 
                          href={user.html_url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {user.login}
                        </a>
                      </h4>
                      {expandedUser?.login === user.login && expandedUser?.name && (
                        <p className="text-gray-600">{expandedUser.name}</p>
                      )}
                    </div>
                    <button
                      onClick={() => showUserDetails(user.login)}
                      className="text-sm text-blue-600 hover:underline"
                    >
                      {expandedUser?.login === user.login ? 'Hide Details' : 'Show Details'}
                    </button>
                  </div>

                  {expandedUser?.login === user.login && (
                    <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3">
                      <div className="bg-gray-50 p-2 rounded">
                        <p className="text-xs text-gray-500">Repositories</p>
                        <p className="font-bold">{expandedUser.public_repos || 'N/A'}</p>
                      </div>
                      <div className="bg-gray-50 p-2 rounded">
                        <p className="text-xs text-gray-500">Followers</p>
                        <p className="font-bold">{expandedUser.followers || 'N/A'}</p>
                      </div>
                      <div className="bg-gray-50 p-2 rounded">
                        <p className="text-xs text-gray-500">Following</p>
                        <p className="font-bold">{expandedUser.following || 'N/A'}</p>
                      </div>
                      <div className="bg-gray-50 p-2 rounded">
                        <p className="text-xs text-gray-500">Location</p>
                        <p className="font-bold">{expandedUser.location || 'N/A'}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
