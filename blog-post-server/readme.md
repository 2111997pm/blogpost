# Blog API

This project provides a simple API for managing blogs, including creating, reading, updating, and deleting blogs. The API is built using Express.js and provides JWT authentication for secure access.

## Features

- **Authentication**: JWT-based authentication for protected routes.
- **CRUD Operations**: Create, Read, Update, and Delete blog posts.
- **Token-based Authentication**: Secure routes using a token stored in cookies.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- Any additional dependencies required for the project (listed below).
- For connect database with mongodb

1. Sign Up for MongoDB Atlas
   Go to MongoDB Atlas and create an account.
2. Create a Cluster
   After logging in, click on Build a Cluster.
   Select your preferred cloud provider (AWS, GCP, or Azure) and region.
   Click Create Cluster (this may take a few minutes).
3. Configure Network Access
   Go to Security > Network Access.
   Click Add IP Address and allow access from anywhere (or provide a specific IP range).
   Click Confirm.
4. Create a Database User
   Go to Security > Database Access.
   Click Add New Database User, create a username and password, and assign permissions like Read and write to any database.
   Click Add User.

5. Replace the Url in app.js page add string new string URl.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/blog-api.git
   npm i - for node module
   npm run dev - for start the project.


   ```
