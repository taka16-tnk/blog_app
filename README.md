# Blog App

This is a simple blog web application built using Node.js, Express.js, and EJS.
Users can create, view, edit, and delete blog posts. Data is stored temporarily in memory (not persisted).

project-root/
├── app.js                  // Main Express application logic
├── data.js                 // Temporary post storage (no database)
├── public/
│   └── styles.css          // Styling for the UI
├── views/
│   ├── layout.ejs          // Optional layout template
│   ├── index.ejs           // Home page: post form & post list
│   └── edit.ejs            // Post editing page
├── package.json            // Node.js project settings
└── README.md               // Project overview and usage instructions

## Features
- Create new posts
- View all posts on the homepage
- Edit existing posts
- Delete posts
- Styled with CSS for better UI experience

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/blog-app.git
   cd blog-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node app.js
   ```
4. Open in browser:
   `http://localhost:3000`

## Notes
- Posts are not saved after server restart.
- This project is intended as a beginner-friendly example.