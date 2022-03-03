import logo from '../logo.svg'
import Card from './Card'
import Empty from './Empty'

const Cards = () => {


    const stocks = [
        {
            id: 1,
            name: "Facebook",
            desc: "Facebook is swweeet",  
            amount: 1200
        },
        {
            id: 2,
            name: "Twitter",
            desc: "God is good ",
            amount: 4000
        },
        {
            id: 3,
            name: "windiows",
            desc: "Good is a great ",
            amount: 2
        },

        {
            id: 4,
            name: "Office",
            desc: "Ok is a ok ",
            amount: 2
        },

        {
            id:5,
            name: "Admin",
            desc: "hbfksdbhj ",
            amount: 2
        }


    ]


    return (
        <div className="container ">
            <div className='d-flex flex-row '>

                {
                    (stocks.length > 0) ? stocks.map(stock => <Card key={ stock.id } data={stock} />) : <Empty />
                   // stocks.length > 0  &&  stocks.map(stock =>  <Card data={stock} /> ) 
                   
                } 
            </div>
         </div>
    )


    // return (
    //     <div className="container">

    //         <div className="card" style={{ width: "18rem" }}>
    //             <img src={logo} class="card-img-top" alt="..." />
    //                 <div className="card-body">
    //                     <h5 className="card-title"> {stocks[0].name }</h5>
    //                     <p className="card-text"> {stocks[0].description }</p>
    //                     <p className="card-text"> {stocks[0].amount }</p>
    //                 </div>
    //         </div>   

    //         <div className="card" style={{ width: "18rem" }}>
    //             <img src={logo} class="card-img-top" alt="..." />
    //                 <div className="card-body">
    //                 <h5 className="card-title"> {stocks[1].name }</h5>
    //                     <p className="card-text"> {stocks[1].description }</p>
    //                     <p className="card-text"> {stocks[1].amount }</p>
    //                 </div>
    //         </div> 

    //         <div className="card" style={{ width: "18rem" }}>
    //             <img src={logo} class="card-img-top" alt="..." />
    //                 <div className="card-body">
    //                 <h5 className="card-title"> {stocks[2].name }</h5>
    //                     <p className="card-text"> {stocks[2].description }</p>
    //                     <p className="card-text"> {stocks[2].amount }</p>
    //                 </div>
    //         </div> 

    //         <div className="card" style={{ width: "18rem" }}>
    //             <img src={logo} class="card-img-top" alt="..." />
    //                 <div className="card-body">
    //                 <h5 className="card-title"> {stocks[3].name }</h5>
    //                     <p className="card-text"> {stocks[3].description }</p>
    //                     <p className="card-text"> {stocks[3].amount }</p>
    //                 </div>
    //         </div> 

            
       
    //      </div>
    // )
}

export default Cards

