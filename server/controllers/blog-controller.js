const { BlogPost } = require('../models');

module.exports = {
  async createBlogPost({ body }, res) {
    const blogPost = await BlogPost.create(body);

    if (!blogPost) {
      return res.status(400).json({ message: 'Unable to create blog post' });
    }

    res.status(200).json(blogPost);
  },
  
  async getAllBlogPosts(req, res) {
    const allBlogPosts = await BlogPost.find({});

    if (!allBlogPosts) {
      return res.status(400).json({ message: 'No blog posts found' });
    }

    res.status(200).json(allBlogPost);
  },

  async getBlogPostById({ params }, res) {
    const blogPost = await BlogPost.findById(params.id);

    if (!blogPost) {
      return res.status(400).json({ message: 'No blog post found by that id' });
    }

    res.status(200).json(blogPost);
  },
};
