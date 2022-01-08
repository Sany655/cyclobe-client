import React from 'react'
import Footer from '../../../Shared/Footer/Footer'
import Header from '../../../Shared/Header/Header'
import Article from '../Sections/Article/Article'
import Banner from '../Sections/Banner/Banner'
import Product from '../Sections/Product/Product'
import Review from '../Sections/Review/Review'

const Home = () => {
    return (
        <>
            <Header />
            <div className='container'>
                <Banner />
                <Product />
                <Article />
                <Review />
            </div>
            <Footer />
        </>
    )
}

export default Home
