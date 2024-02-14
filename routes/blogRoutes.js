const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const { validateAuthorID } = require('../middleware/validationMiddleware');
const { routerMiddleware } = require('../middleware/routerMiddleware');
const configurableMiddleware = require('../middleware/configurableMiddleware');

// Router-level middleware
router.use(routerMiddleware);

// Configurable middleware with a custom configuration
router.use(configurableMiddleware('CustomConfig'));

router.get('/', blogController.getAllBlogs);
router.post('/', blogController.createBlog);
router.get('/:authorId', validateAuthorID, blogController.getBlogByAuthorID);

module.exports = router;
