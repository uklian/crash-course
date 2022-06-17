import React, { useState } from 'react';
import axios from 'axios';
import Message from '../components/Message';
import Loader from '../components/Loader';

const AddUser = () => {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const [user, setUser] = useState('');

	function onSubmit(e) {
		e.preventDefault();
		setLoading(true);

		const data = {
			name: name,
			phone: phone,
		};

		axios
			.post('/api/user/add/user', data)
			.then((res) => {
				// successfully get data
				setUser(res.data.data);
				setLoading(false)		;
				setError('')
			})
			.catch((err) => {
				setError(err.response.data.error)
			 setLoading(false);
			 setUser('');
			});
	}

	// todo add a loader
	// todo add error message
	// todo success message

	console.log('user', user);

	return (
		<div>
			<h1>New User</h1>

			{loading ? <Loader/>: null}

			{user ? (
				<div className='alert alert-success  fade show' role='alert'>
					Account created successfully!
				</div>
			) : null}

			
{ error ? <Message error={error}/>:null}
			<form onSubmit={onSubmit}>
				<label htmlFor='fname'>Name:</label>
				<input onChange={(e) => setName(e.target.value)} type='text' id='fname' name='name' value={name} required/>
				<br />
				<label htmlFor='Phone'>Phone</label>
				<input onChange={(e) => setPhone(e.target.value)} type='number' id='lname' name='phone' value={phone} required/>
				<br />
				<button className='btn btn-success' type='submit'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default AddUser;