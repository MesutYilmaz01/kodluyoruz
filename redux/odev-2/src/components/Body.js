import { useSelector } from 'react-redux'
import Item from './Item'

function Body() {
    const data = useSelector(state => state.items.items)
    return (
        <div className="row mt-4">
            {
                data.map((item) => (
                    <Item key={item.id} item={item}/>
                ))
            }
        </div>
    )
}

export default Body
