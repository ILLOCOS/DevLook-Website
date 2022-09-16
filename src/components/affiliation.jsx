import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//styles
import './css/affiliation.css'

//images
import $917 from './Images/917_logo.svg'
import $Google from './Images/Google_logo.png'
import $Amazon from './Images/Amazon_logo.png'
import $Accenture from './Images/Accenture_logo.png'
import $Meta from './Images/Meta_Platforms_Inc._logo.png'
import $Microsoft from './Images/Microsoft_logo.svg'
import $Nvidia from './Images/Nvidia_logo.png'
import $Concati from './Images/Concati_logo.png'
import $PlayStation from './Images/PlayStation_logo.png'
import $Nintendo from './Images/Nintendo_logo.png'
import $Xbox from './Images/Xbox_logo.png'


const affiliation = () => {
  return (
    <>

    <section className='affil-container'>
      <div className='affil-wrapper'>
        <h2 className='affil-heading'>Our Trusted Partners and Organizations</h2>
        <p className='affil-paragraph'>
        We're trusted by 2,000,000+ companies.
        </p>
      </div>
    
      <Container>
      <Row>
        <Col lg={3} md={6}>
            <a href='https://917ventures.com/'>
              <img className='affil-logo' src={$917} alt="917Ventures" title='917Ventures' width='200'/>
            </a>
        </Col>
        <Col lg={3} md={6}>
            <a href='https://google.com/'>
              <img className='affil-logo' src={$Google} alt="Google" title='Google' width='150'/>
            </a>
        </Col>
        <Col lg={3} md={6}>
            <a href='https://aws.amazon.com/'>
              <img className='affil-logo' src={$Amazon} alt="Amazon Web Services" title='Amazon Web Services' width='150'/>
            </a>
        </Col>
        <Col lg={3} md={6}>
            <a href='https://www.accenture.com/ph-en'>
              <img className='affil-logo' src={$Accenture} alt="Accenture" title='Accenture' width='150'/>
            </a>
        </Col>
      </Row>
      <Row>
        <Col lg={3} md={6}>
            <a href='https://about.facebook.com/'>
              <img className='affil-logo' src={$Meta} alt="Meta" title='Meta' width='150'/>
            </a>
        </Col>
        <Col lg={3} md={6}>
            <a href='https://www.microsoft.com/en-ph'>
              <img className='affil-logo' src={$Microsoft} alt="Microsoft" title='Microsoft' width='150'/>
            </a>
        </Col>
        <Col lg={3} md={6}>
            <a href='https://www.nvidia.com/en-us/'>
              <img className='affil-logo' src={$Nvidia} alt="Nvidia" title='Nvidia' width='150' />
            </a>
        </Col>
        <Col lg={3} md={6}>
            <a href='https://concati.com/'>
              <img className='affil-logo' src={$Concati} alt="Concati" title='Concati' width='120' height='50' />
            </a>
        </Col>
      </Row>
      <Row>
        <Col lg={4} md={6}>
            <a href='https://playstation.com/'>
              <img className='affil-logo' src={$PlayStation} alt="PlayStation" title='PlayStation' height='50'/>
            </a>
        </Col>
        <Col lg={4} md={6}>
            <a href='https://nintendo.com/'>
              <img className='affil-logo' src={$Nintendo} alt="Nintendo" title='Nintendo' height='50'/>
            </a>
        </Col>
        <Col lg={4} md={12}>
            <a href='https://xbox.com/'>
              <img className='affil-logo' src={$Xbox} alt="Xbox" title='Xbox' height='50'/>
            </a>
        </Col>
      </Row>
    </Container>
    </section>
    </>
  )
}

export default affiliation;