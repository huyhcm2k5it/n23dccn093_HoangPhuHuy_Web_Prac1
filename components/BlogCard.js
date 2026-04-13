export default function BlogCard({ post }) {
  return (
    <div className="border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 bg-white flex flex-col h-full">
      <span className="text-xs text-indigo-600 font-bold uppercase tracking-wide bg-indigo-50 px-2 py-1 rounded-md w-max mb-3">
        Category #{post.userId}
      </span>
      <h2 className="font-bold text-lg mb-2 line-clamp-2 text-gray-900 capitalize leading-snug">{post.title}</h2>
      <p className="text-gray-500 text-sm line-clamp-3 mb-6 flex-grow">{post.body}</p>

      <div className="flex justify-between items-center mt-auto border-t border-gray-100 pt-4">
        <span className="text-sm font-medium text-gray-400">User #{post.userId}</span>
        <a href={`/blog/${post.id}`}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1.5 rounded-lg text-sm font-medium transition-colors shadow-sm">
          Read More
        </a>
      </div>
    </div>
  );
}
