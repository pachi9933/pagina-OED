import React from 'react'
import TeamOne from "./team/TeamOne";
import TeamTwo from "./team/TeamTwo";

import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import FooterTwo from "../component/footer/FooterTwo";

import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";




const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/'},
    
    
]

const Team = () => {
    return (
        <>
            <PageHelmet pageTitle='Equipo' />
            {/* Start Header Area  */}
            <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
            {/* End Header Area  */}

            {/* Start Breadcrump Area */}
            <Breadcrumb title={'Equipo'}   />
            {/* End Breadcrump Area */}

            {/* Start Page Wrapper  */}
            <main className="page-wrapper">



                  {/* Start cargo Area  */}
                
                  <div className="rn-portfolio-details ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="portfolio-details">
                                    <div className="inner">
                                        
                                        <p className="subtitle">Equipo<br></br></p> 
                            
                                    </div> 
                                </div> 
                            </div>   
                        </div> 
                    </div> 
                </div>                        
                {/* End cargo Area  */}



                  {/* Start Pricing Tbale Area  */}
                  <div className="rn-pricing-table-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row">

                            {/* Start PRicing Table Area  */}
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">Coordinador</h4>
                                            <div className="pricing">
                                                <span className="price"><img className="imgRedonda" src="/assets/images/team/team-01.jpg" alt="PAblo Gordon"/></span>
                                                <span className="subtitle">Pablo Gordon</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li><p>Licenciado en Ciencia Pol??tica por la Universidad de Palermo. 
Asesor legislativo especializado en educaci??n, ciencia, tecnolog??a 
y desarrollo en el ??mbito local y nacional, en la Legislatura de la 
Ciudad Aut??noma de Bs. As. y la C??mara de Diputados.
ciolog??a Econ??mica en la Escuela Interdisciplinaria 
de de Altos Estudios Sociales de la Universidad Nacional de San Mart??n 
(IDAES-UNSAM). Coordinador del C??rculo de Estudios de Econom??a Digital 
de esa instituci??n.

Su ??rea principal de investigaci??n se centra en el estudio de las din??micas 
de transformaci??n de las empresas, los empresarios y las elites econ??micas a 
partir de la expansi??n de la Econom??a Digital. Su actual trabajo de tesis se 
enfoca en las relaciones de conflicto/complementariedad entre las plataformas 
digitales y el s
Maestrando en Soector financiero.</p>






</li>
                                                
                                            </ul>
                                </div>
                                        
                                

                            <div className="pricing-footer">

                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="inner text-center">
                                <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                                {SocialShare.map((val , i) => (
                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                ))}
                            </ul>
                            </div>

                            </div> 
                        </div>

                        
                                </div>
                                </div>
                            </div>
                            {/* End PRicing Table Area  */}
 
                            {/* Start PRicing Table Area  */}
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">Coordinador</h4>
                                            <div className="pricing">
                                                <span className="price"><img className="imgRedonda" src="/assets/images/team/team-02.jpg" alt="PAblo Gordon"/></span>
                                                <span className="subtitle">Marco Mallamaci</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li><p>Dr. en Filosof??a por la Universidad Nacional de C??rdoba. 
Becario Doctoral y Posdoctoral CONICET. Docente de grado, posgrado e 
investigador de la Universidad Nacional de San Juan. Ha coordinado grupos de 
investigaci??n para la Secretar??a de Pol??ticas e Industrias Culturales de San Juan, 
ha dictado seminarios sobre econom??a y cultura para el Consejo Federal de Inversiones (CFI) y 
sobre temas vinculados a Filosof??a Pol??tica, de la T??cnica e Historia del capitalismo 
para el Museo de Bellas Artes Franklin Rawson y el Instituto de Expresi??n Visual (UNSJ). 

Maestrando en Sociolog??a Econ??mica en la Escuela Interdisciplinaria de de Altos 
Estudios Sociales de la Universidad Nacional de San Mart??n (IDAES-UNSAM) , 
donde desarrolla una tesis sobre las nuevas formas del dinero digital. 
Coordinador del C??rculo de Estudios de Econom??a Digital de esa instituci??n.

Sus principales ??reas de investigaci??n son la Filosof??a Pol??tica y 
la Sociolog??a Econ??mica: econom??a digital, dinero, pol??tica y poder.</p></li>
                                                
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <a className="rn-btn" href="#pricing">Purchase Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End PRicing Table Area  */}

                            {/* Start PRicing Table Area  */}
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">Comunicacion</h4>
                                            <div className="pricing">
                                                <span className="price"><img className="imgRedonda" src="/assets/images/team/team-04.jpg" alt="Pablo Gordon"/></span>
                                                <span className="subtitle">Denise Krepki</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li><p>                           
Licenciada en Relaciones del Trabajo por la Universidad de Buenos Aires (UBA). 
Se desempe??a como becaria doctoral de la Agencia Nacional de Promoci??n Cient??fica 
y Tecnol??gica con sede en Centro de Estudios e Investigaciones Laborales 
(CEIL-CONICET-Argentina). Doctoranda en Ciencias Antropol??gicas, Facultad de 
Filosof??a y Letras, UBA y parte del Programa de Estudios Cr??ticos sobre el Movimiento 
Obrero (CEIL-CONICET).

Partiendo de estudios enfocados en la antropolog??a del trabajo, investiga 
sobre las pol??ticas de gesti??n empresarial mediadas por las tecnolog??as digitales 
y su incidencia en las condiciones de trabajo y de vida de les trabajadores desarrolladores 
de videojuegos. En particular el caso de la empresa multinacional argentina, Globant, 
situada en la Provincia de Buenos Aires.

Participa desde el a??o 2018 en dos proyectos Agencia Nacional de Promoci??n Cient??fica y 
Tecnol??gica: ???Pol??ticas del management en la disputa hegem??nica: alcances globales y locales???, 
???Sindicalismo: experiencias innovadoras de una nueva generaci??n militante??? y otro, de CONICET-Unidad 
Ejecutora: ???Empresas, trabajadores y sindicatos en contextos de globalizaci??n del capital???.</p></li>
                                               
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <a className="rn-btn" href="#pricing">Purchase Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End PRicing Table Area  */}
                            
                        </div>
                    </div>
                </div>
                {/* End Pricing Tbale Area  */}



                
                  {/* Start Pricing Tbale Area  */}
                  <div className="rn-pricing-table-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row">

                            {/* Start PRicing Table Area  */}
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">Coordinador</h4>
                                            <div className="pricing">
                                                <span className="price"><img className="imgRedonda" src="/assets/images/team/team-01.jpg" alt="PAblo Gordon"/></span>
                                                <span className="subtitle">Pablo Gordon</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li><p>Licenciado en Ciencia Pol??tica por la Universidad de Palermo. 
