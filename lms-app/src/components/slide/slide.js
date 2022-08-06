import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './slide.css'

function slide() {
  return (
    <div className='hey'>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://content.techgig.com/photo/80158672/top-4-web-development-trends-in-2021.jpg?119426"
          alt="First slide"
          width="100" height="600"
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://reciprocity.com/wp-content/uploads/2019/02/Cybersecurity-Blue.jpg"
          alt="Second slide"
          width="100" height="600"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://stackify.com/wp-content/uploads/2017/12/Featured.jpg"
          alt="Third slide"
          width="100" height="600"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
   

    
  );
}

export default slide;
// <img width="100%" src="https://picsum.photos/800/600?random=3" alt=' '/>
//