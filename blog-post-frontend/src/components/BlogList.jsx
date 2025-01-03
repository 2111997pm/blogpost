import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../services/service';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetchBlogs();
    }, [blogs]);

    const fetchBlogs = async () => {

        try {
            const response = await api.get('/blogs');
            setBlogs(response.data);
        } catch (error) {
            alert('Error fetching blogs');
        }
    };

    const deleteBlog = async (id) => {
        try {
            if (window.confirm('Are you sure you want to delete this blog?')) {
                await api.delete(`/blogs/${id}`);
                fetchBlogs();
            }
        } catch (error) {
            alert('Error deleting blog');
        }
    };

    return (
        <div>
            <h3>Blog Posts</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((blog) => (
                        <tr key={blog._id}>
                            <td>{blog.title}</td>
                            <td>{blog.category}</td>
                            <td>{blog.status}</td>
                            <td>
                                <Link to={`/blogs/edit/${blog._id}`} className="btn btn-warning btn-sm">
                                    Edit
                                </Link>
                                <button
                                    className="btn btn-danger btn-sm ms-2"
                                    onClick={() => deleteBlog(blog._id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BlogList;
