import React from 'react';
import Slider from "react-slick";
import './Home.css';
import Buff_momo from './assets/Buff_momo.jpg';
import chhoila from './assets/Buff-chhoila-recipe.jpg';
import thaliSet from './assets/nepali-thali-set.jpg';
import selroti from './assets/selroti.jpg';
import chickenChilli from './assets/chickenChilli.png'

// Import slick-carousel css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="home-background">
      <div className="slideshow-container">
        <Slider {...settings}>
          <div className="image-container">
            <img src={Buff_momo} alt="Sausage on Stick" className="home-image" />
            <div className="image-overlay">
              <h1 className="image-title">MO:MO</h1>
              <p className="image-description">Aromatic Chicken Dumplings with Tomato based sauce.</p>
            </div>
          </div>
          <div className="image-container">
            <img src={chhoila} alt="Image 2" className="home-image" />
            <div className="image-overlay">
              <h1 className="image-title">SPICY CHICKEN CHHOILA</h1>
              <p className="image-description">Grilled chicken with aromatic herbs and spices.</p>
            </div>
          </div>
          <div className="image-container">
            <img src={thaliSet} alt="Image 3" className="home-image" />
            <div className="image-overlay">
              <h1 className="image-title">NEPALI THALI</h1>
              <p className="image-description">Description for image 3.</p>
            </div>            
          </div>
          <div className="image-container">
            <img src={chickenChilli} alt="Image 3" className="home-image" />
            <div className="image-overlay">
              <h1 className="image-title">Chicken Chilli</h1>
              <p className="image-description">Fried chicken mixed in sweet, sour and spicy sauce</p>
            </div>
          </div>
        </Slider>
      </div>
      <div className="home-container">
        <section className="about">
          <div>
            <h2>Who are we?</h2>
            <p>Welcome to Aroma Indian & Nepalese Cuisine, a new culinary destination in Bryan, TX,
              conveniently located within walking distance of Texas A&M University. where the vibrant flavors
              of India and Nepal come together. Our name, "Aroma," reflects the rich and enticing scents that
              define our dishes, inviting you to a dining experience that will awaken your senses.
              Our menu is a celebration of authentic Indian and Nepali cuisines, curated meticulously by our
              expert chefs. Each dish is crafted with precision and passion, blending traditional recipes with
              modern culinary techniques to create a unique dining experience. Whether you are craving classic
              dishes like Chicken Tikka Masala and Biryani, or the exquisite delight of Nepali MO: MO
              dumplings, we have something to satisfy every palate.
              Beyond the food, Aroma Indian & Nepalese Cuisine offers a warm and inviting ambiance, adorned
              with cultural elements that reflect the rich heritage of Nepal and India. We strive to create a space
              where friends and family can gather to enjoy good food and create lasting memories.
              Join us at Aroma Indian & Nepalese Cuisine and become part of our extended family. We are
              confident that your first visit will be the beginning of a long-lasting relationship with our flavors
              and hospitality.</p>
          </div>
        </section>
        <section className="location">
          <h2>Where are you located?</h2>
          <p>4337 Wellborn Road, Bryan, TX, 77801</p>
          <div className="map-container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.7063391326466!2d-96.3416434848538!3d30.608667481666583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86468383a9427c3b%3A0xbadfa04a95b57b9!2s4337%20Wellborn%20Rd%2C%20Bryan%2C%20TX%2077801%2C%20USA!5e0!3m2!1sen!2snp!4v1629900046123!5m2!1sen!2snp" width="600" height="450" allowFullScreen="" loading="lazy"></iframe>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
