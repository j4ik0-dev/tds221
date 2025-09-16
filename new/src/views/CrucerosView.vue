<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200">
    <div class="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
      <h2 class="text-3xl font-bold mb-6 text-center text-blue-700">
        Reserva tu Viaje en Crucero
      </h2>

      <form @submit.prevent="enviarFormulario" class="space-y-5">
        <!-- Nombre -->
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

        <!-- Email -->
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

        <!-- Destino -->
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

        <!-- Fecha -->
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

        <!-- Pasajeros -->
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

        <!-- Preferencias -->
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

        <!-- Botón -->
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Reservar
        </button>
      </form>

      <!-- Resultado -->
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
