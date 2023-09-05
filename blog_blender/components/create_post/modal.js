import React, { useState } from 'react';
import PostForm from './create_post';

export default function PostFormModal({postFormOpen, setPostFormOpen, initialData}) {

  const handleCloseModal = () => {
    setPostFormOpen(false);
  };

  return (
    <div className="flex flex-col items-center w-screen h-screen">
      {postFormOpen && <PostForm onClose={handleCloseModal} initialData={initialData}/>}
    </div>
  );

}
