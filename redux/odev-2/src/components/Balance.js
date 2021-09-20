import React from 'react'
import { useSelector } from 'react-redux';

function Balance() {
    const balance = useSelector(state => state.items.totalBalance)
    return (
        <div className="text-center mt-4" style={{background:'#2ecc71', height:'80px'}}>
            <div style={{color:'white', fontSize:'40px'}}>
                {`${balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}$`}
            </div>
        </div>
    )
}

export default Balance
