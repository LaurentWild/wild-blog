/*
This file define controller for Post, this class extend from Controller class.
With this extended class, this class obtain all methodd from parent class
*/
'use strict'
// Require parent class
let Controller = require('./Controller');
// Require model (schema) use with this controller
let Post = require('../models/post')

class PostsController extends Controller {


    constructor() {
        super(Post)
    }

    // OVERWRITE METHOD
    // findById(req, res, next) {
    //     console.log("req.params.id", req.params.id)
    //     // Get all documents and filter with queries string (req.query : ex. http://domain.ext/api/?query=string)
    //     Post.findById(req.params.id, (err, document) => {
    //         console.log("document.published", document.published)
    //         // IF NOT PUBLISHED
    //         if (document.published === false)
    //             next(err)
    //         else
    //             res.json(document)
    //     })
    // }
}

module.exports = PostsController
