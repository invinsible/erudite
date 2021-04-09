<template>
  <div id="app">
    <header>
      <router-link :to="{name: 'antonim'}" class="link" active-class="link-active">Être</router-link>
      <!-- <router-link :to="{name: 'erudit'}" class="link" active-class="link-active">Эрудит</router-link> -->
    </header>    
    <router-view/>
  </div>
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header {
  margin: 0 auto 30px;
  max-width: 450px;
  display: flex;
  align-items: center;  
}

.link {
  margin: 0 15px;
  display: block;
  color: #ccc;
  border-bottom: 1px solid #ccc;
  text-decoration: none;
}

.link-active {
  color: #000;
}
</style>
