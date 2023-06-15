import {BrowserRouter ,Routes, Route} from "react-router-dom"
import DoctorList from "./components/DoctorListComponent/DoctorList";
import Home from "./components/HomeComponent/Home";
import SignUp from "./components/signupLoginComponent/SignUp";
import SignIn from "./components/signupLoginComponent/SignIn";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
						<Route  path="/doctorList" element={<DoctorList />} ></Route>
						<Route path="/signUp" element={<SignUp />}></Route>
						<Route path="/logIn" element={<SignIn />}></Route>
				</Routes>
			</BrowserRouter>
			<ToastContainer />
			{/* <DoctorList /> */}
		</div>
	);
}

export default App;
