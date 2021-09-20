import React from 'react'
import { allBought } from '../redux/itemsSlice'
import { useSelector } from 'react-redux'

function Footer() {
    const items = useSelector(allBought)
    let total = 0
    items.map(item => total += item.price)



    return (
        <>
        {items.length > 0 &&
            <div className="row justify-content-center text-center" style={{background:'white'}}>
            <div className="col-md-4">
                <h3>Your Recipt</h3>
            {items.map((item) => (
                <div key={item.id}><strong>{`${item.name}  ${item.count} x ${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}$`}</strong></div>
            ))}
            <hr></hr>
            <div className="row">
                <div className="col-md-6">
                    <h4>TOTAL</h4>
                </div>
                <div className="col-md-6">
                    {`${total} $`}
                </div>
            </div>
            </div>
            </div>
        }
        </>
    )
}

export default Footer
