import Comment from "./comment/comment"
import CommentForm from "./comment_form"
export default function CommentList(props) {
    return(
    <div>
      {props.data?.map((commentData) =>(
        <><Comment data={commentData} />
        <CommentForm AuthData={props.AuthData} postId={props.postId} blogId={props.blogId} initialData={commentData}/></>
        ))}
   
      <CommentForm AuthData={props.AuthData} postId={props.postId} blogId={props.blogId}/>
    </div>
    )
}
