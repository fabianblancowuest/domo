import React from "react";
import "../styles.css";

import icons from "../../assets/logos/icons.png";
import brands from "../../assets/aside/clients.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import Card from "../Card/Card";

const Home = () => {
	return (
		<div className="home-container">
			<div className="home-presentation">
				<h1 className="home-title">
					We build beautiful and reliable web solutions
				</h1>
				<p>
					We strongly believe that communication, trust and transparency are the
					essential elements of succesful business relationship. Ready for the
					journey?
				</p>
				<div className="home-buttons">
					<button className="btn-1">Learn more</button>
					<button className="btn-2">
						Our Projects <IoIosArrowRoundForward />
					</button>
				</div>
			</div>
			<Card></Card>
			<div className="main">
				<div className="text">
					<h2>We use cutting edge technology</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
						aspernatur quaerat, eaque tempore maiores tenetur at nobis eveniet?
						Ratione veniam repudiandae facilis. Blanditiis, iusto temporibus
						odio exercitationem ratione error at. Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Dolorem, sit doloremque.
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
					<button>See Projects</button>
				</div>
			</div>
			<footer>
				<div className="main-cards"></div>
				<div className="footer-text">
					<h6>compleet labs</h6>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
						dignissimos cum explicabo corrupti numquam totam iure eveniet
						suscipit? Laborum, consequuntur!
					</p>
				</div>
				<div className="maps">
					<div className="sitemap">
						<h6>SITEMAP</h6>
						<div>
							<a>Home</a>
							<a>Technology</a>
							<a>Services</a>
							<a>About</a>
						</div>
					</div>
					<div className="sitemap">
						<h6>CASE STUDIES</h6>
						<div>
							<a>Swiss Airlines</a>
							<a>Google</a>
							<a>Apple</a>
							<a>Nike</a>
						</div>
					</div>
					<div className="sitemap">
						<h6>SITEMAP</h6>
						<div>
							<a>Jobs</a>
							<a>Hire us</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Home;
