<template>
  <div id="app">
    <!-- <header>
      <router-link :to="{name: 'antonim'}" class="link" active-class="link-active">Imparfait</router-link>
      <router-link :to="{name: 'antonim'}" class="link" active-class="link-active">Present</router-link>
      <router-link :to="{name: 'antonim'}" class="link" active-class="link-active">Passe compose</router-link>
      <router-link :to="{name: 'antonim'}" class="link" active-class="link-active">Être</router-link>
      <router-link :to="{name: 'erudit'}" class="link" active-class="link-active">Эрудит</router-link>
    </header> -->
    <router-view/>
  </div>
</template>



<style>
body {
  margin: 0;
  min-width: 380px;  
}

#app {
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

#app::before, #app::after{
  position: absolute;
  content: '';
  width: 400px;
  height: 400px;
  border-radius: 50%;
  opacity: 0.4;
  transition: all 0.3s linear;
}

#app::before {  
  right: -100px;
  bottom: -140px;  
  background-color: red;  
}

#app::after {  
  right: -200px;
  top: -180px;  
  background-color: blue;
}

@media(max-width: 1100px) {
  #app::after, #app::before {
    width: 300px;
    height: 300px;
    opacity: 0.3;
  }
}

header {
  position: relative;
  margin: 0 auto 30px;
  max-width: 550px;
  width: 550px;
  display: flex;
  align-items: center;
  text-align: left;
  justify-content: center;
}

.link {
  margin: 0 15px;
  display: block;
  font-size: 25px;
  color: #ccc;
  border-bottom: 1px solid #ccc;
  text-decoration: none;
  transition: color 0.3s ease;
}

.link:hover {
  color: #000;
}

.link-active {
  color: #000;
  pointer-events: none;
  border-color: transparent;
}
</style>
