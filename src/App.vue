<template>
  <div id="app">
    <div class="logo-row">
      <img
        alt="Vue logo"
        src="./assets/logo.png"
        style="width: 150px"
        class="logo"
      />
    </div>
    <div class="card-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  background-color: #f0f0f0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-top: 20px;
}

.logo-row {
  display: flex;
  justify-content: flex-start;
  padding-left: 20px; /* Add left padding to the logo row */
  margin-bottom: 20px; /* Add space between rows */
}

.logo {
  margin-right: 20px;
  width: 150px;
}
</style>
