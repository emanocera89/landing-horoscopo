import error from '../../assets/error-icon.svg';

function ErrorMessage(props) {
    return (
        <div className="text-center" style={{ marginTop: 60 }}>
            <img src={error} width={100} style={{ marginBottom: 20 }} />
            <h3>{props.message}</h3>
        </div>
    )
}

export default ErrorMessage;