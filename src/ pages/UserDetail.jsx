import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserDetails } from '../services/github';

export default function UserDetail() {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserDetails(username);
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [username]);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center gap-4 mb-6">
        <img 
          src={user.avatar_url} 
          alt={user.login}
          className="w-20 h-20 rounded-full"
        />
        <div>
          <h1 className="text-2xl font-bold">{user.name || user.login}</h1>
          <p className="text-gray-600">{user.bio}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h2 className="font-semibold mb-2">Public Repos</h2>
          <p>{user.public_repos}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h2 className="font-semibold mb-2">Followers</h2>
          <p>{user.followers}</p>
        </div>
      </div>
      
      <a 
        href={user.html_url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        View on GitHub
      </a>
    </div>
  );
}