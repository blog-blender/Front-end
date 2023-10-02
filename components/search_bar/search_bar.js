import Image from "next/image"
import { useContext, useState } from "react";
import { AuthContext } from "../AuthContext";
import axios from "axios";
import Modal from "../modal";
import BlogList from "../blog_list/blog_list";
import Styles from '../../pages/profile/profile.module.css'

export default function SearchBar(props) {
    let AuthData = useContext(AuthContext);
    const [viewSearchResult, setViewSearchResult] = useState(false);
    const [blogData, setBlogData] = useState(null);
    const [searchText, setSearchText] = useState(null)
    const searchUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}api/v1/blogs/search/`

    const textChangeHandler = (event) => {
        const text = event.target.value
        setSearchText(text)
    };

    async function getData(url, token, setter, params) {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: params,
        };
        axios.get(url, config)
          .then((response) => { console.log(response,"SEARCH"); setter(response) })
          .catch((error) => { console.log(error, "error"); setter(error) })
    }

    async function search(){
        let searchParams = { blog_title: searchText }
        if(searchText){
            await getData(searchUrl, AuthData.token.access, setBlogData, searchParams)
            setViewSearchResult(true)
        }
    }
    return(
        <div className="z-50 w-full flex items-center justify-center absolute sm:top-[40%] top-[20%]">
            <Modal current_value={viewSearchResult} set_value={setViewSearchResult} target={(blogData && blogData != []) ? <BlogList style={Styles} data={blogData.data} /> : <></>}/>
            <input onChange={textChangeHandler} name="search" className="bg-opacity-90 h-12 text-base pl-2 rounded-full border-2 border-gray-700 outline-none shadow-md transition-all duration-300 ease-linear w-3/4 sm:w-2/5" placeholder="Search blogs . . ." />
            <Image className="z-[29] w-8 h-8 relative right-12" alt="glass" src="/glass.svg" width={6} height={6} onClick={search}/>
        </div>
    )
}