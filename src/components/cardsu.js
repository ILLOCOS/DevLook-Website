import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Himage3 from "./Images/cpic3.jpg";
import './css/cardsu.css'

function BasicExample() {
  return (
    <Card className = "card" style={{ width: '18rem'}}>
    
      <Card.Body className = "card-content">
        <Card.Title className = "card-title">Card Title</Card.Title>
        <Card.Text className = "card-body">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;