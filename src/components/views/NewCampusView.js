import { useState } from "react";

const NewCampusView = ({ addCampus }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    description: "",
    imageUrl: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCampus(formData);
  };

  return (
    <div>
      <h1>Add New Campus</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="address" placeholder="Address" onChange={handleChange} required />
        <input name="description" placeholder="Description" onChange={handleChange} />
        <input name="imageUrl" placeholder="Image URL" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewCampusView;