import React from 'react';
import Itemcard from "./Itemcard"; 
import data from "./data";

import home1 from "../assets/home1.jpg";
import home2 from "../assets/home2.jpg";
import home3 from "../assets/home3.jpg";
import { Carousel } from 'react-bootstrap';
const Home = () =>{
    
    return (
        <div className="container">
             <h2 className="text-center mt-3"></h2><div>
             <h2 className="text-center mt-3"></h2>
                   <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100" src={home1}
    
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>Strawberry Cake</h5>
      <p>This is the most ordered cupcake category item in August.!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100" src={home2}
     
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Coffee Cup Cakes</h5>
      <p>This is the most liked cake item of our store in August.!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100" src={home3}/>
    <Carousel.Caption>
      <h5>Chocolate Chip Cake</h5>
      <p>
This is the latest item we have introduced in August.!</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
   
        </div><br/><br/>
        <div className="container">
        <h2 className="text-center mt-3">Quick Guide</h2>
        <section className="py-4 container">
            <div className="row justify-content-center">
                {data.ItemData.map((item,index)=>{
                    return (
                        <Itemcard img={item.img} title={item.title} desc={item.desc} more={item.more} button={item.button} key={index}/>
                      

                    )
                })}
             
            </div>
        </section>
        </div>
    
            
       
       </div>

    );
};

export default Home;