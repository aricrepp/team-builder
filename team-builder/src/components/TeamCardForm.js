import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TeamCardForm = (props) => {
  const [formData, setFormData] = useState({
    id: Date.now(),
    name: '',
    email: '',
    role: '',
    url: 'https://source.unsplash.com/random/300x200',
  });
   
  const clearForm = () => {
    setFormData({ id: Date.now(), name: '', email: '', role: '', url:'https://source.unsplash.com/random/300x200'});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(formData);
    clearForm();
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value});
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        name="email"
        type="text"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <label htmlFor="role">Role:</label>
      <input
        id="role"
        name="role"
        type="text"
        placeholder="Role"
        value={formData.role}
        onChange={handleChange}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default TeamCardForm;
