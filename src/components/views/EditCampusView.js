import React from 'react';
import Button from '@material-ui/core/Button';

const EditCampusView = ({ campus, handleChange, handleSubmit }) => {
  return (
    <div>
      <h1>Edit Campus</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label><br />
        <input type="text" name="name" value={campus.name} onChange={handleChange} required /><br /><br />

        <label>Address:</label><br />
        <input type="text" name="address" value={campus.address} onChange={handleChange} required /><br /><br />

        <label>Description:</label><br />
        <textarea name="description" value={campus.description} onChange={handleChange} /><br /><br />

        <label>Image URL:</label><br />
        <input type="text" name="imageUrl" value={campus.imageUrl} onChange={handleChange} /><br /><br />

        <Button type="submit" variant="contained" color="primary">Save Changes</Button>
      </form>
    </div>
  );
};

export default EditCampusView;
