'use strict'

var mongoose =  require('mongoose');
var Schema = mongoose.Schema;
var ArticleSchema = Schema({
    title: String,
    author: String,
    url: String,
    date: Date,
    objectID: Number,
    isActive: Boolean
});

module.exports = mongoose.model('Article', ArticleSchema);