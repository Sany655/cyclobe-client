import React, { useState } from 'react'
import axios from 'axios'

const MakeAdmin = () => {
    const [form, setForm] = useState({email:''})
    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method: 'put',
            url: '/make-admin',
            data: form,
        }).then(res => {
            setForm({...form,email:''})
            alert(res.data)
        }).catch(error => {
            console.log(error)
        })
    }

    React.useEffect(() => {
        // setError('')
    },[])

    return (
        <div className='container my-md-5 my-2'>
            <h3 className="text-center ">Make Admin</h3>
            <form onSubmit={handleSubmit} className=" p-md-5 border-md d-md-flex">
                <input value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} type="text" className='form-control my-2 m-md-0' placeholder='Email' type='email' />
                <button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}

export default MakeAdmin
