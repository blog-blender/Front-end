import React, { useState } from 'react';
import CreatePost from "@/components/create_blog/create_blog";

export default function Modal(props) {
  const [isModalOpen, setIsModalOpen] = [props.current_value, props.set_value];

  const handleOpenModal = (event) => {
    setIsModalOpen(true);
  };
  
  const handleCloseModal = (event) => {
    event.preventDefault();
    setIsModalOpen(false);
    document.body.style.overflow = "auto"
  };
  return (isModalOpen && 
    <div  className={"flex flex-col items-center " + props.className}>
      
      <div className="fixed inset-0 flex items-center justify-center z-30 bg-gray-800 bg-opacity-50">
        <div className="z-40 bg-white p-1 pt-0 rounded-lg shadow-lg lg:w-1/2 h-full max-h-fit overflow-auto overscroll-contain">
            <div className="z-40 flex justify-end mb-2 sticky top-0 bg-white">
            
            <svg onClick={handleCloseModal} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

        </div>
        {props.target}
      </div>
    </div>
    </div>
  );

}