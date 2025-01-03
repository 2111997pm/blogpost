import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../services/service';

const BlogForm = () => {
    
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: 'Technology',
        status: 'Pending',
    });

    const [isEditMode, setIsEditMode] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id, 'unique')

    useEffect(() => {
        if (id) {
            setIsEditMode(true);
            fetchBlog(id);
        }
    }, [id]);

    const fetchBlog = async (blogId) => {
        try {
            const response = await api.get(`/blogs/${blogId}`);
            setFormData(response.data);
        } catch (error) {
            alert('Error fetching blog data');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (isEditMode) {
                await api.put(`blogs/${id}`, formData);
                alert('Blog updated successfully');
            } else {
                await api.post('/blogs', formData);
                alert('Blog created successfully');
            }
            navigate('/blogs');
        } catch (error) {
            alert('Error submitting blog');
        }
    };

    return (
        <div className="card">
            <div className="card-body">
                <h3>{isEditMode ? 'Edit Blog' : 'Create New Blog'}</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            className="form-control"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            className="form-control"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="category">Category</label>
                        <select
                            id="category"
                            name="category"
                            className="form-control"
                            value={formData.category}
                            onChange={handleChange}
                            required
                        >
                            <option value="Technology">Technology</option>
                            <option value="Lifestyle">Lifestyle</option>
                            <option value="Health">Health</option>
                            <option value="Education">Education</option>
                            <option value="Business">Business</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="status">Status</label>
                        <select
                            id="status"
                            name="status"
                            className="form-control"
                            value={formData.status}
                            onChange={handleChange}
                            required
                        >
                            <option value="Pending">Pending</option>
                            <option value="Approved">Approved</option>
                            <option value="Rejected">Rejected</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        {isEditMode ? 'Update Blog' : 'Create Blog'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BlogForm;
