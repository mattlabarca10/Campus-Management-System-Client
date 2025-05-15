import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStudentThunk, editStudentThunk } from '../../store/thunks';
import { Redirect } from 'react-router-dom';
import Header from './Header';
import EditStudentView from '../views/EditStudentView';

class EditStudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      imageUrl: '',
      gpa: '',
      campusId: '',
      redirect: false,
      redirectId: null,
      loaded: false
    };
  }

  async componentDidMount() {
    const studentId = this.props.match.params.id;
    await this.props.fetchStudent(studentId);
    const { firstname, lastname, email, imageUrl, gpa, campusId } = this.props.student;

    this.setState({
      firstname,
      lastname,
      email,
      imageUrl: imageUrl || '',
      gpa: gpa || '',
      campusId: campusId || '',
      loaded: true
    });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const updatedStudent = {
      id: this.props.student.id,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      imageUrl: this.state.imageUrl,
      gpa: parseFloat(this.state.gpa),
      campusId: this.state.campusId
    };

    if (updatedStudent.gpa < 0.0 || updatedStudent.gpa > 4.0) {
      alert("GPA must be between 0.0 and 4.0");
      return;
    }

    await this.props.editStudent(updatedStudent);
    this.setState({ redirect: true, redirectId: updatedStudent.id });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/student/${this.state.redirectId}`} />;
    }

    return (
      <div>
        <Header />
        {this.state.loaded ? (
          <EditStudentView
            student={this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        ) : (
          <p>Loading student...</p>
        )}
      </div>
    );
  }
}

const mapState = (state) => ({
  student: state.student,
});

const mapDispatch = (dispatch) => ({
  fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
  editStudent: (student) => dispatch(editStudentThunk(student)),
});

export default connect(mapState, mapDispatch)(EditStudentContainer);
