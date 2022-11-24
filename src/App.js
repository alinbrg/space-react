import "./App.scss";
import Main from "./Routes/Main";
import Destination from "./Routes/Destination";
import Crew from "./Routes/Crew";
import Technology from "./Routes/Technology";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<main className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/destination" element={<Destination />} />
					<Route path="/crew" element={<Crew />} />
					<Route path="/technology" element={<Technology />} />
				</Routes>
			</BrowserRouter>
		</main>
	);
}

export default App;
