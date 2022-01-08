import React from 'react'
import useAuth from '../../../hooks/useAuth'
import { useHistory, useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import Loading from '../../Shared/Loading/Loading'
import Header from '../../Shared/Header/Header'

const Register = () => {
    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || '/';
    const { signinUsingGoogle, user, register, error, setError, loading, setLoading } = useAuth()
    const [form, setForm] = React.useState({})

    if (user.uid) {
        history.push(redirect_url)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (form.password2 !== form.password) {
            setError('Password not matched, retype both passwords');
        }
        else {
            setLoading(true)
            register(form.email, form.password, form.name)
        }
    }

    const inputSettings = (e) => {
        const inputType = e.target.name;
        const inputValue = e.target.value;
        switch (inputType) {
            case 'name':
                setForm({ ...form, name: inputValue });
                break;
            case 'password':
                setForm({ ...form, password: inputValue });
                break;
            case 'password2':
                setForm({ ...form, password2: inputValue });
                break;
            case 'email':
                setForm({ ...form, email: inputValue });
                break;
            default:
                break;
        }
    }

    React.useEffect(() => {
        setError('')
    },[])

    return (
        <>
        <Header />
        <div className="container">
            <div className='row align-items-center'>
                <div className='col-md d-none d-md-block'>
                    <img src='https://i.pinimg.com/originals/da/aa/43/daaa434bf4b8c5e39db535e85c8b00f0.jpg' className='w-100' alt='Stay with us' />
                </div>
                <div className='col-md text-center'>
                    <div className='border p-5 my-5'>
                        <h1 className='mb-4'>Registration</h1>
                        {loading ? (
                            <Loading />
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <input onChange={inputSettings} required name='name' type='name' placeholder='Full Name' className="form-control my-2" />
                                <input onChange={inputSettings} required name='email' type='email' placeholder='Email' className="form-control my-2" />
                                <input onChange={inputSettings} required name='password' type='password' placeholder='Password' className="form-control my-2" />
                                <input onChange={inputSettings} required name='password2' type='password' placeholder='Re-type Password' className="form-control my-2" />
                                <button type='submit' className='btn btn-primary px-3'>Registration</button>
                            </form>
                        )}
                        {
                            error.length>0 ? <p className='text-danger'>{error}</p> : ''
                        }
                        <hr />
                        <button className="btn btn-outline-primary" onClick={signinUsingGoogle}>Connect With Google</button>
                        <p>Already have an account? <Link to='/login' >Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Register
