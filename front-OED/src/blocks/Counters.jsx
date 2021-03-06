import React from 'react'
import TeamOne from "./team/TeamOne";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import CounterOne from "../elements/counters/CounterOne";
import CounterTwo from "../elements/counters/CounterTwo";

import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn, FaYoutube, FaTelegramPlane, FaFilePdf} from "react-icons/fa";


import { Link } from 'react-router-dom';

// import Footer from "../component/footer/Footer";
import FooterTwo from "../component/footer/FooterTwo";

const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/'},
    // {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/'},
    {Social: <FaYoutube /> , link: 'https://youtube.com/'},
    {Social: <FaTelegramPlane /> , link: 'https://telegram.com/'},
]

const Counters = () => {
    return (
        <>
            <PageHelmet pageTitle='OED' />

            {/* Start Header Area  */}
            <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
            {/* End Header Area  */}
            
            {/* Start Breadcrump Area */}
            <Breadcrumb title={'OED'}   />
            {/* End Breadcrump Area */}

            {/* Start Page Wrapper  */}
            <main className="page-wrapper">



            <div className="cont-prin">
                <div className="cont-1">
{/* css counterup.scss */}
<div className="box-face"> 
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


                    <div className="cont-text">
                   <img src= '/assets/images/about/notima.jpeg'></img>                  
                            
                    </div>                                     
                </div>
            </div>



            <div className="cont-prin">
                <div className="cont-1">
                    <div className="cont-te">
                        <div className="nots1"> Por: Pablo Gordon</div>
                        <div className="nots2"><Link><FaFilePdf/></Link></div>
                        <div className="nots3">compartir F I T T</div>    
                    </div>                                     
                </div>
                <div className="titulo"><h3>ESTE ES EL TITULO DE LA NOTA</h3></div> 
            </div>



      


            {/* Start texto notas area  */}

            <div className="cont-prin">
                <div className="cont-1">
                    <div className="cont-textos">


                       

                                                             
         
                                         
       <p> Desde que la plataforma Glovo anunci?? su decisi??n de ???retirarse??? de la Argentina, el 16 de septiembre de este a??o, la noticia escal?? en los medios y redes sociales de este pa??s. En rigor, dicha empresa vendi?? sus operaciones en toda Latinoam??rica al holding de origen alem??n Delivery Hero, dando cierre a un proceso de reacomodamiento estrat??gico en el que estaba avanzando ya desde enero de este a??o cuando abandon?? sus posiciones en Puerto Rico, Uruguay, Turqu??a y Egipto[i] para re-concentrarse en el mercado europeo.
            ??A qu?? responden estos movimientos y c??mo operan este tipo de empresas? ??Qui??nes son los jugadores involucrados? ??Qu?? cambios trae aparejados este nuevo escenario?
Mundo e-delivery

Nick Srnicek[ii] define a las plataformas, de manera muy general, como infraestructuras digitales que permiten que dos o m??s grupos interact??en. De modo m??s espec??fico, este tipo de empresas han sido clasificadas anal??ticamente de manera diversa. Ese mismo autor, por ejemplo, las categoriza seg??n los modos en que este modelo de negocios extrae y utiliza los datos. Otros estudios[iii] presentan una primera divisi??n amplia seg??n su finalidad ??? colaborativa o bajo demanda ??? o su factor productivo ??? capital-intensivo o trabajo-intensivo. Tambi??n se las diferencia por el tipo de servicio que prestan ??? virtual o f??sico ???, as?? como por el nivel de calificaci??n, de acuerdo al grado de complejidad del trabajo requerido[iv]. Desde una perspectiva antropol??gica, el investigador Luis Reygadas[v] se concentra m??s bien en las diferentes formas de interacci??n que se generan en la econom??a digital y se producen en estas plataformas, y construye un mosaico heterog??neo que va desde el intercambio rec??proco sin fines de lucro, hasta la explotaci??n y el rentismo. 
            En cualquier caso, el auge de las empresas digitales es un proceso todav??a reciente que dificulta la configuraci??n de clasificaciones definitivas. No obstante, en relaci??n con las plataformas de delivery, que se han multiplicado alrededor del mundo durante la ??ltima d??cada, es posible se??alar al menos tres rasgos caracter??sticos en cuanto a: 1) el origen de su capital inicial; 2) el tipo de relaci??n laboral que establecen con sus trabajadoras y trabajadores; y 3) cierta l??gica particular de negocios.
            Respecto al primer punto, estas empresas suelen buscar sus primeros fondos en el mundo financiero. La pr??ctica habitual es presentar un proyecto de negocios en rondas de financiaci??n ??? a la que acuden capitales de riesgo, bancos u empresas digitales, entre otros actores ??? donde intentan atraer las inversiones necesarias para comenzar a funcionar. En este caso, Glovo, de origen espa??ol con casa matriz en Barcelona, se fund?? en 2015 y logr?? obtener algo m??s de dos millones de euros[vi] en sus dos primeras rondas, ??se mismo a??o.
            La cuesti??n laboral es bastante m??s conocida dado los crecientes reclamos de las y los trabajadores, los conflictos judiciales que estos suscitan en distintos pa??ses del mundo y los relatos y an??lisis que exponen la relaci??n de hiper-flexiblidad y precariedad que las plataformas establecen con sus repartidoras y repartidores ??? a quienes no reconocen como sujetos bajo relaci??n de dependencia y, por lo tanto, les niegan derechos laborales ???. En Argentina, Glovo desembarc?? en 2018 y para comienzo de 2020 contaba, seg??n la propia empresa[vii], con unos ocho mil ???glovers??? a quienes se refer??a no como empleadas o empleados, sino como ???partners???.
