import '../components/css/seemore1.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Talented from './tabs3'; 
import React from 'react'
import bv from '../components/Images/bv2.mp4'

function Talent() {
  return (
    <>
  <header>
    <div className="hero2">
    <video loop muted autoPlay playsInline className='bv'>
        <source src={bv} type="video/mp4" />
      </video>
    </div>
    
    {/* <div className='cont'>
    <Container>
    <Row>
        <Col md={12}>
          <h1>WHY WORK WITH US?  </h1>
          <h2>You can have the best people. Right here. Right now!</h2>
        </Col>
      </Row>
      </Container>
    </div> */}
    
    </header>
    
     <main>
    <div className='tabs'>
          <Talented />
          </div>
    </main>
    </>
  );
}

export default Talent;