import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'

const Home = () => {

    return (
    <div className="landing">
        <Navbar />
        <div className="main-content">
            <div className="tagline">
                    <h2>SNEAK IN <br /> to your favourite colleges</h2>
                    <a href="/login"> <button>SNEAK ME IN</button> </a>
            </div>
             <hr />
        <Slider />
        </div>
        <footer>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms and Conditions</a>
            </div>
        </footer>
    </div>
  )
}

export default Home;