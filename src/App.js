import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbarr from './components/navbar';
import Feat1 from './components/whyus'
import Feat1p2 from './components/whyus2'
import Feat2 from './components/howitworks'
import Feat2p2 from './components/howitworks2'
import HeroSection from './components/hero';
import CardGrid from './components/cardgrid';
// import BasicExample from  './components/cardsu';
import TestiMonials from './components/TestiMonials';
import $ from 'jquery';
import JustifiedExample from './components/tabs2'; 
import ResponsiveAutoExample from'./components/seemorepage.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Seemore from "./components/seemorepage";
import Home from "./components/Home";
import AboutUs from "./components/about";
import Footer from './components/footer';






function App() {
// When the user begins to scroll, the code detects the top and bottom of the viewport, then checks each tag section element for whether the tag is inside the viewport (i.e., visible on the screen).
// If the section element is in view, it assigns it the class visible (which, if you’ll remember, has an opacity of 1). If the section element is not in view, it removes the visible class from this section element.

  $(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".tag");
  
    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];
  
      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible");
      } else {
        $(tag).removeClass("visible");
      }
    }
  });


  return (
    <>
  
    <nav>
      <Navbarr />
      
    </nav>

    <header>
    {/* <HeroSection /> */}
    </header>
    <main>
      {/* <Home /> */}
      <Routes>
        
    
    <Route path="/" element={ <Home/> } />
    <Route path="/aboutus" element={ <AboutUs/> } />
    <Route path="/seemore" element={ <Seemore/> } />
    
      </Routes>
    </main>

    {/* <Routes>
    <main>
    
        <div className="tag">
            <CardGrid />
            <div className="App">
    
          
        <Route path="/seemore" element={ <Seemore/> } />
       
     
     
    </div>
        </div>
          <br/> 
          
      <div className='feat-cont'>
        <div className="tag">
            <Feat1/>
            <Feat1p2/>
        </div>
          <br/>
        <div className="tag">
            <Feat2/>
            <Feat2p2/>
        </div>
      </div>

      <div className="tag">
      <TestiMonials></TestiMonials>
      </div>
      
    </main>
    </Routes> */}
    <footer>
      <div className="tag">
          <Footer />
      </div>
    </footer>
    </>
    
  );
}

export default App;
