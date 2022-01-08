import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../../../Shared/Loading/Loading'

const ManageProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        axios('/products').then(res => {
            setProducts(res.data);
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    const deleteProduct = (id) => {
        if (window.confirm('Are u sure about it?')) {
            axios.delete(`/products/${id}`).then(res => {
                if (res.data.deletedCount) {
                    alert('Deleted successfully')
                    setProducts(products.filter((prod) => prod._id !== id))
                }
                else {
                    alert('Something went wrong');
                }
            }).finally(() => {
                setLoading(false)
            })
        }
    }

    return (
        <div className='container my-5'>
            <h1 className="text-center my-5">Manage Cycles</h1>
            {loading ? (<Loading />) : (
                <table className="table table-border table-responsive">
                    <thead>
                        <tr>
                            <th scope='col'>Image</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Price</th>
                            <th scope='col'>#</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => (
                                <tr key={product._id}>
                                    <th><img src={product.img} alt="" width='60' height='45' /></th>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td><button className='btn btn-danger' onClick={() => deleteProduct(product._id)}><i className="far fa-trash-alt"></i></button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default ManageProducts
