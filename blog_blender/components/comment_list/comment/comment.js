export default function Comment(props) {
    return<>
     
<div style={{border:'1px solid #E2E8F0'}} class="flex bg-white shadow-lg rounded-lg ">
   <div class="flex items-start px-4 py-6">
      <img class="w-8 h-8 rounded-full object-cover mr-4 shadow" src={props.props.user_photo} alt="avatar" />
      <div class="">
         <div class="flex items-center justify-between">
            <h2 class="text-lg font-semibold text-gray-900 -mt-1">{props.props.user_name} </h2>
         </div>
         <p class="mt-3 text-gray-700 text-sm">
            {props.props.content}
         </p>
      </div>
   </div>
</div>
    </>
}