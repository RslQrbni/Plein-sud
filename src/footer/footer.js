import React from "react";
import './footer.scss';
import fb from '../assets/fb.png';
import insta from '../assets/insta.png';
import mail from '../assets/mail.png';
import plein_sud_log2 from '../assets/plein_sud_log2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'







const Footer = ()=>{
    return (
        <div className="footer">
            <div className="section__padding">
                <div className="sb_footer_links">
                    <div className="logo_2">
                       <img src={plein_sud_log2} alt="logo de plein sud"/>
                    </div>
                    <div className="baner_text">
                        <p>
                            Ici c'est le restaurant plein sud. Plein sud c'est situé 
                            dans la plus belle village de la france.
                        </p>
                    </div>

                        
                        <div className="socialmedia">
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                        <FontAwesomeIcon icon={['fab', 'facebook']} />
                        <FontAwesomeIcon icon={['fab', 'instagram']} />   
                        <FontAwesomeIcon icon={faEnvelope} />  
                        </div>
                    
                    
                    <ul className="footer_links">
                        
                       <li className="footer_link">
                       <a href="/acceuil">
                             Accueil
                        </a>
                        </li> 
                        <li className="footer_link">
                       <a href="/acceuil">
                             A Propos
                        </a>
                        </li> 
                        <li className="footer_link">
                       <a href="/acceuil">
                             Contacts
                        </a>
                        </li> 
                        <li className="footer_link">
                       <a href="/acceuil">
                             Menu
                        </a>
                        </li> 

                    </ul>
                   
                    
                </div>
                <hr></hr>
                <div className="sb_footer_bellow">
                    <div className="sb_footer_copyright">
                        <p>
                           copyright@{new Date().getFullYear()} Creat & designed by Rouhi & Salsaal.
                        </p>
                    </div>
                    <div className="sb_footer_bellow_links">
                        <a href=    "/terms"> <div > <p>Terms & Conditions </p></div></a>
                        <a href="/privacy"> <div > <p>privacy </p></div></a>
                        <a href="/security"> <div > <p>Security </p></div></a>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Footer;
