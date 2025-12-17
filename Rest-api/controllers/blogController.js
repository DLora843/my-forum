import Blog from "../models/Blog.js";

export const getAllBlogs = async (req, res) => {
    const blogs = await Blog.find().populate("author", "email");
    res.json(blogs);
};

export const getOneBlog = async (req, res) => {
    const blog = await Blog.findById(req.params.id).populate("author", "email");

    if (!blog) {
        return res.status(404).json({ message: "Blog not found"});
    }

    res.json(blog);
};

export const createBlog = async (req, res) => {
    const { title, description, content, image } = req.body;

    const blog = await Blog.create({
        title, 
        description,
        content,
        image, 
        author: req.user._id,
    });

    res.status(201).json(blog);
};

export const updateBlog = async (req, res) => {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
        return res.status(404).json({ message: "Blog not found" });
    }

    if (blog.author.toString() !== req.user._id.toString()) {
        return res.status(403).json({ message: "Нямате права" });
    }

    Object.assign(blog, req.body);
    await blog.save();

    res.json(blog);
};

export const deleteBlog = async (req, res) => {
    const blogs = await Blog.findById(req.params.id);

    if (!blog) {
        return res.status(404).json({ message: "Blog not found" });
    }

 await blog.deleteOne();
  res.json({ message: "Blog deleted" });
};