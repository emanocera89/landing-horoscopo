import { Form } from 'react-bootstrap';

function SearchInput(props) {

    const handleChange = (e) => {
        props.setSearch(e.target.value);
    }

    return (
        <div className="form-container__form-group search-container">
            <Form.Control type="text" placeholder="buscar por signo" onChange={handleChange} />
        </div>
    )
}

export default SearchInput