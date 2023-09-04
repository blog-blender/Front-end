import CommentList from "../comment_list/comment_list";
import { postData } from "./data";

export default function Send(props) {

  return (

    
<div className="bg-gray-100 p-4 rounded-lg shadow-lg">
       <div className="mb-4">
         <img
           className="h-40 w-full object-cover rounded-lg"
           src="https:images.unsplash.com/photo-1483232539664-d89822fb5d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG8lMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&w=1000&q=80"
           alt=""
         />
       </div>
      <div style={{ display: "flex", flexDirection: 'row' }}>
        <div style={{ width: '30%', display: "flex", gap: '10px', flexDirection: 'column' }}>
          {
            postData.map((i) => (
              <div style={{ width: '100%', border: '1px solid' }} class="container">
                <div class="flex flex-wrap ">
                  <div class=" w-full ">
                    <article class="overflow-hidden rounded-lg shadow-lg">
                      <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                        <a class="flex items-center no-underline hover:underline text-black" href="#">
                          <img style={{ width: '10%' }} alt="Placeholder" class="block rounded-full" src={i.user_photo} />
                          <p class="ml-2 text-sm">
                            {i.user_name}
                          </p>
                        </a>
                        <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                          <span class="hidden">Like</span>
                          <i class="fa fa-heart"></i>
                        </a>
                      </footer>

                      <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                          <a class="no-underline hover:underline text-black" href="#">
                            {i.content}
                          </a>
                        </h1>
                      </header>

                      <a href="#">
                        {i.photoofPost && <img alt="Placeholder" class="block h-auto w-full" src={i.photoofPost} />}
                      </a>
                    </article>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div style={{ width: '70%' }}>
          <div style={{ width: '100%' }} class="font-sans leading-none bg-grey-lighter">


            <div >
              <div>
                <div>
                  <div >
                    <div class="bg-white shadow">

                      <div style={{ width: '100%' }}>
                        <div style={{ height: '100px' }} class="flex items-center border-b  ">
                          <img alt="" class="block w-10 h-10 rounded-full" src="https://media.istockphoto.com/id/1205703732/photo/social-media-concept.jpg?b=1&s=612x612&w=0&k=20&c=54biMNO-fB73AM4Qt2QQ3_FCOBwFUPr4oFXC_7fHTgk=" />
                          <textarea class="appearance-none flex-1 ml-2 mt-4" id="body" name="body" rows={4} placeholder="What's on your mind?"></textarea>

                        </div>
                      </div> 
                       <div class="px-3 pb-2 border-b">
                        <ul class="flex items-center list-reset font-bold text-xs text-grey-darkest">
                          <li class="bg-grey-lightest p-2 rounded-full mr-4 cursor-pointer hover:bg-grey-lighter">
                            <label for="fileUpload">Photo/Video:</label>
                            <input name="Photo/Video" type="file" id="fileUpload" />
                          </li>

                        </ul>
                      </div> 
                       <div class="flex justify-end p-3 text-xs">
                        <button
                          style={{ backgroundColor: '#0D9488' }}
                          class="block text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          type="button"
                        >
                          Post
                        </button>

                      </div> 
                    </div>
                    <div class="bg-white shadow mt-4 p-3 pb-0 relative">
                      <div class="flex items-center">
                        <div>
                          <img alt="" class="w-10 h-10 rounded-full" src="https://media.istockphoto.com/id/1205703732/photo/social-media-concept.jpg?b=1&s=612x612&w=0&k=20&c=54biMNO-fB73AM4Qt2QQ3_FCOBwFUPr4oFXC_7fHTgk=" />
                        </div>
                        <div class="ml-2">
                          <h5>
                            <a class="text-blue no-underline hover:underline" href="#" />
                            Mohammad Shiyyab
                          </h5>
                          <p class="text-xs font-normal text-grey mt-1">
                            <span class="cursor-pointer hover:underline">
                              December 8, 2023
                            </span>
                          </p>
                        </div>
                      </div>
                      <h5 class="text-sm font-normal my-3">
                        im happy because im working in the final project in ltuc course.

                      </h5>
                      <div class="border">
                        <img style={{ height: '300px', width: '100%' }} alt="hello" src="https://legacy.alghad.com/wp-content/uploads/2021/07/210704_ASAC_ServerBannerDiscord_03a.png" />
                      </div>
                      <div class="flex py-1">
                        <button class="appearance-none flex-1 flex items-center justify-center py-2 text-center text-red hover:bg-grey-lighter">
                          Love
                        </button>
                        <button class="appearance-none flex-1 flex items-center justify-center py-2 text-center text-grey-darker hover:bg-grey-lighter">
                          Comment
                        </button>
                        <button class="appearance-none flex-1 flex items-center justify-center py-2 text-center text-grey-darker hover:bg-grey-lighter">
                          Share
                        </button>
                      </div>
                      <div style={{ backgroundColor: '#e5e7eb' }} class=" flex flex-between py-3 -mx-3 p-2">
                        <img class="w-8 h-8 rounded-full" src="https://media.istockphoto.com/id/1205703732/photo/social-media-concept.jpg?b=1&s=612x612&w=0&k=20&c=54biMNO-fB73AM4Qt2QQ3_FCOBwFUPr4oFXC_7fHTgk=" alt="" />

                        <textarea name="body" placeholder="Write a comment..." class="appearance-none w-full mx-2 bg-grey-lighter rounded-full border bg-white h-8 px-2 pt-2 text-xs"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <CommentList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )


}






