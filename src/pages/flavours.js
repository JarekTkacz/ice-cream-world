import React from "react"
import '../pages/flavours.css';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'
import Icecreams from '../icecreams.json';




function Flavours() {
  return <div>
    <Navbar />
    <div className="top_flv">
        <div className="flv_container">
            <p className="des">Take a scoop, taste the world!</p>
            <br />
        </div>
        <div className="flv_container">
        <div className="gallery" >
          {
            Icecreams && Icecreams.map( types => {
              return(
                <div className="box" key={ types.id }>
                  <img width="350px" height="300px" alt="" src={ types.link} />
                  <br />

                  <p className="des">{ types.flavour }</p>
                  <br /><br />
                  { types.description}

                </div>
              )
            })
          }
        </div>
    </div>
    </div>
    <Footer />
    </div>
  
}

export default Flavours;