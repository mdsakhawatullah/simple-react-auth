import React from 'react';
import { Card } from 'react-bootstrap';

const TransportDetail = (props) => {
    const{name,image} = props.transport;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      
    </Card.Text>
    
  </Card.Body>
</Card>
        </div>
    );
};

export default TransportDetail;