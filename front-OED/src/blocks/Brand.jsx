import React from 'react'
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import FooterTwo from "../component/footer/FooterTwo";
import BrandOne from "../elements/Brand";
import BrandTwo from "../elements/BrandTwo";

const Brand = () => {
    return (
        <>
            <PageHelmet pageTitle='Noticias' />

            {/* Start Header Area  */}
            <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
            {/* End Header Area  */}
            
            {/* Start Breadcrump Area */}
            <Breadcrumb title={'Noticias'}   />
            {/* End Breadcrump Area */}

            {/* Start Page Wrapper  */}
            <main className="page-wrapper">
                


                  {/* Start Search area */}
                  <div className="buscar-cont">
                        <div className="buscar-semi-cont">
                                                   
                                <input type="text" id="#" name="" placeholder="Buscar"/>
                                                                                                             
                        </div> 
                </div>    
                {/* End Search area  */}



                    {/* End Page Wrapper  */}
                
<div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card">
      <img src="/assets/images/about/about-3333.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">articulo</h5>
        <p className="card-text">Una revolucion laboral silenciosa en el mundo del teletrabajo</p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card">
      <img src="/assets/images/about/about-3333.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">articulo</h5>
        <p className="card-text">Glovo:¿quien se va, quien viene y quien se queda con que?</p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card">
      <img src="/assets/images/about/about-3333.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">articulo</h5>
        <p className="card-text">El laberinto encriptado de la moneda.                     </p>
      </div>
    </div>
  </div>
  
</div>


                {/* End Page Wrapper  */}



                    {/* End Page Wrapper  */}
                
<div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card">
      <img src="/assets/images/about/about-3333.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">articulo</h5>
        <p className="card-text">Una revolucion laboral silenciosa en el mundo del teletrabajo</p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card">
      <img src="/assets/images/about/about-3333.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">articulo</h5>
        <p className="card-text">Glovo:¿quien se va, quien viene y quien se queda con que?</p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card">
      <img src="/assets/images/about/about-3333.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">articulo</h5>
        <p className="card-text">El laberinto encriptado de la moneda.                     </p>
      </div>
    </div>
  </div>
  
</div>


                {/* End Page Wrapper  */}
                {/* Start Brand Area  */}
                {/* <div className="rn-brand-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandOne branstyle="branstyle--2" />
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* End Brand Area  */}
                
                {/* Start Brand Area  */}
                {/* <div className="rn-brand-area brand-separation bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandTwo />
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* End Brand Area  */}
                
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
            <FooterTwo/>
            {/* End Footer Area  */}

        </>
        
    )
}

export default Brand;