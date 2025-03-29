// API Configuration
const API_URL = 'http://localhost:5000/api';

// Sample data to store posts (in a real application, this would come from a backend)
let posts = [
    {
        id: 1,
        title: "Welcome to the Community Forum!",
        content: "This is a sample post to demonstrate the forum's functionality. Feel free to create your own posts and interact with others!",
        author: "Admin",
        date: "2024-03-20",
        likes: 5,
        comments: 3
    }
];

// DOM Elements
const newPostForm = document.getElementById('newPostForm');
const postsContainer = document.querySelector('.posts-container');

// Function to create a new post
function createPost(title, content) {
    const post = {
        id: posts.length + 1,
        title,
        content,
        author: "User", // In a real app, this would be the logged-in user
        date: new Date().toISOString().split('T')[0],
        likes: 0,
        comments: 0
    };
    posts.unshift(post); // Add to beginning of array
    displayPosts();
}

// Function to fetch comments for a post
async function fetchComments(postId) {
    try {
        const response = await fetch(`${API_URL}/comments/${postId}`);
        if (!response.ok) throw new Error('Failed to fetch comments');
        return await response.json();
    } catch (error) {
        console.error('Error fetching comments:', error);
        return [];
    }
}

// Function to create a new comment
async function createComment(postId, content) {
    try {
        const response = await fetch(`${API_URL}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                postId,
                content,
                author: "User" // In a real app, this would be the logged-in user
            })
        });

        if (!response.ok) throw new Error('Failed to create comment');
        
        const newComment = await response.json();
        
        // Update post comment count
        const post = posts.find(p => p.id === postId);
        if (post) {
            post.comments++;
        }
        
        displayPosts();
    } catch (error) {
        console.error('Error creating comment:', error);
    }
}

// Function to like a comment
async function likeComment(commentId) {
    try {
        const response = await fetch(`${API_URL}/comments/${commentId}/like`, {
            method: 'PUT'
        });

        if (!response.ok) throw new Error('Failed to like comment');
        
        displayPosts();
    } catch (error) {
        console.error('Error liking comment:', error);
    }
}

// Function to display all posts with their comments
async function displayPosts() {
    const postsHTML = await Promise.all(posts.map(async post => {
        const postComments = await fetchComments(post.id);
        return `
            <div class="post" data-id="${post.id}">
                <div class="post-header">
                    <h3 class="post-title">${post.title}</h3>
                    <div class="post-meta">
                        Posted by ${post.author} on ${post.date}
                    </div>
                </div>
                <div class="post-content">
                    ${post.content}
                </div>
                <div class="post-actions">
                    <button onclick="likePost(${post.id})">
                        <i class="fas fa-heart"></i>
                        <span>${post.likes}</span>
                    </button>
                    <button onclick="toggleComments(${post.id})">
                        <i class="fas fa-comment"></i>
                        <span>${post.comments}</span>
                    </button>
                </div>
                <div class="comments-section" id="comments-${post.id}" style="display: none;">
                    <div class="comments-list">
                        ${postComments.map(comment => `
                            <div class="comment">
                                <div class="comment-header">
                                    <span class="comment-author">${comment.author}</span>
                                    <span class="comment-date">${new Date(comment.date).toLocaleDateString()}</span>
                                </div>
                                <div class="comment-content">${comment.content}</div>
                                <div class="comment-actions">
                                    <button onclick="likeComment('${comment._id}')">
                                        <i class="fas fa-heart"></i>
                                        <span>${comment.likes}</span>
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <form class="comment-form" onsubmit="handleCommentSubmit(event, ${post.id})">
                        <textarea placeholder="Write a comment..." required></textarea>
                        <button type="submit">Post Comment</button>
                    </form>
                </div>
            </div>
        `;
    }));

    postsContainer.innerHTML = postsHTML.join('');
}

// Function to toggle comments visibility
function toggleComments(postId) {
    const commentsSection = document.getElementById(`comments-${postId}`);
    if (commentsSection) {
        commentsSection.style.display = commentsSection.style.display === 'none' ? 'block' : 'none';
    }
}

// Function to handle comment submission
function handleCommentSubmit(event, postId) {
    event.preventDefault();
    const content = event.target.querySelector('textarea').value;
    if (content) {
        createComment(postId, content);
        event.target.reset();
    }
}

// Function to handle post likes
function likePost(postId) {
    const post = posts.find(p => p.id === postId);
    if (post) {
        post.likes++;
        displayPosts();
    }
}

// Event listener for new post form
newPostForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = e.target.querySelector('input[type="text"]').value;
    const content = e.target.querySelector('textarea').value;
    
    if (title && content) {
        createPost(title, content);
        e.target.reset();
    }
});

// Initialize the forum by displaying existing posts
displayPosts();