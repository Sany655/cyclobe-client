import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../../../Shared/Loading/Loading'

const ManageOrders = () => {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        axios('/orders').then(res => {
            setOrders(res.data);
        }).finally(() => {
            setLoading(false)
        })
    }, [loading])
    
    const updateStatus = (id) => {
        axios.put(`/order/status-update/${id}`).then(res => {
            if (res.data.modifiedCount) {
                alert('Shifted successfully')
                setLoading(true)
            }
            else {
                alert('Something went wrong');
            }
        }).finally(() => {
            setLoading(false)
        })
    }
    return (
        <div className='container my-5'>
            <h1 className="text-center my-5">Manage Orders</h1>
            {loading ? (<Loading />) : (
                <table className="table table-border table-responsive">
                    <thead>
                        <tr>
                            <th scope='col'>Image</th>
                            <th scope='col'>User Name</th>
                            <th scope='col'>Status</th>
                            <th scope='col'>#</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => (
                                <tr key={order._id}>
                                    <th><img src={order.product.img} alt="" width='60' height='45' /></th>
                                    <td>{order.name}</td>
                                    <td>{order.status}</td>
                                    {
                                        order.status=='panding'?(
                                            <td><button className='btn btn-info' onClick={() => updateStatus(order._id)}>Shift</button></td>
                                            ):(
                                            <td><button disabled className='btn btn-info'>Shifted</button></td>
                                        )
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default ManageOrders
