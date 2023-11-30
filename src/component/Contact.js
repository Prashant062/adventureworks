import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <>
      <div className="contact-services-container">
        <div className="line"></div>
        <div className="contact-content">
          <div className="location-store">
            <h4>Find Location</h4>
            <a href="/">Store Locator</a>
          </div>
          <div className="customer-servic">
            <h4>Customer Service</h4>
            <a href="/">1-800-555-1122</a>
          </div>
          <div className="help-center">
            <h4>Need Help ?</h4>
            <a href="/">FAQ</a>
          </div>
          <div className="covid-19">
            <h4>Covid-19 Information</h4>
            <a href="/">News and Updates</a>
          </div>
        </div>
        <div className="line"></div>

        <div className="about-section">
          <div className="about-info">
            <h4>About</h4>
            <a href="/">Our Story</a>
            <a href="/">Sustainability</a>
            <a href="/">Projects</a>
            <a href="/">B@B Self Service</a>
            <a href="/">Careers</a>
          </div>
          <div className="help-info">
            <h4>Help</h4>
            <a href="/">Return Policy</a>
            <a href="/">Shipping</a>
            <a href="/">Curbside Pickup</a>
            <a href="/">Accessibility</a>
            <a href="/">Terms and Conditions</a>
          </div>
          <div className="MyAW-info">
            <h4>My AW</h4>
            <a href="/">My Account</a>
            <a href="/">Other Status</a>
            <a href="/">Gift Cards</a>
            <a href="/">Wishlist</a>
            <a href="/">Rewards</a>
          </div>
          <div className="customer-info">
            <h4>Customer Service</h4>
            <a href="/">Contact Us</a>
            <a href="/">FAQ</a>
          </div>
          <div className="events-info">
            <h4>Classes & Events</h4>
            <a href="/">Upcoming Classes & Events</a>
          </div>
        </div>

      </div>
    </>
  )
}

export default Contact
