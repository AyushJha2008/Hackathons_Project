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

// Function to display all posts
function displayPosts() {
    postsContainer.innerHTML = posts.map(post => `
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
                <button onclick="showComments(${post.id})">
                    <i class="fas fa-comment"></i>
                    <span>${post.comments}</span>
                </button>
            </div>
        </div>
    `).join('');
}

// Function to handle post likes
function likePost(postId) {
    const post = posts.find(p => p.id === postId);
    if (post) {
        post.likes++;
        displayPosts();
    }
}

// Function to show comments (placeholder)
function showComments(postId) {
    alert('Comments feature coming soon!');
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