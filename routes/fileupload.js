var express = require('express');
var fs = require('fs');
var router = express.Router();

var formidable = require('formidable');
var util = require('util');

/* SAVE File upload */
router.post('/', function (req, res, next) {
    console.log('fileupload api')
    var form = new formidable.IncomingForm(); //创建上传表单
    form.encoding = 'utf-8'; //设置编辑
    form.uploadDir = './fileupload'; //设置上传目录
    form.keepExtensions = true; //保留后缀
    form.maxFieldsSize = 1024 * 1024 * 1024;   //文件大小 k
    form.parse(req, function (err, fields, files) {
        if (err) {
            res.send(err);
            return;
        }
        console.log(fields, "-------------", files);
        // res.writeHead(200, {'content-type': 'text/plain'});
        // res.write('received upload:\n\n');
        res.json(util.inspect({fields: fields, files: files}));
    });
});


module.exports = router;