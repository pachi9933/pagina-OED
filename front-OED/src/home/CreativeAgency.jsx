import React, { Component , Fragment } from "react";
import { Parallax } from "react-parallax";
import Slider from "react-slick";
import { slickDot } from "../page-demo/script";

import Header from "../component/header/Header";

// import HeaderThree from "../component/header/HeaderThree";









import ServiceList from "../elements/service/ServiceList";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import Team from "../elements/Team";
import BlogContent from "../elements/blog/BlogContent";
import BrandTwo from "../elements/BrandTwo";
import FooterTwo from "../component/footer/FooterTwo";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import { Link } from 'react-router-dom';


//inicio import pachi para poner nuevo header//


import Scrollspy from 'react-scrollspy';

import Particles from 'react-particles-js';
import {FiX , FiMenu } from "react-icons/fi";



import Contact from "../elements/contact/ContactTwo";

//fin import pachi para poner nuevo header//




const image1 =
// "/assets/images/bg/paralax/bg-image-3-overlay.jpg";
"/assets/images/bg/paralax/bg-image-b.jpg";


  const SlideList = [
    {
        textPosition: 'text-center',
        category: '',
        title: 'Observatorio de Economia Digital ',
        description: 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    }
]

const list = [
    {
        image: '"/assets/images/bg/paralax/bg-image-9-3.jpg";',
        category: 'Invsetigacion',
        title: 'El bitcoin es una burbuja'
    },
    { 
        image: 'image-2',
        category: 'Podcast',
        title: 'Nuevo libro'
    },
    {
        image: 'image-3',
        category: 'Articulos',
        title: 'Proxima charla de OED'
    },
    {
        image: 'image-4',
        category: 'Charlas',
        title: 'entrevista '
    },
    {
        image: 'image-3',
        category: 'Noticias',
        title: 'charla'
    },
    {
        image: 'image-4',
        category: 'Opinion',
        title: 'nuevas teorias'
    }
]
 


