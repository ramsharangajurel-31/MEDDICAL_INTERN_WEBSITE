import React, { useEffect, useState } from "react";
import { FaEye, FaHeart, FaSearch, FaUser, FaCalendarAlt } from "react-icons/fa";


const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 2;

  useEffect(() => {
    fetch(`https://meddical-intern-website.onrender.com/api/blogs?search=${search}&page=${page}&limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.data);
        setTotal(data.total);
      })
      .catch((err) => console.error("Error fetching blogs:", err));
  }, [search, page]);

  return (
    <div className="blog-page">
      <div className="blog-container">
      
        <div className="blog-main">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <div key={blog.id} className="blog-card">
                <img src={`https://meddical-intern-website.onrender.com/${blog.image}`} alt={blog.title} className="blog-main-image" />
                <div className="blog-meta">
                  <span><FaCalendarAlt /> {blog.date}</span>
                  <span><FaUser /> {blog.author}</span>
                  <span><FaEye /> {blog.views}</span>
                  <span><FaHeart /> {blog.likes}</span>
                </div>
                <h2 className="blog-title">{blog.title}</h2>
                <p className="blog-description">{blog.description}</p>
              </div>
            ))
          ) : (
            <p className="no-main-blog">No blog selected</p>
          )}
        </div>

        <aside className="blog-sidebar">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
            />
          </div>

       
          {blogs.length === 0 ? (
            <p className="no-blogs">No blogs found</p>
          ) : (
            <>
              <h3 className="sidebar-title">Recent Posts</h3>
              <ul className="recent-posts">
                {blogs.slice(0, 3).map((post) => (
                  <li key={post.id} className="recent-post-item">
                    <img src={`https://meddical-intern-website.onrender.com/${post.image}`} alt={post.title} />
                    <div>
                      <small>{post.date}</small>
                      <p>{post.title}</p>
                    </div>
                  </li>
                ))}
              </ul>

      
              <div className="pagination">
                <button disabled={page === 1} onClick={() => setPage(page - 1)}> Prev</button>
                <span>Page {page} of {Math.ceil(total / limit)}</span>
                <button
                  disabled={page === Math.ceil(total / limit)}
                  onClick={() => setPage(page + 1)}
                >
                  Next 
                </button>
              </div>
            </>
          )}
        </aside>
      </div>
    </div>
  );
};

export default Blog;
