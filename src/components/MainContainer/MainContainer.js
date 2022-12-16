import { useState } from 'react';
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import SearchInput from '../SearchInput/SearchInput';
import SortingCombo from '../SortingCombo/SortingCombo';
import ViewCombo from '../ViewCombo/ViewCombo';

function MainContainer() {

    const [sortValue, setSortValue] = useState("0");
    const [search, setSearch] = useState('');
    const [view, setView] = useState("grid");

    return (
        <div className="container">

            <div className="sort-container">
                <SortingCombo setSortValue={setSortValue}/>
                <ViewCombo setView={setView} />
                <SearchInput setSearch={setSearch} />
            </div>
            <ItemListContainer sortValue={sortValue} search={search} view={view} />

        </div>
    )
}

export default MainContainer;