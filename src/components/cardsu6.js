import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Himage2 from "./Images/cpic2.jpg";
import './css/cardsu.css'
import React from 'react';


var sectionStyle = {
    backgroundImage: `url(${Himage2})`,
    width: '18rem',
    backgroundSize: 'cover',
    backgroundPosition:'center',
  }

function Card6() {
  return (
    <Card className = "card" style={sectionStyle}>
    
      <Card.Body className = "card-content">
        <Card.Title className = "card-title">Business</Card.Title>
        <Card.Text className = "card-body">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Card6;