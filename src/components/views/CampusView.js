/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";

// Take in props data to construct the component
const CampusView = (props) => {
  const {campus} = props;
  
  // Render a single Campus view with list of its students
  return (
    <div>
      <h1>{campus.name}</h1>
      <img src={campus.imageUrl || "https://media.licdn.com/dms/image/v2/D4E03AQF4AUHA8VkPgw/profile-displayphoto-shrink_800_800/B4EZXZZEutHcAk-/0/1743108985439?e=1752710400&v=beta&t=g4hkyF2PeySYNh-1Q21al8VD4aI2wcz4SUIOvNgYUjw"} width="200" alt={campus.name} />
      <p>{campus.address}</p>
      <p>{campus.description}</p>

      <Link to={`/editcampus/${campus.id}`}>
        <button>Edit Campus</button>
      </Link>

      <h3>Enrolled Students</h3>
      {campus.students && campus.students.length ? (
        campus.students.map((student) => {
          let name = student.firstname + " " + student.lastname;
          return (
            <div key={student.id}>
              <Link to={`/student/${student.id}`}>
                <h4>{name}</h4>
              </Link>
              <button onClick={() => props.deleteStudent(student.id)}>Remove</button>
            </div>
          );
        })
      ) : (
        <p>No students are currently enrolled at this campus.</p>
      )}
    </div>
  );
};

export default CampusView;