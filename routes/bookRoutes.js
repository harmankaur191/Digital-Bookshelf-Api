import express from 'express';
import Book from '../models/Book.js';
import mongoose from 'mongoose';
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
router.get('/:id', async(req, res)=>{
    try{
        
        const response = await Book.findOne({_id: req.params.id});
        console.log({_id:req.params.id});
        console.log(response);
        res.json(response);

    }catch(e){
        console.log(e+'Error fetching book with id: '+req.params.id);
    }
})

router.put('/:id', async(req, res)=>{

    try{
        const response = await Book.findByIdAndUpdate({_id:req.params.id},req.body);
        if(!response){
            return res.status(404).json({message:"Item not found!"});
        }else{
            console.log(' Book updated successfully');
        }

        res.json(response);
        
    }catch(e){
        res.status(400).json({message:error.message});
    }

})

router.delete('/:id', async(req, res)=>{
    try{
        const response = await Book.findByIdAndDelete({_id: req.params.id});
        if(!response){
            return res.status(404).json({message:"Item not found!"});
        }
        res.json(response);
    }catch(e){
         res.status(400).json({message:error.message});
         console.log("Item deleted succesffully!");
    }
})


export default router;