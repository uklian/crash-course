import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import AddUser from './view/AddUser';
import UserDashboard from './view/UserDashbord';
function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/login' element={<Login />} />
					<Route exact path='/profile' element={<Profile />} />
					<Route exact path='/add/user' element={<AddUser />} />
					<Route exact path='/view/user' element={<UserDashboard /> }/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
