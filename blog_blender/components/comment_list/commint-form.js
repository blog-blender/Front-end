export default function Coment() {
	return (
<div style={{border:'1px solid #E2E8F0', width:'47%'}} class="bg-white-400 rounded-2xl transform -translate-y-5">
  <section class="p-3 border-b border-gray-600">
    
  </section>
  <section class="w-full flex px-3 py-2">
    <div class="mr-1">
      <img class="rounded-full" src="https://pbs.twimg.com/profile_images/1366772608373387269/K6En5xnu_normal.jpg" alt="Profile Picture" />
    </div>
    <div class="flex-1">
      <textarea class="w-full p-2 bg-transparent outline-none placeholder-gray-600 text-black resize-none" rows="4" placeholder="What's happening?"></textarea>
      <div style={{display:'flex', justifyContent:'flex-end'}} class="flex items-center pt-2 border-t border-blue">
        <div style={{display:'flex', justifyContent:'flex-end'}}> 
          <button style={{display:'flex',justifyContent:'flex-end',backgroundColor:'#0D9488'}} class="transition duration-500 ease-in-out bg-blue-500 bg-opacity-100  text-white text-opacity-100  py-2 px-3 rounded-2xl text-base font-bold focus:outline-none" >Send</button>
        </div>
      </div>
    </div>
  </section>
</div>
	)
	

}