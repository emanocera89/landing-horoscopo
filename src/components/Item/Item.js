import { useEffect, useState } from 'react';
import moment from 'moment/moment';

function Item(props) {
    const [currentClass, setCurrentClass] = useState('')
    // Para testear con otra fecha ingresar dentro de moment('...') => ejemplo: moment('2022-04-23')
    const todayDate = new Date(moment().format())
    const year = todayDate.getFullYear();

    useEffect(() => {
        setCurrentClass('');
        // Date formating
        const newInitDate = new Date(moment(`${props.data.init_date}-${year}`.split("-").reverse().join("-")).format());
        const newEndDate = new Date(moment(`${props.data.end_date}-${year}`.split("-").reverse().join("-")).format());
        if (todayDate >= newInitDate & todayDate <= newEndDate) {
            setCurrentClass('current')
        }
    }, [props.data])

    return (
        <li className={`item-list__item-container ${currentClass}`}>
            <div className="item-list__item-container__item">
                
                <div className="item-list__item-container__item__item-lt-col">
                    <h3 className="item-list__item-container__item__item-lt-col__item-title">{props.data.name}</h3>
                    <div className="item-list__item-container__item__item-lt-col__item-img-wrapper">
                        <img src={process.env.REACT_APP_API_URL + props.data.image} alt={props.data.name} width='100%'/>
                    </div>
                </div>
                <div className="item-list__item-container__item__item-rt-col">
                    <p className="item-list__item-container__item__item-rt-col__item-desc">{props.data.prediction}</p>
                </div>
            </div>
        </li>
    )
}

export default Item;