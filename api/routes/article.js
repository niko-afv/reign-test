'use strict'

const express = require('express');
const api = express.Router();

const ArticleController = require('../controllers/article');

api.get('/articles', ArticleController.getAllArticles);

api.get('/articles/:id/disable', ArticleController.disableArticle);

module.exports = api;