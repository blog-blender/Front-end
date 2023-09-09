import { useState, useEffect } from "react";
import axios from 'axios';
import PostList from "../post_list/post_list";


// {
//   "id": 7,
//   "owner": {
//       "username": "Ibraheem",
//       "profile_pic": "http://127.0.0.1:8000/media/profile_pics/TNGRRLUMA-U04PA8EC6ET-3c0112671aa0-512.jpg",
//       "id": 3,
//       "first_name": "Ibraheem",
//       "last_name": "areeda",
//       "email": "Ibraheem@gmail.com"
//   },
//   "title": "Sustainable Living Insights",
//   "banner": "http://127.0.0.1:8000/media/blog_banner/7-1.jfif",
//   "blog_pic": "http://127.0.0.1:8000/media/blog_pic/7-2.jpg",
//   "description": "",
//   "Category_associates": [
//       {
//           "id": 45,
//           "category_name": "Wellness",
//           "blog_id": 7
//       }
//   ],
//   "followers": [
//       {
//           "id": 7,
//           "user_id": {
//               "username": "Ibraheem",
//               "profile_pic": "http://127.0.0.1:8000/media/profile_pics/TNGRRLUMA-U04PA8EC6ET-3c0112671aa0-512.jpg",
//               "id": 3,
//               "first_name": "Ibraheem",
//               "last_name": "areeda",
//               "email": "Ibraheem@gmail.com"
//           },
//           "blog_id": 7
//       }
//   ]
// }


export default function BlogDetail({ blog, AuthData, posts}) {
  const [userDatail, setUserDetail] = useState(null);
  const userDeatailUrl = 'http://127.0.0.1:8000/api/v1/accounts/users'
  const userDeatailParams = { username: AuthData.user.username,}

  async function getData(url, token, setter, params) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: params,
    };
    axios.get(url, config)
      .then((response) => { console.log(response); setter(response) })
      .catch((error) => { setter(error) })
  }

  useEffect(() => {
    if (AuthData.token) {
      getData(userDeatailUrl, AuthData.token.access, setUserDetail, userDeatailParams)
    }
  }, [])
  let dark = false
  console.log("USER DETAIL",userDatail);
  return (
    <main className={`profile-page ${dark?"bg-[BAC7CD]":"bg-[0000FF]"}`}>
      <section className="relative block" style={{ height: "500px" }}>
        <div
          className="absolute  top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: `url(http://res.cloudinary.com/dhaem8m4p/${blog.banner})`,
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
          <div className={` ${dark?"bg-[#5a5a5a]":"bg-[#f2f2f2]"} relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-xl rounded-lg -mt-64`}>
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative">
                    <img
                      alt="..."
                      src={`http://res.cloudinary.com/dhaem8m4p/${blog.blog_pic}`}
                      className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                      style={{ maxWidth: "150px" }}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div className="py-6 px-3 mt-32 sm:mt-0">
                    <button
                      className="bg-green-700 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
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
                      <span className="text-sm text-gray-500 p-5">Followers</span>
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        {blog.followers.length}
                      </span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="text-sm text-gray-500">Posts</span>
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        {posts.length}
                      </span>
                    </div>

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
                {`${blog.owner.first_name} ${blog.owner.last_name} `}
              </div>

              <div className="mb-2 text-gray-700">
                {/* <i className="fas fa-university mr-2 text-lg text-gray-500"></i> */}
                Author Bio
              </div>
              <div className="lg:mr-4 p-3 text-center">

                {blog.Category_associates && blog.Category_associates.length > 0 && (
                  <div>
                    {/* <span className="text-sm text-gray-500">category</span> */}
                    <div className="flex flex-wrap justify-center mt-2">
                      {blog.Category_associates.map((category, index) => (
                        <span
                          key={index}
                          className="border rounded-lg px-3 py-1 text-sm text-gray-600 mr-2 mb-2 cursor-pointer"
                        >
                          {`# ${category.category_name}`}
                        </span>
                        // TODO add search catigory when on click catigory span
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-10 py-10 border-t border-gray-300 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-gray-800">
                      {blog.description}
                    </p>
                    <a
                      href="#pablo"
                      className="font-normal text-green-700"
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
      <section className="relative block" style={{ height: "500px" }}>
        {(posts && userDatail)?<PostList data={posts} AuthData={AuthData} userData={userDatail.data[0]}/>:<p>posts no valid</p>}
      </section>
    </main>


  );
}

