import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css';

const Slider = () => {
  return (
    <div className='Slidess'>
  
	<Carousel>
		<Carousel.Item interval={5000}>
            <h1>slide one</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius atque ipsam, esse vel sunt vero itaque nihil beatae, illo soluta illum officia consequuntur animi aspernatur reiciendis dignissimos. Corporis, ratione quaerat!</p>
		
		
		</Carousel.Item>
		<Carousel.Item interval={5000}>
            <h1>Slide two</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, doloribus possimus reiciendis dolorem sit quis aliquid? Rerum modi iste suscipit, sunt esse necessitatibus et ipsam excepturi similique maxime quas commodi?</p>
	
		
		</Carousel.Item>
        <Carousel.Item interval={5000}>
            <h1>Slide three</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, doloribus possimus reiciendis dolorem sit quis aliquid? Rerum modi iste suscipit, sunt esse necessitatibus et ipsam excepturi similique maxime quas commodi?</p>
	
		
		</Carousel.Item>

        <Carousel.Item interval={5000}>
            <h1>Slide four</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, doloribus possimus reiciendis dolorem sit quis aliquid? Rerum modi iste suscipit, sunt esse necessitatibus et ipsam excepturi similique maxime quas commodi?</p>
	
		
		</Carousel.Item>
        
	</Carousel>



    </div>
  )
}

export default Slider
