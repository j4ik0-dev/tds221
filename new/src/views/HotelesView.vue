<template>
    <section class="banner-hotel">
        <div class="overlay">
            <div class="formulario-hotel">
                <h2>Reserva tu Hotel</h2>
                <form>
                    <div class="fila">
                        <div class="campo">
                            <label for="destino">Destino</label>
                            <input type="text" id="destino" placeholder="Código de ciudad o aeropuerto" />
                        </div>
                    </div>

                    <div class="fila">
                        <div class="campo">
                            <label for="entrada">Entrada</label>
                            <input type="date" id="entrada" />
                        </div>

                        <div class="campo">
                            <label for="salida">Salida</label>
                            <input type="date" id="salida" />
                        </div>

                        <div class="campo">
                            <label for="huespedes">Huéspedes</label>
                            <select id="huespedes">
                                <option>Selecciona los huéspedes</option>
                                <option>1 huésped</option>
                                <option>2 huéspedes</option>
                                <option>3 huéspedes</option>
                            </select>
                        </div>

                        <div class="campo">
                            <label for="habitaciones">Habitaciones</label>
                            <select id="habitaciones">
                                <option>Selecciona habitaciones</option>
                                <option>1 habitación</option>
                                <option>2 habitaciones</option>
                            </select>
                        </div>
                    </div>

                    <div class="fila boton">
                        <button type="submit">Buscar</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    <footer>
        <div class="redes">
            <p>Contacta con nosotros</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                alt="logo de Instagram" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="logo de Facebook" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg" alt="Logo de X" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                alt="Logo de LinkedIn" />

        </div>

        <div class="sucursales">
            <div id="Sucursal_sv">
                <p id="sedes">SEDES</p>
                <p>
                    <br />El Salvador<br /><br />
                    La Libertad<br />
                    Zona Comercial #3, Calle Primavera y, Santa Tecla
                </p>
            </div>
            <div class="Sucursal_colombia">
                <p>
                    <br />Colombia<br /><br />
                    Bello<br />
                    Av. 40 #Diagonal 55A #41, Hermosa Provincia, Antioquia.
                </p>
            </div>
        </div>

        <p id="copyright">Copyright © Salvadorian Airlines</p>
    </footer>
</template>

<style scoped>
.banner-hotel {
    position: relative;
    height: 500px;
    background: url("https://www.korusgroup.com/wp-content/uploads/2023/02/luxury-hotel-design-build.jpg") no-repeat center center/cover;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0;
}

.overlay {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.formulario-hotel {
    background: #fff;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    max-width: 1000px;
    width: 90%;
}

.formulario-hotel h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #003366;
}

.fila {
    display: flex;
    gap: 15px;
    margin-bottom: 15px;
    flex-wrap: wrap;
}

.campo {
    flex: 1;
    min-width: 180px;
}

.campo label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #003366;
}

.campo input,
.campo select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 14px;
}

.fila.boton {
    justify-content: center;
}

button {
    padding: 12px 40px;
    background: #007BFF;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.3s ease;
}

button:hover {
    background: #0056b3;
}
footer {
    background: #00264d;
    color: #fff;
    padding: 2rem 1rem;
    text-align: center;
}

footer .redes {
    margin-bottom: 1.5rem;
}

footer .redes p {
    margin-bottom: 0.6rem;
    font-weight: bold;
    letter-spacing: 1px;
}

footer .redes a {
    margin: 0 0.5rem;
    display: inline-block;
}

footer .redes img {
    width: 28px;
    height: 28px;
    transition: transform 0.2s ease;
}

footer .redes img:hover {
    transform: scale(1.2);
}

#correo_oficial {
    display: block;
    margin-top: 0.6rem;
    color: #00bfff;
    text-decoration: none;
}

#correo_oficial:hover {
    text-decoration: underline;
}

footer .sucursales {
    margin: 2rem 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
}

footer .sucursales p {
    max-width: 220px;
    text-align: left;
    line-height: 1.5;
    width: 100%;
}

#sedes {
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 0.6rem;
    color: #00bfff;
}

#copyright {
    margin-top: 1rem;
    font-size: 0.85rem;
    opacity: 0.7;
}
</style>