class CreativeAgency extends Component{
    render(){
        const PostList = BlogContent.slice(0 , 5);
        return(
            <Fragment>   
                <Helmet pageTitle="Observatorio de Economia Digital" />
               
                <Header logo="light" />
                 {/* End Slider Area   */} 
                <div className="slider-activation slider-creative-agency">
                    <Parallax bgImage={image1} strength={1000}>
                    
                        {SlideList.map((value , index) => (
                            <div className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center" key={index}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <h1 className="titulo"> Observatorio de Economia Digital</h1> 
                                            

                                            {/* <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/logo/logo-ligth.png" alt="About Images"/>
                                    </div>
                                            <div className={`inner ${value.textPosition}`}>
                                                {value.category ? <span>{value.category}</span> : ''}
                                                {value.title ? <h1 className="
                                                ">{value.title}</h1> : ''}
                                                {value.description ? <p className="description">{value.description}</p> : ''}
                                                {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Parallax>
                </div>
                {/* End Slider Area   */}

                {/* Start Search area */}
                <div className="buscar-cont">
                        <div className="buscar-semi-cont">
                                                   
                                <input type="text" id="#" name="" placeholder="Buscar"/>
                                         
                                                                       
                        </div> 
                </div>    
                {/* End Search area  */} 

                {/* Start Service Area  */}
                <div className="service-area creative-service-wrapper ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row creative-service">
                            <div className="col-lg-12">
                                <ServiceList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" />
                            </div>
                        </div>
                    </div>
                </div>  
                {/* End Service Area  */} 


                 {/* Start About Area */}
                 <div className="about-area ptb--120 bg_color--5" id="about">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/about/ima-nov.jpeg" alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">INFORME</h2>
                                            <h4 className="subtitle">La moneda digital</h4>
                                            <h6 className="autor"> por Marco Mallamaci</h6>
                                            <p className="description">Tecnología, Información y Comunicación como Servicio Público Esencial: 
                                            Argentina 2020.El 21 de agosto de 2020, el gobierno argentino declaró, 
                                            mediante la sanción del Decreto de Necesidad y Urgencia (DNU) 690/2020, “servicio público” a los servicios 
                                            de telefonía celular, provisión de Internet y TV por suscripción. Allí, estableció también el congelamiento 
                                            de tarifas hasta el 31 de diciembre de ese año[1] en el marco de la emergencia sanitaria declarada por el covid-19.</p>
                                        </div>
                                                            <div className="portfolio-button">
                                                                <a className="rn-btn" href="/gallery">Leer mas</a>
                                                            </div>
                                                            <div className="time">
                                                                <p>----2min</p>
                                                            </div>

                                        {/* <div className="row mt--30">
                                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                    <h3 className="title">Informe 1</h3>
                                                    <p>Tecnología, Información y Comunicación como Servicio Público Esencial: Argentina 2020</p>
                                                </div>
                                                            <div className="portfolio-button">
                                                                <a className="rn-btn" href="/gallery">Leer mas</a>
                                                            </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                    <h3 className="title">Informe 2</h3>
                                                    <p>Una revolución laboral silenciosa en el mundo del teletrabajo; EL CALL CENTER SE VA A LA CASA</p>
                                                </div>
                                                            <div className="portfolio-button">
                                                                <a className="rn-btn" href="/gallery">Leer mas</a>
                                                            </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Area */}


                 {/* Start About Area */}
                 {/* <div className="about-area ptb--120 bg_color--5" id="about">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/about/notima.jpeg" alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                           <Link to="/gallery"> <h2 className="title">Investigacion</h2></Link>
                                           <Link to="/gallery"> <p className="description">There are many variations of passages of Lorem Ipsum available, but the majority have suffered <a href="#alteration">alteration</a> in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,</p></Link>                                        </div>
                                                            
                                        <div className="row mt--30">
                                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                    <h3 className="title">Who we are</h3>
                                                    <p>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                                </div>
                                                           
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                    <h3 className="title">Who we are</h3>
                                                    <p>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                                </div>
                                                            

                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* End About Area */}


                

                {/* Start Portfolio Area */}
                <div className="portfolio-area pt--120 pb--140 bg_color--5">
                    <div className="rn-slick-dot">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="section-title service-style--3 text-left mb--15 mb_sm--0">
                                        <h2 className="title">Opinion</h2>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="slick-space-gutter--15 slickdot--20">
                                        <Slider {...slickDot}>
                                            {list.map((value , index) => (
                                                <div className="portfolio" key={index}>
                                                    <div className="thumbnail-inner">
                                                        <div className={`thumbnail ${value.image}`}></div>
                                                        <div className={`bg-blr-image ${value.image}`}></div>
                                                    </div>
                                                    <div className="content">
                                                        <div className="inner">
                                                            <p>{value.category}</p>
                                                            <h4><a href="#">{value.title}</a></h4>
                                                            <div className="portfolio-button">
                                                                <a className="rn-btn" href="#">Leer mas</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))} 
                                        </Slider>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* End Portfolio Area */}

                {/* Start mail Area */}

                <div clasName="contenedor-mail">
                    <div className="contenedor-mail-dos">
                        <div className="contenedor-mail-tres">
                            <div className="contenedor-mail-cuatro">
                                <h3>¿Querés mas informacion?</h3>
                                <p>Suscribite a nuestra lista de correo, <br/>
                                mantenete informado, recibí nuestros informes y <br/>
                                sumemos juntos al conocimiento sobre la economía digital                                 
                                </p>

                             
                                   <form>
                                        <label>
                                            Mail:
                                            <input className="formulario" type="email" name="mail" placeholder="OED@oed.com"/>
                                            <input className="formulario" type="text" name="pais" placeholder="argentina"/>
                                           
                                        </label>
                                            {/* <input type="submit" value="Submit" /> */}
                                            <div className="portfolio-button">
                                                <a className="rn-btn" href="/contact">recibir informacion</a>
                                            </div>

                                            </form>

                                            <div className="portfolio-button-1">
                                                <a className="rn-btn-1" href="/contact">QUIERO PARTICIPAR!!!</a>
                                            </div>
                                                               
                    
                            </div>
                    
                        </div>                    
                    </div>
                </div>

                {/* End mail Area */}
             
            

                {/* Start CounterUp Area */}
                {/* <div className="rn-counterup-area pt--140 p pb--110 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <h3 className="fontWeight500">La realidad en tus manos</h3>
                                </div>
                            </div>
                        </div>
                        <CounterOne />
                    </div>
                </div> */}
                {/* End CounterUp Area */}

                  

                {/* Start Team Area  */}
                {/* <div className="rn-team-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-title service-style--3 text-left mb--25 mb_sm--0">
                                    <h2 className="title">Skilled Team</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <Team column="col-lg-4 col-md-6 col-sm-6 col-12" />
                        </div>
                    </div>
                </div> */}
                {/* End Team Area  */}

                {/* Start Testimonial Area */}
                {/* <div className="rn-testimonial-area bg_color--1 ptb--120">
                    <div className="container">
                        <Testimonial />
                    </div>
                </div> */}
                {/* End Testimonial Area */}
                

                {/* Start Blog Area */}
                <div className="rn-blog-area pt--120 pb--140 bg_color--5">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-6">
                                <div className="section-title text-left">
                                    <h2>Noticias de la semana</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--55 mt_sm--30 rn-slick-dot slick-space-gutter--15 slickdot--20 row--0">
                            <div className="col-lg-12">
                                <Slider {...slickDot}>
                                    {PostList.map((value , i ) => (
                                        <div className="blog blog-style--1" key={i}>
                                            <div className="thumbnail">
                                                <a href="#">
                                                    <img src={`/assets/images/blog/blog-${value.images}.jpg`} alt="Blog Images"/>
                                                </a>
                                            </div>
                                            <div className="content">
                                                <p className="blogtype">{value.category}</p>
                                                <h4 className="title"><a href="#">{value.title}</a></h4>
                                                <div className="blog-btn">
                                                    <a className="rn-btn text-white" href="#">Leer mas</a>
                                                </div>
                                            </div>
                                        </div> 
                                    ))}
                                </Slider>
                            </div>
                        </div>    
                    </div>    
                </div>
                {/* End Blog Area */}


                


                {/* Start Brand Area */}
                <div className="rn-brand-area brand-separation bg_color--5 ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h3>Links de interes</h3>
                                <BrandTwo />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area */}

                 {/* Start Footer Style  */}
                 <FooterTwo />
                {/* End Footer Style  */}
                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}

            </Fragment>
        )
    }
}

export default CreativeAgency;