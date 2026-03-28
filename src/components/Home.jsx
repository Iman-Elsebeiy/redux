import { Margin } from "@mui/icons-material"
import { bgBG } from "@mui/material/locale"
function Home() {
    return(
        <>
    {/* <div className="cards"> */}
     <img className="home-img" src="11.png" alt="Bonsai" />
     <section className="home-text">
  <h2>Welcome to Bonsai World</h2>
  <p>
    Discover the beauty of nature with our carefully nurtured bonsai plants.  
    Treat them with love and care, and they will bring life and calm to your space.  
    Explore our collection and find the perfect plant companion for your home.
  </p>
</section>
     <img className="home-img-r" src="leave.png" alt="Bonsai" />


<section className="home-features">
  <div className="feature">
     <h4>High Quality Plants</h4>
    <p>Every plant is carefully grown for your home.</p>
  </div>
  <div className="feature">
     <h4>Fast Delivery</h4>
    <p>Get your plants delivered safely to your doorstep.</p>
  </div>
  <div className="feature">
     <h4>Eco Friendly</h4>
    <p>We use sustainable materials and care for the planet.</p>
  </div>
</section>


    {/* footert */}

<footer className="home-footer">
  <div className="footer-content">
    <h3>Bonsai</h3>
    <p>
      Bringing the beauty of nature into your home.  
      Care for your plants and enjoy a peaceful space.
    </p>
    <div className="footer-links">
      <a href="#">Home</a>
      <a href="#">About Us</a>
      <a href="#">Contact</a>
      <a href="#">Products</a>
    </div>

    <div className="footer-social">
      <a href="#">🌿</a>
      <a href="#">📷</a>
      <a href="#">✉️</a>
    </div>
    <p className="copyright">
      © 2026 Bonsai. All rights reserved.
    </p>
  </div>
</footer>
    {/* </div> */}
    </>
    )
}
export default Home