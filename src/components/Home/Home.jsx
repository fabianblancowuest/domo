import React from "react";
import "../styles.css";

import icons from "../../assets/logos/icons.png";
import brands from "../../assets/aside/clients.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import Card from "../Card/Card";
import cellphone from "../../assets/main-images/cellphone.jpg";

const Home = () => {
	return (
		<div className="home-container">
			<header>
				<div className="header">
					<h1 className="header-title">
						We build beautiful and reliable web solutions
					</h1>
					<p>
						We strongly believe that communication, trust and transparency are
						the essential elements of succesful business relationship.
					</p>
					<p>Ready for the journey?</p>
					<div className="header-buttons">
						<button className="btn-1">Learn more</button>
						<button className="btn-2">
							Our Projects <IoIosArrowRoundForward className="arrow-icon" />
						</button>
					</div>
				</div>
			</header>
			<main>
				<Card></Card>
				<div className="main">
					<div className="text">
						<h2>We use cutting edge technology</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
							aspernatur quaerat, eaque tempore maiores tenetur at nobis
							eveniet? Ratione veniam repudiandae facilis. Blanditiis, iusto
							temporibus odio exercitationem ratione error at. Lorem ipsum dolor
							sit amet consectetur adipisicing elit. Dolorem, sit doloremque.
						</p>
					</div>
					<div className="icons">
						<img src={icons} alt="icons" />
					</div>
				</div>
				<div className="brands">
					<img src={brands}></img>
				</div>
				<div className="main-cards">
					<div className="main-card">
						<h2>Get in touch with us</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Perferendis, repudiandae quas!
						</p>
						<button>Hire us</button>
					</div>
					<div className="main-card">
						<h2>Our Projects</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Perferendis, repudiandae quas!
						</p>
						<img src={cellphone} alt="cellphone" />
						<button>See Projects</button>
					</div>
				</div>
			</main>
			<footer>
				<div className="main-cards">
					<div className="main-card footer-cards">
						<h6>compleet labs</h6>
						<p className="main-card-text">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Repellendus odio, rerum excepturi quisquam minus quam. Tempore
							quidem soluta perspiciatis maiores.
						</p>
					</div>
					<div className="main-card maps footer-cards">
						<div className="map">
							<h6>SITEMAP</h6>
							<span>Home</span>
							<span>Technology</span>
							<span>Services</span>
							<span>About</span>
						</div>
						<div className="map">
							<h6>CASE STUDIES</h6>
							<span>Swiss Airlines</span>
							<span>Google</span>
							<span>Apple</span>
							<span>Nike</span>
						</div>
						<div className="map">
							<h6>CONTACT</h6>
							<span>Jobs</span>
							<span>Hire us</span>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Home;
