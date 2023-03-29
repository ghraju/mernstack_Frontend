import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/home1.css';

const Login = () => {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    let navigate = useNavigate();
    let handleSubmit = (e) => {
        e.preventDefault()
        let data = { email, password }
        axios.post('http://localhost:4000/', data)
            .then((res) => {
                if (res.data.message == 'login successfull') {
                    navigate('/home')
                }
                else {
                    alert(res.data.message)
                }
            })
    }
    return (

        <div className="login1   pt-5 " style={{ height: "100vh" }}>
            <div className="row1 "  >

                <div className="form2">
                    <h1>Login Page</h1>
                    <div className="login_form form-control bg-dark text-light w-75 mt-4  mx-auto col-10 col-md-8 col-lg-6" >
                        <form action="" onSubmit={handleSubmit}>
                            <div className="email mb-3 mt-3">
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email address" className="form-control" name="email" />
                            </div>
                            <div className="password mb-3 mt-3">
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" className="form-control" name="password" />
                            </div>
                            <div className="login_button mb-3 mt-3">
                                <button className="btn btn-danger ">Login</button>
                            </div>
                            <div className="signUp_button mb-3 mt-3">
                                <p>Are you a new user?</p>
                                <Link to='/signup' className='btn btn-outline-danger fw-bolder'>Sign up</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;