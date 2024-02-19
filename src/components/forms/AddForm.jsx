    // AddForm.jsx
    import React, { useState } from 'react';
    import './AddForm.css'; // CSS file for styling

    const AddForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        descriptionn: '',
        marital: false,
        gender: '',
        country: ''
    });
    // function used to update the any changes in  any of the form fields
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
        ...prevState,
        [name]: type === 'checkbox' ? checked : value
        }));
    };
    // function used to to save the form data
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (<>
        <h3 className='heading'> Add Student</h3>
        <form onSubmit={handleSubmit} className="addForm">
        <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
            Description:
            <textarea name="descriptionn" value={formData.descriptionn} onChange={handleChange}></textarea>
        </label>
        <label>
            <input type="checkbox" name="marital" checked={formData.marital} onChange={handleChange} />
            CheckBox
        </label>
        <label>
        <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} />
            Female
        </label>
        <label>
            <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} />
            Male
        </label>
        <label>
            Country:
            <select name="country" value={formData.country} onChange={handleChange}>
            <option value="">Please select</option>
            <option value="india">India</option>
            <option value="canada">Canada</option>
            <option value="dubai">Dubai</option>
            </select>
        </label>
        <button type="submit">Submit</button>
        </form>
        </>
    );
    };

    export default AddForm;
