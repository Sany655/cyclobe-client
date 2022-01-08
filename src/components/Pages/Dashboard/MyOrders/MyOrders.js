import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import useAuth from '../../../../hooks/useAuth'
import Loading from '../../../Shared/Loading/Loading'

const MyOrders = () => {
    const {user,admin} = useAuth()
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    useEffect(() => {
        setLoading(true);
        axios(`/my-orders/${user.uid}`).then(res => {
            setOrders(res.data);
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    const deleteOrder = (id) => {
        if (window.confirm('Are u sure about it?')) {
            axios.delete(`/order/${id}`).then(res => {
                if (res.data.deletedCount) {
                    alert('Cancel successfully')
                    setOrders(orders.filter((order) => order._id !== id))
                }
                else{
                    alert('Something went wrong');
                }
            }).finally(() => {
                setLoading(false)
            })
        }
    }

    if (admin) {
        history.push('/')
    }

    return (
        <div className='container my-5'>
            <h1 className="text-center my-5">My Orders</h1>
            {loading ? (<Loading />) : (
                <table className="table table-border table-responsive">
                    <thead>
                        <tr>
                            <th scope='col'>Image</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Price</th>
                            <th scope='col'>Status</th>
                            <th scope='col'>#</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => (
                                <tr key={order._id}>
                                    <th><img src={order.product.img} alt="" width='60' height='45' /></th>
                                    <td>{order.product.name}</td>
                                    <td>{order.product.price}</td>
                                    <td>{order.status}</td>
                                    <td><button className='btn btn-danger' onClick={() => deleteOrder(order._id)}><i className="far fa-trash-alt"></i></button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default MyOrders
