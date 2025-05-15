import { connect } from "react-redux";
import { addCampusThunk } from "../../store/thunks";
import NewCampusView from "../views/NewCampusView";
import Header from "./Header";

const mapDispatch = (dispatch, ownProps) => ({
  addCampus: (campus) => {
    dispatch(addCampusThunk(campus));
    ownProps.history.push("/campuses");
  }
});

const NewCampusContainer = connect(null, mapDispatch)((props) => (
  <div>
    <Header />
    <NewCampusView addCampus={props.addCampus} />
  </div>
));

export default NewCampusContainer;
