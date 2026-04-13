import Header from '../../../components/Header';
import Link from 'next/link';

export default async function BlogDetail({ params }) {
  const { id } = await params;
  
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />
      
      {/* Container Responsive cho trang chi tiết */}
      <div className="max-w-3xl mx-auto mt-10 p-6 sm:p-10 bg-white rounded-xl shadow-sm border border-gray-200">
        
        {/* Nút Back to Blog */}
        <Link 
          href="/" 
          className="inline-block text-indigo-600 hover:text-indigo-800 font-semibold mb-6"
        >
           &larr; Back to Blog
        </Link>
        
        {/* Tiêu đề bài viết */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 capitalize">
          {post.title}
        </h1>
        
        {/* Nội dung đầy đủ */}
        <div className="text-gray-700 leading-relaxed text-lg">
          <p>{post.body}</p>
        </div>
        
      </div>
    </div>
  );
}
