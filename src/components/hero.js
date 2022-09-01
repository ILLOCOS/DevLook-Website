import Carousel from 'react-bootstrap/Carousel';
import Himage from "./Images/cpic1.jpg";
import Himage2 from "./Images/cpic2.jpg";
import Himage3 from "./Images/cpic3.jpg";
import "./css/carousel.css";

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item interval={1000}>

      <img  className="d-block w-100" style={{height:'100vh',width:'100%'}} src={Himage }  alt="First slide"/>

        <Carousel.Caption className = "c_cap" >
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>

        <img
          className="d-block w-100"
          style={{height:'100vh',width:'100%'}} src={Himage2 }
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>

        <img
          className="d-block w-100"
          style={{height:'100vh',width:'100%'}} src={Himage3 }
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;