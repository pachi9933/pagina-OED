import React from 'react'
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import FooterTwo from "../component/footer/FooterTwo";
import TestimonialOne from "./testimonial/TestimonialOne";
import TestimonialTwo from "./testimonial/TestimonialTwo";

import { Link } from 'react-router-dom';

const Testimonial = () => {
    return (
        <>
            <PageHelmet pageTitle='Articulos y Notas' />
            {/* Start Header Area  */}
            <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
            {/* End Header Area  */}

            {/* Start Breadcrump Area */}
            <Breadcrumb title={'Articulos y Notas'}   />
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

        

                {/* Start Testimonia Area  */}
                {/* <div className="rn-testimonial-area bg_color--1 ptb--120">
                    <div className="container">
                        <TestimonialOne />
                    </div>
                </div> */}
                {/* End Testimonia Area  */}

                {/* Start Testimonia Area  */}
                {/* <div className="rn-testimonial-area">
                    <div className="container">
                        <TestimonialTwo />
                    </div>
                </div> */}
                {/* End Testimonia Area  */}
            {/* <div className="cont-gral"> 
                
                <div className="rn-columns-area ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="single-column custom-color">
                                    <h4 className="tilte">One Third</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12 mt_sm--30">
                                <div className="single-column custom-color custom-color--1">
                                    <h4 className="tilte">One Third</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12 mt_sm--30 mt_md--30">
                                <div className="single-column custom-color custom-color--2">
                                    <h4 className="tilte">One Third</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
                {/* End Page Wrapper  */}
                


                {/* inicio articulos  */}
        <div className="container">
        <div className="container">
					<div className="row issue-section__header">
													<h2 class="col-md-6 col-lg-3 issue-section__title">Artículos</h2>
                          <div>
                            
                          </div>

            <div className="row">
				          
            </div>
          </div>  
        </div>     
        </div>

        <div className="container-archivo"> 

            <div className="row">
				          <div class="col-md-8 offset-md-4">
							          <p class="article__meta">Lucas Llach</p>
			
			                        <h4 class="article__title">
			                            <Link to="/counters">Rica, pero no tan moderna: Argentina antes de la Depresión</Link>
			                        </h4>
							                 
                                <div className="portfolio-button">
                                  <a className="rn-btn" href="#">pdf</a> <a className="rn-btn" href="#">Share</a>
                                </div>
					        </div>
            </div>

        </div> 
        <div className="container-archivo"> 

<div className="row">
      <div class="col-md-8 offset-md-4">
            <p class="article__meta">Lucas Llach</p>

                  <h4 class="article__title">
                      <a href="">Rica, pero no tan moderna: Argentina antes de la Depresión</a>
                  </h4>
                   
                    <div className="portfolio-button">
                      <a className="rn-btn" href="#">pdf</a>
                    </div>
      </div>
</div>

</div> 
<div className="container-archivo"> 

<div className="row">
      <div class="col-md-8 offset-md-4">
            <p class="article__meta">Lucas Llach</p>

                  <h4 class="article__title">
                      <a href="">Rica, pero no tan moderna: Argentina antes de la Depresión</a>
                  </h4>
                   
                    <div className="portfolio-button">
                      <a className="rn-btn" href="#">pdf</a>
                    </div>
      </div>
</div>

</div> 
<div className="container-archivo"> 

<div className="row">
      <div class="col-md-8 offset-md-4">
            <p class="article__meta">Lucas Llach</p>

                  <h4 class="article__title">
                      <a href="">Rica, pero no tan moderna: Argentina antes de la Depresión</a>
                  </h4>
                   
                    <div className="portfolio-button">
                      <a className="rn-btn" href="#">pdf</a>
                    </div>
      </div>
</div>

</div> 
<div className="container-archivo"> 

<div className="row">
      <div class="col-md-8 offset-md-4">
            <p class="article__meta">Lucas Llach</p>

                  <h4 class="article__title">
                      <a href="">Rica, pero no tan moderna: Argentina antes de la Depresión</a>
                  </h4>
                   
                    <div className="portfolio-button">
                      <a className="rn-btn" href="#">pdf</a>
                    </div>
      </div>
</div>

</div> 
            {/* End articulos */}

            {/* End articulos */}
            <div className="cont-pag">
<div className="cont-pag-1">
<div className="cont-pag-2">

<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>

</div>
</div>
</div>

            

            {/* End articulos */}
            <div className="container-autores"> 
                <div className="portfolio-button">
                        <a className="rn-btn" href="/gallery">AUTORES</a>
                </div>
            </div>
            {/* End articulos */}

            <div className="cubo-notas">
            <div className="container">
        <div className="container">
					<div className="row issue-section__header">
													<h2 class="col-md-6 col-lg-3 issue-section__title">Notas</h2>
                          <div>
                            
                          </div>

            <div className="row">
				          {/* <div class="col-md-8 offset-md-4">
							          <p class="article__meta">Lucas Llach</p>
			
			                        <h4 class="article__title">
			                            <a href="">Rica, pero no tan moderna: Argentina antes de la Depresión</a>
			                        </h4>
							                  <ul class="article__btn-group">
											                  <li>
                                            <a class="article__btn pdf" href="">PDF</a>
						                            </li>
									              </ul>
					        </div> */}
            </div>
          </div> 
        </div>     
        </div>
        <div className="container-archivo"> 

<div className="row">
      <div class="col-md-8 offset-md-4">
            <p class="article__meta">Lucas Llach</p>

                  <h4 class="article__title">
                      <a href="">Rica, pero no tan moderna: Argentina antes de la Depresión</a>
                  </h4>
                   
                    <div className="portfolio-button">
                      <a className="rn-btn" href="#">pdf</a>
                    </div>
      </div>
</div>

</div> 
<div className="container-archivo"> 

<div className="row">
      <div class="col-md-8 offset-md-4">
            <p class="article__meta">Lucas Llach</p>

                  <h4 class="article__title">
                      <a href="">Rica, pero no tan moderna: Argentina antes de la Depresión</a>
                  </h4>
                   
                    <div className="portfolio-button">
                      <a className="rn-btn" href="#">pdf</a>
                    </div>
      </div>
</div>

</div> 
<div className="container-archivo"> 

<div className="row">
      <div class="col-md-8 offset-md-4">
            <p class="article__meta">Lucas Llach</p>

                  <h4 class="article__title">
                      <a href="">Rica, pero no tan moderna: Argentina antes de la Depresión</a>
                  </h4>
                   
                    <div className="portfolio-button">
                      <a className="rn-btn" href="#">pdf</a>
                    </div>
      </div>
</div>

</div> 
<div className="container-archivo"> 

<div className="row">
      <div class="col-md-8 offset-md-4">
            <p class="article__meta">Lucas Llach</p>

                  <h4 class="article__title">
                      <a href="">Rica, pero no tan moderna: Argentina antes de la Depresión</a>
                  </h4>
                   
                    <div className="portfolio-button">
                      <a className="rn-btn" href="#">pdf</a>
                    </div>
      </div>
</div>

</div> 
<div className="container-archivo"> 

<div className="row">
      <div class="col-md-8 offset-md-4">
            <p class="article__meta">Lucas Llach</p>

                  <h4 class="article__title">
                      <a href="">Rica, pero no tan moderna: Argentina antes de la Depresión</a>
                  </h4>
                   
                    <div className="portfolio-button">
                      <a className="rn-btn" href="#">pdf</a> 
                    </div>
      </div>
</div>

</div> 
           

            
            {/* End articulos */}



																					
                
{/* <div className="row row-cols-1 row-cols-md-3 g-4">
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
  
</div> */}


                {/* End Page Wrapper  */}

                

<div className="cont-pag">
<div className="cont-pag-1">
<div className="cont-pag-2">

<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>

</div>
</div>
</div>


</div>
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

export default Testimonial