Asesor legislativo especializado en educaci??n, ciencia, tecnolog??a 
y desarrollo en el ??mbito local y nacional, en la Legislatura de la 
Ciudad Aut??noma de Bs. As. y la C??mara de Diputados.
ciolog??a Econ??mica en la Escuela Interdisciplinaria 
de de Altos Estudios Sociales de la Universidad Nacional de San Mart??n 
(IDAES-UNSAM). Coordinador del C??rculo de Estudios de Econom??a Digital 
de esa instituci??n.

Su ??rea principal de investigaci??n se centra en el estudio de las din??micas 
de transformaci??n de las empresas, los empresarios y las elites econ??micas a 
partir de la expansi??n de la Econom??a Digital. Su actual trabajo de tesis se 
enfoca en las relaciones de conflicto/complementariedad entre las plataformas 
digitales y el s
Maestrando en Soector financiero.</p></li>
                                                
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <a className="rn-btn" href="#pricing">Purchase Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End PRicing Table Area  */}
 
                            {/* Start PRicing Table Area  */}
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">Coordinador</h4>
                                            <div className="pricing">
                                                <span className="price"><img className="imgRedonda" src="/assets/images/team/team-02.jpg" alt="PAblo Gordon"/></span>
                                                <span className="subtitle">Marco Mallamaci</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li><p>Dr. en Filosof??a por la Universidad Nacional de C??rdoba. 
Becario Doctoral y Posdoctoral CONICET. Docente de grado, posgrado e 
investigador de la Universidad Nacional de San Juan. Ha coordinado grupos de 
investigaci??n para la Secretar??a de Pol??ticas e Industrias Culturales de San Juan, 
ha dictado seminarios sobre econom??a y cultura para el Consejo Federal de Inversiones (CFI) y 
sobre temas vinculados a Filosof??a Pol??tica, de la T??cnica e Historia del capitalismo 
para el Museo de Bellas Artes Franklin Rawson y el Instituto de Expresi??n Visual (UNSJ). 

Maestrando en Sociolog??a Econ??mica en la Escuela Interdisciplinaria de de Altos 
Estudios Sociales de la Universidad Nacional de San Mart??n (IDAES-UNSAM) , 
donde desarrolla una tesis sobre las nuevas formas del dinero digital. 
Coordinador del C??rculo de Estudios de Econom??a Digital de esa instituci??n.

Sus principales ??reas de investigaci??n son la Filosof??a Pol??tica y 
la Sociolog??a Econ??mica: econom??a digital, dinero, pol??tica y poder.</p></li>
                                                
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <a className="rn-btn" href="#pricing">Purchase Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End PRicing Table Area  */}

                            {/* Start PRicing Table Area  */}
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">Comunicacion</h4>
                                            <div className="pricing">
                                                <span className="price"><img className="imgRedonda" src="/assets/images/team/team-04.jpg" alt="Pablo Gordon"/></span>
                                                <span className="subtitle">Denise Krepki</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li><p>                           
Licenciada en Relaciones del Trabajo por la Universidad de Buenos Aires (UBA). 
Se desempe??a como becaria doctoral de la Agencia Nacional de Promoci??n Cient??fica 
y Tecnol??gica con sede en Centro de Estudios e Investigaciones Laborales 
(CEIL-CONICET-Argentina). Doctoranda en Ciencias Antropol??gicas, Facultad de 
Filosof??a y Letras, UBA y parte del Programa de Estudios Cr??ticos sobre el Movimiento 
Obrero (CEIL-CONICET).

Partiendo de estudios enfocados en la antropolog??a del trabajo, investiga 
sobre las pol??ticas de gesti??n empresarial mediadas por las tecnolog??as digitales 
y su incidencia en las condiciones de trabajo y de vida de les trabajadores desarrolladores 
de videojuegos. En particular el caso de la empresa multinacional argentina, Globant, 
situada en la Provincia de Buenos Aires.

