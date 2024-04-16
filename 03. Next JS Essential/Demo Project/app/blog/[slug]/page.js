const BlogPostPage = ({ params }) => {
  return (
    <div className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center gap-5">
      <h1 className="text-4xl font-semibold">Blog Post Page - {params.slug}</h1>
      <p className="px-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        euismod dapibus risus, non efficitur orci ullamcorper nec. Donec euismod
        dapibus risus, non efficitur orci ullamcorper nec. Donec euismod dapibus
        risus, non efficitur orci ullamcorper nec. Donec euismod dapibus risus,
        non efficitur orci ullamcorper nec. Donec euismod dapibus risus, non
        efficitur orci ullamcorper nec. Donec euismod dapibus risus, non
        efficitur orci ullamcorper nec. Donec euismod dapibus risus,
      </p>
    </div>
  );
};

export default BlogPostPage;
