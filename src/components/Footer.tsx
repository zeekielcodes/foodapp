import React from 'react'
import { Link } from "react-router-dom"
import { ImFacebook } from "react-icons/im"
import { BsTwitter, BsInstagram, BsYoutube, BsPinterest, BsClockHistory } from "react-icons/bs"

function Footer() {
  return (<>
    <footer>
        <div className="newsletter">
            <div className="cta">
              <h4><span className='change'>St</span>ill Need Our Support ?</h4>
                <p>Don’t wait make a smart & logical quote here. Its pretty easy.</p> 
            </div>
            <form>
                <input type="email" autoComplete='off' placeholder='Enter Your Email' name="email" id="email" />
                <button type='submit'>Subscribe</button>
            </form>
        </div>
        <div className="footer">
            <div className="company">
                <h5>About Us</h5>
                <p className='about'>Corporate clients and leisure travelers hasbeen relying on Groundlink for dependablesafe, and professional chauffeured carservice in major cities across World.</p>
                <section className="time">
                    <div className="clock-icon">
                        <BsClockHistory />
                    </div>
                    <div>
                        <h6>Opening Houres</h6>
                        <p>Mon - Sat(8.00 - 6.00)</p>
                        <p>Sunday - Closed</p>
                    </div>
                </section>
            </div>
            <ul>
                <h5>Useful Links</h5>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/">News</Link></li>
                <li><Link to="/">Partners</Link></li>
                <li><Link to="/chefs">Team</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <ul>
                <h5>Help?</h5>
                <li><Link to="/faqs">FAQ</Link></li>
                <li><Link to="/tac">Terms & Condition</Link></li>
                <li><Link to="/">Reporting</Link></li>
                <li><Link to="/docs">Documentation</Link></li>
                <li><Link to="/">Support Policy</Link></li>
                <li><Link to="/">Privacy</Link></li>
            </ul>
            <div className="posts">
                <h5>Recent Post</h5>
            </div>
        </div>
    </footer>
    <div className="acknowledgement">
        <p>Copyright &copy; 2022 | Foodtuck by The Face. All Rights Reserved.</p>
        <div className="socials">
            <a href="http://facebook.com">
                <ImFacebook />
            </a>
            <a href="http://twitter.com">
                <BsTwitter />
            </a>
            <a href="http://instagram.com">
                <BsInstagram />
            </a>
            <a href="http://youtube.com">
                <BsYoutube />
            </a>
            <a href="http://pinterest.com">
                <BsPinterest />
            </a>

        </div>
    </div>
    </>
  )
}

export default Footer