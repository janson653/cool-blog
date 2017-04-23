var mongoose = require('mongoose');

var ArticleSchema = new mongoose.Schema({
    title: String,
    author: String,
    tags: String,
    content: String,
    create_time: {type: Date, default: Date.now},
    update_time: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Article', ArticleSchema);
