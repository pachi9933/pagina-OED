import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import Breadcrumb from "../elements/common/Breadcrumb";
import FooterTwo from "../component/footer/FooterTwo";

const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/'},
]

class PortfolioDetails extends Component{
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }
    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Proyecto' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                


                {/* Start Breadcrump Area */}
                   <Breadcrumb title={'Proyecto'}   />
                {/* End Breadcrump Area */}

                {/* Start Breadcrump Area */}
                {/* <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--4"  data-black-overlay="7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">PROYECTO</h2>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* End Breadcrump Area */}

                {/* Start Portfolio Details */}
                {/* <div className="rn-portfolio-details ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="portfolio-details">
                                    <div className="inner">
                                        <h2>OED</h2>
                                        <p className="subtitle">PROYECTO<br></br></p> */}


                                        {/* <div className="portfolio-view-list d-flex flex-wrap">
                                            <div className="port-view">
                                                <span>Branch</span>
                                                <h4>Ability</h4>
                                            </div>

                                            <div className="port-view">
                                                <span>Project Types</span>
                                                <h4>Website</h4>
                                            </div>

                                            <div className="port-view">
                                                <span>Program</span>
                                                <h4>View Project</h4>
                                            </div>
                                        </div> */}

                                        {/* <div className="portfolio-share-link mt--20 pb--70 pb_sm--40">
                                            <ul className="social-share rn-lg-size d-flex justify-content-start liststyle mt--15">
                                                {SocialShare.map((val , i) => (
                                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                                ))}
                                            </ul>
                                        </div> */}
                                
                                    {/* <div className="portfolio-thumb-inner">
                                        <div className="thumb position-relative mb--30">
                                            <img src="/assets/images/portfolio/portfolio-big-03.jpg" alt="Portfolio Images"/>
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
                                            <button className="video-popup position-top-center" onClick={this.openModal}><span className="play-icon"></span></button>
                                        </div>
                                        
                                        <div className="thumb mb--30">
                                            <img src="/assets/images/portfolio/portfolio-big-02.jpg" alt="Portfolio Images"/>
                                        </div>

                                        <div className="thumb">
                                            <img src="/assets/images/portfolio/portfolio-big-01.jpg" alt="Portfolio Images"/>
                                        </div>
                                    </div> */}
                                    {/* </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* End Portfolio Details */}
                {/* Start About Area */}
                <div className="about-area ptb--120 bg_color--5" id="about">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                
                                <div className="cont-prin">
                                    <div className="cont-1">
                                        <div className="cont-text">
                                            
                                            <div>
                                          
<h3>??QU?? ES EL OBSERVATORIO DE ECONOM??A DIGITAL (OED)?</h3> <br></br>

