function ViewCombo(props) {

    const handleChange = (e) => {
        props.setView(e.target.value);
    }
    return (
        <select onChange={handleChange}>
            <option value="grid">Grilla</option>
            <option value="list">Lista</option>
        </select>
    )
}

export default ViewCombo;