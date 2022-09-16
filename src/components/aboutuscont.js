import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import React from 'react';

function AboutUsContent() {
  return (
    
    <div className='abouts'>
    <Container style={{paddingTop: "10rem"}}>
      <Stack gap={5}>

      <Row>
        <Col lg={true} className="head"><h1>About Us</h1></Col>
        
      </Row>
      <Container fluid="lg" className="abt">

      <Row>
      <Col gap={1} lg={true}>
      <div > 
      <h4 className = "abth">Assured Services</h4>
       <p className="abtp">We guarantee only the best Service</p>
      </div>
        </Col>
      <Col gap={1} lg={true}>
      <div > 
      <h4 className = "abth">Worldwide Clients</h4>
      <p className="abtp" >We are trusted by Clients Globally</p>
      </div>
        </Col>
      <Col gap={1} lg={true}>
      <div > 
      <h4 className = "abth">Go-To Talent and Service Provider</h4>
      <p className="abtp" >The number 1 place for tech services and talents</p>
     </div>
        </Col>
      <Col gap={1} lg={true}>
        <div > 
        <h4 className = "abth">It's All About The Customer</h4>
    <p className="abtp" > Here at Quantacell we put the customers first and we guarantee your satsifaction</p>
    </div>
      </Col>
      </Row>
      </Container>
      
      <Row>
      
          <Col gap={1} lg={true}>
            <Stack gap={5}>
              <div className="stackk "> <i class="fa fa-check-square-o" aria-hidden="true"></i> Creating Ideas with Passion
                <p className="stack-p"> Quantacell has by far the largest pool of quality freelancers globally- over 50 million to choose from. Connect to freelancers with proven business experience, work with in-demand global talent who are at the top of their field! </p>
              </div>
              
              <div className="stackk "> <i class="fa fa-check-square-o" aria-hidden="true"></i> On-Time & Within Budget
              <p className="stack-p"> Use our collaboration tools to work efficiently with your freelancer. Share files, chat in real-time, monitor progress, and so much more. Keep up-to-date and on-the-go with our time tracker, be in control and keep in contact.</p>
              </div>
          </Stack>
            </Col>
        <Col gap={1} lg={true}>
        <Stack gap={5}>

              <div className="stackk "> <i class="fa fa-check-square-o" aria-hidden="true"></i>  Mission
              <p className="stack-p"> We are here to help match you with the best talent for your team! Find professionals you can trust by browsing their portfolios and reading their profile reviews. We will provide a pre-vetted shortlist of the best matches from our global talent community. </p>
              </div>
              
              <div className="stackk "> <i class="fa fa-check-square-o" aria-hidden="true"></i> 24/7 Vision
              <p className="stack-p"> Quantacell is a community that values your trust and safety as our number one priority. Our round-the-clock support team is available to help and assist you with any issues anytime, anywhere. </p>
              </div>
          </Stack>
        </Col>
      </Row>
      </Stack>
          
    </Container>
    </div>

   
  
  );
}

export default AboutUsContent;