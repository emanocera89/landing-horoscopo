import { Form } from 'react-bootstrap';

function SortingCombo(props) {

    const handleSortChange = (e) => {
        props.setSortValue(e.target.value);
    }

    return (
        <div className="form-container__form-group">
            <Form.Label className="me-3">Orden</Form.Label>
            <Form.Select onChange={handleSortChange}>
                <option value={0}>alfabético descendente</option>
                <option value={1}>alfabético ascendente</option>
                <option value={2}>Fecha descendente</option>
                <option value={3}>Fecha ascendente</option>
            </Form.Select>
        </div>
    )
}

export default SortingCombo;