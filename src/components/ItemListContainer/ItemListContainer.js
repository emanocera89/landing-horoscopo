import { useEffect, useState } from 'react';
import Item from "../Item/Item";
import { getItems } from '../../services/items';
import moment from 'moment/moment';
import NoResults from '../NoResults/NoResults';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function ItemListContainer(props) {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        getItems()
            .then((data) => {
                setItems(data);
                setError('');
                sortItems(data, props.sortValue)
            })
            .catch((error) => setError('Se ha producido un error'))
    }, []);

    useEffect(() => {
        sortItems(items, props.sortValue)
    }, [props.sortValue]);

    useEffect(() => {
        setFilteredItems(items.filter(i => i.name.toLowerCase().includes(props.search.toLowerCase())));
    }, [props.search]);

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
        setFilteredItems(newItems)
    }



    return (
        <div>
            {error === ''
                ?
                filteredItems.length > 0
                    ?
                    <ul className={`item-list ${props.view}`}>
                        {filteredItems.map((i) => (
                            <Item data={i} key={i.name} />
                        ))}
                    </ul>
                    :
                    <NoResults />
                :
                <ErrorMessage message={error} />
            }

        </div>

    )
}

export default ItemListContainer;