Participa desde el a??o 2018 en dos proyectos Agencia Nacional de Promoci??n Cient??fica y 
Tecnol??gica: ???Pol??ticas del management en la disputa hegem??nica: alcances globales y locales???, 
???Sindicalismo: experiencias innovadoras de una nueva generaci??n militante??? y otro, de CONICET-Unidad 
Ejecutora: ???Empresas, trabajadores y sindicatos en contextos de globalizaci??n del capital???.</p></li>
                                               
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <a className="rn-btn" href="#pricing">Purchase Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End PRicing Table Area  */}
                            
                        </div>
                    </div>
                </div>
                {/* End Pricing Tbale Area  */}






                {/* Start cargo Area  */}
                
                 <div className="rn-portfolio-details ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="portfolio-details">
                                    <div className="inner">
                                        <h2>OED</h2>
                                        <p className="subtitle">Equipo<br></br></p> 
                            
                                    </div> 
                                </div> 
                            </div>   
                        </div> 
                    </div> 
                </div>                        
                {/* End cargo Area  */}


                        {/* Start PRicing Table Area  */}
                        {/* <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">Coordinador</h4>
                                            <div className="pricing">
                                                <span className="price"><img className="imgRedonda" src="/assets/images/team/team-02.jpg" alt="PAblo Gordon"/></span>
                                                <span className="subtitle">Marco MAllamaci</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li>5 PPC Campaigns</li>
                                                <li><p>    Dr. en Filosof??a por la Universidad Nacional de C??rdoba. 
Becario Doctoral y Posdoctoral CONICET. Docente de grado, posgrado e 
investigador de la Universidad Nacional de San Juan. Ha coordinado grupos de 
investigaci??n para la Secretar??a de Pol??ticas e Industrias Culturales de San Juan, 
ha dictado seminarios sobre econom??a y cultura para el Consejo Federal de Inversiones (CFI) y 
sobre temas vinculados a Filosof??a Pol??tica, de la T??cnica e Historia del capitalismo 
para el Museo de Bellas Artes Franklin Rawson y el Instituto de Expresi??n Visual (UNSJ). 

Maestrando en Sociolog??a Econ??mica en la Escuela Interdisciplinaria de de Altos 
Estudios Sociales de la Universidad Nacional de San Mart??n (IDAES-UNSAM) , 
donde desarrolla una tesis sobre las nuevas formas del dinero digital. 
Coordinador del C??rculo de Estudios de Econom??a Digital de esa instituci??n.

Sus principales ??reas de investigaci??n son la Filosof??a Pol??tica y 
la Sociolog??a Econ??mica: econom??a digital, dinero, pol??tica y poder.</p></li>
                                               
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <a className="rn-btn" href="#pricing">Purchase Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* End PRicing Table Area  */}

                               {/* Start PRicing Table Area  */}
                               {/* <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-pricing active">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">Coordinador</h4>
                                            <div className="pricing">
                                                <span className="price"><img className="imgRedonda" src="/assets/images/team/team-01.jpg" alt="PAblo Gordon"/></span>
                                                <span className="subtitle">Pablo Gordon</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li>5 PPC Campaigns</li>
                                                <li><p>Licenciado en Ciencia Pol??tica por la Universidad de Palermo. 
Asesor legislativo especializado en educaci??n, ciencia, tecnolog??a 
y desarrollo en el ??mbito local y nacional, en la Legislatura de la 
Ciudad Aut??noma de Bs. As. y la C??mara de Diputados.
ciolog??a Econ??mica en la Escuela Interdisciplinaria 
de de Altos Estudios Sociales de la Universidad Nacional de San Mart??n 
(IDAES-UNSAM). Coordinador del C??rculo de Estudios de Econom??a Digital 
de esa instituci??n.

Su ??rea principal de investigaci??n se centra en el estudio de las din??micas 
de transformaci??n de las empresas, los empresarios y las elites econ??micas a 
partir de la expansi??n de la Econom??a Digital. Su actual trabajo de tesis se 
enfoca en las relaciones de conflicto/complementariedad entre las plataformas 
digitales y el s
Maestrando en Soector financiero.</p></li>
                                                
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <a className="rn-btn" href="#pricing">Purchase Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* End PRicing Table Area  */}



{/* <div className="cont-g">
    <div className="cont-g-1">
    <div className="cont-prin"> 
                                    <div className="cont-1">
                                                    
                                        <div className="cont-imag-team"> 
                                                <a href="mailto:curasantiago@gmail.com">
                                <img className="imgRedonda" src="/assets/images/team/team-01.jpg" alt="PAblo Gordon"/>
            
                                                </a>                                        
                                        </div>
                                    <div className="cont-text"> 
                                <div>
                                Dr. en Filosof??a por la Universidad Nacional de C??rdoba. 
Becario Doctoral y Posdoctoral CONICET. Docente de grado, posgrado e 
investigador de la Universidad Nacional de San Juan. Ha coordinado grupos de 
investigaci??n para la Secretar??a de Pol??ticas e Industrias Culturales de San Juan, 
ha dictado seminarios sobre econom??a y cultura para el Consejo Federal de Inversiones (CFI) y 
sobre temas vinculados a Filosof??a Pol??tica, de la T??cnica e Historia del capitalismo 
para el Museo de Bellas Artes Franklin Rawson y el Instituto de Expresi??n Visual (UNSJ). 

Maestrando en Sociolog??a Econ??mica en la Escuela Interdisciplinaria de de Altos 
Estudios Sociales de la Universidad Nacional de San Mart??n (IDAES-UNSAM) , 
donde desarrolla una tesis sobre las nuevas formas del dinero digital. 
Coordinador del C??rculo de Estudios de Econom??a Digital de esa instituci??n.

Sus principales ??reas de investigaci??n son la Filosof??a Pol??tica y 
la Sociolog??a Econ??mica: econom??a digital, dinero, pol??tica y poder.                                    
                                             


                                            </div>
                                        </div>                                     
                                    </div>
                                </div>

    </div> */}
    
    {/* <div className="cont-g-2">
    <div className="cont-prin"> 
                                    <div className="cont-1">
                                                    
                                        <div className="cont-imag-team"> 
                                                <a href="mailto:curasantiago@gmail.com">
                                <img className="imgRedonda" src="/assets/images/team/team-02.jpg" alt="PAblo Gordon"/>
            
                                                </a>                                        
                                        </div>
                                    <div className="cont-text"> 
                                <div>
                                Dr. en Filosof??a por la Universidad Nacional de C??rdoba. 
Becario Doctoral y Posdoctoral CONICET. Docente de grado, posgrado e 
investigador de la Universidad Nacional de San Juan. Ha coordinado grupos de 
investigaci??n para la Secretar??a de Pol??ticas e Industrias Culturales de San Juan, 
ha dictado seminarios sobre econom??a y cultura para el Consejo Federal de Inversiones (CFI) y 
sobre temas vinculados a Filosof??a Pol??tica, de la T??cnica e Historia del capitalismo 
para el Museo de Bellas Artes Franklin Rawson y el Instituto de Expresi??n Visual (UNSJ). 

Maestrando en Sociolog??a Econ??mica en la Escuela Interdisciplinaria de de Altos 
Estudios Sociales de la Universidad Nacional de San Mart??n (IDAES-UNSAM) , 
donde desarrolla una tesis sobre las nuevas formas del dinero digital. 
Coordinador del C??rculo de Estudios de Econom??a Digital de esa instituci??n.

Sus principales ??reas de investigaci??n son la Filosof??a Pol??tica y 
la Sociolog??a Econ??mica: econom??a digital, dinero, pol??tica y poder.                                    
                                             


                                            </div>
                                        </div>                                     
                                    </div>
                                </div>

    </div>
</div> */}
                


                

