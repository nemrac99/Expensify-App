import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Header = () => (
	<header>
		<h1>Expensify</h1>
		<div>
			<NavLink to="/" activeClassName="isActive" exact={true}>Dashboard</NavLink>
			<NavLink to="/create" activeClassName="isActive">Create</NavLink>
			<NavLink to="/help" activeClassName="isActive">Help</NavLink>
		</div>
	</header>
);

export default Header;