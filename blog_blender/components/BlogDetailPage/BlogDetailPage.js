
// import React from 'react';

// export default function BlogDetailPage({ blog }) {
//   return (
//     <div className="bg-gray-100 py-8">
//       <div className="border rounded-lg shadow-md p-4 mb-4 bg-white">
//         <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 w-80 h-10 flex items-center justify-center border-2 border-gray-300 rounded bg-blue-100">Blog Details</h2>
//         <div>
//         <img src={blog.banner} alt="Blog banner" className="w-80 h-40 rounded mr-4" />
//           <img src={blog.blog_photo} alt="Blog Cover" className="w-40 h-40 rounded mr-4" />
//           <h2 className="font-semibold">{blog.group_name}</h2>
//           <hr />
//           <p className="text-gray-600">{blog.description}</p>
//         </div>
//         {blog.categories && blog.categories.length > 0 && (
//           <oll className="mt-2">
//             {blog.categories.map((category, index) => (
//               <li key={index} className="text-gray-500">{category}</li>
//             ))}
//           </oll>
//         )}
//       </div>
//     </div>
//   );
// }













// import React from 'react';

// export default function BlogDetailPage({ blog }) {
//   return (
//     <div className="bg-gray-100 py-8">
//       <div className="border rounded-lg shadow-md p-4 mb-4 bg-white">
//         <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 w-80 h-10 flex items-center justify-center border-2 border-gray-300 rounded bg-blue-100">Blog Details</h2>
//         <div>
//         <img src={blog.banner} alt="Blog banner" className="w-80 h-40 rounded mr-4" />
//           <img src={blog.blog_photo} alt="Blog Cover" className="w-40 h-40 rounded mr-4" />
//           <h2 className="font-semibold">{blog.group_name}</h2>
//           <hr />
//           <p className="text-gray-600">{blog.description}</p>
//         </div>
//         {blog.categories && blog.categories.length > 0 && (
//           <oll className="mt-2">
//             {blog.categories.map((category, index) => (
//               <li key={index} className="text-gray-500">{category}</li>
//             ))}
//           </oll>
//         )}
//       </div>
//     </div>
//   );
// }



// import React from 'react';

// export default function BlogDetail({ blog }) {
//   return (
//     <div className="mr-100  justify-center items-center h-screen">
//       <div className="container mx-auto">
//         <div className="mt-20 col-lg-8 col-sm-12">
//           <div className="mb-4">
//             <img className="w-full rounded" src={blog.banner} alt="Blog Banner" />
//           </div>
//           <div className="mb-4">
//             <img className="w-1/4 rounded" src={blog.blog_photo} alt="Blog Cover" />
//           </div>
//           <p className="text-base text-gray-600 mb-4">
//             Post By: dd/mm/yyyy
//           </p>
//           <h2 className="text-4xl text-gray-700 font-bold mb-4">
//             {blog.group_name}
//           </h2>
//           <p className="text-base text-gray-700 mb-4">
//             {blog.description}
//           </p>
//           <div className="flex items-center mt-4">
//             <div className="mr-4">
//               {blog.categories && blog.categories.length > 0 && (
//                 <ul className="flex mt-2">
//                   {blog.categories.map((category, index) => (
//                     <li key={index} className="text-gray-500 pr-2">
//                       {category}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//             <div className="text-base text-blue-600 font-semibold">
//               <a href="#">
//                 Read More
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }













export default function BlogDetail({ blog }) {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-screen-md mx-auto mt-10 p-4 rounded-lg bg-white">
        <div className="mb-4 md:mb-0 w-full mx-auto relative">
          <a href="#" className="py-2 text-blue-600 inline-flex items-center justify-center mb-2">
            Blog List
          </a>
          <img src={blog.banner} alt="Blog Banner" className="w-full object-cover rounded-lg" style={{ height: '28em' }} />
        </div>

        <div className="flex flex-col md:flex-row md:space-x-6 mt-6">
          <div className="md:w-1/2 md:h-1/2 max-w-screen-sm">
            <img src={blog.blog_photo} alt="Blog Cover" className="w-full object-cover rounded-lg" style={{ height: '20em', width: '20em' }} />
          </div>

          <div className="md:w-1/2 md:h-1/2 border md:rounded mt-6 bg-gray-100">
            <div className="flex items-center">
              <img src="" alt="Author Photo" className="mr-4 ml-2  rounded-full object-cover h-15 w-15" />
              <div className="ml-12">
                <br></br>
                <p className="font-semibold text-gray-700 text-sm"> Author Name </p>
                <br></br>
                <p className="font-semibold text-gray-500 text-xs"> Followers Number </p>
              </div>
            </div>
            <br></br>
            <p className="mb-4 mt-4 ml-2 text-gray-700 py-3">
              Author Bio
            </p>

            <button className="mb-4 px-2 py-1 text-gray-100 bg-green-700 flex ml-4 w-80 items-center justify-center rounded">
              Follow
              <i className='bx bx-user-plus ml-2'></i>
            </button>

          </div>
        </div>

        <div className="px-4 lg:px-0 mt-6">
          <h1 className="text-3xl font-semibold text-gray-800 leading-tight">
            {blog.group_name}
          </h1>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-6 mt-6">
          <div className="px-4 lg:px-0 mt-6 text-gray-700 text-base leading-relaxed w-full lg:w-3/4">
            <p className="pb-6"> {blog.description} </p>
          </div>
        </div>

        <div className="mt-4">
          {blog.categories && blog.categories.length > 0 && (
            <div>
              <p className="text-gray-600 uppercase tracking-wide font-semibold mb-2">Categories:</p>
              <ul className="flex flex-wrap space-x-2">
                {blog.categories.map((category, index) => (
                  <li key={index} className="bg-blue-100 px-3 py-1 text-sm rounded-full text-blue-700 hover:bg-blue-200 hover:text-blue-800 transition-colors duration-200 ease-in-out">
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>


      </div>
    </div>
  );
}

