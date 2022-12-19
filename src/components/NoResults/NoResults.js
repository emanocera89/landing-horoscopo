import notFound from '../../assets/not-found.svg';

function NoResults() {
    return (
        <div className="text-center" style={{ marginTop: 60 }}>
            <img src={notFound} width={100} style={{ marginBottom: 20 }} />
            <h3>No se encontraron coincidencias.</h3>
        </div>
    )
}

export default NoResults;