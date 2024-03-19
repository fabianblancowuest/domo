import "./App.css";

import Form from "./components/Form/Form";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import { Routes, Route } from "react-router-dom";

function App() {
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
