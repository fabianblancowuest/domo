import "../styles.css";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HiRectangleGroup } from "react-icons/hi2";
const Nav = () => {
	const navigate = useNavigate();
	const handleGoToPrincipalMain = () => {
		navigate("/");
		setTimeout(() => {
			const services = document.getElementById("services");
			const technology = document.getElementById("technology");
			const casesStudies = document.getElementById("cases-studies");
			const about = document.getElementById("about");
			const contact = document.getElementById("contact");
			if (services) {
				services.scrollIntoView({ behavior: "smooth" });
			}
			if (technology) {
				technology.scrollIntoView({ behavior: "smooth" });
			}
			if (casesStudies) {
				casesStudies.scrollIntoView({ behavior: "smooth" });
			}
			if (about) {
				about.scrollIntoView({ behavior: "smooth" });
			}
			if (contact) {
				contact.scrollIntoView({ behavior: "smooth" });
			}
		}, 100);
	};
	return (
		<div className="nav-container">
			<ul>
				<li>
					<span>compleet labs</span>
				</li>
				<li>
					<NavLink
						to={"/"}
						className={({ isActive }) => {
							isActive ? "active" : "navLink";
						}}
					>
						Home
					</NavLink>
				</li>

				<li>
					<NavLink to={"/#services"} onClick={handleGoToPrincipalMain}>
						Services
					</NavLink>
				</li>

				<li>
					<NavLink to={"/#technology"} onClick={handleGoToPrincipalMain}>
						Technology
					</NavLink>
				</li>

				<li>
					<NavLink to={"/#cases-studies"} onClick={handleGoToPrincipalMain}>
						Case studies
					</NavLink>
				</li>

				<li>
					<NavLink
						to={"/#about"}
						onClick={handleGoToPrincipalMain}
						className={({ isActive }) => {
							isActive ? "active" : "navLink";
						}}
					>
						About
					</NavLink>
				</li>

				<li>
					<NavLink
						to={"/contact"}
						className={({ isActive }) => {
							isActive ? "active" : "navLink";
						}}
					>
						<HiRectangleGroup />
						Hire us
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Nav;
