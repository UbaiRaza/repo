import React from 'react'
import './App.css'


function Navbr() {
    return (
        <div className='hero'>
            <nav>
                <h2><a href=""><img className='logo' src="https://template.hasthemes.com/daxone/daxone/assets/images/logo/logo-1.png" alt="" /></a></h2>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">Mens</a></li>
                    <li><a href="">Pages</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
            <div className="hero-Section">
                <div className="image">
                    <img width='550px' height='450px' src='https://template.hasthemes.com/daxone/daxone/assets/images/slider/hm1-single-1.png' />
                    <div className="text">
                        <h1>30% off and</h1>
                        <h2>Comport Chair</h2>
                        <p>30% off
                            Comfort Chair
                            Collect from Daxone & get 30% Discount.
                        </p>
                        <button className='buttonStyle'> Shop Now</button>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Navbr
