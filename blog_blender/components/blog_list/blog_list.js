
// import React from 'react';
// import { blog_data } from "@/data_samples/blog_list";
// import Blog from "./blog/blog";

// export default function BlogList({ onBlogClick }) {
//   return (
//     <div className="bg-gray-100 py-8">
//       <div className="border rounded-lg shadow-md p-4 mb-4 bg-white">
//         <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 w-80 h-10 flex items-center justify-center border-2 border-gray-300 rounded bg-blue-100">Blog List</h2>
//         <div className="grid gap-4">
//           {blog_data.map((blog, index) => (
//             <Blog
//               key={index}
//               blog_photo={blog.blog_photo}
//               group_name={blog.group_name}
//               description={blog.description}
//               onClick={() => onBlogClick(blog)} 
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }







// import Blog from "./blog/blog";

// export default function BlogList(props) {
//   let data = props.data
//   return (
//     <div className={props.className}>
//       <div className="rounded-lg shadow-md p-2 w-full">
//         <div className="grid gap-4">
//           {data.map((blog, index) => (
//             <Blog
//               key={index}
//               blog_photo={blog.blog_photo}
//               group_name={blog.group_name}
//               description={blog.description}
//               onClick={() => props.onClick(blog)} 
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }





import Blog from "@/components/blog_list/blog/blog";
import Link from 'next/link';
export default function BlogList(props) {
  let data = props.data
  return (
    <div className={props.className}>
      <div className="rounded-lg shadow-md p-2 w-full">
        <div className="grid gap-4">
          {data.map((blog, index) => (
            <Link key={index} href={`/render_blog_detalis/${blog.id}`}>
              <Blog
                blog_photo={blog.blog_photo}
                group_name={blog.group_name}
                // description={blog.description}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}



















