const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog'); // Mongoose модел за блог пост

// Всички публикации
router.get('/', async (req, res) => {
    try {
        const posts = await Blog.find(); // Взимаме всички публикации от базата
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Получаване на публикация по ID
router.get('/:id', async (req, res) => {
    try {
        const post = await Blog.findById(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Създаване на публикация
router.post('/', async (req, res) => {
    try {
        const post = new Blog(req.body);
        await post.save();
        res.status(201).json(post);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Редактиране на публикация
router.put('/:id', async (req, res) => {
    try {
        const post = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.json(post);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Изтриване на публикация
router.delete('/:id', async (req, res) => {
    try {
        const post = await Blog.findByIdAndDelete(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.json({ message: 'Deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
