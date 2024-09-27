import React, { useState, useEffect } from 'react';
import './About.css';
import Slika1 from '../../assets/aboutus1.jpg';
import Slika2 from '../../assets/wallpaperflare.com_wallpaper (3).jpg';
import Slika3 from '../../assets/aboutus2.jpg';
import Slika4 from '../../assets/aboutus3.jpg';
import Slika5 from '../../assets/aboutus4.jpg';
import Timea from "../../assets/discorduser.png";
import Timo from "../../assets/goat.png";
import Justin from "../../assets/justin.png";
import Yoran from "../../assets/ko.png";
import Mario from "../../assets/mario.png";
import Stipe from "../../assets/opetko.png";
import Rick from "../../assets/rick.png";
import Stefan from "../../assets/stefan.png";
import Lea from "../../assets/who.png";
import Lana from "../../assets/lana.png";

// import Slika6 from '../../';


function AboutUs() {
  const [slideIndex, setSlideIndex] = useState(1);

  const creatorsInformation = [
    {
      img: Timea,
      name: "Timea"
    },
    {
      img: Timo,
      name: "Timo"
    },
    {
      img: Justin,
      name: "Justin"
    },
    {
      img: Yoran,
      name: "Yoran"
    },
    {
      img: Mario,
      name: "Mario"
    },
    {
      img: Stipe,
      name: "Stipe"
    },
    {
      img: Rick,
      name: "Rick"
    },
    {
      img: Stefan,
      name: "Stefan"
    },
    {
      img: Lea,
      name: "Lea"
    },
    {
      img: Lana,
      name: "Lana"
    }

  ]

  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  const currentSlide = (n) => {
    showSlides(n);
  };

  const showSlides = (n) => {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("demo");
    const captionText = document.getElementById("caption");

    if (n > slides.length) { setSlideIndex(1); }
    else if (n < 1) { setSlideIndex(slides.length); }
    else { setSlideIndex(n); }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slides[slideIndex - 1]) {
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
      captionText.innerHTML = dots[slideIndex - 1].alt;
    }
  };

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  return (
    <div className="container">
      {/* Header Section */}
      <div className="header">
        <div className="logo">
          {/* Full-width image slides inside the logo section */}
          <div className="mySlides">
            <img src={Slika1} alt="Woods" />
          </div>
          <div className="mySlides">
            <img src={Slika2} alt="Cinque Terre" />
          </div>
          <div className="mySlides">
            <img src={Slika3} alt="Mountains and fjords" />
          </div>
          <div className="mySlides">
            <img src={Slika4} alt="Northern Lights" />
          </div>
          <div className="mySlides">
            <img src={Slika5} alt="Nature and sunrise" />
          </div>
          <div className="mySlides">
            <img alt="Snowy Mountains" />
          </div>

          {/* Next and Previous Buttons */}
          <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
          <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>

          {/* Caption Text */}
          <div className="caption-container">
            <p id="caption"></p>
          </div>
        </div>

        <div className="content">
          <h1>About us</h1>
          <p>This is the header section with some content.</p>
        </div>
      </div>

      {/* Navigation/Icons with Thumbnails */}
      <div className="nav-icons">
        <div className="icon">
          <img className="demo cursor" src={Slika1} onClick={() => currentSlide(1)} alt="The Woods" />
        </div>
        <div className="icon">
          <img className="demo cursor" src={Slika2} onClick={() => currentSlide(2)} alt="Cinque Terre" />
        </div>
        <div className="icon">
          <img className="demo cursor" src={Slika3} onClick={() => currentSlide(3)} alt="Mountains and fjords" />
        </div>
        <div className="icon">
          <img className="demo cursor" src={Slika4} onClick={() => currentSlide(4)} alt="Northern Lights" />
        </div>
        <div className="icon">
          <img className="demo cursor" src={Slika5} onClick={() => currentSlide(5)} alt="Nature and sunrise" />
        </div>
        <div className="icon">
          <img className="demo cursor" onClick={() => currentSlide(6)} alt="Snowy Mountains" />
        </div>
      </div>

      {/* Main Content Section */}
      <div className="main-content">
        <div className="item">We are a dynamic team of 10 passionate students—5 from Croatia and 5 from the Netherlands—united by our love for exploring and sharing the best of what our countries have to offer. Our mission is simple: to create a space where you can discover, rate, and review products from both Croatia and the Netherlands, without the pressure to buy.</div>
        <div className="item">At Rater, we believe in the power of community-driven insights, so your voice truly makes a difference!</div>
        <div className="item">From tech gadgets to local specialties, Rater brings together diverse products for you to experience through the opinions of everyday users. Whether you're curious about something new or have a favorite item you want to rave about, this is the place to share your honest feedback and help others make informed decisions.</div>
      </div>

      {/* Testimonial Section */}
      <div className="testimonial">
        <blockquote>
          "Dont be a hater, be a rater"
        </blockquote>
      </div>
      <br />
      <h2>Our Team</h2>
      {/* Footer Features */}
      <div className="footer-features"> 
        {creatorsInformation.map(creator => 
          
          <div className="feature">
            <div className="img-feature"><img src={creator.img} alt={creator.name} className='img-feature'/></div>
            <div className="feature-text">{creator.name}</div>
          </div>
        )}
      </div>

      {/* Bottom Section */}
      <div className="footer">
        <p>Footer or Call to Action Section</p>
      </div>
    </div>
  );
}

export default AboutUs;
