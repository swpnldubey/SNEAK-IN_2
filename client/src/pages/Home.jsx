import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'

const Home = () => {

    return (
    <div className="landing">
        <Navbar />
        <div className="main-content">
            <div className="tagline">
<<<<<<< HEAD
                    <h2>SNEAK IN <br /> 
                    <span className='fav'> to your favourite colleges! </span></h2>
            </div>
            <a href="/login"> <button className='explore-btn'>LET'S GO!</button> </a>
             <hr />

            <div className='events'>
                <h2 id='events'>Featured Events...</h2>
                  <div className='slider-container'>
                    <Slider />
                  </div>
            </div>
<br />
<br />
=======
                    <h2>SNEAK IN <br /> to your favourite colleges</h2>
                    <a href="/login"> <button>SNEAK ME IN</button> </a>
            </div>
             <hr />
        <Slider />
>>>>>>> 936cb9252e355042c7693e22e6db8bd298c3d967
        </div>
        <footer>
            <div className="footer-links">
              <a href="#home">Home</a>
<<<<<<< HEAD
              <a href="/privacy">Privacy Policy</a>
=======
              <a href="#privacy">Privacy Policy</a>
>>>>>>> 936cb9252e355042c7693e22e6db8bd298c3d967
              <a href="#terms">Terms and Conditions</a>
            </div>
        </footer>
    </div>
  )
}

export default Home;