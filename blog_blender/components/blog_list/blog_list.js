import Blog from "./blog/blog";

export default function BlogList(props) {
  let data = props.data
  return (
    <div className={props.className}>
      <div className="rounded-lg shadow-md p-2 w-full">
        <div className="grid gap-4">
          {data.map((blog, index) => (
            <Blog
              key={index}
              blog_photo={blog.blog_photo}
              group_name={blog.group_name}
              description={blog.description}
              onClick={() => props.onClick(blog)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}














////////////For BackEnd///////////////
// import React, { useState, useEffect } from 'react'; // Import useState and useEffect
// import Blog from "./blog/blog";

// export default function BlogList(props) {
//   const [blogData, setBlogData] = useState([]);

//   useEffect(() => {
//     fetch('URL')
//       .then(response => response.json())
//       .then(data => {
//         setBlogData(data);
//       })
//       .catch(error => {
//         console.error('Error fetching blog data:', error);
//       });
//   }, []);

//   return (
//     <div className="bg-gray-100 py-8">
//       <div className="border rounded-lg shadow-md p-4 mb-4 bg-white">
//         <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 w-80 h-10 flex items-center justify-center border-2 border-gray-300 rounded bg-blue-100">Blog List</h2>
//         <div className="grid gap-4">
//           {blogData.map((blog, index) => (
//             <Blog
//               key={index}
//               blog_photo={blog.blog_photo}
//               group_name={blog.group_name}
//               description={blog.description}
//               banner={blog.banner}
//               categories={blog.categories}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }







