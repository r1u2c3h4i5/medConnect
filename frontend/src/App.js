import {BrowserRouter ,Routes, Route} from "react-router-dom"
import DoctorList from "./components/DoctorListComponent/DoctorList";
import Home from "./components/HomeComponent/Home";
import Signup from "./components/signupLoginComponent/Signup";

function App() {
  return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
						<Route  path="/doctorList" element={<DoctorList />} ></Route>
						<Route path="/signUp" element={<Signup />}></Route>
				</Routes>
			</BrowserRouter>
			{/* <DoctorList /> */}
		</div>
	);
}

export default App;
