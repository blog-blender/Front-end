export default function Comment(props) {
   let content = props.content
   let user_name = null
   let profile_pic = null
   if (props.data.user_id) {
      user_name = props.data.user_id.username
      profile_pic = props.data.user_id.profile_pic   
   }
   return<>
<div  class="flex bg-white shadow-lg rounded-lg border border-solid border-gray-300">
   <div class="flex items-start px-4 py-6">
      <img class="w-8 h-8 rounded-full object-cover mr-4 shadow" src={profile_pic} alt="avatar" />
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