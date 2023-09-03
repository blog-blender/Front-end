import Blog from "@/components/blog_list/blog/blog";
import Link from 'next/link';
import styles from '@/pages/profile/profile.module.css'
export default function BlogList (props) {
  let data = props.data
  const divStyle = {
    backgroundColor:'#687E8D'
  };
  const text = {
    fontSize: '30px',
    color: 'white',
  };
  
  return (
    <div className={props.className}>
      <div className="rounded-lg shadow-md p-2 w-full">
        <div className="grid gap-4">
        <div className={styles.cards} >
        <div className={styles.cardo} style={divStyle}>  
          <p className={styles.tip} style={text}>Blog List</p>
        </div>
      </div>
          {data.map((blog, index) => (
            <Link key={index} href={`/render_blog_detalis/${blog.id}`}>
              
              <Blog
                blog_photo={blog.banner}
                group_name={blog.group_name}
                // description={blog.description}


                // comment


              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}