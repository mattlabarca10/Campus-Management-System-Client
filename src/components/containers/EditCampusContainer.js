import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampusThunk, editCampusThunk } from '../../store/thunks';
import { Redirect } from 'react-router-dom';
import Header from './Header';
import EditCampusView from '../views/EditCampusView';

class EditCampusContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      description: '',
      imageUrl: '',
      redirect: false,
      redirectId: null,
      loaded: false
    };
  }

  async componentDidMount() {
    const campusId = this.props.match.params.id;
    await this.props.fetchCampus(campusId);
    const { name, address, description, imageUrl } = this.props.campus;
    this.setState({
      name,
      address,
      description,
      imageUrl: imageUrl || '',
      loaded: true
    });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const updatedCampus = {
      id: this.props.campus.id,
      name: this.state.name,
      address: this.state.address,
      description: this.state.description,
      imageUrl: this.state.imageUrl,
    };
    await this.props.editCampus(updatedCampus);
    this.setState({ redirect: true, redirectId: updatedCampus.id });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/campus/${this.state.redirectId}`} />;
    }

    return (
      <div>
        <Header />
        {this.state.loaded ? (
          <EditCampusView
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            campus={this.state}
          />
        ) : (
          <p>Loading campus...</p>
        )}
      </div>
    );
  }
}

const mapState = (state) => ({
  campus: state.campus,
});

const mapDispatch = (dispatch) => ({
  fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
  editCampus: (campus) => dispatch(editCampusThunk(campus)),
});

export default connect(mapState, mapDispatch)(EditCampusContainer);
