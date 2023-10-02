import Blog from "@/components/blog_list/blog/blog";
import Link from 'next/link';
export default function BlogList(props) {
  const { style } = props;
  let data = props.data

  const text = {
    fontSize: '30px',
    color: 'white',
  };

  return (
    <div className={` m-4 p-4 ${style ? style.divMain : ""} ${props.className}`}>
      <div>
        <div >
          <div className={` ${style.cards}`}>

            {data.map((blog, index) => (
              <Link key={index} href={`./blog/${blog.id}`}>
                <Blog data={blog} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}