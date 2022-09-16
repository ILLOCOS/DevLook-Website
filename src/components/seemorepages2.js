import '../components/css/seemore1.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import wc3 from '../components/Images/wcc3.gif';
import wc4 from '../components/Images/wcc4.gif';
import wc2 from '../components/Images/wcc2.gif';
import wc1 from '../components/Images/wc1.gif';
import wc5 from '../components/Images/wcc5.gif';

function ClientInfo() {
  return (
    <div className='hero2'>
      <div className='contt'>
        <Container>
          <Row id="cl-why">
            <Col lg={true} className="head">
              <h1 >WHY WORK WITH US?  </h1>
              <h2>You can have the best people. Right here. Right now!</h2>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col lg={true}><h3 className='s-head'>What's great about it?</h3></Col>
          </Row>
          
          <Row>
          <Col lg={true}>
            <Stack gap={1}>
              <div className="stackk "> <i class="fa fa-check-square-o" aria-hidden="true"></i> PROOF OF QUALITY
                <p className="stack-p"> Quantacell has by far the largest pool of quality freelancers globally- over 50 million to choose from. Connect to freelancers with proven business experience, work with in-demand global talent who are at the top of their field! </p>
              </div>
              
              <div className="stackk "> <i class="fa fa-check-square-o" aria-hidden="true"></i> SAFE AND SECURE
              <p className="stack-p"> Use our collaboration tools to work efficiently with your freelancer. Share files, chat in real-time, monitor progress, and so much more. Keep up-to-date and on-the-go with our time tracker, be in control and keep in contact.</p>
              </div>
          </Stack>
            </Col>
        <Col lg={true}>
        <Stack gap={1}>

              <div className="stackk "> <i class="fa fa-check-square-o" aria-hidden="true"></i>  FASTLANE TO THE RIGHT TALENT
              <p className="stack-p"> We are here to help match you with the best talent for your team! Find professionals you can trust by browsing their portfolios and reading their profile reviews. We will provide a pre-vetted shortlist of the best matches from our global talent community. </p>
              </div>
              
              <div className="stackk "> <i class="fa fa-check-square-o" aria-hidden="true"></i> 24/7 SUPPORT
              <p className="stack-p"> Quantacell is a community that values your trust and safety as our number one priority. Our round-the-clock support team is available to help and assist you with any issues anytime, anywhere. </p>
              </div>
          </Stack>
        </Col>
      </Row>

          <Row>
            <Col lg={true}>
              <img src={wc2} className="w-gif" responsive />
            </Col>
          </Row>
          </Container>
 </div> 
    <div className='cont2'>
    <Container>
          <Row id="cl-how">
            <Col lg={true} className="head" >
            <h1>HOW IT WORKS  </h1>
            <h2>Get anything done, exactly how you want it. Turn that spark of an idea into reality.</h2>
            </Col>
          </Row>
          <Row>
            <Col lg={true}><h3 className='s-head'>Choose from endless possibilities!</h3></Col>
          </Row>

          <Row>
        <Col lg={true} className='t-headd '>
        <Stack gap={2}>
          <div className="satckk border">
             <strong className="num"> 1. </strong> 
             <strong className="t-num">  Meet with the Talent Acquisition Team  </strong>
             <p className="stack-p">Give us the details about your project and set up a time to talk with our Talent Acquisition (TALA) Team . They know our talent community and can help match your business needs to the right professionals.</p>
          </div>
          <div className="satckk  border">
             <strong className="num">2.  </strong> 
             <strong className="t-num">  Receive a Shortlist    </strong>
             <p className="stack-p">After you meet, our TALA Team will provide a shortlist of top matches based on your needs. They get to know each person individually, assessing whether their hard and soft skills will be the right fit for your team.</p>
             
          </div>
          <div className="satckk border">
             <strong className="num"> 3.  </strong> 
             <strong className="t-num">  Choose the perfect Fit </strong>
             <p className="stack-p"> Contact and interview your top choices with our TALA Team. Browse freelancer profiles. Chat in real-time. Compare proposals and select the best one. Award your project and your freelancer starts work.</p>
          </div>
      </Stack>
    </Col>
    <Col lg={true} className='t-headd ' >
        <img src={wc5} className="h-gif" responsive />
    </Col>
      </Row>

        </Container>
        
    </div>
    </div>
  );
}

