import Comment from "./comment/comment"
import CommentForm from "./comment_form"
export default function CommentList(props) {
  console.log(props,"COMMENT LIST")
    return(
    <div>
      {props.data?.map((commentData) =>(
        <><Comment data={commentData} />
        {/* <CommentForm AuthData={props.AuthData} postId={props.postId} blogId={props.blogId} userPic={props.userPic} initialData={commentData}/> */}
        </>
        ))}
   
      <CommentForm AuthData={props.AuthData} postId={props.postId} blogId={props.blogId} userPic={props.userPic}/>
    </div>
    )
}
