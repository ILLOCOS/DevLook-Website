import '../components/css/whyus.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Feat1p2() {
  let navigate = useNavigate();
  return (
   
    <Container>
    
      <Row>
        <Col lg={true} className='t-head bg-light border'>For Clients
        <Stack gap={1}>
          <div className="satck bg-light border"> <i class="fa fa-check-square-o" aria-hidden="true"></i> Proof of Quality</div>
          <div className="satck bg-light border"> <i class="fa fa-check-square-o" aria-hidden="true"></i> Safe and Secure</div>
          <div className="satck bg-light border"> <i class="fa fa-check-square-o" aria-hidden="true"></i> Take the fastlane to the right talent</div>
          <div className="satck bg-light border"> <i class="fa fa-check-square-o" aria-hidden="true"></i> 24/7 support</div>
      </Stack>
    </Col>
        <Col lg={true} className='t-head '>For Talents
        <Stack gap={1}>
          <div className="satck "> <i class="fa fa-check-square-o" aria-hidden="true"></i> Learn as you work</div>
          <div className="satck "> <i class="fa fa-check-square-o" aria-hidden="true"></i> Grow your career</div>
          <div className="satck "> <i class="fa fa-check-square-o" aria-hidden="true"></i> Let the work find you</div>
          <div className="satck "> <i class="fa fa-check-square-o" aria-hidden="true"></i> Find support</div>
      </Stack>
    </Col>
      </Row>
      <br/>
      <Row>

       
         {/* <button 
         onClick={() =>{
          navigate("/seemore");
        }} >
          see more
        </button> */}
        <Button variant="outline-secondary" className="seebtn"><Link to ="/seemore">seemore</Link></Button>
          

      </Row>
      <br/> <br/>
    </Container>

    
  );
}

export default Feat1p2;