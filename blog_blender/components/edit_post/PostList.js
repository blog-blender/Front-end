import React, { useState } from 'react';
import EditPostForm from './edit_post';

const PostList = ({ posts }) => {
  const [editingPost, setEditingPost] = useState(null);

  const handleEditClick = (post) => {
    setEditingPost(post);
  };

  const handleEditFormClose = () => {
    setEditingPost(null);
  };

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.name}</h3>
          <p>{post.description}</p>
          <button className="bg-blue-500 text-white rounded-lg px-2 py-1" 
          onClick={() => handleEditClick(post)}>Edit</button> <br></br><br></br>
        </div>
        
      ))}
      {editingPost && (
        <EditPostForm
          postToEdit={editingPost}
          onClose={handleEditFormClose}
        />
      )}
    </div>
  );
};

export default PostList;
