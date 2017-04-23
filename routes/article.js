var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Article = require('../models/Article.js');

/* GET Archives, 要写在router / 之前，否则出错 */
router.get('/archives', function (req, res, next) {
    Article.find({}, {title: 1, author: 1, tags: 1, create_time: 1}, function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* GET ALL Articles */
router.get('/', function (req, res, next) {
    Article.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* GET SINGLE Article BY ID */
router.get('/:id', function (req, res, next) {
    Article.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* SAVE Article */
router.post('/', function (req, res, next) {
    Article.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE Article */
router.put('/:id', function (req, res, next) {
    Article.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE Article */
router.delete('/:id', function (req, res, next) {
    Article.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;