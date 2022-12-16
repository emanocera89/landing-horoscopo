import { useEffect, useState } from 'react';
import moment from 'moment/moment';

function Item(props) {
    const [currentClass, setCurrentClass] = useState('')
    // Para testear con otra fecha ingresar dentro de moment('...') => ejemplo: moment('2022-04-23')
    const newDate = new Date(moment().format())
    const year = newDate.getFullYear();

    useEffect(() => {
        setCurrentClass('')
        // Date formating
        const newInitDate = new Date(moment(`${props.data.init_date}-${year}`.split("-").reverse().join("-")).format());
        const newEndDate = new Date(moment(`${props.data.end_date}-${year}`.split("-").reverse().join("-")).format());
        if (newDate >= newInitDate & newDate <= newEndDate) {
            setCurrentClass('isCurrent')
        }
    }, [props.data])

    return (
        <li className={currentClass}>
            <div className="item-wrapper">
                <div className="item-left-col">
                    <span>{props.data.name}</span>
                    <img src={process.env.REACT_APP_API_URL + props.data.image} alt={props.data.name} width='100%'/>
                </div>
                <div className="item-right-col">
                    <p>{props.data.prediction}</p>
                </div>
            </div>
        </li>
    )
}

export default Item;