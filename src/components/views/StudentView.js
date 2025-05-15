/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import { Link } from "react-router-dom";

const StudentView = ({student}) => {
  console.log("STUDENT PROPS:", student);
  const { firstname, lastname, gpa, email, imageUrl, campus } = student;

  // Rendering a single Student view 
  return (
    <div>
      <h1>{firstname + " " + lastname}</h1>
      <p><strong>Email:</strong> {email || "N/A"}</p>
      <p><strong>GPA:</strong> {gpa !== null && gpa !== undefined ? gpa : "N/A"}</p>
      <img src={imageUrl || "https://media.licdn.com/dms/image/v2/D4E03AQF4AUHA8VkPgw/profile-displayphoto-shrink_800_800/B4EZXZZEutHcAk-/0/1743108985439?e=1752710400&v=beta&t=g4hkyF2PeySYNh-1Q21al8VD4aI2wcz4SUIOvNgYUjw"} width="150" alt={firstname} />

      {campus ? (
        <p>
          <strong>Campus:</strong>{" "}
          <Link to={`/campus/${campus.id}`}>{campus.name}</Link>
        </p>
      ) : (
        <p>This student is not enrolled in any campus.</p>
      )}

      <Link to={`/editstudent/${student.id}`}>
        <button>Edit Student</button>
      </Link>
    </div>
  );
};

export default StudentView;