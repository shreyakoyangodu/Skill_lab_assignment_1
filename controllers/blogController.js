const blogs = []; // Simulating blog data storage (replace with a database in a real application)

const getAllBlogs = (req, res) => {
  // Logic to fetch all blogs (replace with actual database query)
  res.json({ blogs });
};

const createBlog = (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required for creating a blog' });
  }

  // Simulate blog creation without authorID and id
  const newBlog = {
    title,
    content,
  };

  // Simulate pushing the new blog into the storage (replace with actual database insert)
  blogs.push(newBlog);

  res.status(201).json({ message: 'Blog created successfully', blog: newBlog });
};

const getBlogByAuthorID = (req, res) => {
  const authorID = parseInt(req.params.authorId);

  // Simulate fetching blogs by author ID (replace with actual database query)
  const blogsByAuthor = blogs.filter((blog) => blog.authorID === authorID);

  res.json({ blogs: blogsByAuthor, authorID });
};

module.exports = {
  getAllBlogs,
  createBlog,
  getBlogByAuthorID,
};
