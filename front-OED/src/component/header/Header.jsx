import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FiX , FiMenu } from "react-icons/fi";

 
class Header extends Component{
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
       //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded')
        })
    }

    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }

    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open');
    }


    render(){
        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }  
        }
        const { logo, color='default-color' } = this.props;
        let logoUrl;
        if(logo === 'light'){
            logoUrl = <img src="/assets/images/logo/logo-light.png" alt="" />;
        }else if(logo === 'dark'){
            logoUrl = <img src="/assets/images/logo/logo-dark.jpeg" alt="" />;
        }else if(logo === 'symbol-dark'){
            logoUrl = <img src="/assets/images/logo/logo-symbol-dark.png" alt="" />;
        }else if(logo === 'symbol-light'){
            logoUrl = <img src="/assets/images/logo/logo-symbol-light.png" alt="" />;
        }else{
            logoUrl = <img src="/assets/images/logo/logo.png" alt="" />;
        }
         
        return(
            <header className={`header-area formobile-menu header--transparent ${color}`}>
                <div className="header-wrapper" id="header-wrapper">
                    <div className="header-left">
                        <div className="logo">
                            <a href="/">
                                {logoUrl}
                            </a>
                        </div>
                    </div>

                <div className="header-right">
                        <nav className="mainmenunav d-lg-block">
                            <ul className="mainmenu">
        
                                <li><Link to="/gallery" >Investigacion</Link></li>
                               
                                <li><Link to="/columns" >Podcast</Link></li>

                                <li className="has-droupdown"><Link to="#" >Archivo</Link>
                                    <ul className="submenu">
                                        <li><Link to="/testimonial">Articulos</Link></li>
                                        <li><Link to="/testimonial">Notas</Link></li>
                                        <li><Link to="/contact-form">Reseñas</Link></li>
                                        <li><Link to="/contact-form">Informes</Link></li>                                      
                                    </ul>
                                </li>

                                <li><Link to="/blog" >Actividades</Link></li>
                                
                                <li><Link to="/clint-logo" >Noticias</Link></li>
                               
                                <li><Link to="portfolio-details" >Proyecto</Link></li>

                                <li><Link to="/team" >Quienes somos</Link></li>

                            </ul>
                        </nav>
                        <div className="header-btn">
                            <a className="rn-btn" href="/contact">
                                <span>Participar</span>
                            </a>
                        </div>
                        {/* Start Humberger Menu  */}
                        <div className="humberger-menu d-block d-lg-none pl--20">
                            <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                        </div>
                        {/* End Humberger Menu  */}
                        <div className="close-menu d-block d-lg-none">
                            <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;