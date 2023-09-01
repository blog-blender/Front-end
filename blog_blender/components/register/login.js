import { useEffect, useState } from "react";
import { useAuth,AuthContext } from "../AuthContext";
import { useContext } from "react";

const LoginPage = () => {
  let context = useContext(AuthContext)
  // const {token, user, login} = useAuth().state
  // console.log(useAuth());
  const [openModal, setOpenModal] = useState(false)
  const [email, setEmail] = useState('')
  // const [firstName,setFirstName]= useState('')
  // const [lastName , setLastName] = useState('')
  const [password, setPassword] = useState('')
  console.log(openModal)
  return (
    <section class="bg-gray-50 min-h-screen flex items-center justify-center">
      <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div class="md:w-1/2 px-8 md:px-16">
          <h2 class="font-bold text-2xl text-[#0D9488]">Login</h2>


          <form action="" class="flex flex-col gap-4">
            <input class="p-2 mt-8 rounded-xl border" type="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <div class="relative">
              <input class="p-2 rounded-xl border w-full" type="password" onChange={(e) => { setPassword(e.target.value) }} name="password" placeholder="Password" />

            </div>
            <button
              style={{ backgroundColor: '#0D9488' }}
              class="block text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
              onClick={() => {setOpenModal(true);context.login("admin","admin");}}
            >
              Login
            </button>
          </form>

          <div class="mt-5 text-xs border-b border-[#0D9488] py-4 text-[#0D9488]">
            <a href="#">Forgot your password?</a>
          </div>

          <div class="mt-3 text-xs flex justify-between items-center text-[#0D9488]">
            <p>Don't have an account?</p>
            <button
              style={{ backgroundColor: '#0D9488' }}
              class="block text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Register
            </button>            </div>
        </div>

        <div class="md:block hidden w-1/2">
          <img className="rounded-2xl" src="https://images.unsplash.com/photo-1603277578692-c699f37c67d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGlnaHQlMjBncmVlbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
        </div>
      </div>
    </section>
  )
}

export default LoginPage;