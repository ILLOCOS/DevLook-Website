import '../components/css/tabs.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

  import {ClientInfo,TalentInfo} from './seemorepages2';

  
function TabsProto() {
  return (   
   <Router>
    <Tabs 
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
        >
      <Tab eventKey="client" title="Client">
      <Link to="/"> CLIENTS</Link>
      </Tab>
      <Tab eventKey="talent" title="Talent">
      <Link to="/talent">TALENTS</Link>
      </Tab>
      <Routes>
          <Route exact path="/" element={<Clients />}/>
            
          <Route path="/talent" element ={<Talents/>}/>
           
        </Routes>
      
    </Tabs>
    </Router>
  );
  
}
function Clients() {
    return (
      <div>
        <ClientInfo />
      </div>
    );
  }
  
  function Talents() {
    return (
      <div>
       <TalentInfo />
      </div>
    );
  }

export {TabsProto, 
    Clients, Talents};