import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import SERVER_URL from '../../constants';

class Signup extends React.Component {

	state = {
		firstname: '',
		lastname: '',
		email: '',
		password: '',
		profileUrl: ''
	}


	handleSubmit = (e) => {
		e.preventDefault();
		console.log('Submitted', this.state);
		console.log('SERVER_URL', SERVER_URL);
		// Send the user signup data to the server
		axios.post(`${SERVER_URL}/auth/signup`, this.state)
		.then(response => {
			console.log('SUCCESS', response);
			// Store token in local storage
			localStorage.setItem('serverToken', response.data.token);
			// Update app with user info
			this.props.updateUser();
		})
		.catch(err => {
			console.log('ERROR posting to server', err);
		})
	}

	storeInput = (e) => {
		this.setState({ [e.target.name]: e.target.value});
	}

	render() {
		if (this.props.user) {
			return <Redirect to="/profile" />
		}
		
		return (
			<div>
				<h2>Signup</h2>
				<form onSubmit={this.handleSubmit}>
					<div>
						<label>First name:</label>
						<input name="firstname" placeholder="Your first name" onChange={this.storeInput} />
					</div>
					<div>
						<label>Last name:</label>
						<input name="lastname" placeholder="Your last name" onChange={this.storeInput} />
					</div>
					<div>
						<label>Email:</label>
						<input name="email" onChange={this.storeInput} />
					</div>
					<div>
						<label>Password:</label>
						<input name="password" type="password" onChange={this.storeInput} />
					</div>
					<div>
						<label>Profile Pic Url:</label>
						<input name="profileUrl" onChange={this.storeInput} />
					</div>
					<button type="submit">Sign me up!</button>
				</form>
			</div>
		)
	}
}

export default Signup;