<h4>ANTECEDENTES Y OBJETIVOS </h4><br></br>
<p className="texto-proy">El proyecto de creaci??n del OED naci?? en 2019 a partir de los intercambios y encuentros entre estudiantes de posgrado de la Maestr??a en Sociolog??a Econ??mica y becarios de CONICET, dados en el ??mbito acad??mico del IDAES-UNSAM y el Circulo de Estudio de Econom??a Digital de esa instituci??n, cuyos trabajos, investigaciones y avances de tesis se interrogan sobre esta tem??tica desde diversas disciplinas. All??, cobr?? fuerza la idea de un ??rea de vacancia relacionada con el estudio de la econom??a digital en el contexto acad??mico local y regional. Aunque existe una gran variedad de docentes, expertos, investigadores e investigadoras que se especializan en problem??ticas vinculadas a este campo, la reciente irrupci??n del tema parece no haberse traducido a??n en un programa integrador o una agenda com??n a partir de la especificidad argentina y latinoamericana, desde las ciencias sociales.
En ese contexto, el OED tiene como prop??sito contribuir al desarrollo de un espacio de investigaci??n, divulgaci??n y construcci??n de herramientas anal??ticas que puedan aportar a la estructuraci??n de una perspectiva interdisciplinaria respecto al estudio de la econom??a digital en el contexto local y regional. En particular, se busca elaborar un mapa de problematizaciones, producir informes peri??dicos, publicar notas breves, analizar noticias y realizar entrevistas en diversos formatos, tales como podcast y videos, as?? como confeccionar bases de datos documentales y bibliogr??ficas. Asimismo, se proyecta la posibilidad de crear una revista acad??mica especializada en la tem??tica y realizar encuentros, charlas y/o conversatorios a partir de la convocatoria de referentes del ??mbito acad??mico, pol??tico, sindical y empresarial. 
En ese sentido, el actual equipo de trabajo viene realizando informes de coyuntura, notas de opini??n, art??culos acad??micos y, desde 2020, puso en funcionamiento un espacio virtual donde se publicaron los primeros contenidos y actividades . 
L??neas de investigaci??n y coordinaci??n del trabajo </p><br></br>
<p>Para llevar adelante las tareas descriptas, el plan de trabajo del OED, para el ciclo 2021, se organiz?? en torno a cuatro l??neas de investigaci??n:</p><br></br>	
<h5>1-	Regulaciones de la Econom??a Digital en el Contexto Argentino:</h5><br></br>
<p>se propone relevar y sistematizar el conjunto de normativas vigentes relacionadas con la regulaci??n de la econom??a digital en el pa??s, comenzado por las leyes de alcance nacional y del ??mbito de la Ciudad Aut??noma de Buenos Aires.</p><br></br>   
<h5> 2-	Dinero Digital y Sistemas Criptomonetarios:</h5><br></br>
<p>se plantea explorar los mecanismos dinerarios de la econom??a digital, en particular en torno al ecosistema financiero y las plataformas de pagos conformados luego de la aparici??n de las criptomonedas, mediante el relevamiento y an??lisis de los conflictos regulatorios, los posicionamientos de instituciones como el Banco Central y las estrategias de los sectores que impulsan dichos sistemas monetarios descentralizados, con foco en las particularidades del contexto argentino.</p><br></br>
<h5>3-	Trabajo y Empresas:</h5><br></br>
<p>se procura, por un lado, analizar los modos de organizaci??n del trabajo en espacios vinculados al sector de servicios inform??ticos (SSI) de la Argentina y, por otro, identificar y analizar las pr??cticas y estrategias econ??micas de las empresas de tecnolog??a de origen nacional y sus miembros fundadores, centr??ndose en las compa????as denominadas ???unicornios argentinos???.</p><br></br> 
<h5>4-	Aplicaciones, Interacciones Digitales y Nuevas Experticias:</h5><br></br>
<p>se busca construir una genealog??a reciente de las apps, explorar y sistematizar los diferentes tipos de interacciones que ??stas proponen a los usuarios, as?? como analizar y describir los diferentes saberes, experiencias y herramientas puestas en juego por los sujetos cuya tarea se despliega, precisamente, alrededor de la producci??n de datos a partir de esas interacciones ??? programadores y data-scientist, entre otros ???.</p><br></br>
<h6 className="texto-proy">Estos ejes se desarrollan a partir del trabajo descentralizado de cada uno 
de los y las integrantes del equipo en consonancia con los temas de especializaci??n de sus tesis y/o 
becas de investigaci??n. La planificaci??n de tareas implica la presentaci??n de avances a lo largo del 
ciclo anual, reuniones de coordinaci??n, reelaboraci??n e intercambio, y resultados finales al cierre de 
cada semestre. Sobre esta base se plantea elaborar informes espec??ficos de cada l??nea de investigaci??n 
para su publicaci??n, as?? como notas de opini??n, art??culos u otros instrumentos.</h6> 
  

                                            </div>
                                        </div>                                     
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Area */}

                {/* Start Related Work */}
                {/* <div className="portfolio-related-work pb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <span className="theme-color font--18 fontWeight600">Related Work</span>
                                    <h2>Our More Projects</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--10">
                            {/* Start Single Portfolio */}
                            {/* <div className="col-lg-6 col-md-6 col-12">
                                <div className="related-work text-center mt--30">
                                    <div className="thumb">
                                        <a href="/portfolio-details">
                                            <img src="/assets/images/portfolio/related-image-01.jpg" alt="Portfolio-images"/>
                                        </a>
                                    </div>
                                    <div className="inner">
                                        <h4><a href="/portfolio-details">Digital Analysis</a></h4>
                                        <span className="category">Technique</span>
                                    </div>
                                </div>
                            </div>  */}
                             {/* End Single Portfolio */}
                            {/* Start Single Portfolio */}
                            {/* <div className="col-lg-6 col-md-6 col-12">
                                <div className="related-work text-center mt--30">
                                    <div className="thumb">
                                        <a href="/portfolio-details">
                                            <img src="/assets/images/portfolio/related-image-02.jpg" alt="Portfolio-images"/>
                                        </a>
                                    </div>
                                    <div className="inner">
                                        <h4><a href="/portfolio-details">Plan Management</a></h4>
                                        <span className="category">PLANNING</span>
                                    </div>
                                </div>
                            </div> */}
                             {/* End Single Portfolio */}
                        {/* </div>
                    </div>
                </div> */}
                {/* End Related Work */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <FooterTwo />  


            </React.Fragment>
        )
    }
}
export default PortfolioDetails;
