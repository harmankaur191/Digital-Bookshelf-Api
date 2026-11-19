import express from 'express';
import Book from '../models/Book.js';
const router =express.Router();

router.post('/', async(req, res)=>{
    try{
        const newBook = new Book({
            title: req.body.title,
            author: req.body.author,
            isbn: req.body.isbn,
            publishedDate: req.body.publishedDate,
            inStock: req.body.inStock,
        })
        await newBook.save();
        res.status(201).json(newBook);
    }catch(e){
        console.log(e)
    }
})

router.get('/', async(req, res)=>{
    try{
        const response = await Book.find({})
        res.json(response);

    }catch(e){
         console.log(e)
    }
})

export default router;