{/* <div className="cont-g">
    <div className="cont-g-1">
    <div className="cont-prin"> 
                                    <div className="cont-1">
                                                    
                                        <div className="cont-imag-team"> 
                                                <a href="mailto:curasantiago@gmail.com">
                                <img className="imgRedonda" src="/assets/images/team/team-01.jpg" alt="PAblo Gordon"/>
            
                                                </a>                                        
                                        </div>
                                    <div className="cont-text"> 
                                <div>
                                Dr. en Filosof??a por la Universidad Nacional de C??rdoba. 
Becario Doctoral y Posdoctoral CONICET. Docente de grado, posgrado e 
investigador de la Universidad Nacional de San Juan. Ha coordinado grupos de 
investigaci??n para la Secretar??a de Pol??ticas e Industrias Culturales de San Juan, 
ha dictado seminarios sobre econom??a y cultura para el Consejo Federal de Inversiones (CFI) y 
sobre temas vinculados a Filosof??a Pol??tica, de la T??cnica e Historia del capitalismo 
para el Museo de Bellas Artes Franklin Rawson y el Instituto de Expresi??n Visual (UNSJ). 

Maestrando en Sociolog??a Econ??mica en la Escuela Interdisciplinaria de de Altos 
Estudios Sociales de la Universidad Nacional de San Mart??n (IDAES-UNSAM) , 
donde desarrolla una tesis sobre las nuevas formas del dinero digital. 
Coordinador del C??rculo de Estudios de Econom??a Digital de esa instituci??n.

Sus principales ??reas de investigaci??n son la Filosof??a Pol??tica y 
la Sociolog??a Econ??mica: econom??a digital, dinero, pol??tica y poder.                                    
                                             


                                            </div>
                                        </div>                                     
                                    </div>
                                </div>

    </div> */}
    
    {/* <div className="cont-g-2">
    <div className="cont-prin"> 
                                    <div className="cont-1">
                                                    
                                        <div className="cont-imag-team"> 
                                                <a href="mailto:curasantiago@gmail.com">
                                <img className="imgRedonda" src="/assets/images/team/team-02.jpg" alt="PAblo Gordon"/>
            
                                                </a>                                        
                                        </div>
                                    <div className="cont-text"> 
                                <div>
                                Dr. en Filosof??a por la Universidad Nacional de C??rdoba. 
Becario Doctoral y Posdoctoral CONICET. Docente de grado, posgrado e 
investigador de la Universidad Nacional de San Juan. Ha coordinado grupos de 
investigaci??n para la Secretar??a de Pol??ticas e Industrias Culturales de San Juan, 
ha dictado seminarios sobre econom??a y cultura para el Consejo Federal de Inversiones (CFI) y 
sobre temas vinculados a Filosof??a Pol??tica, de la T??cnica e Historia del capitalismo 
para el Museo de Bellas Artes Franklin Rawson y el Instituto de Expresi??n Visual (UNSJ). 

Maestrando en Sociolog??a Econ??mica en la Escuela Interdisciplinaria de de Altos 
Estudios Sociales de la Universidad Nacional de San Mart??n (IDAES-UNSAM) , 
donde desarrolla una tesis sobre las nuevas formas del dinero digital. 
Coordinador del C??rculo de Estudios de Econom??a Digital de esa instituci??n.

Sus principales ??reas de investigaci??n son la Filosof??a Pol??tica y 
la Sociolog??a Econ??mica: econom??a digital, dinero, pol??tica y poder.                                    
                                             


                                            </div>
                                        </div>                                     
                                    </div>
                                </div>

    </div>
</div> */}

                

