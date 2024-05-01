import "../styles.css";
import documents from "../../assets/cards-images/documents.png";
import web from "../../assets/cards-images/programming.png";
import ux from "../../assets/cards-images/ux-design.png";

const Card = () => {
	const services = [
		{
			title: "Business & Product Concept",
			text: "Analyse business and product concepts at Star-up Workshops or Ongoing Projects's Audits and prepares a viable and sensible product roadmap for achieving a perfect market fit.",
			icon: documents,
		},
		{
			title: "Web & Mobile Development",
			text: "Plan, develop and test high-quality-web-application using AngunlarJS, NodeJS, JavaScript, Typescript, HTML5 and SASS/CSS3 frameworks and native mobile languages.",
			icon: web,
		},
		{
			title: "UX & UI Design",
			text: "Sketch information architecture and simple mock-ups, convert the into clickable prototypes and finish with usable interface designs to deliver a good and reliable user experience.",
			icon: ux,
		},
	];
	return (
		<div>
			<div className="card-header">
				<h2>Our Services</h2>
				<p>
					We feel very strong about our skills when it comes to planning,
					designing and coding applications. Here is what we love to do!
				</p>
			</div>
			<div className="card-container">
				{services.map((service, index) => (
					<div key={index} className="card">
						<img src={service.icon} />
						<h3>{service.title}</h3>
						<p>{service.text}</p>
						<button className="card-btn">Learn more</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Card;
