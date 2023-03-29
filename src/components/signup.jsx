import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../styles/home1.css'
const SignUp = () => {
    let [name, setName] = useState('')
    let [number, setNumber] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [confirmPassword, setConfirmPassword] = useState('')

    let navigate = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault();

        //data to be posted
        let data = { name, number, email, password, confirmPassword }
        if (name && email && password === confirmPassword) {
            axios.post('http://localhost:4000/signup', data)
                .then((res) => {
                    alert(res.data.message)
                    navigate('/')
                })
        }
        else {
            alert('invalid credentials')
        }
    }
    return (
        <div className="row bg-success p-2 text-light bg-opacity-75  " style={{ height: "100vh" }}>

            <div className="signUp_form1 mx-auto col-10 col-md-8 col-lg-6">
                <div className="form3 form-control bg-dark text-light fw-bolder">
                    <h1>SignUp Page</h1>

                    <form action="" onSubmit={handleSubmit}>
                        <div className="Name mb-3 mt-3">
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Name" name="name" required />
                        </div>
                        <div className="mobile_number mb-3 mt-3">
                            <input type="tel" value={number} onChange={(e) => setNumber(e.target.value)} className="form-control" placeholder="Phone Number" name="number" required />
                        </div>
                        <div className="email mb-3 mt-3">
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" name="email" required />
                        </div>
                        <div className="password mb-3 mt-3">
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="password" name="password" required />
                        </div>
                        <div className="confirm_password mb-3 mt-3">
                            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="form-control" placeholder="Confirm password" name="confirmPassword" required />
                        </div>
                        <div className="signUp_button mb-3 mt-3">
                            <button className="btn btn-info">SignUp</button>
                        </div>
                        <div className="login_button  mb-3 mt-3 ">
                            <p>Already a User?</p>
                            <Link to='/' className="btn btn-outline-info fw-bolder">Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;