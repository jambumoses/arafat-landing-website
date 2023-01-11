import React from 'react'

export default function Contact() {
  return (
    <>
    <section className='contact_section'>
      <div className='map_wrapper'>
        <span className='map_wrapper_heading'>let's make something awesome together.</span>
        <span className='map_wrapper_note'>To efficiently distribute quality products that delight customers and deliver sustainable stakeholder value</span>
      </div>

      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=african%20queen&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
          </iframe>
        </div>
      </div>

      <div className='scrolldown'>
        <a href='#bottom'><i className="fa fa-angle-down"></i></a>
      </div>
    </section>

    <section className='getintouch_section' id='bottom'>
      <section className='getintouch_section_left'>
        <div className='getintouch_section_left_cont'>
          <i className='fa fa-location-dot'></i> <span> Namanve Plot 1769 Jinja</span>
        </div>

        <div className='getintouch_section_left_cont'>
          <i className='fa fa-phone'></i> <span>+256 776 291115</span>
        </div>

        <div className='getintouch_section_left_cont'>
          <i className='fa fa-envelope'></i> <span>info@africanqueen.co.ug</span>
        </div>

        <div className='getintouch_section_left_socials'>
          <h3>follow us</h3>
          <span>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </span>
        </div>
      </section>
      
      <section className='getintouch_section_right'>
        <h3>get in touch</h3>
        <span className='getintouch_section_right_note'>
          <span>To efficiently distribute quality products that delight</span>
        </span>
        <form action="" method="post">
          <div className='getintouch_name_phone'>
            <span className='getintouch_name_phone_input'> <i className="fa fa-user"></i><input type="text" name="name" placeholder='Your Name' /></span>
            <span className='getintouch_name_phone_input'> <i className="fa fa-phone"></i><input type="text" name="phone" placeholder='Your Phone Number' /></span>
          </div>
          <span className='getintouch_email'><i className="fa fa-envelope"></i><input type="email" name="email" id="" placeholder='Enter Your Email Here'/></span>
          <textarea className='getintouch_message' name="message" id="" cols="30" rows="10" placeholder='Enter Your FeedBack Here'></textarea>
          <div className='getintouch_btn'>
            <button type="submit">submit</button>
          </div> 
        </form>
      </section>
    </section>

    <section>
      <div className="mapouter_show">
          <div className="gmap_canvas_show">
            <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=african%20queen&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
            </iframe>
          </div>
      </div>
    </section>
    </>
  )
}
