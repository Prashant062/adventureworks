import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <div className="footer">

            <div className="footer-img">
                <img src="https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/MA1BcU?ver=5de2&amp;m=6&amp;q=80" alt="av" />
            </div>

            <div class="copyright">
                <p>© Adventure Works, 2021 All rights reserved</p>
            </div>

            <div className="policy">
                <span>Terms of Use |  Privacy Policy</span>
            </div>

            <div className="facebook">
                <span><i class="fa-brands fa-facebook"></i></span>
            </div>

            <div class="twitter">
            <i class="fa-brands fa-twitter"></i>
            </div>
            <div class="instagram">
            <i class="fa-brands fa-instagram"></i>
            </div>

            <div className="youtube">
                <span><i  class="fa-brands fa-youtube"></i></span>
            </div>
        </div>
    );
};

export default Footer;
