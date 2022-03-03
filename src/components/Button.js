


const Button = (props) => {

    const name = props.name

  // return  (check) ? <button type="submit" className="btn btn-primary" >{name}</button> : <button type="submit" className="btn btn-danger" >{name}</button> 


    return (


        <> <button type="submit" className="btn btn-primary" >{name}</button> </>
        
    )
}

export default Button;