import Comment from "./comment/comment"
import CommentForm from "./comment_form"
export default function CommentList(props) {
    return(
    <div>
      {props.data?.map((i) =>(
        <Comment props={i} />
        ))}
   
      <CommentForm/>
    </div>
    )
}
