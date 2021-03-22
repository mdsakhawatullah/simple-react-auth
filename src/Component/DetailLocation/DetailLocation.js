import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import TransportDetail from '../TransportDetail/TransportDetail';
import './DetailLocation.css';
import data from '../Data/Data.json'
const DetailLocation = () => {
    const [location, setLocation] = useState("");
    useEffect(() => {
        setLocation(data);
      }, [])
    return (

 <>
   
   <div class="logo"><h1>City Bus Service</h1></div>
   <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>From</Form.Label>
    <Form.Control type="text" placeholder="Enteryour location" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>To</Form.Label>
    <Form.Control type="text" placeholder="Enteryour location" />
  </Form.Group>

  <Button onClick={ 
      <TransportDetail /> 
    } variant="primary" type="submit">
    Submit
  </Button>
</Form>



 </>      
    

    );
};

export default DetailLocation;