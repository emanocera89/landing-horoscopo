function SearchInput(props) {

    const handleChange = (e) => {
        props.setSearch(e.target.value);
    }

    return (
        <input type="text" placeholder="buscar por signo" onChange={handleChange} />
    )
}

export default SearchInput