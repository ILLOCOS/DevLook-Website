import '../components/css/whyus.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Feat1() {
  return (
    <Container>
      <Row>
        <Col className='w-title'>
          <h3>WHY WORK WITH US</h3>
          <div className='w-head' > 
          You can have the best people. Right here.Right now. 
          {/* Access expert talent to fill your skill gaps! */}
          </div>
          <br/>
        </Col>
      </Row>
    </Container>

    
  );
}

export default Feat1;