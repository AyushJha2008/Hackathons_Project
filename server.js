const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/community-forum')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Comment Schema
const commentSchema = new mongoose.Schema({
    postId: {
        type: Number,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: Number,
        default: 0
    }
});

const Comment = mongoose.model('Comment', commentSchema);

// Routes
// Get all comments for a post
app.get('/api/comments/:postId', async (req, res) => {
    try {
        const comments = await Comment.find({ postId: req.params.postId });
        res.json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new comment
app.post('/api/comments', async (req, res) => {
    const comment = new Comment({
        postId: req.body.postId,
        content: req.body.content,
        author: req.body.author,
        likes: 0
    });

    try {
        const newComment = await comment.save();
        res.status(201).json(newComment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Like a comment
app.put('/api/comments/:id/like', async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (comment) {
            comment.likes += 1;
            const updatedComment = await comment.save();
            res.json(updatedComment);
        } else {
            res.status(404).json({ message: 'Comment not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});