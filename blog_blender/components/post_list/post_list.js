import { post_data } from "@/data_samples/post_list"
import Post from "./post/post"
post_data
export default function PostList(props) {
    return(
      
    <div className={props.className}>
    {props.posts.map(post => { return <Post className="" data={post} user={props.user}/>
  })}
    </div>
    )
}