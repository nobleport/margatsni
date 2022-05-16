import { connect } from "react-redux";
import { login } from  "../../actions/session_actions";
import Login from "./login";

// const mSTP = state => ({
//     users: state.entities.users
// })

const mDTP = (dispatch)=> ({
    login: (formUser) => dispatch(login(formUser))
});

export default connect(null, mDTP)(Login);