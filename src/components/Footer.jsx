import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import FooterBrands from './FooterBrands';
import NewsLetters from './NewsLetters';

export default function Footer() {
    const newyear =new Date().getFullYear();
    const [year,setYear] = useState(newyear);

    setInterval(function(){
        const currentYear = new Date().getFullYear();
        setYear(currentYear);
    },5000);

  return (
    <>
    <NewsLetters/>

    <FooterBrands/>

    <section className='footer'>
        <section className='footer_container'>
            <section className='footer_logo_contain'>
                <div className='footer_logo'></div>
                <span className='footer_logo_Description'>The Number 1 Distributor of Fast Moving Consumer goods.</span>
            </section>

            <section className='footer_note_contain'>
                <div className='foot_note'>
                    <span className='foot_note_title'>quick link</span>
                    <div className='foot_note_info'>
                        <span><Link to="/" className='foot_note_info_c foot_note_info_nav'>home</Link></span>
                        <span><Link to="/about" className='foot_note_info_c foot_note_info_nav'>about us</Link></span>
                        <span><Link to="/brands" className='foot_note_info_c foot_note_info_nav'>brands</Link></span>
                        <span><Link to="/orders" className='foot_note_info_c foot_note_info_nav'>order now</Link></span>
                        <span><Link to="/categories" className='foot_note_info_c foot_note_info_nav'>categories</Link></span>
                        <span><Link to="/contact" className='foot_note_info_c foot_note_info_nav'>contact us</Link></span>
                        <span><Link to="/accounts" className='foot_note_info_c foot_note_info_nav'>accounts</Link></span>
                    </div>
                </div>

                <div className='foot_note'>
                    <span className='foot_note_title'>Our Products</span>
                    <div className='foot_note_info'>
                        <span><a href="#" className='foot_note_info_c'>serviettes</a></span>
                        <span><a href="#" className='foot_note_info_c'>facial tissues</a></span>
                        <span><a href="#" className='foot_note_info_c'>thermal rolls</a></span>
                        <span><a href="#" className='foot_note_info_c'>toilet paper</a></span>
                        <span><a href="#" className='foot_note_info_c'>kitchen towels</a></span>
                        <span><a href="#" className='foot_note_info_c'>medical spread towel</a></span>
                        <span><a href="#" className='foot_note_info_c'>see all ...</a></span>
                    </div>
                </div>

                <div className='foot_note'>
                    <span className='foot_note_title'>contact us</span>
                    <div className='foot_note_info'>
                        <span><i className="fa fa-location-dot" style={{color:"white",fontSize: "15px"}}></i> <a href="https://google.map">Namanve Plot 1769 Jinja</a></span>
                        <span><i className="fa fa-phone" style={{color:"white",fontSize: "15px"}}></i> <a href="tel:+256776291115">+256 776  291115</a></span>
                        <span><i className="fa fa-envelope" style={{color:"white",fontSize: "15px"}}></i> <a href="mailto:info@africanqueen.co.ug" >info@africanqueen.co.ug</a></span>
                    </div>
                    <div className='footer_socials'>
                        <span className='footer_socials_title'>follow us</span>
                        <span className='footer_socials_listings'>
                            <a href="#"><i className="fab fa-facebook" style={{color:"white",fontSize: "15px"}}></i></a>
                            <a href="#"><i className="fab fa-linkedin" style={{color:"white",fontSize: "15px"}}></i></a>
                            <a href="#"><i className="fab fa-instagram" style={{color:"white",fontSize: "15px"}}></i></a>
                            <a href="#"><i className="fab fa-twitter" style={{color:"white",fontSize: "15px"}}></i></a>
                        </span>
                    </div>
                </div>
            </section>
        </section>

        <section className='footer_bottom'>
        © {year} African Queen No1 Distributor LTD. All Rights Reserved.
        </section>
    </section>
    </>
  )
}
