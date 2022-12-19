
import { Form } from 'react-bootstrap';

function ViewCombo(props) {

    const handleChange = (e) => {
        props.setView(e.target.value);
    }
    return (
        <div className="form-container__form-group">
            <Form.Label className="me-3">Ver como</Form.Label>
            <Form.Select onChange={handleChange}>
                <option value="grid">Grilla</option>
                <option value="list">Lista</option>
            </Form.Select>
        </div>
    )
}

export default ViewCombo;