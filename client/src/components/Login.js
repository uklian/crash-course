import React from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
	return (
		<div>
			<form>
				<label for='username'>Username:</label>
				<br />
				<input type='text' id='username' name='username' />
				<br />
				<label for='pwd'>Password:</label>
				<br />
				<input type='password' id='pwd' name='pwd' />
			</form>
			<button>
				<Link to='/profile'>Submit</Link>
			</button>
		</div>
	);
};

export default Login;
