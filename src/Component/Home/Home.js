import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav,Card} from 'react-bootstrap';
import transportData from '../Data/Data.json'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Transport from '../Transport/Transport';
import Header from '../Header/Header';


const Home = () => {
    const [transport, setTransport] = useState([]);
    useEffect(() => {
        setTransport(transportData);
      }, [])
//Login Part//
     
    return (
        <div>
          
             {
               <Header/>
             }
           
            
   <div className="row row-cols-3">
      {
        transport.map(transports => <Transport transports={transports}></Transport>)
      }
</div>


        </div>
    );
};

export default Home;