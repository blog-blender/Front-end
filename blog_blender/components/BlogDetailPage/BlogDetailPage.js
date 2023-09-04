
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













// import React from 'react';

// export default function BlogDetail({ blog }) {
//   return (
//     <div className="bg-gray-100 py-10">
//       <div className="max-w-screen-md mx-auto mt-10 p-4 rounded-lg bg-white">
//         <div className="mb-4 md:mb-8 w-full mx-auto relative">
//           <a href="#" className="py-2 text-blue-600 inline-flex items-center justify-center mb-2">
//             Blog List
//           </a>
//           <img src={blog.banner} alt="Blog Banner" className="w-full object-cover rounded-lg h-80" />
//         </div>
//         <div className="flex flex-col md:flex-row md:space-x-8 mt-6">
//           <div className="md:w-1/2 max-w-screen-sm">
//             <img src={blog.blog_photo} alt="Blog Cover" className="w-full object-cover rounded-lg h-80" />
//           </div>
//           <div className="md:w-1/2 md:h-1/2 border md:rounded mt-6 bg-gray-100">
//             <div className="flex items-center">
//               <img src={blog.blog_photo} alt="Author Photo" className="mr-4 ml-2  rounded-full object-cover h-20 w-20" />
//               <div className="ml-12">

//                 <p className="font-semibold text-gray-700 text-sm"> Author Bio </p>

//                 <p className="font-semibold text-gray-500 text-xs"> Followers Number </p>
//               </div>
//             </div>

//             <p className="mb-4 mt-4 ml-2 text-gray-700 py-3">
//               Author Name
//             </p>
//             <button className="mb-4 px-2 py-1 text-gray-100 bg-green-700 flex ml-4 w-80 items-center justify-center rounded">
//               Follow
//               <i className='bx bx-user-plus ml-2'></i>
//             </button>
//           </div>
//         </div>
//         <div className="px-4 lg:px-0 mt-6">
//           <h1 className="text-3xl font-semibold text-gray-800 leading-tight">
//             {blog.group_name}
//           </h1>
//         </div>
//         <div className="flex flex-col md:flex-row md:space-x-6 mt-6">
//           <div className="px-4 lg:px-0 mt-6 text-gray-700 text-base leading-relaxed w-full lg:w-3/4">
//             <p className="pb-6"> {blog.description} </p>
//           </div>
//         </div>
// <div className="mt-4">
//   {blog.categories && blog.categories.length > 0 && (
//     <div>
//       <p className="text-gray-600 uppercase tracking-wide font-semibold mb-2">Categories:</p>
//       <ul className="flex flex-wrap space-x-2">
//         {blog.categories.map((category, index) => (
//           <li key={index} className="bg-blue-100 px-3 py-1 text-sm rounded-full text-blue-700 hover:bg-blue-200 hover:text-blue-800 transition-colors duration-200 ease-in-out">
//             {category}
//           </li>
//         ))}
//       </ul>
//     </div>
//   )}
// </div>
//       </div>
//     </div>
//   );
// }









export default function BlogDetail({ blog }) {
  return (


    <main className="profile-page bg-[BAC7CD]">
      <section className="relative block" style={{ height: "500px" }}>
        <div
          className="absolute  top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: `url(${blog.banner})`,
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-10 "
          ></span>
        </div>
       
      </section>
      <section className=" relative py-16 ">
        <div className=" container mx-auto px-4">
          <div className=" bg-[#f2f2f2] relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative">
                    <img
                      alt="..."
                      src={blog.blog_photo}
                      className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                      style={{ maxWidth: "150px" }}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div className="py-6 px-3 mt-32 sm:mt-0">
                    <button
                      className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                    >
                      Follow
                    </button>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8 flex-row">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-sm text-gray-500">Followers</span>
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        22
                      </span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="text-sm text-gray-500">Posts</span>
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        10
                      </span>
                    </div>
                    <div className="lg:mr-4 p-3 text-center">

                      {blog.categories && blog.categories.length > 0 && (
                        <div>
                          <span className="text-sm text-gray-500">
                            Categories:
                          </span>
                          <select
                            id="categorySelect"
                            className="border rounded-lg px-3 py-1 text-sm text-gray-600"
                          >
                            <option value="" disabled selected>Categories</option>
                            {blog.categories.map((category, index) => (
                              <option key={index} value={category}>
                                {category}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}





                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                  {blog.group_name}
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                  Blog Author
                </div>

                <div className="mb-2 text-gray-700">
                  <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                  Author Bio
                </div>
              </div>
              <div className="mt-10 py-10 border-t border-gray-300 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-gray-800">
                      {blog.description}
                      An artist of considerable range, Jenna the name taken by
                      Melbourne-raised, Brooklyn-based Nick Murphy writes,
                      performs and records all of his own music, giving it a
                      warm, intimate feel with a solid groove structure. An
                      artist of considerable range. An artist of considerable range, Jenna the name taken by
                      Melbourne-raised, Brooklyn-based Nick Murphy writes,
                      performs and records all of his own music, giving it a
                      warm, intimate feel with a solid groove structure. An
                      artist of considerable range.
                    </p>
                    <a
                      href="#pablo"
                      className="font-normal text-pink-500"
                      onClick={e => e.preventDefault()}
                    >
                      Show more
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>


  );
}

