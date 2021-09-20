import {useState} from 'react'
import { useSelector } from 'react-redux'
import { changeBalance } from '../redux/itemsSlice'
import { useDispatch } from 'react-redux'


function Item({item}) {
    const dispatch = useDispatch()
    const balance = useSelector(state => state.items.totalBalance)
    const [count, setCount] = useState(0)
    const buy = (count) => {
        const newBalance = balance - count * item.price
        if(newBalance > 0){
            dispatch(changeBalance({balance : newBalance, count : count, id : item.id}))
        }
    }
    const sell = (count) => {
        const newBalance = balance + count * item.price
        if(newBalance <=100000000000){
            dispatch(changeBalance({balance : newBalance, count : count, id : item.id}))
        }
    }
    return (
        <div className="col-md-4 text-center mt-3">
            <div  style={{background:'white', maxWidth:'430px'}}>
                <div className="row justify-content-center">
                    <img className='mt-3' src={item.img} style={{width:'180px', height:'150px'}}/>
                </div>
                <div className="row">
                    <div className='mt-4' style={{fontSize:'25px'}}>{item.name}</div>
                </div>
                <div className="row">
                    <div className='mb-3'>{`${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}$`}</div>
                </div>
                <div className="row mb-5">
                    <div className="col-md-4 mb-4">
                        <button className="btn btn-secondary" 
                        disabled={Number(count) === 0 ? true : false} 
                        style={{width:'100%'}}
                        onClick={() => sell(count)}>Sell</button>
                    </div>
                    <div className="col-md-4">
                        <input type="number" class="form-control" value={count < 0 ? 0 : count} onChange={(e) => setCount(e.target.value)}/>
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-success" style={{width:'100%'}} onClick={() => buy(count)}>Buy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
