import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor,FiHeadphones, FiArchive,FiBox } from "react-icons/fi";

const ServiceList = [
    {
        // icon: <FiCast />,
        icon: <FiBox />,
        title: 'INVESTIGACION',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
        
    },
    {
        // icon: <FiLayers />,
        icon:<FiHeadphones/>,
        title: 'PODCAST',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        // icon: <FiUsers />,
        icon: <FiArchive />,
        title: 'ARTICULOS',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    { 
        icon: <FiLayers />,
        title: 'NOTAS BREVES',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiMonitor />,
        title: 'NOTICIAS',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    { 
        icon: <FiUsers/>,
        title: 'ACTIVIDADES',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    }
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href="/service-details">
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
