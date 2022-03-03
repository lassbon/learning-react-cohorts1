import Button from "./Button"
import Header  from "./Header"

const Register = () => {

    return (
        <div className="container">
            <Header />
            <form>
                <h1> Register </h1>
                <div class="mb-3">
                    <label htmlFor="firstname" className="form-label">Firstname</label>
                    <input type="text" className="form-control" id="firstname" />
                </div>

                <div class="mb-3">
                    <label htmlFor="lastname" className="form-label">Lastname</label>
                    <input type="text" className="form-control" id="lastname" />
                </div>

                <div class="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" />
                </div>

                <div class="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="phone" />
                </div>

                <div class="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" />
                </div><br />
                <Button name="Register"/>
                </form>
        </div>
    )
}


export default Register
