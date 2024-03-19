import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./../styles.css";
import { useState } from "react";
import Swal from "sweetalert2";

const Form = () => {
	const form = useRef();
	const initialState = {
		name: "",
		email: "",
		subject: "",
		message: "",
	};

	const [state, setstate] = useState(initialState);

	const handleChange = (event) => {
		setstate({
			...state,
			[event.target.name]: event.target.value,
		});
	};

	const sendEmail = (event) => {
		event.preventDefault();
		emailjs
			.sendForm("service_hre43nq", "template_hwve1x2", form.current, {
				publicKey: "Qj-2BHcvaJJZlfg9O",
			})
			.then(
				(result) => {
					console.log(result.text);
					Swal.fire({
						position: "top-end",
						icon: "success",
						title: "Email sent successfully",
						showConfirmButton: false,
						timer: 1500,
					});
				},
				(error) => {
					console.log(error.text);
				},
			);
	};

	const handleSubmit = (event) => {
		// event.preventDefault();
		sendEmail(event);
		setstate(initialState);
	};
	return (
		<div className="form-container" id="contact">
			<form className="form" ref={form} onSubmit={handleSubmit}>
				<h2>Contact</h2>
				<input
					type="text"
					name="name"
					placeholder="Enter your name..."
					value={state.name}
					onChange={handleChange}
				></input>
				<input
					type="text"
					name="email"
					placeholder="Enter your email..."
					value={state.email}
					onChange={handleChange}
				></input>
				<input
					type="text"
					name="subject"
					placeholder="Enter subject..."
					value={state.subject}
					onChange={handleChange}
				></input>
				<textarea
					id=""
					cols="30"
					rows="10"
					type="text"
					value={state.message}
					name="message"
					placeholder="Leave me your message..."
					onChange={handleChange}
				></textarea>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default Form;
