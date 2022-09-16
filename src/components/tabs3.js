import '../components/css/tabs.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


import{ 
    Clients, Talents} from './tabs';
    // import {ClientInfo, TalentInfo} from './seemorepages2'

function Talented() {
  // const DEFAULT_ACTIVE_TAB = "Client";
  // const {active_tab} = useParams();
  // const history = useNavigate();
  
  // useEffect(() => {
  //     if(!active_tab){
  //         history.push(`/${DEFAULT_ACTIVE_TAB}`);
  //     }
  // }, []);

  // const toggle = tab => {
  //    if (active_tab !== tab) {
  //         history.push(`/${tab}`);
  //    }
  // }

  return (
    
    <Tabs
    defaultActiveKey="talent" id="btn1" className="btn1" 
    justify >
 

  
    <Tab eventKey="client" title="CLIENTS" className="slide">

      <Clients />
      
     
    </Tab>

    <Tab eventKey="talent" title="TALENTS" className="slide">

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

export default Talented;