import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ClientInfo() {
  return (
    <Container>
      <Row>
        <Col md={12}><h1>CHOOSE FROM ENDLESS POSSIBILITIES</h1></Col>
        
      </Row>
      <Row>
        <Col md={12}><h5>Get anything done, exactly how you want it. Turn that spark of an idea into reality.</h5></Col>
        
      </Row>
      <Row>
        <Col md><div><h3>Proof of Quality</h3></div></Col>
        <Col md><div><h3>Safe and Secure</h3></div></Col>
        <Col md><div><h3>Take the fastlane to the right talent</h3></div></Col>
        <Col md><div><h3>24/7 support</h3></div></Col>
      </Row>
    </Container>
  );
}

function TalentInfo() {
    return (
      <Container>
        <Row>
          <Col md={12}><h1>CHOOSE FROM ENDLESS POSSIBILITIES</h1></Col>
          
        </Row>
        <Row>
          <Col md={12}><h5>Get anything done, exactly how you want it. Turn that spark of an idea into reality.</h5></Col>
          
        </Row>
        <Row>
          <Col md><div><h3> Learn as you work</h3></div></Col>
          <Col md><div><h3>Grow your career</h3></div></Col>
          <Col md><div><h3>Let the Work Find You</h3></div></Col>
          <Col md><div><h3>24/7 support</h3></div></Col>
        </Row>
      </Container>
    );
  }

export  {ClientInfo, TalentInfo};