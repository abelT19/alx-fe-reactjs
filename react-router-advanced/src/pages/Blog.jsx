import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [1, 2, 3];

  return (
    <div>
      <h2>Blog Page</h2>
      <ul>
        {posts.map((id) => (
          <li key={id}>
            <Link to={`/blog/${id}`}>Post {id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
