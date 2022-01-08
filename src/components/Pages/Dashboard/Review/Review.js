import axios from 'axios'
import React from 'react'
import useAuth from '../../../../hooks/useAuth'
import {useHistory} from 'react-router-dom'

const Review = () => {
    const [form, setForm] = React.useState({ ratings: '', review: '' })
    const { user,admin } = useAuth()
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault()
        form.user = user;
        axios.post(`/review`, form).then(res => {
            alert(res.data)
            setForm({ ratings: '', review: '' })
        })
    }

    if (admin) {
        history.replace('/')
    }

    return (
        <div className='d-flex justify-content-center align-items-center'>
            <form onSubmit={handleSubmit} className='text-center my-md-5 py-5'>
                <h1>Write Review</h1>
                <input value={form.ratings} required onChange={e => { setForm({ ...form, ratings: e.target.value }) }} type="number" max='5' min='0' className="form-control my-2" placeholder='ratings in 5' name='ratings' />
                <textarea value={form.review} required onChange={e => { setForm({ ...form, review: e.target.value }) }} name="review" className='form-control my-2' placeholder='Review'></textarea>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Review
