const router = require('express').Router();

// Import any controllers needed here
const { getAllBlogPosts, getBlogPostById, createBlogPost } = require('../../controllers/blog-controller');

// Declare the routes that point to the controllers above
router.route('/').get(getAllBlogPosts);
router.route('/').post(createBlogPost);

router.route('/:id').post(getBlogPostById);

module.exports = router;
