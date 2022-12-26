
function Home(props) {
    return (
        <div className="home">
            <h3>Gracias por completar los datos</h3>
            <p><strong>{props.email}</strong> en hora buena te has registrado con exito</p>
            <button onClick={props.volveraregistrarse}>Volver a registrarse</button>
        </div>
    )
}

export default Home