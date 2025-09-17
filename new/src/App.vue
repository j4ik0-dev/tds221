<template>
  <nav>
    <router-link to="/inicio">Inicio</router-link> |
    <router-link to="/vuelos">Vuelos</router-link> |
    <router-link to="/hoteles">Hoteles</router-link> |
    <router-link to="/cruceros">Cruceros</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

nav {
  background-color: #003366;
  padding: 20px;
}
nav a {
  font-weight: bold;
  color: #ffffff;
  margin: 0 10px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #00bfff;
}

</style>
