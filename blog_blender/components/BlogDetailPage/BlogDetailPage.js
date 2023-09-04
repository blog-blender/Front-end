import { AuthContext } from '@/components/AuthContext';
import { useContext, useState, useEffect } from "react";
import axios from 'axios';





export default function BlogDetail({ blog }) {
  let AuthData = useContext(AuthContext);

  const [blogDetail, setBlogDetail] = useState(null);
  const blogDetailUrl = 'http://127.0.0.1:8000/api/v1/blogs/?blog_id=1'
  // const blogDetailParams = { blog_id:1, }

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
      console.log("blog detail");
      getData(blogDetailUrl, AuthData.token.access, setBlogDetail)
      // getData(siteblogslUrl, AuthData.token.access, setSiteCategories)
    }
  }, [])

  if (blogDetail)
      console.log(blogDetail.data)


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

