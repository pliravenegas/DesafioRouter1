const Contact = () => {
    return (
        <main>

            <h1>Cuentanos, ¿ En que te podemos ayudar?</h1>

            <form>
                <label htmlFor="">Email:</label>
                <input type="Email" placeholder="Ingresa tu email" />

                <label htmlFor="descripción">Descripción:</label>
                <textarea id="descripción" cols="30" rows="10"></textarea>

                <button className="boton">Enviar</button>

            </form>

        </main>

    )

}

export default Contact