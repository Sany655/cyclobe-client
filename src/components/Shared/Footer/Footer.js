import React from 'react'
import { Link } from 'react-router-dom'
import logo from './image/cover.png'

const Footer = () => {
    return (
        <div className='bg-primary text-white py-4'>
            <div className="container">
                <div className="row">
                    <div className="col-md ">
                        <h3>PAGES</h3>
                        <Link to='/' className='text-white text-decoration-none d-block'>HOME</Link>
                        <Link to='/products' className='text-white text-decoration-none d-block'>EXPLORE ALL COLLECTION</Link>
                    </div>
                    <div className="col-md ">
                        <h4>SECTIONS</h4>
                        <a className='text-white text-decoration-none d-block' href="#banner">OUR SLOGS</a>
                        <a className='text-white text-decoration-none d-block' href="#product">LATEST COLLECTION</a>
                        <a className='text-white text-decoration-none d-block' href="#blog">INFO</a>
                        <a className='text-white text-decoration-none d-block' href="#review">REVIEWS</a>
                    </div>
                    <div className="col-md ">
                        <img src={logo} className='w-100' alt="" />
                    </div>
                </div>
                <footer className='text-center'>COPYRIGHT &copy; <span className="text-uppercase">{window.location.origin}</span></footer>
            </div>
        </div>
    )
}

export default Footer
