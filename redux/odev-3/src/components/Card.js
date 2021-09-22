import { useDispatch } from 'react-redux'
import { updateFromRandomCards, openCard } from '../redux/cardsSlice';


function Card({card}) {
    const dispatch = useDispatch()
    const handleClick = () => {

        dispatch(openCard(card.nano_id));
        setTimeout(() => {
            dispatch(updateFromRandomCards(card.nano_id))            
        }, 1500);
    }
    return (
        <div className={card.open === true ? 'card opened' : 'card'} onClick={() => handleClick() }>
            <div className="front">?</div>
            <div className="back">
                <img src={card.img} alt={card.nano_id}/>
            </div>
        </div>
    )
}

export default Card
