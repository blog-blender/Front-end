import Blog from "@/components/blog_list/blog/homeblog";
import Link from 'next/link';
import styles from '@/components/blog_list/home/homeeman.module.css'
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
    <div className={`${props.className} m-4 p-4 ${styles.divMain}`} >
    <div className="rounded-lg shadow-md  w-full  ">
      <div className="grid gap-4">
      <div className={styles.cards} >
      <div className={styles.cardo} style={divStyle}>  
        <p className={styles.tip} style={text}>Blog List</p>
      </div>
    </div>
        {data.map((blog, index) => (
          <Link key={index} href={`./render_blog_detalis/${blog.id}`}>
            <Blog data={blog}/>
          </Link>
        ))}
      </div>
    </div>
  </div>
  );
} 