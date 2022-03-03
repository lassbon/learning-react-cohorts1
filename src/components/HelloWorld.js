
import Button from './Button'



const HelloWorld = () => {

    
    return (
        <div className="container">
            <h1 className="h1">Hello World</h1><hr />
            <form>
                <div>
                    <label htmlFor="firstname">Firstname</label>
                    <input type="text" id="firstname" className="form-control" />
                </div>

                <div>
                    <label htmlFor="surname">Surname</label>
                    <input type="text" id="surname" className="form-control" />
                </div><br />

               <Button />
            </form>
           
        </div>

    )


}

export default HelloWorld;