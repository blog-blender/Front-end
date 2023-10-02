import Comment from "./comment/comment"
import CommentForm from "./comment_form"
export default function CommentList(props) {
  console.log(props,"COMMENT LIST")
    return(
    <div className="">
      {props.data?.map((commentData , index) =>(
        <><Comment key = {index} data={commentData} />
        </>
        ))}
   
      <CommentForm setRefetchTrigger={props.setRefetchTrigger} AuthData={props.AuthData} postId={props.postId} blogId={props.blogId} userPic={props.userPic}/>
    </div>
    )
}
