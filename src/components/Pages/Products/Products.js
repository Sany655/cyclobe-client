import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Shared/Footer/Footer'
import Header from '../../Shared/Header/Header'
import Loading from '../../Shared/Loading/Loading'

const Products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios('/products').then(res => {
            setProducts(res.data);
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    return (
        <div>
            <Header />
            <h1 className="text-center">MTB Collection</h1>
            <div className="container">
                {loading ? (
                    <Loading />
                ) : (
                    <div className="row">
                        {products.map((d) => (
                            <div className="col-md-6 col-lg-4 my-3" key={d._id}>
                                <div className="card mx-2" key={d._id}>
                                    <img src={d.img} className="card-img-top" height="230px" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{d.name}</h5>
                                        <p className="card-text">Price : ${d.price}</p>
                                        <p className='text-truncate' title={d.description}>{d.description}</p>
                                        <Link to={`/place-order/${d._id}`} href="#" className="btn btn-info">Buy Now</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    )
}

export default Products
