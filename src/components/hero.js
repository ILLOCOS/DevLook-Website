import Carousel from 'react-bootstrap/Carousel';
import Himage from "./Images/cpic1.jpg";
import Himage2 from "./Images/cpic2.jpg";
import Himage3 from "./Images/cpic3.jpg";
import "./css/carousel.css";

function CarouselFadeExample() {
  return (
    <Carousel fade controls={false}>
      <Carousel.Item interval={1000}>

      <img  className="d-block w-100" style={{height:'100vh',width:'100%',aspectRatio:'1/1'}} src={Himage }  alt="First slide"/>

        <Carousel.Caption style={{bottom:'10rem',textShadow: '2px 2px black'}}>
          <h1>First slide label</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>

        <img
          className="d-block w-100"
          style={{height:'100vh',width:'100%',aspectRatio:'1/1'}} src={Himage2 }
          alt="Second slide"
        />

        <Carousel.Caption style={{bottom:'10rem',textShadow: '2px 2px black'}}>
          <h1>Second slide label</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>

        <img
          className="d-block w-100"
          style={{height:'100vh',width:'100%',aspectRatio:'1/1'}} src={Himage3 }
          alt="Third slide"
        />

        <Carousel.Caption style={{bottom:'10rem',textShadow: '2px 2px black',backgroundColor: 'black'}}>
          <h1>Third slide label</h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;