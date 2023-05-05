import React from "react"
import '../components/Footer.css';
import { Link } from 'react-router-dom';






function Footer() {
  return (
        <div className='main_container'>
            <div className='container'>
                <div className='box_size'>
                    <ul className="foot_li">
                    <p className="footer_title">- Site Map -</p><br/>
                        <li><Link to='/' className='foot_social'>Home</Link></li>
                        <li><Link to='/flavours' className='foot_social'>Flavours</Link></li>
                        <li><Link to='/locations' className='foot_social'>Locations</Link></li>
                        <li><Link to='/about' className='foot_social'>About</Link></li>
                    </ul>                    
                </div>
                <div className='box_size'>
                    <ul className="foot_li">
                        <p className="footer_title">- Social -</p><br/>
                        <li><a className="foot_social" href="https://Facebook.com">Facebook</a></li>
                        <li><a className="foot_social" href="https://Twitter.com">Twitter</a></li>
                        <li><a className="foot_social" href="https://Instagram.com">Instagram</a></li>
                        <li><a className="foot_social" href="https://Linkedin.com">LinkedIn</a></li>
                    </ul>                    
                </div>
                <div className='box_size'>
                    <ul className="foot_li">
                        <p className="footer_title">- Other -</p><br/>
                        <li><Link to='/privacy' className='foot_social'>Privacy</Link></li>
                        <li><Link to='/terms' className='foot_social'>Terms & <br />Conditions</Link></li>
                        <li><Link to='/contact' className='foot_social'>Contact Us</Link></li>
                        
                    </ul>                    
                </div>
            </div> 

        </div>
   
  )
}

export default Footer;