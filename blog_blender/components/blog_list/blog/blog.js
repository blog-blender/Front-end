import React from 'react';




export default function Blog(props) {
    const handleBlogClick = () => {
        if (props.onClick) {
            props.onClick(); // Call the onClick function from the parent component
        }
    };

    return (
        <div
            className="justify-around  rounded-lg shadow-md p-3 mb-2 flex bg-blue-50 cursor-pointer w-fit lg:w-full"
            onClick={handleBlogClick} >

            <img src={props.blog_photo} alt="Blog Cover" className="rounded-full h-16 w-16 object-cover br-1/2 " />
             <h3 className="font-semibold self-center hidden md:block">{props.group_name}</h3>   
        </div>
    );
}

















