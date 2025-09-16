<template>
    <main>
        <section class="banner">
        <div class="banner-texto">
            <h1>Reserva tu vuelo con Salvadorian Airlines</h1>
            <p>¡Explora el mundo con nosotros!</p>
        </div>
    </section>
    </main>
        <section class="booking-form">
        <div class="container">
            <h2>Reserva de Vuelo</h2>
            <form action="#" method="post">
                <div class="form-group">
                    <label for="origen">Origen:</label>
                    <select id="origen" name="origen" required>
                        <option value="">Seleccionar</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Honduras">Honduras</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Panama">Panamá</option>
                        <option value="Colombia">Colombia</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="destino">Destino:</label>
                    <select id="destino" name="destino" required>
                        <option value="">Seleccionar</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Honduras">Honduras</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Panama">Panamá</option>
                        <option value="Colombia">Colombia</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="fechaSalida">Fecha de salida:</label>
                    <input type="date" id="fechaSalida" name="fechaSalida" required />
                </div>
                <div class="form-group">
                    <label for="fechaRegreso">Fecha de regreso:</label>
                    <input type="date" id="fechaRegreso" name="fechaRegreso" required />
                </div>
                <div class="form-group">
                    <label for="pasajeros">Número de Pasajeros:</label>
                    <select id="pasajeros" name="pasajeros" required>
                        <option value="">Seleccionar</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div class="form-group">
                    <input type="submit" value="Reservar Vuelo" />
                </div>
            </form>
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

<script>
export default {
    name: "HomePage",
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
}

body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

main {
    flex: 1;
    background-color: #f5f9fc;
    color: #333;
    line-height: 1.6;
}

.banner {
    width: 100%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    background: url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80") no-repeat center center/cover;
}

.banner::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 40, 80, 0.55);
}

.banner-texto {
    position: relative;
    color: #fff;
    z-index: 2;
}

.banner-texto h1 {
    font-size: 2.8rem;
    margin-bottom: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.banner-texto p {
    font-size: 1.2rem;
    font-weight: 300;
}

.booking-form {
    padding: 3rem 1.5rem;
    background: #fff;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    margin: -3rem auto 2rem;
    border-radius: 12px;
    max-width: 800px;
    position: relative;
    z-index: 5;
}

.booking-form h2 {
    text-align: center;
    margin-bottom: 1.8rem;
    color: #003366;
}

.form-group {
    margin-bottom: 1.2rem;
}

label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.4rem;
    color: #222;
}

input[type="date"],
select {
    width: 100%;
    padding: 0.7rem;
    border: 1px solid #bbb;
    border-radius: 8px;
    font-size: 1rem;
    outline: none;
    transition: border 0.3s ease;
}

input[type="date"]:focus,
select:focus {
    border-color: #007bff;
}

input[type="submit"] {
    width: 100%;
    padding: 0.9rem;
    background: linear-gradient(135deg, #007bff, #00bfff);
    border: none;
    border-radius: 8px;
    color: #fff;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s ease, background 0.3s ease;
}

input[type="submit"]:hover {
    background: linear-gradient(135deg, #0056b3, #0099cc);
    transform: translateY(-2px);
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
