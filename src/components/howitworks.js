import '../components/css/howitworks.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Feat2() {
  return (
    <Container>
      <Row>
        <Col className='h-title'>
            <h3>HOW IT WORKS</h3>
          <div className='h-head'> 
                 Get anything done, exactly how you want it. Turn that spark of an idea into reality.
          </div>
          <br/>
        </Col>
      </Row>
    </Container>
    
  );
}

export default Feat2;