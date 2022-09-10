import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Himage from "./images/cpic1.jpg";
import './css/cardsu.css'
import React from 'react';


var sectionStyle = {
    backgroundImage: `url(${Himage})`,
    width: '18rem',
    backgroundSize: 'cover',
    backgroundPosition:'center-left',
    
  }

function Card8() {
  return (
    <Card className = "card" style={sectionStyle}>
    
      <Card.Body className = "card-content">
        <Card.Title className = "card-title">Writing & Translation</Card.Title>
        <Card.Text className = "card-body">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Card8;