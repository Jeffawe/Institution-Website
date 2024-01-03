import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import './footer.scss';

const Footer: React.FC = () => {
    return (
        <footer className="footerback">
            <div className='footer'>
                <div className="find-us">
                    <h4>Find Us</h4>
                    <div className="social-icons">
                        <a href="https://github.com/Jeffawe" target="_blank" rel="noreferrer">
                            <FaGithub className="icon"/>
                        </a>
                        <a href="https://www.linkedin.com/in/jeffery-ozoekwe-awagu/" target="_blank" rel="noreferrer">
                            <FaLinkedin className="icon" />
                        </a>
                        <a href="https://www.instagram.com/jeff_awagu/" target="_blank" rel="noreferrer">
                            <FaInstagram className="icon" />
                        </a>
                    </div>
                </div>

                <div className="main-units">
                    <h4>Units</h4>
                    <ul>
                        <li><a target="_blank" rel="noreferrer">Jeff Tech</a></li>
                        <li><a target="_blank" rel="noreferrer">Jeff Today</a></li>
                        <li><a target="_blank" rel="noreferrer">Jeff Press</a></li>
                    </ul>
                </div>

                <div className="quicklinks">
                    <h4>Quicklinks</h4>
                    <ul>
                        <li><a target="_blank" rel="noreferrer">Apply to Jeff Tech</a></li>
                        <li><a target="_blank" rel="noreferrer">Admission & Aid</a></li>
                        <li><a target="_blank" rel="noreferrer">Academics</a></li>
                    </ul>
                </div>
            </div>

            <div className="copy-right">
                © 2023 Jeffery Ozoekwe-Awagu
            </div>

        </footer>
    );
}

export default Footer;
