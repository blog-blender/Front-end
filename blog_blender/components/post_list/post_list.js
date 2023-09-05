import Post from "./post/post"

export default function PostList(props) {
  console.log("post list",props,"post list");
    return(
    <div className={props.className}>
    {props.data.map(post => { return <Post className="" data={post} AuthData={props.AuthData} userData={props.userData}/>
  })}
    </div>
    )
}