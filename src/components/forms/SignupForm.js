import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Signup extends Component {
    state = {
        data: {
            email: "",
            password: "",
        },
        errors: {},
    };
    onSubmit = (event) => {
        // TODO Обработка ошибок
        event.preventDefault();
        this.props.submit(this.state.data);
    }

    onChange = (e) => {
            this.setState({ 
                ...this.state,
                data: {...this.state.data, [e.target.name]: e.target.value} 
            });
    }
    render() {
        const { data, errors } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <label htmlFor="email">
                    Email:
                </label>
                <input 
                    onChange={this.onChange}
                    placeholder="example@example.com" 
                    type="email" name="email" 
                    value={data.login}
                /><br/>
                <label htmlFor="password">
                    Password:
                </label>
                <input 
                    onChange={this.onChange} 
                    placeholder="" 
                    type="password" 
                    name="password" 
                    value={data.password}
                /><br/>
                <button>Войти</button>
            </form>        
        );
    }
};

Signup.propTypes = {
    submit: PropTypes.func.isRequired
}