{/* <div className="cont-g">
    <div className="cont-g-1">
    <div className="cont-prin"> 
                                    <div className="cont-1">
                                                    
                                        <div className="cont-imag-team"> 
                                                <a href="mailto:curasantiago@gmail.com">
                                <img className="imgRedonda" src="/assets/images/team/team-01.jpg" alt="PAblo Gordon"/>
            
                                                </a>                                        
                                        </div>
                                    <div className="cont-text"> 
                                <div>
                                Dr. en Filosof??a por la Universidad Nacional de C??rdoba. 
Becario Doctoral y Posdoctoral CONICET. Docente de grado, posgrado e 
investigador de la Universidad Nacional de San Juan. Ha coordinado grupos de 
investigaci??n para la Secretar??a de Pol??ticas e Industrias Culturales de San Juan, 
ha dictado seminarios sobre econom??a y cultura para el Consejo Federal de Inversiones (CFI) y 
sobre temas vinculados a Filosof??a Pol??tica, de la T??cnica e Historia del capitalismo 
para el Museo de Bellas Artes Franklin Rawson y el Instituto de Expresi??n Visual (UNSJ). 

Maestrando en Sociolog??a Econ??mica en la Escuela Interdisciplinaria de de Altos 
Estudios Sociales de la Universidad Nacional de San Mart??n (IDAES-UNSAM) , 
donde desarrolla una tesis sobre las nuevas formas del dinero digital. 
Coordinador del C??rculo de Estudios de Econom??a Digital de esa instituci??n.

Sus principales ??reas de investigaci??n son la Filosof??a Pol??tica y 
la Sociolog??a Econ??mica: econom??a digital, dinero, pol??tica y poder.                                    
                                             


                                            </div>
                                        </div>                                     
                                    </div>
                                </div>

    </div> */}
    
    {/* <div className="cont-g-2">
    <div className="cont-prin"> 
                                    <div className="cont-1">
                                                    
                                        <div className="cont-imag-team"> 
                                                <a href="mailto:curasantiago@gmail.com">
                                <img className="imgRedonda" src="/assets/images/team/team-02.jpg" alt="PAblo Gordon"/>
            
                                                </a>                                        
                                        </div>
                                    <div className="cont-text"> 
                                <div>
                                Dr. en Filosof??a por la Universidad Nacional de C??rdoba. 
Becario Doctoral y Posdoctoral CONICET. Docente de grado, posgrado e 
investigador de la Universidad Nacional de San Juan. Ha coordinado grupos de 
investigaci??n para la Secretar??a de Pol??ticas e Industrias Culturales de San Juan, 
ha dictado seminarios sobre econom??a y cultura para el Consejo Federal de Inversiones (CFI) y 
sobre temas vinculados a Filosof??a Pol??tica, de la T??cnica e Historia del capitalismo 
para el Museo de Bellas Artes Franklin Rawson y el Instituto de Expresi??n Visual (UNSJ). 

Maestrando en Sociolog??a Econ??mica en la Escuela Interdisciplinaria de de Altos 
Estudios Sociales de la Universidad Nacional de San Mart??n (IDAES-UNSAM) , 
donde desarrolla una tesis sobre las nuevas formas del dinero digital. 
Coordinador del C??rculo de Estudios de Econom??a Digital de esa instituci??n.

Sus principales ??reas de investigaci??n son la Filosof??a Pol??tica y 
la Sociolog??a Econ??mica: econom??a digital, dinero, pol??tica y poder.                                    
                                             


                                            </div>
                                        </div>                                     
                                    </div>
                                </div>

    </div>
</div>
                


                

<div className="cont-g">
    <div className="cont-g-1">
    <div className="cont-prin"> 
                                    <div className="cont-1">
                                                    
                                        <div className="cont-imag-team"> 
                                                <a href="mailto:curasantiago@gmail.com">
                                <img className="imgRedonda" src="/assets/images/team/team-01.jpg" alt="PAblo Gordon"/>
            
                                                </a>                                        
                                        </div>
                                    <div className="cont-text"> 
                                <div>
                                Dr. en Filosof??a por la Universidad Nacional de C??rdoba. 
Becario Doctoral y Posdoctoral CONICET. Docente de grado, posgrado e 
investigador de la Universidad Nacional de San Juan. Ha coordinado grupos de 
investigaci??n para la Secretar??a de Pol??ticas e Industrias Culturales de San Juan, 
ha dictado seminarios sobre econom??a y cultura para el Consejo Federal de Inversiones (CFI) y 
sobre temas vinculados a Filosof??a Pol??tica, de la T??cnica e Historia del capitalismo 
para el Museo de Bellas Artes Franklin Rawson y el Instituto de Expresi??n Visual (UNSJ). 

Maestrando en Sociolog??a Econ??mica en la Escuela Interdisciplinaria de de Altos 
Estudios Sociales de la Universidad Nacional de San Mart??n (IDAES-UNSAM) , 
donde desarrolla una tesis sobre las nuevas formas del dinero digital. 
Coordinador del C??rculo de Estudios de Econom??a Digital de esa instituci??n.

Sus principales ??reas de investigaci??n son la Filosof??a Pol??tica y 
la Sociolog??a Econ??mica: econom??a digital, dinero, pol??tica y poder.                                    
                                             


                                            </div>
                                        </div>                                     
                                    </div>
                                </div>

    </div> */}
    
    {/* <div className="cont-g-2">
    <div className="cont-prin"> 
                                    <div className="cont-1">
                                                    
                                        <div className="cont-imag-team"> 
                                                <a href="mailto:curasantiago@gmail.com">
                                <img className="imgRedonda" src="/assets/images/team/team-02.jpg" alt="PAblo Gordon"/>
            
                                                </a>                                        
                                        </div>
                                    <div className="cont-text"> 
                                <div>
                                Dr. en Filosof??a por la Universidad Nacional de C??rdoba. 
Becario Doctoral y Posdoctoral CONICET. Docente de grado, posgrado e 
investigador de la Universidad Nacional de San Juan. Ha coordinado grupos de 
investigaci??n para la Secretar??a de Pol??ticas e Industrias Culturales de San Juan, 
ha dictado seminarios sobre econom??a y cultura para el Consejo Federal de Inversiones (CFI) y 
sobre temas vinculados a Filosof??a Pol??tica, de la T??cnica e Historia del capitalismo 
para el Museo de Bellas Artes Franklin Rawson y el Instituto de Expresi??n Visual (UNSJ). 

Maestrando en Sociolog??a Econ??mica en la Escuela Interdisciplinaria de de Altos 
Estudios Sociales de la Universidad Nacional de San Mart??n (IDAES-UNSAM) , 
donde desarrolla una tesis sobre las nuevas formas del dinero digital. 
Coordinador del C??rculo de Estudios de Econom??a Digital de esa instituci??n.

Sus principales ??reas de investigaci??n son la Filosof??a Pol??tica y 
la Sociolog??a Econ??mica: econom??a digital, dinero, pol??tica y poder.                                    
                                             


                                            </div>
                                        </div>                                     
                                    </div>
                                </div>

    </div>
</div>
 */}




