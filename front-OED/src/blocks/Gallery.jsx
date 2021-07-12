import React, { Component } from 'react'
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/FooterTwo";

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
  

const PortfolioList = [
    {
        images: '7',
        category: 'Freelancer',
        title: 'The Language of Developer'
    },
    {
        images: '1',
        category: 'Freelancer',
        title: 'The new Thinking for Design'
    },
    {
        images: '2',
        category: 'Freelancer',
        title: 'The new Thinking for Design'
    },
    {
        images: '3',
        category: 'Freelancer',
        title: 'Getting tickets to the big show'
    },
    {
        images: '8',
        category: 'Freelancer',
        title: 'You can see your Portfolio'
    },
    {
        images: '9',
        category: 'Freelancer',
        title: 'Getting tickets to the big show'
    },
]
   

const TabOne = [
    {
        image: '01',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-01.jpg',
        category: '1-	Regulaciones de la Economía Digital en el Contexto Argentino:',
        title: 'se propone relevar y sistematizar el conjunto de normativas vigentes relacionadas con la regulación de la economía digital en el país, comenzado por las leyes de alcance nacional y del ámbito de la Ciudad Autónoma de Buenos Aires.'
           
    },
    {
        image: '02',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-02.jpg',
        category: '2-	Dinero Digital y Sistemas Criptomonetarios:',
        title: 'se plantea explorar los mecanismos dinerarios de la economía digital, en particular en torno al ecosistema financiero y las plataformas de pagos conformados luego de la aparición de las criptomonedas, mediante el relevamiento y análisis de los conflictos regulatorios, los posicionamientos de instituciones como el Banco Central y las estrategias de los sectores que impulsan dichos sistemas monetarios descentralizados, con foco en las particularidades del contexto argentino.'
    },
    {
        image: '03',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-03.jpg',
        category: '3-	Trabajo y Empresas:',
        title: 'se procura, por un lado, analizar los modos de organización del trabajo en espacios vinculados al sector de servicios informáticos (SSI) de la Argentina y, por otro, identificar y analizar las prácticas y estrategias económicas de las empresas de tecnología de origen nacional y sus miembros fundadores, centrándose en las compañías denominadas “unicornios argentinos”. '
    },
    {
        image: '04',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-04.jpg',
        category: '4-	Aplicaciones, Interacciones Digitales y Nuevas Experticias:',
        title: 'se busca construir una genealogía reciente de las apps, explorar y sistematizar los diferentes tipos de interacciones que éstas proponen a los usuarios, así como analizar y describir los diferentes saberes, experiencias y herramientas puestas en juego por los sujetos cuya tarea se despliega, precisamente, alrededor de la producción de datos a partir de esas interacciones – programadores y data-scientist, entre otros –.'
    },
]

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab1: 0,
            isOpen: false,
        };
    }
    render() {
        const { tab1, isOpen } = this.state;
        return (
            <div>

            <PageHelmet pageTitle='INVESTIGACION' />

            {/* Start Header Area  */}
            <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
            {/* End Header Area  */}
            
            {/* Start Breadcrump Area */}
            <Breadcrumb title={'Investigacion'}   />
            {/* End Breadcrump Area */}

            {/* Start Page Wrapper  */}
            <main className="page-wrapper">


                {/* Start About Area */}
                {/* <div className="about-area ptb--120 bg_color--5" id="about">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center"> */}
                                
                                <div className="cont-prin">
                                    <div className="cont-1">
                                        <div className="cont-text">
                                                                              
                                          <p> Los siguientes ejes se desarrollan a partir del trabajo descentralizado de cada uno de los 
                                        y las integrantes del equipo en consonancia con los temas de especialización de sus 
                                        tesis y/o becas de investigación. La planificación de tareas implica la presentación 
                                        de avances a lo largo del ciclo anual, reuniones de coordinación, reelaboración e 
                                        intercambio, y resultados finales al cierre de cada semestre. Sobre esta base se 
                                        plantea elaborar informes específicos de cada línea de investigación para su publicación, 
                                        así como notas de opinión, artículos u otros instrumentos. </p> 
                            
                                        </div>                                     
                                    </div>
                                </div>
                            {/* </div>
                        </div>
                    </div>
                </div> */}
                {/* End About Area */}

                {/* Start Portfolio Area  */}
                <div className="rn-portfolio-area ptb--120 bg_color--1 line-separator">
                    <div className="container">
                        <div className="row">
                            {TabOne.map((value , index) => (
                                <div className="col-lg-6" key={index}>
                                    {isOpen && (
                                        <Lightbox
                                            mainSrc={TabOne[tab1].bigImage}
                                            nextSrc={TabOne[(tab1 + 1) % TabOne.length]}
                                            prevSrc={TabOne[(tab1 + TabOne.length - 1) % TabOne.length]}
                                            onCloseRequest={() => this.setState({ isOpen: false })}
                                            onMovePrevRequest={() =>
                                            this.setState({
                                                tab1: (tab1 + TabOne.length - 1) % TabOne.length,
                                            })
                                            }
                                            onMoveNextRequest={() =>
                                                this.setState({
                                                    tab1: (tab1 + 1) % TabOne.length,
                                                })
                                            }
                                        /> 
                                    )}
                                    <div className="item-portfolio-static">
                                        <div onClick={() => this.setState({ isOpen: true, tab1: index })}>
                                            <div className="portfolio-static">
                                                <div className="thumbnail-inner">
                                                    <div className="thumbnail">
                                                        <a href="#portfolio-details">
                                                            <img src={`/assets/images/portfolio/dp-portfolio-${value.image}.jpg`} alt="imvestigacion"/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <div className="inner">
                                                        <h4>{value.category}</h4>
                                                        <p><a href="#">{value.title}</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Portfolio Area  */}

                {/* Start Portfolio Area  */}
                {/* <div className="creative-portfolio-wrapper ptb--120 bg_color--1">
                    <div className="container plr--10">
                        <div className="row row--5">
                            {PortfolioList.map((value , i ) => (
                                <div className="col-lg-4 col-md-6 col-12" key={i}>
                                    <div className="portfolio-style--3">
                                        <div className="thumbnail">
                                            <a href="#">
                                                <img className="w-100" src={`/assets/images/portfolio/portfolio-${value.images}.jpg`} alt="Portfolio Images"/>
                                            </a>
                                        </div>
                                        <div className="content">
                                            <p className="portfoliotype">{value.category}</p>
                                            <h4 className="title"><a href="/portfolio-details">{value.title}</a></h4>
                                            <div className="portfolio-btn">
                                                <a className="rn-btn text-white" href="#">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}
                {/* End Portfolio Area  */} 

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
            <Footer />
            {/* End Footer Area  */}                
            </div>
        )
    }
}


export default Gallery;