<template>
  <div id="app">
    <header>
      <router-link :to="{name: 'index'}" class="link" v-if="$route.meta.showReturn">Вернуться</router-link>
      <div v-else>
        <router-link :to="{name: 'antonim', params: {op: 'etre'}}" class="link" active-class="link-active">être</router-link>
        <router-link :to="{name: 'antonim', params: {op: 'non'}}" class="link" active-class="link-active">non</router-link>        
        <router-link :to="{name: 'antonim', params: {op: 'qwerty'}}" class="link" active-class="link-active">qwerty</router-link>
      </div>      
    </header>    
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
  margin: 0 auto 30px;
  max-width: 450px;
  width: 450px;
  display: flex;
  align-items: center;
  text-align: left;
}

.link {
  margin: 0 15px;  
  font-size: 25px;
  color: #ccc;
  border-bottom: 1px solid #ccc;
  text-decoration: none;
  transition: color 0.3s;
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
