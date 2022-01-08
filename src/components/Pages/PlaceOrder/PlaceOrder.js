import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import useAuth from '../../../hooks/useAuth';
import Loading from '../../Shared/Loading/Loading';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const PlaceOrder = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([])
    const [form, setForm] = useState([])
    const [loading, setLoading] = useState(false)
    const { user, admin } = useAuth()
    const history = useHistory();

    useEffect(() => {
        setLoading(true);
        axios(`/products/${id}`).then(res => {
            setProduct(res.data);
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            uid: user.uid,
            name: user.name,
            email: user.email,
            phone: form.phone,
            address: form.address,
            product: product
        }
        axios.post(`/place-order`, data).then(res => {
            alert(res.data)
            history.replace('/')
        }).finally(() => {
            setLoading(false)
        })
    }

    const inputSettings = (e) => {
        const inputType = e.target.name;
        const inputValue = e.target.value;
        switch (inputType) {
            case 'phone':
                setForm({ ...form, phone: inputValue });
                break;
            case 'address':
                setForm({ ...form, address: inputValue });
                break;
            default:
                break;
        }
    }

    return (
        <>
            <Header />
            <div className='container'>
                <div className="row">
                    <div className="col-md">
                        {
                            loading ? (<Loading />) : (
                                <div class="card my-4">
                                    <img src={product.img} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{product.name}</h5>
                                        <p class="card-text">{product.description}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="col-md text-center d-flex justify-content-center align-items-center my-4">
                        <form onSubmit={handleSubmit}>
                            <h3>{user.name}</h3>
                            <p>{user.email}</p>
                            <input required type="number" onChange={inputSettings} className="form-control my-3" placeholder='Phone numnber' name='phone' />
                            <input required type="text" name='address' onChange={inputSettings} className="form-control my-3" placeholder='Address' />
                            <button className="btn btn-primary">Place Order</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default PlaceOrder
