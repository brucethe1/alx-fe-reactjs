import React from 'react';
import { useQuery } from 'react-query';

function PostsComponent() {
  const { data, error, isLoading, isError } = useQuery('posts', () =>
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
  );

  // Handle loading state
  if (isLoading) return <div>Loading...</div>;

  // Handle error state
  if (isError) return <div>An error occurred: {error.message}</div>;

  // If no errors and not loading, display the data
  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default PostsComponent;
