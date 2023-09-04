import React, { useState } from 'react';
import CreatePost from "@/components/create_post/create-post";

export default function CreatePostModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-semibold mb-4">Post Page</h1>
      <button
        onClick={handleOpenModal}
        className="bg-blue-500 text-white rounded-lg px-4 py-2"
      >
        Create New Post
      </button>

      {isModalOpen && <CreatePost onClose={handleCloseModal} />}
    </div>
  );

}
