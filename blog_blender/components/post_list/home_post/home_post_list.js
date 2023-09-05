import Post from "@/components/post_list/home_post/homePost"

export default function PostList(props) {
  console.log("post list",props.posts,"post list");
    return(
    <div className={props.className}>
    {props.posts.map(post => { return <Post className="" data={post} AuthData={props.AuthData}/>
  })}
    </div>
    )}