import { comment_data } from "@/data_samples/comment_list"
import Comment from "./comment/comment"
import Coment from "./commint-form"
export default function CommentList(props) {
    return(
    <div style={{display:'grid' , gap:'5px'}}>
      {/* <Coment /> */}
      {comment_data?.map((i) =>(
        <Comment props={i} />
     ))}
   
    </div>
    )
}