{/* <div className="cont-prin">
                                    <div className="cont-1">
                                        <div className="imag-cont">
                                        <img className="imgRedonda" src="/assets/images/team/team-04.jpg" alt="Pablo Gordon"/>
                                        
                                        <div className="text-cont">
                                        <h6>Denise Krepki</h6><p>la mejor editora de todos</p>
                                        </div>
                                        </div>
                                        <div className="cont-text">
                                            
                                            <div>
                                                                                   
Licenciada en Relaciones del Trabajo por la Universidad de Buenos Aires (UBA). 
Se desempe??a como becaria doctoral de la Agencia Nacional de Promoci??n Cient??fica 
y Tecnol??gica con sede en Centro de Estudios e Investigaciones Laborales 
(CEIL-CONICET-Argentina). Doctoranda en Ciencias Antropol??gicas, Facultad de 
Filosof??a y Letras, UBA y parte del Programa de Estudios Cr??ticos sobre el Movimiento 
Obrero (CEIL-CONICET).

Partiendo de estudios enfocados en la antropolog??a del trabajo, investiga 
sobre las pol??ticas de gesti??n empresarial mediadas por las tecnolog??as digitales 
y su incidencia en las condiciones de trabajo y de vida de les trabajadores desarrolladores 
de videojuegos. En particular el caso de la empresa multinacional argentina, Globant, 
situada en la Provincia de Buenos Aires.

Participa desde el a??o 2018 en dos proyectos Agencia Nacional de Promoci??n Cient??fica y 
Tecnol??gica: ???Pol??ticas del management en la disputa hegem??nica: alcances globales y locales???, 
???Sindicalismo: experiencias innovadoras de una nueva generaci??n militante??? y otro, de CONICET-Unidad 
Ejecutora: ???Empresas, trabajadores y sindicatos en contextos de globalizaci??n del capital???.

                                            </div>
                                        </div>                                     
                                    </div>
                                </div>
                           */}
                
                






 
               

                {/* Start cards Area  */}
{/* 
                <div className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        
      <img className="imgRedonda" src="/assets/images/team/team-01.jpg" alt="Pablo Gordon"/>
           
      <h4 className="card-title">Pablo Gordon</h4>
<div className="cont-redes">
     <div> <a href=""><FaTwitter/></a> <a href=""><FaLinkedinIn/></a> 
     <a href=""><FaInstagram/></a> 
       <a href=""><FaFacebookF/></a> </div> 
</div>   
        <p claaName="tama??o-letra">Licenciado en Ciencia Pol??tica por la Universidad de Palermo. 
Asesor legislativo especializado en educaci??n, ciencia, tecnolog??a 
y desarrollo en el ??mbito local y nacional, en la Legislatura de la 
Ciudad Aut??noma de Bs. As. y la C??mara de Diputados.
ciolog??a Econ??mica en la Escuela Interdisciplinaria 
de de Altos Estudios Sociales de la Universidad Nacional de San Mart??n 
(IDAES-UNSAM). Coordinador del C??rculo de Estudios de Econom??a Digital 
de esa instituci??n.

Su ??rea principal de investigaci??n se centra en el estudio de las din??micas 
de transformaci??n de las empresas, los empresarios y las elites econ??micas a 
partir de la expansi??n de la Econom??a Digital. Su actual trabajo de tesis se 
enfoca en las relaciones de conflicto/complementariedad entre las plataformas 
digitales y el s
Maestrando en Soector financiero.</p>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        
      <img className="imgRedonda" src="/assets/images/team/team-02.jpg" alt="Pablo Gordon"/>
           
      <h4 className="card-title">Marco Mallamaci</h4>
<div className="cont-redes">
     <div> <a href=""><FaTwitter/></a> </div> 
     <div>  <a href=""><FaLinkedinIn/></a> </div> 
     <div> <a href=""><FaInstagram/></a> </div> 
     <div>  <a href=""><FaFacebookF/></a> </div> 
</div>   
        <p >Dr. en Filosof??a por la Universidad Nacional de C??rdoba. 
Becario Doctoral y Posdoctoral CONICET. Docente de grado, posgrado e 
investigador de la Universidad Nacional de San Juan. Ha coordinado grupos de 
investigaci??n para la Secretar??a de Pol??ticas e Industrias Culturales de San Juan, 
ha dictado seminarios sobre econom??a y cultura para el Consejo Federal de Inversiones (CFI) y 
sobre temas vinculados a Filosof??a Pol??tica, de la T??cnica e Historia del capitalismo 
para el Museo de Bellas Artes Franklin Rawson y el Instituto de Expresi??n Visual (UNSJ). 

Maestrando en Sociolog??a Econ??mica en la Escuela Interdisciplinaria de de Altos 
Estudios Sociales de la Universidad Nacional de San Mart??n (IDAES-UNSAM) , 
donde desarrolla una tesis sobre las nuevas formas del dinero digital. 
Coordinador del C??rculo de Estudios de Econom??a Digital de esa instituci??n.

Sus principales ??reas de investigaci??n son la Filosof??a Pol??tica y 
la Sociolog??a Econ??mica: econom??a digital, dinero, pol??tica y poder.  </p>
      </div>
    </div>
  </div>
</div> */}
                   {/* End cargo Area  */}




                    {/* Start About Area */}
                 

  {/* <div className="cont-team-1">  
                           
                                <div className="cont-prin"> 
                                    <div className="cont-1">
                                                    
                                        <div className="cont-imag-team"> 
                                                <a href="mailto:curasantiago@gmail.com">
                                <img className="imgRedonda" src="/assets/images/team/team-01.jpg" alt="PAblo Gordon"/>
            
                                                </a>   
                                                
                
                                        </div>
                                    <div className="cont-text"> 
                                <div>
                                Licenciado en Ciencia Pol??tica por la Universidad de Palermo. 
Asesor legislativo especializado en educaci??n, ciencia, tecnolog??a 
y desarrollo en el ??mbito local y nacional, en la Legislatura de la 
Ciudad Aut??noma de Bs. As. y la C??mara de Diputados.
ciolog??a Econ??mica en la Escuela Interdisciplinaria 
de de Altos Estudios Sociales de la Universidad Nacional de San Mart??n 
(IDAES-UNSAM). Coordinador del C??rculo de Estudios de Econom??a Digital 
de esa instituci??n.

Su ??rea principal de investigaci??n se centra en el estudio de las din??micas 
de transformaci??n de las empresas, los empresarios y las elites econ??micas a 
partir de la expansi??n de la Econom??a Digital. Su actual trabajo de tesis se 
enfoca en las relaciones de conflicto/complementariedad entre las plataformas 
digitales y el s
Maestrando en Soector financiero.                                   
                                             


                                            </div>
                                        </div>                                     
                                    </div>
                                </div> */}
                         
                {/* End About Area */}

                {/* Start About Area */}
                 

                 
                                
                {/* <div className="cont-prin"> 
                                    <div className="cont-1">
                                                    
                                        <div className="cont-imag-team"> 
                                                <a href="mailto:curasantiago@gmail.com">
                                <img className="imgRedonda" src="/assets/images/team/team-02.jpg" alt="PAblo Gordon"/>
            
                                                </a>                                        
                                        </div>
                                    <div className="cont-text"> 
                                <div>
                                Dr. en Filosof??a por la Universidad Nacional de C??rdoba. 
Becario Doctoral y Posdoctoral CONICET. Docente de grado, posgrado e 
investigador de la Universidad Nacional de San Juan. Ha coordinado grupos de 
investigaci??n para la Secretar??a de Pol??ticas e Industrias Culturales de San Juan, 
ha dictado seminarios sobre econom??a y cultura para el Consejo Federal de Inversiones (CFI) y 
sobre temas vinculados a Filosof??a Pol??tica, de la T??cnica e Historia del capitalismo 
para el Museo de Bellas Artes Franklin Rawson y el Instituto de Expresi??n Visual (UNSJ). 

Maestrando en Sociolog??a Econ??mica en la Escuela Interdisciplinaria de de Altos 
Estudios Sociales de la Universidad Nacional de San Mart??n (IDAES-UNSAM) , 
donde desarrolla una tesis sobre las nuevas formas del dinero digital. 
Coordinador del C??rculo de Estudios de Econom??a Digital de esa instituci??n.

Sus principales ??reas de investigaci??n son la Filosof??a Pol??tica y 
la Sociolog??a Econ??mica: econom??a digital, dinero, pol??tica y poder.                                    
                                             


                                            </div>
                                        </div>                                     
                                    </div>
                                </div> */}
                         
                {/* End About Area */}

              

                {/* </div> */}
                

                {/* End About Area */}

                

                {/* Start About Area */}
              
                                
                                {/* <div className="cont-prin">
                                    <div className="cont-1">
                                        <div className="imag-cont">
                                        <img className="imgRedonda" src="/assets/images/team/team-04.jpg" alt="Pablo Gordon"/>
                                        
                                        <div className="text-cont">
                                        <h6>Denise Krepki</h6><p>la mejor editora de todos</p>
                                        </div>
                                        </div>
                                        <div className="cont-text">
                                            
                                            <div>
                                                                                   
Licenciada en Relaciones del Trabajo por la Universidad de Buenos Aires (UBA). 
Se desempe??a como becaria doctoral de la Agencia Nacional de Promoci??n Cient??fica 
y Tecnol??gica con sede en Centro de Estudios e Investigaciones Laborales 
(CEIL-CONICET-Argentina). Doctoranda en Ciencias Antropol??gicas, Facultad de 
Filosof??a y Letras, UBA y parte del Programa de Estudios Cr??ticos sobre el Movimiento 
Obrero (CEIL-CONICET).

Partiendo de estudios enfocados en la antropolog??a del trabajo, investiga 
sobre las pol??ticas de gesti??n empresarial mediadas por las tecnolog??as digitales 
y su incidencia en las condiciones de trabajo y de vida de les trabajadores desarrolladores 
de videojuegos. En particular el caso de la empresa multinacional argentina, Globant, 
situada en la Provincia de Buenos Aires.

Participa desde el a??o 2018 en dos proyectos Agencia Nacional de Promoci??n Cient??fica y 
Tecnol??gica: ???Pol??ticas del management en la disputa hegem??nica: alcances globales y locales???, 
???Sindicalismo: experiencias innovadoras de una nueva generaci??n militante??? y otro, de CONICET-Unidad 
Ejecutora: ???Empresas, trabajadores y sindicatos en contextos de globalizaci??n del capital???.

                                            </div>
                                        </div>                                     
                                    </div>
                                </div>
                           */}
                {/* End About Area */}


                {/* <div className="separador">
                    
                </div> */}

                 {/* Start About Area */}
                
                                
                                {/* <div className="cont-prin">
                                    <div className="cont-1">
                                        <h6>Juli??n M??naco</h6>
                                        <div className="cont-text">
                                            
                                            <div>                                        
                                            
Licenciado y profesor en Ciencias de la Comunicaci??n por la 
Universidad de Buenos Aires (UBA) y diplomado en Educaci??n y 
Nuevas Tecnolog??as por la Facultad Latinoamericana de Ciencias 
Sociales (FLACSO). Se desempe??a como becario doctoral del Consejo 
Nacional de Investigaciones Cient??ficas y T??cnicas de la Argentina 
(CONICET) con sede en la Escuela Interdisciplinaria de de Altos 
Estudios Sociales de la Universidad Nacional de San Mart??n (IDAES-UNSAM) .

Investiga las transformaciones en las t??cnicas de comunicaci??n 
en la era de los big data, as?? como el papel protag??nico que la 
producci??n en consumo de los p??blicos adquiere hoy en diferentes 
econom??as. Entre ellas, las llamadas ???econom??as de plataforma???.

En 2019, compil?? junto a Alejandro Pisera el libro Lo que puede 
una escuela. Una construcci??n sin modelos (UNSAM Edita y Mi??o y D??vila). 
Adem??s, colabora con art??culos sobre temas de educaci??n en distintos medios 
nacionales (Le monde diplomatique, Perfil, Tema Uno, M??rgenes). 

                                            </div>
                                        </div>                                     
                                    </div>
                                </div> */}
                          
                {/* End About Area */}


                {/* <div className="separador">
                    
                </div> */}


                {/* Start About Area */}
                
                                
                                {/* <div className="cont-prin">
                                    <div className="cont-1">
                                        <h6>Juli??n Echandi</h6>
                                        <div className="cont-text">
                                            
                                            <div>
                                          
Licenciado en sociolog??a por la Universidad de Buenos Aires 
(UBA). Maestrando en Sociolog??a Econ??mica en la Escuela 
Interdisciplinaria de de Altos Estudios Sociales de la 
Universidad Nacional de San Mart??n (IDAES-UNSAM). Participa 
del C??rculo de Estudios de Econom??a Digital de esa instituci??n.

Sus principales ??reas de estudio son la sociolog??a econ??mica, 
la pol??tica social global y la econom??a digital.

                                            </div>
                                        </div>                                     
                                    </div>
                                </div> */}
                         
                {/* End About Area */}

                {/* <div className="separador">
                    
                </div> */}

                 {/* Start About Area */}
                 
                                
                                {/* <div className="cont-prin">
                                    <div className="cont-1">
                                        <h6>Roc??o Santarcieri</h6>
                                        <div className="cont-text">
                                            
                                            <div>
                                                                                        
Profesora de secundaria y capacitadora docente en tecnolog??a educativa. 
Estudiante de Ciencias Antropol??gicas en la Universidad de Buenos Aires 
(UBA), su tesis aborda el trabajo en desarrollo de software y los efectos 
de la digitalizaci??n sobre las condiciones laborales, desde el campo de la 
Antropolog??a del Trabajo. 

Se especializa en las ??reas de desarrollo web, dise??o gr??fico, comunicaci??n 
digital y metodolog??as ??giles. Ha participado en emprendimientos tecnol??gicos 
y en la organizaci??n de eventos del ??mbito de la educaci??n y la tecnolog??a, 
tales como las Hackathons de Developers for Good, las jornadas de Tensi??n en 
la Red y los proyectos de Clubes TED-Ed, TEDx Joven CNBA, Educatina, Viaedu, 
entre otros.   

Participa desde 2020 en Entramando Saberes, un Programa de Extensi??n de la 
Facultad de Filosof??a y Letras de la UBA, contexto en el que ha participado 
de la escritura de art??culos de difusi??n cient??fica, videos educativos y 
materiales did??cticos. A su vez, en el mismo programa forma parte del proyecto 
FILO: CyT para documentar en formato audiovisual y podcast las experiencias de 
extensi??n universitaria de la misma facultad.

                                            </div>
                                        </div>                                     
                                    </div>
                                </div> */}
                           
                {/* End About Area */}

                {/* <div className="separador">
                    
                </div> */}

                {/* Start Team Area  */}
                {/* <div className="rn-team-wrapper ptb--120 bg_color--1">
                    <div className="rn-team-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center mb--30">
                                        <h2>Tambien nos encontras en las redes</h2>
                                        <p>podes hacernos llegar tus ideas.</p>
                                    </div>
                                </div>
                            </div>
                            <TeamOne column="col-lg-3" teamStyle="team-style--bottom" item="8" />
                        </div>
                    </div>
                </div> */}
                {/* End Team Area  */}

              

                  





                  {/* <article className="contact_devs">
       <article style="display: flex; justify-content: center; flex-wrap: wrap;"> 
        <a href="mailto:curasantiago@gmail.com">
            <img className="imgRedonda" src="/assets/images/team/team-01.jpg" alt="Santiago Cura"/>
            <p>curasantiago@gmail.com</p>
        </a>
        <a href="mailto:carlosarielmaldonado@gmail.com">
            <img className="imgRedonda" src="/assets/images/team/team-02.jpg" alt="Carlos Maldonado"/>
            <p>carlosarielmaldonado@gmail.com</p>
        </a>
        <a href="mailto:guillermojkatz@gmail.com">
            <img className="imgRedonda" src="/assets/images/team/team-03.jpg"alt="Guillermo Katz"/>
            <p>guillermojkatz@gmail.com</p>
        </a>
        </article> */}


