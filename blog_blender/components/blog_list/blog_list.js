import { blog_data } from "@/data_samples/blog_list"
import Blog from "./blog/blog"

export default function BlogList(props) {
    return(
        <>
        <p>blog list</p>
        <Blog blog_photo={blog_data[0].blog_photo}/>
        <Blog blog_photo={blog_data[1].blog_photo}/>
        <Blog blog_photo={blog_data[2].blog_photo}/>
        </>
    )
}