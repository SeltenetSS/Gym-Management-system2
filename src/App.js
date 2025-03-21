
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './components/Navbar.css'
import './components/Banner.css'
import './components/GymClass.css'
import './components/About.css'
import './components/ChoseUs.css'
import './components/Team.css'
import './components/Subscribe.css'
import './components/MonthlyPlan.css'
import './components/BMI.css'
import './components/Testimonial.css'
import './components/Footer.css'
import './components/PageHeader.css'
import './components/Features.css'
import './components/Services.css'
import './components/Contact.css'

import './responsive.css'

import Navbar from './components/Navbar';
import HomeNav from "./routes/HomeNav";
import AboutNav from "./routes/AboutNav";
import FeaturesNav from "./routes/FeaturesNav";
import ContactNav from "./routes/ContactNav";
import LoginNav from "./routes/LoginNav";
import Footer from './components/Footer';

function App() {
  return (
    <Router basename="/Gym-Website"> 
      <Navbar />

      <Switch>
        <Route exact path="/" component={HomeNav}></Route>
        <Route exact path="/about" component={AboutNav}></Route>
        <Route exact path="/features" component={FeaturesNav}></Route>
        <Route exact path="/contact" component={ContactNav}></Route>
        <Route exact path="/login" component={LoginNav}></Route> {/* Düzgün URL */}
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;