{/* 
<div className="cont-g">
    <div className="cont-g-1">
    <div className="cont-prin"> 
                                    <div className="cont-1">
                                        <p className="tap">coordinador<br/>pgordon@gmail.com</p>
                                        
                                                    
                                        <div className="cont-imag-team"> 
                                                <a href="mailto:curasantiago@gmail.com">
                                <img className="imgRedonda" src="/assets/images/team/team-01.jpg" alt="PAblo Gordon"/>
            
                                                </a>                                        
                                        </div>
                                    <div className="cont-text"> 
                                <div>
                                Dr. en Filosof??a por la Universidad Nacional de C??rdoba. 
Becario Doctoral y Posdoctoral CONICET. Docente de grado, posgrado e 
investigador de la Universidad Nacional de San Juan. Ha coordinado grupos de 
investigaci??n para la Secretar??a de Pol??ticas e Industrias Culturales de San Juan, 
ha dictado seminarios sobre econom??a y cultura para el Consejo Federal de Inversiones (CFI) y 
sobre temas vinculados a Filosof??a Pol??tica, de la T??cnica e Historia del capitalismo 
para el Museo de Bellas Artes Franklin Rawson y el Instituto de Expresi??n Visual (UNSJ). 

Maestrando en Sociolog??a Econ??mica en la Escuela Interdisciplinaria de de Altos 
Estudios Sociales de la Universidad Nacional de San Mart??n (IDAES-UNSAM) , 
donde desarrolla una tesis sobre las nuevas formas del dinero digital. 
Coordinador del C??rculo de Estudios de Econom??a Digital de esa instituci??n.

Sus principales ??reas de investigaci??n son la Filosof??a Pol??tica y 
la Sociolog??a Econ??mica: econom??a digital, dinero, pol??tica y poder.                                    
                                             


                                            </div>
                                        </div>                                     
                                    </div>
                                </div>

    </div>

    </div> */}

                

            </main>
            {/* End Page Wrapper  */}
            

             {/* Start Back To Top */}
             <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
            
            {/* Start Footer Area  */}
            <FooterTwo />
            {/* End Footer Area  */}

        </>
        
    )
}

export default Team