import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

//style
import './css/footer.css'
import Container from 'react-bootstrap/esm/Container';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function footer() {
  return (
    <MDBFooter className='footer_container text-center' color='white'>
      <MDBContainer className='p-4'>
        <p className='pt-2' id='topp'>
          <strong>Keep in touch with us</strong>
        </p>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.twitter.com/' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.google.com/' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.github.com/' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'  id='mail'>
                  <strong>Sign up to receive great offers and event updates straight to your mailbox!</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start='12'>
                <MDBInput contrast type='email' label='Email address' className='mb-4' placeholder='Please enter your e-mail address'/>
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Stay informed
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
            voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>
<hr/>
        <section className='mb-4' >
          <Container>
            <Row>
              <h5 className='text-uppercase' id='cont'>CONTACT US</h5>
            </Row>
            <Row>
              <Col lg='4' md='5' className='mb-4 mb-md-0' id='col2'>
                <a href='#!' className='text-white'>
                  <i class="fa fa-mobile"> </i> +63(2)4171267 / +63(918)8792611  <br/> 
                  <i class="fa fa-phone"> </i> (02) 536-6510 / (02) 536-6511 
                  </a>
              </Col>
              <Col lg='4' md='5' className='mb-4 mb-md-0' id='col2'>
              <a href='#!' className='text-white'>
              <i class="fa fa-envelope"></i> quantacell.ph@gmail.com
                  </a>
              </Col>
              <Col lg='4' md='5' className='mb-4 mb-md-0' id='col2'>
              <a href='#!' className='text-white'>
                  <i class="fa fa-map-marker"></i>  8th Avenue cor. 35th Street, North Bonifacio Triangle,  Bonifacio Global City, Taguig City 1635
                  </a>
              </Col>
            </Row>
          </Container>
        </section>

      <hr/>
        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='5' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Quantacell</h5>
            <p className='ul-p'> 
              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Home
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Find Talents
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Join our Team
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    About Us
                  </a>
                </li>
              </ul></p>
            </MDBCol>

            <MDBCol lg='3' md='5' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>For the Clients</h5>
              <p className='ul-p'> 
              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Why Work with Us
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    How Does it Work
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Client TestiMonials
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  FAQ
                  </a>
                </li>
              </ul></p>
            </MDBCol>

            <MDBCol lg='3' md='5' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>For the Talents</h5>
              <p className='ul-p'> 
              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Why Join Our Team
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    How Do I Start
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    FAQ
                  </a>
                </li>
              </ul></p>
            </MDBCol>

            <MDBCol lg='3' md='5' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>RESOURCES</h5>
              <p className='ul-p'> 
              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                   Privacy Policy
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Fees and Charges
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Help and Support
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Terms of Service
                  </a>
                </li>
              </ul></p>
            </MDBCol>


          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' id='copyryt'>
        © 2022 Copyright:
        <a className='text-white' href='index.html'>
        <span> QuantaCell.com by</span>
        </a>
        <span> Audax, Ebenezer, Mark Nixon, and Princess</span>
      </div>
    </MDBFooter>
  );
}
