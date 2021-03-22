import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Transport = (props) => {
    const{name,image} = props.transports;
    return (
        <>  
      
        <div  className="col-md-3 my-3">
        <Card>
        <Card.Img className="p-5" variant="top" style ={{height:'250px'}} src={image} />
         <Card.Body>
        <div className="text-center">
      <Card.Title>{name}</Card.Title>
             <Card.Text> 
             <a style={{fontSize:'22px'}} href=""><Link to="/destination"> Hire Me <FontAwesomeIcon icon={faArrowRight}/></Link></a> 
           </Card.Text>
    
                </div>
            </Card.Body>
        </Card>
        </div>
    
       </> 
    );
};

export default Transport;