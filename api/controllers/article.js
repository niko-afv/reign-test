'use strict'

const Article = require('../models/article');

exports.getAllArticles = function(req, res){
    Article.find({isActive: true}, (err, articles) => {
        if(err)return res.status(500).send({message: 'Server error'});
        if(!articles) return res.status(404).send({message: 'Article Not Found'});
        return res.status(200).send({
            articles
        });
    }).sort('-date');
}

exports.disableArticle = function(req, res){
    let articleId = req.params.id;

    Article.findByIdAndUpdate(articleId, {isActive: false}, (err, article) => {
        console.log(err)
        if(err)return res.status(500).send({message: 'Server error'});
        if(!article) return res.status(404).send({message: 'Article Not Found'});
        return res.status(200).send({
            article
        });
    });
}