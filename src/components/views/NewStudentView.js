/*==================================================
NewStudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the new student page.
================================================== */
const NewStudentView = ({ handleChange, handleSubmit }) => {
  
  return (
    <div>
      <h1>Add New Student</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstname" placeholder="First Name" onChange={handleChange} required />
        <br /><br />

        <input type="text" name="lastname" placeholder="Last Name" onChange={handleChange} required />
        <br /><br />

        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <br /><br />

        <input type="text" name="imageUrl" placeholder="Image URL"onChange={handleChange} />
        <br /><br />

        <input type="number" name="gpa" placeholder="GPA (0.0-4.0)"  step="0.1" min="0.0" max="4.0" onChange={handleChange} />
        <br /><br />

        <input type="text" name="campusId" placeholder="Campus ID" onChange={handleChange} />
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewStudentView;