import React from "react"
import './home.css';
import Navbar from "../components/Navbar";
import UsersTesti from '../components/UsersTesti';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Home() {
  return <div>
    <Navbar />
    <section className="home">
    <div className="home_container">
        <span className="home_title">Welkome To The World Of Ice Creams!</span>
        <h1 className="title">Travel the world one scoop at a time!</h1>
        <p className="main_text">"The World Of Ice Creams" is an imaginary ice cream company that was founded in 2010 with the goal of providing customers with a unique and delicious ice cream experience. The company prides itself on using high-quality ingredients sourced from around the world to create a wide variety of flavors that are both classic and innovative.
</p>
        <div className="home_button">
            <a href='#menu' className='btn'>Check Menu</a>
            <Link to='/contact' className='btn'>Book a Van</Link>

        </div>
        
    </div>
    <h1 className="title">What our users says!</h1>
    <UsersTesti />
    <Footer />
    </section>
    </div>
    
  
  
}

export default Home;