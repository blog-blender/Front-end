import { useRouter } from 'next/router';
import { blog_data } from '@/data_samples/blog_list';
import BlogDetail from '@/components/BlogDetailPage/BlogDetailPage';

export default function BlogDetailPage() {
  const router = useRouter();
  const { id } = router.query; // Get the blog ID from the route

  // Find the blog with the matching ID from your sample data
  const blog = blog_data.find(blog => blog.id === parseInt(id, 10));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return <BlogDetail blog={blog} />;
}