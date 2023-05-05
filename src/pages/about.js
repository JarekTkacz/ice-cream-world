import React from "react"
import './about.css';
import owners from "../images/owners1.png";
import Navbar from "../components/Navbar";
import Activities from '../components/Activities'
import Footer from '../components/Footer'


function About() {
  return <div className="about_main">
    <Navbar />
    <div className="about_container">
        <div className="about_image">
        <img src={owners} alt="" />
        </div>
        <div className="about_text">
        <h1 className="about_title">A little bit more about us</h1>
        <p>"The World Of Ice Creams" was founded in 2010 by two friends, Anna and David, who shared a passion for delicious food and travel. During one of their trips to Italy, they discovered gelato and were blown away by its rich flavor and creamy texture. Inspired by this experience, they decided to start their own ice cream company that would feature flavors from around the world.

        Anna and David started small, making ice cream in their home kitchen and selling it at local farmers' markets. Their unique flavors and commitment to quality quickly gained a following, and they soon opened their first brick-and-mortar store in a small town in California.

        Over the years, "The World Of Ice Creams" has continued to grow and expand. Today, the company has multiple locations across the United States, and its ice cream is sold in select grocery stores and specialty shops.

        Anna and David are still involved in the company and continue to be passionate about creating new and exciting flavors. They are committed to using the highest quality ingredients and supporting sustainable farming practices.

        Overall, "The World Of Ice Creams" is a testament to the power of following your passions and creating something truly special.</p>
        </div>
    </div>
    <div className="advice">
    <Activities />
    <Footer />
    </div>

    </div>

  
}

export default About;