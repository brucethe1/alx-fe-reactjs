// src/components/PostsComponent.jsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';

// Fetch function inside the same file
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};

function PostsComponent() {
  const { data, error, isLoading, isError, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    cacheTime: 1000 * 60 * 5, // 5 minutes cache
    staleTime: 1000 * 60 * 2, // 2 minutes before refetching
    refetchOnWindowFocus: false, // Do not refetch on window focus
    keepPreviousData: true, // Keep old data while fetching new data
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <button onClick={() => refetch()} style={{ marginBottom: '10px', padding: '8px 12px', cursor: 'pointer' }}>
        Refresh Posts
      </button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
