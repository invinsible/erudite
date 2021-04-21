<template>
  <div id="app">
    <header>
      <router-link :to="{name: 'index'}" class="link" v-if="$route.meta.showReturn">Retour</router-link>
      <div v-else>
        <router-link :to="{name: 'antonim', params: {op: 'etre'}}" class="link" active-class="link-active">être</router-link>
        <router-link :to="{name: 'antonim', params: {op: 'non'}}" class="link" active-class="link-active">non</router-link>        
        <router-link :to="{name: 'antonim', params: {op: 'qwerty'}}" class="link" active-class="link-active">qwerty</router-link>
      </div>      
    </header>    
    <router-view/>
  </div>
</template>