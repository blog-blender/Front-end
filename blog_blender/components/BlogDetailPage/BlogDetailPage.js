
import React from 'react';

export default function BlogDetailPage({ blog }) {
  return (
    <div className="bg-gray-100 py-8">
      <div className="border rounded-lg shadow-md p-4 mb-4 bg-white">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 w-80 h-10 flex items-center justify-center border-2 border-gray-300 rounded bg-blue-100">Blog Details</h2>
        <div>
        <img src={blog.banner} alt="Blog banner" className="w-80 h-40 rounded mr-4" />
          <img src={blog.blog_photo} alt="Blog Cover" className="w-40 h-40 rounded mr-4" />
          <h2 className="font-semibold">{blog.group_name}</h2>
          <hr />
          <p className="text-gray-600">{blog.description}</p>
        </div>
        {blog.categories && blog.categories.length > 0 && (
          <oll className="mt-2">
            {blog.categories.map((category, index) => (
              <li key={index} className="text-gray-500">{category}</li>
            ))}
          </oll>
        )}
      </div>
    </div>
  );
}
