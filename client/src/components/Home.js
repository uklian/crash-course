import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<center>
				<h1> Welcome Guys</h1>
				<button>
					<Link to='/login'>Login</Link>
				</button>
			</center>
		</div>
	);
};

export default Home;
