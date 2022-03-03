import Button from "./Button"
import Header from './Header'
import { Router, Link } from 'react-router-dom'

const Login = () => {

    return (

        <div className="container">
            <Header />
            <form>
            <h1> Login </h1>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <Button name="Login" />
            </form>

            click <Link to="/register"> here</Link> to Register
        </div>
    )
}

export default Login

