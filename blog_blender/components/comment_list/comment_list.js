import Comment from "./comment/comment"
import CommentForm from "./comment_form"
export default function CommentList(props) {
    return(
    <div>
      {props.data?.map((commentData) =>(
        <Comment data={commentData} />
        ))}
   
      <CommentForm/>
    </div>
    )
}
