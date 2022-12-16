function SortingCombo(props) {

    const handleSortChange = (e) => {
        props.setSortValue(e.target.value);
    }

    return (
        <select onChange={handleSortChange}>
            <option value={0}>Orden alfabético descendente</option>
            <option value={1}>Orden alfabético ascendente</option>
            <option value={2}>Fecha descendente</option>
            <option value={3}>Fecha ascendente</option>
        </select>
    )
}

export default SortingCombo;