// src/components/PostsComponent.jsx
import React from 'react';
import { useQuery } from 'react-query';
import { fetchPosts } from '../utils/fetchPosts'; // Adjust the path if needed

function PostsComponent() {
  const { data, error, isLoading, isError } = useQuery('posts', fetchPosts);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>An error occurred: {error.message}</div>;

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default PostsComponent;
