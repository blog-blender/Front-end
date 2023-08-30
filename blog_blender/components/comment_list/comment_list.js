import { comment_data } from "@/data_samples/comment_list"
import Comment from "./comment/comment"
import CommentForm from "./comment_form"
export default function CommentList(props) {
    return(
    <div>
      {comment_data?.map((i) =>(
        <Comment props={i} />
        ))}
   
      <CommentForm/>
    </div>
    )
}
