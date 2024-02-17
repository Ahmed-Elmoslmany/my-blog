const express = require('express');
const articleController = require('../controllers/articleController');

const router = express.Router();

router.route('/').get(articleController.getAllArticles).post(articleController.createArticle);

//.patch(articleController.updateArticle).delete(articleController.deleteArticle);
router.route('/:id').get(articleController.getArticle)

module.exports = router;