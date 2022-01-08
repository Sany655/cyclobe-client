import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Loading from '../../../../Shared/Loading/Loading';
import { Link } from 'react-router-dom';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 465, min: 0 },
        items: 1
    }
};

const Product = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios('/products/for-home').then(res => {
            setProducts(res.data);
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    return (
        <div className='container' id='product'>
            <h1 className="text-center m-4">Latest Bikes</h1>
            {loading ? (
                <Loading />
            ) : (
                <Carousel responsive={responsive} centerMode={false}>
                    {products.map((d) => (
                        <div className="card mx-2" key={d._id}>
                            <img src={d.img} className="card-img-top" height="230px" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{d.name}</h5>
                                <p className="card-text">Price : ${d.price}</p>
                                <p className='text-truncate' title={d.description}>{d.description}</p>
                                <Link to={`/place-order/${d._id}`} href="#" className="btn btn-info">Buy Now</Link>
                            </div>
                        </div>
                    ))}
                </Carousel>
            )}
        </div>
    )
}

export default Product
