import "../styles.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { HiRectangleGroup } from "react-icons/hi2";
const Nav = () => {
	return (
		<div className="nav-container">
			<ul>
				<li>
					<span>compleet labs</span>
				</li>
				<li>
					<NavLink>Home</NavLink>
				</li>

				<li>
					<NavLink>Services</NavLink>
				</li>

				<li>
					<NavLink>Technology</NavLink>
				</li>

				<li>
					<NavLink>Case studies</NavLink>
				</li>

				<li>
					<NavLink>About</NavLink>
				</li>

				<li>
					<NavLink>
						<HiRectangleGroup />
						<span> Hire us</span>
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Nav;
