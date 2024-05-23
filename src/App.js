import "./App.css";
import {  Route, Routes } from "react-router-dom";
import PatientLoginPage from "./general/login";
import PatientSignupPage from "./general/signup";
import HomePage from "./general/home";
import AboutPage from "./general/about";
import FeedbackPage from "./general/feedback";

function App() {
  return (
    <div className="bg-gra">
      
      {/* <Navbar/> */}
           <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/login" element={<PatientLoginPage />} />
        <Route path="/signup" element={<PatientSignupPage />} />
      </Routes>

      

      {/* <div className=" container bg-black w-full h-48 text-end">
          <span className="text-white text-end mr-4"> White color</span>
          <span className="text-white text-end mr-4"> black color</span>
          <span className="text-white text-end mr-4"> White color</span>
          <span className="text-white text-end mr-4"> clack color</span>
      </div> */}
    </div>
  );
}

export default App;
