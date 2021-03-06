import React, { Component } from 'react';
import {connect } from 'react-redux'
import PropTypes from 'prop-types'
import { user} from '../actions/auth'
import '../styles/UserSettings.css'

class UserSettingsPage extends Component {
    render() {
        const { user } = this.props;
        return(
            <div className="settings">
                <p><b>Почта:</b> {user.email}</p>
                <p><b>Имя:</b> {user.username}</p>
                <button 
                    onClick = {() => this.props.history.push('/changePassword')}
                    className = "settings__password"
                >
                    Сменить пароль
                </button>
            </div>
        );  
    }
}

UserSettingsPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    user: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, null)(UserSettingsPage);