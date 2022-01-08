import axios from 'axios';
import React, { useState } from 'react'
import Loading from '../../../Shared/Loading/Loading';

const AddProduct = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [form, setForm] = useState({
        name: '', price: '', img: '', description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        axios.post('/products',form).then((res)=>{
            alert(res.data)
        }).finally(()=>{
            setLoading(false);
        })
    }

    const inputSettings = (e) => {
        const inputType = e.target.name;
        const inputValue = e.target.value;
        switch (inputType) {
            case 'name':
                setForm({ ...form, name: inputValue });
                break;
            case 'price':
                setForm({ ...form, price: inputValue });
                break;
            case 'description':
                setForm({ ...form, description: inputValue });
                break;
            case 'img':
                setForm({ ...form, img: inputValue });
                break;
            default:
                break;
        }
    }

    React.useEffect(() => {
        setError('')
    }, [])

    return (
        <div className='conteiner my-5'>
            <h1 className='mb-4 text-center'>Add Product</h1>
            {loading ? (
                <Loading />
            ) : (
                <form onSubmit={handleSubmit} className="container text-center">
                    <input onChange={inputSettings} required name='name' type='text' placeholder='Cycle Name' className="form-control my-2" />
                    <input onChange={inputSettings} required name='price' type='number' placeholder='Cycle Price' className="form-control my-2" />
                    <input onChange={inputSettings} required name='img' type='text' placeholder='Cycle Image Url' className="form-control my-2" />
                    <input onChange={inputSettings} required name='description' type='text' placeholder='Description' className="form-control my-2" />
                    <button type='submit' className='btn btn-primary px-3'>Submit</button>
                </form>
            )}
            {
                error ? <p className='text-danger'>{error}</p> : ''
            }
        </div>
    )
}

export default AddProduct
