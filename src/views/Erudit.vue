<template>
    <div>
        <letters 
        :mainWord="mainWord"
        />
        <user-input
        :answers="rightAnswers"
        />
   
    </div>    
</template>

<script>
import Letters from '@/components/erudit/Letters'
import UserInput from '@/components/erudit/UserInput'

export default {
  name: 'App',

  components: {
    Letters,
    UserInput    
  },

  data() {
    return {
      mainWord : 'договор',
      rightAnswers : ['договор','ров','огород']
    }
  }
}
</script>