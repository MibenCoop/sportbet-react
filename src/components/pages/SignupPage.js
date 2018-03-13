import React, {Component} from 'react'
import SignupForm from '../forms/SignupForm'
import { connect } from 'react-redux'
import { signup } from '../../actions/signup'
import PropTypes from 'prop-types';
import api from '../../api'


class SignupPage extends Component {
    submit = data => {
        this.props.signup(data).then(res => { 
            this.props.history.push("/");
        });
    }
    render() {
        return (
            <div> 
                Signup
                <SignupForm submit={this.submit}/>
            </div>
        );
    };
}
 
SignupPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    signup: PropTypes.func.isRequired
}

export default connect(null, {signup})(SignupPage);