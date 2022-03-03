import logo from '../logo.svg'

const Card = (props) => {

    const stock = props.data

    return (
        <>

                <div className="card" style={{ width: "18rem" }}>
                                <img src={logo} class="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title"> {stock.name}</h5>
                                    <p className="card-text"> {stock.desc}</p>
                                    <p className="card-text"> {stock.amount}</p>
                                </div>
                            </div>
       
         </>
    )
}

export default Card

