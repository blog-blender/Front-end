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
    <div className={`${props.className} m-4 p-4 ${styles.divMain}`}>
  <div>
    <div >
      <div className={`flex flex-wrap ${styles.cards}`}>

        {data.map((blog, index) => (
          <Link key={index} href={`./render_blog_detalis/${blog.id}`}>
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
</div>
  );
}
