const mongoose= require('mongoose');
const Author = require('../models/authorModel');
const catchAsync = require('../utils/catchAsync');

exports.createAuthor = catchAsync(async (req, res) => { 
    const newAuthor = await Author.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            newAuthor
        }
    })
})