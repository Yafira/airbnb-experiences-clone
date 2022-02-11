import React from 'react';
import logo from '../../images/airbnb-logo.png';
import './navbar.css';

export default function Navbar() {
	return (
		<nav>
			<img src={logo} alt='logo' className='nav--logo' />
		</nav>
	);
}
