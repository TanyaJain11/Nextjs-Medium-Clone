import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Format from '../layout/format'

import Layout from '../layout/layout';

export default function Profile() {
  const { data: sessionData, status } = useSession();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`/api/userProfile?email=${sessionData.user.email}`);
        const data = await response.json();
        setBlogs(data);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching blogs:', error);
      }
    };

    if (sessionData) {
      fetchBlogs();
    }
  }, [sessionData]);

  const handleDelete = async (blogId) => {
    try {
      const response = await fetch(`/api/deleteBlog?id=${blogId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Blog deleted successfully
        // Refresh the blogs list
        const updatedBlogs = blogs.filter((blog) => blog.id !== blogId);
        setBlogs(updatedBlogs);

        // Reload the page
        window.location.reload();
      } else {
        // Handle error cases
        const errorData = await response.json();
        console.log('Error deleting blog:', errorData.message);
      }
    } catch (error) {
      console.log('Error deleting blog:', error);
    }
  };

  if (!sessionData) {
    // If the user is not authenticated, redirect to the login page
    return <div className="text-center">Please log in to view this page.</div>;
  }

  if (status === 'loading' || loading) {
    return (
      <Layout>
        <div className="text-center">Loading...</div>
      </Layout>
    );
  }

  return (
    <Format>
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Profile Page</h1>
      <h2 className="text-xl font-bold mb-2">Welcome, {sessionData.user.name}</h2>
      <p className="text-gray-600 mb-6">Email: {sessionData.user.email}</p>

      <h3 className="text-2xl font-bold mb-4">Your Blogs</h3>
      {blogs.length > 0 ? (
        <ul className="space-y-6">
          {blogs.map((blog) => (
            <li key={blog.id} className="border rounded-lg p-6">
              <h4 className="text-xl font-bold mb-2">{blog.title}</h4>
              <p className="text-gray-600 mb-4">{blog.subtitle}</p>
              <div className="relative aspect-w-16 aspect-h-9">
                <img src={blog.img} layout="fill" objectFit="cover" className="rounded-lg" />
              </div>
              <div className="text-gray-600 mt-4">{blog.description}</div>
              <div className="mt-6 flex justify-end">
                <Link href={`/edit/${blog._id}`} passHref>
                  <button className="px-4 py-2 mr-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    Edit
                  </button>
                </Link>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  onClick={() => handleDelete(blog._id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No blogs found.</p>
      )}
    </div>
    </Format>
  );
}
