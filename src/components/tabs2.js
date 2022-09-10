import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import{ 
    Clients, Talents} from './tabs';
    import {ClientInfo,TalentInfo} from './seemorepages2'

function JustifiedExample() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <ClientInfo/>
      <Tab eventKey="client" title="Clients">
        <Clients />
        
       
      </Tab>
      <Tab eventKey="talent" title="Talents">
      <Talents />
      </Tab>
      {/* <Tab eventKey="longer-tab" title="Loooonger Tab">
        <Feat2 />
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        <Feat2 />
      </Tab> */}
    </Tabs>
  );
}

export default JustifiedExample;