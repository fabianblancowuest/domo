import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Form from "./components/Form/Form";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import { Routes, Route } from "react-router-dom";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Nav></Nav>
			<Routes>
				<Route path="/home" element={<Home></Home>}></Route>
				<Route path="/contact" element={<Form></Form>}></Route>
			</Routes>
		</>
	);
}

export default App;
