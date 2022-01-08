import React from 'react'
import useAuth from '../../../hooks/useAuth'
import { useHistory, useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import Loading from '../../Shared/Loading/Loading'
import Header from '../../Shared/Header/Header'

const Login = () => {
    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || '/';
    const { signinUsingGoogle, user, login, error, setError, loading, setLoading } = useAuth()
    const [form, setForm] = React.useState({})

    if (user.uid) {
        history.push(redirect_url)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        setLoading(true)
        login(form.email, form.password)
    }

    const inputSettings = (e) => {
        const inputType = e.target.name;
        const inputValue = e.target.value;
        switch (inputType) {
            case 'password':
                setForm({ ...form, password: inputValue });
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
    }, [])

    return (
        <>
            <Header />
            <div className="container">
                <div className='row align-items-center'>
                    <div className='col-md text-center'>
                        <div className='border p-5 my-5'>
                            <h1 className='mb-4'>Login</h1>
                            {loading ? (
                                <Loading />
                            ) : (
                                <form onSubmit={handleLogin}>
                                    <input onChange={inputSettings} required name='email' type='email' placeholder='Email' className="form-control my-2" />
                                    <input onChange={inputSettings} required name='password' type='password' placeholder='Password' className="form-control my-2" />
                                    <button type='submit' className='btn btn-primary px-3'>Login</button>
                                </form>
                            )}
                            {
                                error ? <p className='text-danger'>{error}</p> : ''
                            }
                            <hr />
                            <button className="btn btn-outline-primary" onClick={signinUsingGoogle}>Connect With Google</button>
                            <p>Haven't an account? <Link to='/registration' >Register</Link></p>
                        </div>
                    </div>
                    <div className='col-md d-none d-md-block'>
                        <img src='https://i.pinimg.com/originals/da/aa/43/daaa434bf4b8c5e39db535e85c8b00f0.jpg' className='w-100' alt='Stay with us' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