function TalentInfo() {
    return (
      <div className='hero2'>
      <div className='contt'>
        <Container>
          <Row id="cl-why">
            <Col lg={true} className="head">
              <h1 >WHY WORK WITH US?  </h1>
              <h2>You can have the best people. Right here. Right now!</h2>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col lg={true}><h3 className='s-head'>Blending Innovation in the Right Portion!</h3></Col>
          </Row>
          
          <Row>
          <Col lg={true}>
            <Stack gap={1}>
              <div className="stackk "> <i class="fa fa-check-square-o" aria-hidden="true"></i> LEARN AS YOU WORK
                <p className="stack-p"> Quantacell has by far the largest pool of quality freelancers globally- over 50 million to choose from. Connect to freelancers with proven business experience, work with in-demand global talent who are at the top of their field! </p>
              </div>
              
              <div className="stackk "> <i class="fa fa-check-square-o" aria-hidden="true"></i> GROW YOUR CAREER
              <p className="stack-p"> Use our collaboration tools to work efficiently with your freelancer. Share files, chat in real-time, monitor progress, and so much more. Keep up-to-date and on-the-go with our time tracker, be in control and keep in contact.</p>
              </div>
          </Stack>
            </Col>
        <Col lg={true}>
        <Stack gap={1}>

              <div className="stackk "> <i class="fa fa-check-square-o" aria-hidden="true"></i>  LET THE WORK FIND YOU
              <p className="stack-p"> We are here to help match you with the best talent for your team! Find professionals you can trust by browsing their portfolios and reading their profile reviews. We will provide a pre-vetted shortlist of the best matches from our global talent community. </p>
              </div>
              
              <div className="stackk "> <i class="fa fa-check-square-o" aria-hidden="true"></i> FIND SUPPORT
              <p className="stack-p"> Quantacell is a community that values your trust and safety as our number one priority. Our round-the-clock support team is available to help and assist you with any issues anytime, anywhere. </p>
              </div>
          </Stack>
        </Col>
      </Row>

          <Row>
            <Col lg={true}>
              <img src={wc2} className="w-gif" responsive />
            </Col>
          </Row>
          </Container>
 </div> 
    <div className='cont2'>
    <Container>
          <Row id="cl-how">
            <Col lg={true} className="head" >
            <h1>HOW IT WORKS  </h1>
            <h2>Get anything done, exactly how you want it. Turn that spark of an idea into reality.</h2>
            </Col>
          </Row>
          <Row>
            <Col lg={true}><h3 className='s-head'>Choose from endless possibilities!</h3></Col>
          </Row>

          <Row>
        <Col lg={true} className='t-headd '>
        <Stack gap={2}>
          <div className="satckk border">
             <strong className="num"> 1. </strong> 
             <strong className="t-num">  Meet with the Talent Acquisition Team  </strong>
             <p className="stack-p">Give us the details about your project and set up a time to talk with our Talent Acquisition (TALA) Team . They know our talent community and can help match your business needs to the right professionals.</p>
          </div>
          <div className="satckk  border">
             <strong className="num">2.  </strong> 
             <strong className="t-num">  Receive a Shortlist    </strong>
             <p className="stack-p">After you meet, our TALA Team will provide a shortlist of top matches based on your needs. They get to know each person individually, assessing whether their hard and soft skills will be the right fit for your team.</p>
             
          </div>
          <div className="satckk border">
             <strong className="num"> 3.  </strong> 
             <strong className="t-num">  Choose the perfect Fit </strong>
             <p className="stack-p"> Contact and interview your top choices with our TALA Team. Browse freelancer profiles. Chat in real-time. Compare proposals and select the best one. Award your project and your freelancer starts work.</p>
          </div>
      </Stack>
    </Col>
    <Col lg={true} className='t-headd ' >
        <img src={wc5} className="h-gif" responsive />
    </Col>
      </Row>

        </Container>
        
    </div>
    </div>
    );
  }

export  {ClientInfo, TalentInfo};