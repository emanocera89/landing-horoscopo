import { useState } from 'react';
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import SearchInput from '../SearchInput/SearchInput';
import SortingCombo from '../SortingCombo/SortingCombo';
import ViewCombo from '../ViewCombo/ViewCombo';
import { Container } from 'react-bootstrap';

function MainContainer() {

    const [sortValue, setSortValue] = useState("0");
    const [search, setSearch] = useState('');
    const [view, setView] = useState("grid");

    return (
        <Container>
            <h1 className="text-center">Horóscopo</h1>
            <div className="form-container mb-4">
                <SortingCombo setSortValue={setSortValue}/>
                <ViewCombo setView={setView} />
                <SearchInput setSearch={setSearch} />
            </div>
            <ItemListContainer sortValue={sortValue} search={search} view={view} />
        </Container>
    )
}

export default MainContainer;