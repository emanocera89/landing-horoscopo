import { useEffect, useState } from 'react';
import Item from "../Item/Item";
import { getItems } from '../../services/items';
import moment from 'moment/moment';

function ItemListContainer(props) {
    const [items, setItems] = useState([])

    useEffect(() => {
        getItems()
            .then((data) => {
                setItems(data);
                sortItems(data, props.sortValue)
            })
            .catch((error) => console.log(error.message))
    }, []);

    useEffect(() => {
        sortItems(items, props.sortValue)
    }, [props.sortValue]);

    const sortItems = (data, sortValue) => {
        const newItems = [...data];
        switch (sortValue) {
            case '0':
                newItems.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case '1':
                newItems.sort((a, b) => a.name.localeCompare(b.name)).reverse();
                break;
            case '2':
                newItems.sort((a, b) => new Date(moment(`${a.init_date}-${new Date().getFullYear()}`.split("-").reverse().join("-")).format()) - (new Date(moment(`${b.init_date}-${new Date().getFullYear()}`.split("-").reverse().join("-")).format())));
                break;
            case '3':
                newItems.sort((a, b) => new Date(moment(`${a.init_date}-${new Date().getFullYear()}`.split("-").reverse().join("-")).format()) - (new Date(moment(`${b.init_date}-${new Date().getFullYear()}`.split("-").reverse().join("-")).format()))).reverse();
                break;
        }
        setItems(newItems)
    }

    return (
        <ul className={`item-container ${props.view}`}>
            {items.filter(i => i.name.toLowerCase().includes(props.search.toLowerCase())).map((i) => (
                <Item data={i} />
            ))}
        </ul>
    )
}

export default ItemListContainer;