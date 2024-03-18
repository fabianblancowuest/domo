import React from "react";
import "../styles.css";
import html from "../../assets/logos/html-5.png";
import css from "../../assets/logos/css.png";
import sass from "../../assets/logos/sass.png";
import js from "../../assets/logos/js.png";
import angular from "../../assets/logos/angular.png";
import python from "../../assets/logos/python.jpg";
import icons from "../../assets/logos/icons.png";
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
						odio exercitationem ratione error at.
					</p>
				</div>
				<div className="icons">
					{/* <img src={html} alt="html" />
					<img src={css} alt="css" />
					<img src={sass} alt="sass" />
					<img src={js} alt="javascript" />
					<img src={angular} alt="angular" />
					<img src={python} alt="python" /> */}
					<img src={icons} alt="icons" />
				</div>
			</div>
		</div>
	);
};

export default Home;
