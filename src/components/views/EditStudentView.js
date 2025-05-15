import React from 'react';
import Button from '@material-ui/core/Button';

const EditStudentView = ({ student, handleChange, handleSubmit }) => {
  return (
    <div>
      <h1>Edit Student</h1>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label><br />
        <input type="text" name="firstname" value={student.firstname} onChange={handleChange} required /><br /><br />

        <label>Last Name:</label><br />
        <input type="text" name="lastname" value={student.lastname} onChange={handleChange} required /><br /><br />

        <label>Email:</label><br />
        <input type="email" name="email" value={student.email} onChange={handleChange} required /><br /><br />

        <label>Image URL:</label><br />
        <input type="text" name="imageUrl" value={student.imageUrl} onChange={handleChange} /><br /><br />

        <label>GPA:</label><br />
        <input type="number" step="0.1" min="0.0" max="4.0" name="gpa" value={student.gpa} onChange={handleChange} /><br /><br />

        <label>Campus ID:</label><br />
        <input type="text" name="campusId" value={student.campusId} onChange={handleChange} /><br /><br />

        <Button type="submit" variant="contained" color="primary">Save Changes</Button>
      </form>
    </div>
  );
};

export default EditStudentView;
