import Post from "./post/post"

export default function PostList(props) {
    return(
    <div className={props.className}>
    {props.posts.map(post => { return <Post className="" data={post} user={props.user}/>
  })}
    </div>
    )
}