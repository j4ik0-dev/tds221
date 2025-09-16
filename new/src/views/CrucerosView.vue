<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200">
    <div class="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
      <h2 class="text-3xl font-bold mb-6 text-center text-blue-700">
        Reserva tu Viaje en Crucero
      </h2>

      <form @submit.prevent="enviarFormulario" class="space-y-5">
        <div>
          <label for="nombre" class="block text-blue-800 font-medium mb-1">Nombre completo</label>
          <input
            type="text"
            id="nombre"
            v-model="form.nombre"
            class="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label for="email" class="block text-blue-800 font-medium mb-1">Correo electrónico</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            class="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label for="destino" class="block text-blue-800 font-medium mb-1">Destino</label>
          <select
            id="destino"
            v-model="form.destino"
            class="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          >
            <option disabled value="">Selecciona un destino</option>
            <option>Caribe</option>
            <option>Mediterráneo</option>
            <option>Alaska</option>
            <option>Sudeste Asiático</option>
          </select>
        </div>

        <div>
          <label for="fecha" class="block text-blue-800 font-medium mb-1">Fecha de salida</label>
          <input
            type="date"
            id="fecha"
            v-model="form.fecha"
            class="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label for="pasajeros" class="block text-blue-800 font-medium mb-1">Número de pasajeros</label>
          <input
            type="number"
            id="pasajeros"
            v-model="form.pasajeros"
            class="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            min="1"
            required
          />
        </div>

        <div>
          <label class="block text-blue-800 font-medium mb-1">Preferencias</label>
          <div class="space-y-2">
            <label class="flex items-center space-x-2">
              <input type="checkbox" value="Comida gourmet" v-model="form.preferencias" class="accent-blue-600" />
              <span>Comida gourmet</span>
            </label>
            <label class="flex items-center space-x-2">
              <input type="checkbox" value="Excursiones" v-model="form.preferencias" class="accent-blue-600" />
              <span>Excursiones</span>
            </label>
            <label class="flex items-center space-x-2">
              <input type="checkbox" value="Entretenimiento nocturno" v-model="form.preferencias" class="accent-blue-600" />
              <span>Entretenimiento nocturno</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Reservar
        </button>
      </form>

      <div v-if="enviado" class="mt-6 p-4 bg-blue-100 text-blue-800 rounded-lg">
        <h3 class="font-bold text-lg mb-2">¡Formulario enviado!</h3>
        <p><strong>Nombre:</strong> {{ form.nombre }}</p>
        <p><strong>Email:</strong> {{ form.email }}</p>
        <p><strong>Destino:</strong> {{ form.destino }}</p>
        <p><strong>Fecha:</strong> {{ form.fecha }}</p>
        <p><strong>Pasajeros:</strong> {{ form.pasajeros }}</p>
        <p><strong>Preferencias:</strong> {{ form.preferencias.join(", ") }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  nombre: "",
  email: "",
  destino: "",
  fecha: "",
  pasajeros: 1,
  preferencias: []
});

const enviado = ref(false);

const enviarFormulario = () => {
  enviado.value = true;
  console.log("Datos del formulario:", form.value);
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
  background-color:rgb(23, 72, 118);
  color: #333;
  line-height: 1.6;
}

.min-h-screen {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  width: 100%;
}

.w-full.max-w-lg {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  padding: 2rem;
}

h2 {
  text-align: center;
  margin-bottom: 1.8rem;
  color: #003366;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.4rem;
  color: #222;
}

input[type="text"],
input[type="email"],
input[type="date"],
input[type="number"],
select {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #bbb;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border 0.3s ease;
}

input:focus,
select:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0,123,255,0.2);
}

input[type="checkbox"] {
  accent-color: #007bff;
}

button[type="submit"] {
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

button[type="submit"]:hover {
  background: linear-gradient(135deg, #0056b3, #0099cc);
  transform: translateY(-2px);
}

.mt-6 {
  margin-top: 1.5rem;
}

.bg-blue-100 {
  background: #e6f2ff;
}

.text-blue-800 {
  color: #003366;
}

.rounded-lg {
  border-radius: 10px;
  padding: 1rem;
}
</style>