Lo anterior est?? directamente ligado al ??ltimo de los rasgos enumerados. El modelo de negocios de este tipo espec??fico de plataformas est?? guiado por dos principios b??sicos: la expansi??n acelerada y la hiper-externalizaci??n.

 El primero refiere a una pr??ctica concreta: un desembarco fren??tico que produzca r??pidos efectos multiplicadores. Esto es, arribar a un mercado, t??picamente urbano, que en brev??simo tiempo permita sumar grandes cantidades de usuarios ??? por lo general a trav??s de servicios que se ofrecen gratuitamente ??? para provocar un alto flujo de datos. Mientras m??s personas interact??en en la plataforma ??? m??s comercios, m??s compradores, m??s repartidoras y repartidores, etc. ??? y actividad se registre, m??s ??til, eficiente y atractiva para otros nuevos usuarios se vuelve. Esto es lo que se denomina ???efecto de red???, una l??gica que tiene entre sus resultados la consolidaci??n de posiciones de mercado dominantes. Merced a este mecanismo, la plataforma puede incrementar sus ingresos por el cobro de comisiones a los comercios adheridos, tanto por su creciente cantidad num??rica como por el aumento progresivo de su costo, que esa posici??n les permite ??? en torno al 25 % del valor de cada venta. Pero, adem??s, y fundamentalmente, permite que la empresa aumente su valorizaci??n. Esto ??ltimo significa elevar el valor burs??til de las firmas que cotizan en bolsa, as?? como el potencial valor de venta. Entre otras razones, de aqu?? se desprende la pr??ctica habitual de crear startup???s con el objetivo de crecer r??pido y vender pronto.
Finalmente, la hiper-externalizaci??n indica al menos tres elementos del proceso de producci??n de los que las plataformas se desacoplan: la fuerza laboral, el capital fijo y el mantenimiento.   
La ausencia de regulaciones espec??ficas que protejan los derechos laborales de las repartidoras y los repartidores posibilita que estas empresas se ahorren los costos laborales ??? salarios, coberturas de riesgo, cargas sociales, etc. En id??ntico sentido, las y los trabajadores, dado que son identificados como ???asociados???, se ven obligados a aportar las herramientas b??sicas para desarrollar su tarea: celulares ??? con planes de datos a su cargo ???; veh??culos ??? bicicletas o motos ???; y hasta las cajas donde transportan los productos, que, si bien son brindadas por la empresa, deben alquilarse. Ocurre lo propio con las cargas de mantenimiento de estos instrumentos, que recae sobre las y los trabajadores. Estas pr??cticas son las que caracterizan a algunas de las clasificaciones mencionadas al comienzo y ubican a estas empresas de reparto on-demand en la categor??a de ???plataformas austeras???, seg??n Srnicek, o a estos intercambios en el tipo ???rentistas???, en palabras de Reygadas.
El mercado en Argentina hoy
            Como puede deducirse de lo anterior, la venta de Glovo est?? m??s asociada a la propia din??mica de estas plataformas, que a coyunturas pol??ticas, sociales, culturales o econ??micas de la regi??n; la que tambi??n implica un cuadro de disputa entre nuevos jugadores que emergen, crecen y compiten por las porciones de mercado logradas a partir de los efectos de red.
En efecto, Glovo fue adquirida, por un valor de 230 millones de euros[viii], por Delivery-Hero, uno de los holdings l??deres de este modelo empresarial con presencia, a trav??s de diversas marcas, en m??s de seiscientas ciudades de cuatro continentes[ix]. Esta misma compa????a hab??a adquirido Pedidos Ya ??? la aplicaci??n de delivery con mayor inserci??n en Argentina ??? en 2014[x].
Seg??n un estudio de la consultora Focus-Market[xi], en el contexto de pandemia y durante la etapa de Aislamiento Social Preventivo y Obligatorio, el total de env??os de las aplicaciones m??s importantes se distribuy?? entre Pedidos Ya (en un 40%), Rappi (en un 15%), Glovo (en un 10%) y Uber eats (en un 7%) ??? donde el porcentaje restante correspondi?? al reparto individual de los propios comercios y aplicaciones m??s peque??as.
La adquisici??n de Glovo, por parte de la misma empresa que es due??a de Pedidos Ya, modifica este cuadro y representa un crecimiento de Pedidos Ya que podr??a otorgarle una potencial posici??n de liderazgo en torno al 50% de la totalidad del mercado. 
En resumen, estos movimientos conllevan a un cambio de escenario que parece afirmar dos tendencias de mediano plazo que integran las l??gicas descriptas: la supervivencia de solo unos pocos grandes jugadores y, con ello, la concentraci??n de mercados.</p> 
                            
                    </div>                                     
                </div>
            </div>
 
            
             {/* End texto notas Area */}
  

                {/* Start Counterup Area */}
                {/* <div className="counterup-area ptb--120 bg_color--1">
                    <div className="container">
                        <CounterOne />
                    </div>
                </div> */}
                {/* End Counterup Area */}


                {/* Start Counterup Area */}
                {/* <div className="counterup-area ptb--120 bg-theme-gradient theme-text-white">
                    <div className="container">
                        <CounterOne />
                    </div>
                </div> */}
                {/* End Counterup Area */}

                {/* Start Counterup Area */}
                {/* <div className="counterup-area ptb--120 bg_color--1">
                    <div className="container">
                        <CounterTwo />
                    </div>
                </div> */}
                {/* End Counterup Area */}

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

export default Counters