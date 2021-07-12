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


                       

                                                             
         
                                         
       <p> Desde que la plataforma Glovo anunció su decisión de “retirarse” de la Argentina, el 16 de septiembre de este año, la noticia escaló en los medios y redes sociales de este país. En rigor, dicha empresa vendió sus operaciones en toda Latinoamérica al holding de origen alemán Delivery Hero, dando cierre a un proceso de reacomodamiento estratégico en el que estaba avanzando ya desde enero de este año cuando abandonó sus posiciones en Puerto Rico, Uruguay, Turquía y Egipto[i] para re-concentrarse en el mercado europeo.
            ¿A qué responden estos movimientos y cómo operan este tipo de empresas? ¿Quiénes son los jugadores involucrados? ¿Qué cambios trae aparejados este nuevo escenario?
Mundo e-delivery

Nick Srnicek[ii] define a las plataformas, de manera muy general, como infraestructuras digitales que permiten que dos o más grupos interactúen. De modo más específico, este tipo de empresas han sido clasificadas analíticamente de manera diversa. Ese mismo autor, por ejemplo, las categoriza según los modos en que este modelo de negocios extrae y utiliza los datos. Otros estudios[iii] presentan una primera división amplia según su finalidad – colaborativa o bajo demanda – o su factor productivo – capital-intensivo o trabajo-intensivo. También se las diferencia por el tipo de servicio que prestan – virtual o físico –, así como por el nivel de calificación, de acuerdo al grado de complejidad del trabajo requerido[iv]. Desde una perspectiva antropológica, el investigador Luis Reygadas[v] se concentra más bien en las diferentes formas de interacción que se generan en la economía digital y se producen en estas plataformas, y construye un mosaico heterogéneo que va desde el intercambio recíproco sin fines de lucro, hasta la explotación y el rentismo. 
            En cualquier caso, el auge de las empresas digitales es un proceso todavía reciente que dificulta la configuración de clasificaciones definitivas. No obstante, en relación con las plataformas de delivery, que se han multiplicado alrededor del mundo durante la última década, es posible señalar al menos tres rasgos característicos en cuanto a: 1) el origen de su capital inicial; 2) el tipo de relación laboral que establecen con sus trabajadoras y trabajadores; y 3) cierta lógica particular de negocios.
            Respecto al primer punto, estas empresas suelen buscar sus primeros fondos en el mundo financiero. La práctica habitual es presentar un proyecto de negocios en rondas de financiación – a la que acuden capitales de riesgo, bancos u empresas digitales, entre otros actores – donde intentan atraer las inversiones necesarias para comenzar a funcionar. En este caso, Glovo, de origen español con casa matriz en Barcelona, se fundó en 2015 y logró obtener algo más de dos millones de euros[vi] en sus dos primeras rondas, ése mismo año.
            La cuestión laboral es bastante más conocida dado los crecientes reclamos de las y los trabajadores, los conflictos judiciales que estos suscitan en distintos países del mundo y los relatos y análisis que exponen la relación de hiper-flexiblidad y precariedad que las plataformas establecen con sus repartidoras y repartidores – a quienes no reconocen como sujetos bajo relación de dependencia y, por lo tanto, les niegan derechos laborales –. En Argentina, Glovo desembarcó en 2018 y para comienzo de 2020 contaba, según la propia empresa[vii], con unos ocho mil “glovers” a quienes se refería no como empleadas o empleados, sino como “partners”.
Lo anterior está directamente ligado al último de los rasgos enumerados. El modelo de negocios de este tipo específico de plataformas está guiado por dos principios básicos: la expansión acelerada y la hiper-externalización.

 El primero refiere a una práctica concreta: un desembarco frenético que produzca rápidos efectos multiplicadores. Esto es, arribar a un mercado, típicamente urbano, que en brevísimo tiempo permita sumar grandes cantidades de usuarios – por lo general a través de servicios que se ofrecen gratuitamente – para provocar un alto flujo de datos. Mientras más personas interactúen en la plataforma – más comercios, más compradores, más repartidoras y repartidores, etc. – y actividad se registre, más útil, eficiente y atractiva para otros nuevos usuarios se vuelve. Esto es lo que se denomina “efecto de red”, una lógica que tiene entre sus resultados la consolidación de posiciones de mercado dominantes. Merced a este mecanismo, la plataforma puede incrementar sus ingresos por el cobro de comisiones a los comercios adheridos, tanto por su creciente cantidad numérica como por el aumento progresivo de su costo, que esa posición les permite – en torno al 25 % del valor de cada venta. Pero, además, y fundamentalmente, permite que la empresa aumente su valorización. Esto último significa elevar el valor bursátil de las firmas que cotizan en bolsa, así como el potencial valor de venta. Entre otras razones, de aquí se desprende la práctica habitual de crear startup’s con el objetivo de crecer rápido y vender pronto.
Finalmente, la hiper-externalización indica al menos tres elementos del proceso de producción de los que las plataformas se desacoplan: la fuerza laboral, el capital fijo y el mantenimiento.   
La ausencia de regulaciones específicas que protejan los derechos laborales de las repartidoras y los repartidores posibilita que estas empresas se ahorren los costos laborales – salarios, coberturas de riesgo, cargas sociales, etc. En idéntico sentido, las y los trabajadores, dado que son identificados como “asociados”, se ven obligados a aportar las herramientas básicas para desarrollar su tarea: celulares – con planes de datos a su cargo –; vehículos – bicicletas o motos –; y hasta las cajas donde transportan los productos, que, si bien son brindadas por la empresa, deben alquilarse. Ocurre lo propio con las cargas de mantenimiento de estos instrumentos, que recae sobre las y los trabajadores. Estas prácticas son las que caracterizan a algunas de las clasificaciones mencionadas al comienzo y ubican a estas empresas de reparto on-demand en la categoría de “plataformas austeras”, según Srnicek, o a estos intercambios en el tipo “rentistas”, en palabras de Reygadas.
El mercado en Argentina hoy
            Como puede deducirse de lo anterior, la venta de Glovo está más asociada a la propia dinámica de estas plataformas, que a coyunturas políticas, sociales, culturales o económicas de la región; la que también implica un cuadro de disputa entre nuevos jugadores que emergen, crecen y compiten por las porciones de mercado logradas a partir de los efectos de red.
En efecto, Glovo fue adquirida, por un valor de 230 millones de euros[viii], por Delivery-Hero, uno de los holdings líderes de este modelo empresarial con presencia, a través de diversas marcas, en más de seiscientas ciudades de cuatro continentes[ix]. Esta misma compañía había adquirido Pedidos Ya – la aplicación de delivery con mayor inserción en Argentina – en 2014[x].
Según un estudio de la consultora Focus-Market[xi], en el contexto de pandemia y durante la etapa de Aislamiento Social Preventivo y Obligatorio, el total de envíos de las aplicaciones más importantes se distribuyó entre Pedidos Ya (en un 40%), Rappi (en un 15%), Glovo (en un 10%) y Uber eats (en un 7%) – donde el porcentaje restante correspondió al reparto individual de los propios comercios y aplicaciones más pequeñas.
La adquisición de Glovo, por parte de la misma empresa que es dueña de Pedidos Ya, modifica este cuadro y representa un crecimiento de Pedidos Ya que podría otorgarle una potencial posición de liderazgo en torno al 50% de la totalidad del mercado. 
En resumen, estos movimientos conllevan a un cambio de escenario que parece afirmar dos tendencias de mediano plazo que integran las lógicas descriptas: la supervivencia de solo unos pocos grandes jugadores y, con ello, la concentración de mercados.</p> 
                            
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