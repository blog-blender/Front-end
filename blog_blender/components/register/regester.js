import { useEffect, useState } from "react";

const RejesterPage = () => {
    const [openModal,setOpenModal] = useState(false)
    const [ email , setEmail ] =useState('')
    const [firstName,setFirstName]= useState('')
    const [lastName , setLastName] = useState('')
    const [ password , setPassword ] = useState('')
    console.log(openModal)
    return (
        <section class="bg-gray-50 min-h-screen flex items-center justify-center">
        <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          <div class="md:w-1/2 px-8 md:px-16">
            <h2 class="font-bold text-2xl text-[#0D9488]">Sign Up</h2>
            
           
            <form action="" class="flex flex-col gap-4">
              <input class="p-2 mt-5 rounded-xl border" type="text" name="firstName" onChange={(a) => setFirstName(a.target.value)} placeholder="FirstName" />
              <input class="p-2 mt-5 rounded-xl border" type="text" onChange={(s)=> setLastName(s.target.value)} name="lastName"  placeholder="Last Name" />
              <input class="p-2 mt-5 rounded-xl border" type="email" name="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email Address" />
                <input class="p-2 mt-3 rounded-xl border w-full" type="password" onChange={(e)=> {setPassword(e.target.value)}} name="password" placeholder="Password" />

              <div class="relative">
                <input class="p-2 mt-3 rounded-xl border w-full" type="password" onChange={(e)=> {setPassword(e.target.value)}} name="password" placeholder="Confirm Password" />

              </div>

              <div className="mt-5 text-xs border-b border-[#0D9488] py-4 text-[#0D9488]">
                  <input type="checkbox" />
                  {/* <a href="#">Forgot your password?</a> */}
                  <span className="remember ml-2 font-bold text-xl">Remember me</span>
                </div>

              <button
                  style={{backgroundColor:'#0D9488'}}
                  class="block text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                  // onClick={() => setOpenModal(true)} // This line sets the state to true when clicked
                >
                  Sign Up
                </button>
            </form>
          </div>
      
          <div class="md:block hidden w-1/2">
            <img className="rounded-2xl" src="https://images.unsplash.com/photo-1603277578692-c699f37c67d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGlnaHQlMjBncmVlbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
          </div>
        </div>
      </section>
    )
}

export default RejesterPage;