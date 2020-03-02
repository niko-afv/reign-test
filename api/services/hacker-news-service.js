'use strict'

const Client = require('node-rest-client').Client;
const Article = require('../models/article');

function articleConvertion(article) {
    let title =  ( typeof article.story_title == "string" ) ? article.story_title : article.title
    let url =  ( typeof article.story_url == "string" ) ? article.story_url : article.url

    if ( title === null ) {
        return null
    }

    return {
        title: title,
        url: url,
        author: article.author,
        date: article.created_at,
        objectID: article.objectID,
        isActive: true
    }
}

exports.storeNews = function() {
    let client = new Client();
    let url = 'https://hn.algolia.com/api/v1/search_by_date?query=nodejs'

    client.get(url, function (data) {
        data.hits.forEach((item) => {
            Article.findOne({objectID: item.objectID}, (err, articles) => {
                if(articles === null){ //if new news
                    const article = articleConvertion(item)
                    let savedArticle = new Article(article)
                    savedArticle.save()
                }
            });
        })
        console.log("News stored");
    });
}