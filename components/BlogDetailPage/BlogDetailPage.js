import { useState, useEffect } from "react";
import axios from 'axios';
import PostList from "../post_list/post_list";


export default function BlogDetail({ blog, AuthData, posts, ownedBlogs, setRefetchTrigger }) {
  const [userDatail, setUserDetail] = useState(null);
  const userDeatailUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}api/v1/accounts/users`
  const userDeatailParams = { username: AuthData.user.username, }
  let followersIds = blog.followers.map(obj => { return obj.user_id.id })
  const [follwed, setFollowed] = useState(followersIds.includes(AuthData.user.id));
  let dark = false

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


  // console.log("USER DETAIL", userDatail);

  async function followOnClick(event) {
    event.preventDefault();
    let url, method, payload

    if (follwed) {
      method = "delete"
      url = `${process.env.NEXT_PUBLIC_BACKEND_URL}api/v1/blogs/unfollow/${blog.id}/`
      payload = {
      }
    }
    else {
      method = "post"
      url = `${process.env.NEXT_PUBLIC_BACKEND_URL}api/v1/blogs/follow/`
      payload = { blog_id: blog.id }
    }

    const config = {
      headers: { Authorization: `Bearer ${AuthData.token.access}`, },
    };

    if (method == "post") {
      axios[method](url, payload, config)
        .then(function (response) {
          console.log(response);
          if (follwed) {
            // let temp = { ...postData }
            // temp.likes = postData.likes.filter((object) => { return object.user_id != AuthData.user.id })
            // setPostData(temp)
          }
          else {
            // let temp = { ...postData }
            // temp.likes.push(response.data)
            // setPostData(temp)
          }
          setFollowed(!follwed)
        })
        .catch(function (error) {
          // console.log(error);
        });
    }
    else {
      axios[method](url, config)
        .then(function (response) {
          console.log(response);
          if (follwed) {
            // let temp = { ...postData }
            // temp.likes = postData.likes.filter((object) => { return object.user_id != AuthData.user.id })
            // setPostData(temp)
          }
          else {
            // let temp = { ...postData }
            // temp.likes.push(response.data)
            // setPostData(temp)
          }
          setFollowed(!follwed)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  // console.log(follwed);
  useEffect(() => {
    if (AuthData.token) {
      getData(userDeatailUrl, AuthData.token.access, setUserDetail, userDeatailParams)
    }
  }, [])

  return (
    <main className={`profile-page ${dark ? "bg-[BAC7CD]" : "bg-[0000FF]"}`}>
      <section className="relative block" style={{ height: "500px" }}>
        <div
          className="absolute  top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_SERVER_URL}${blog.banner})`,
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
          <div className={` ${dark ? "bg-[#5a5a5a]" : "bg-[#f2f2f2]"} relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-xl rounded-lg -mt-64`}>
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative">
                    <img
                      alt="..."
                      src={`${process.env.NEXT_PUBLIC_IMAGE_SERVER_URL}${blog.blog_pic}`}
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
                      onClick={followOnClick}
                    >
                      {follwed?"Unfollow":"Follow"}
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
        {(posts && userDatail) ? <PostList setRefetchTrigger={setRefetchTrigger} ownedBlogs={ownedBlogs} data={posts} AuthData={AuthData} userData={userDatail.data[0]} /> : <p>posts no valid</p>}
      </section>
    </main>


  );
}

