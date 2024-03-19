import "./../styles.css";
import icons from "../../assets/logos/icons.png";
import brands from "../../assets/aside/clients.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import Card from "../Card/Card";
import cellphone from "../../assets/main-images/domo-card-removebg-preview.png";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineFacebook } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io5";
import { GrLinkedin } from "react-icons/gr";
import { FaGithubSquare } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Home = () => {
	const sitemap = ["Home", "Technology", "Services", "About"];
	const caseStudies = ["Swiss Airlines", "Google", "Apple", "Nike"];
	const contact = [
		{
			title: "Jobs",
			site: "",
			targetAt: "",
		},
		{
			title: "Hire us",
			site: "/contact",
			targetAt: "",
		},
		{
			title: "LinkedIn",
			site: "https://www.linkedin.com/in/fabianblancowuest/",
			targetAt: "_blank",
		},
		{
			title: "GitHub",
			site: "https://github.com/fabianblancowuest",
			targetAt: "_blank",
		},
	];
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
				<div id="services">
					<Card></Card>
				</div>
				<div className="main">
					<div className="text" id="technology">
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
				<div className="brands" id="cases-studies">
					<img src={brands}></img>
				</div>
				<div className="main-cards">
					<div className="main-card">
						<div className="main-card-text">
							<h2>Get in touch with us</h2>
							<p>
								Maecenas sed diam eget risus varius blandit sit amet non magna.
							</p>
							<button>Hire us</button>
						</div>
					</div>
					<div className="main-card">
						<div className="main-card-text">
							<h2>Our Projects</h2>
							<p>
								Maecenas sed diam eget risus varius blandit sit amet non magna.
							</p>
							<button>See Projects</button>
						</div>
						<div className="main-card-img">
							<img src={cellphone} alt="cellphone" />
						</div>
					</div>
				</div>
			</main>
			<footer id="about">
				<div className="main-cards">
					<div className="main-card footer-cards">
						<h6>compleet labs</h6>
						<p className="main-card-text">
							Please contact me on one of my social networks below or fill in
							the contact form.
						</p>
						<div className="footer-icons">
							<span>
								<CiTwitter />
							</span>
							<span>
								<AiOutlineFacebook />
							</span>
							<span>
								<IoLogoInstagram />
							</span>
							<span>
								<NavLink
									className="contact-icon"
									to={"https://www.linkedin.com/in/fabianblancowuest/"}
									target="_blank"
								>
									<GrLinkedin id="linkedin" />
								</NavLink>
							</span>
							<span>
								<NavLink
									className="contact-icon"
									to={"https://github.com/fabianblancowuest"}
									target="_blank"
								>
									<FaGithubSquare id="github" />
								</NavLink>
							</span>
						</div>
					</div>
					<div className="main-card maps footer-cards">
						<div className="map">
							<h6>SITEMAP</h6>
							{sitemap.map((item, index) => (
								<span key={index}>{item}</span>
							))}
						</div>
						<div className="map">
							<h6>CASE STUDIES</h6>
							{caseStudies.map((item, index) => (
								<span key={index}>{item}</span>
							))}
						</div>
						<div className="map">
							<h6>CONTACT</h6>
							{contact.map((item, index) => (
								<NavLink
									className={"contact"}
									key={index}
									to={item.site}
									target={item.targetAt}
								>
									{item.title}
								</NavLink>
							))}
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Home;
