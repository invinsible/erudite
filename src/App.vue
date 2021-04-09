<template>
  <div id="app">
    <letters 
      :mainWord="mainWord"
    />
    <user-input
      :answers="rightAnswers"
    />    
  </div>
</template>

<script>
import Letters from '@/components/Letters'
import UserInput from '@/components/UserInput'

export default {
  name: 'App',

  components: {
    Letters,
    UserInput
  },

  data() {
    return {
      mainWord : 'договор',
      rightAnswers : ['договор','ров','огород','вор']
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
