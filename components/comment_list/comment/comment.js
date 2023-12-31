// "comments": [
//   {
//       "user_id": {
//           "username": "Ibraheem",
//           "profile_pic": "https://back-end-git-ibraheem-deploy-blog-blender.vercel.app/media/profile_pics/TNGRRLUMA-U04PA8EC6ET-3c0112671aa0-512.jpg"
//       },
//       "content": "Your writing style is so engaging. I felt like I was right there with you!",
//       "id": 11
//   }
// ],
export default function Comment(props) {
   let content = props.data.content
   let user_name = null
   let profile_pic = null
   if (props.data.user_id) {
      user_name = props.data.user_id.username
      profile_pic = props.data.user_id.profile_pic
   }
   return<>
<div  class="flex bg-white shadow-lg rounded-lg border border-solid border-gray-300">
   <div class="flex items-start px-4 py-6">
      <img class="w-8 h-8 rounded-full object-cover mr-4 shadow" src={`http://res.cloudinary.com/dhaem8m4p/${profile_pic}`} alt="avatar" />
      <div class="">
         <div class="flex items-center justify-between">
            <h2 class="text-lg font-semibold text-gray-900 -mt-1">{user_name} </h2>
         </div>
         <p class="mt-3 text-gray-700 text-sm">
            {content}
         </p>
      </div>
   </div>
</div>
    </>
}