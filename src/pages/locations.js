import React from "react"
import '../App.css';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import NewYork from '../images/NewYork.png'
import London from '../images/London.png'
import Dublin from '../images/Dublin.png'
import './locations.css';


function Locations() {

  return <div>
    <Navbar />
    <div className="loc_container">Here are short descriptions of "World of Ice Cream" offices in Dublin, London, and New York!
        <div className="box_main">
            <div className="box_inside"></div>
            <div className="box_inside"><iframe title="map1" width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=new%20york+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>

            <div className="box_inside">New York - "Indulge in the sweet world of ice cream at our New York office. Our space is a hub of creativity and experimentation, where our team of ice cream experts are constantly coming up with new and exciting flavors to delight your senses. Come visit us and experience the thrill of the ice cream revolution.</div>
            <div className="box_inside"> <img alt="" src={NewYork} width="90%" height="auto" />  </div>
            <div className="box_inside"></div>
        </div>
        <div className="box_main">
            <div className="box_inside"></div>
            <div className="box_inside"> <img alt="" src={London} width="90%" height="auto" />  </div>

            <div className="box_inside">London - "Experience the magic of ice cream at our London office. Our team of passionate ice cream enthusiasts works tirelessly to create unique and delicious flavors that are sure to please your taste buds. With a commitment to quality and innovation, we are constantly pushing the boundaries of what is possible in the world of ice cream."</div>
            <div className="box_inside"><iframe title="map2" width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=london+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure acres/hectares on map</a></iframe></div>
            <div className="box_inside"></div>
        </div>
        <div className="box_main">
            <div className="box_inside"></div>
            <div className="box_inside"><iframe title="map3" width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=dublin+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure acres/hectares on map</a></iframe></div>

            <div className="box_inside">Dublin - "Step into a world of sweet delights at our Dublin office. Our space is designed to inspire creativity and innovation in the world of ice cream. With a team of expert ice cream makers, we are dedicated to bringing you the best flavors and experiences possible."</div>
            <div className="box_inside"> <img alt="" src={Dublin} width="90%" height="auto" />  </div>
            <div className="box_inside"></div>
        </div>

    </div>
    <Footer/>
    </div>
  
}

export default Locations;