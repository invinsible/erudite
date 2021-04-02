<template>
    <form>
        <input type="text" v-model="current">
        <button @click.prevent="check">Check</button>
        <p v-if="message">{{message}}</p>

        {{answersArray}}

        <p v-for="el in trueList" :key="el">{{el}}</p>
    </form>
    
</template>

<script>

export default {
    props: {
        answers: Array
    },    

    data() {
        return {
            current: null,
            answersArray: [...this.answers],
            message: null
        }
    },

    computed: {
        trueList() {
            return [

            ]
        }
    },

    methods: {
        check() {
            if(!this.current) {
                this.message = 'Вы ничего не ввели'
                return
            }

            let searchWord = this.current.toLowerCase();

            if(this.answersArray.includes(searchWord)) {                
                this.answersArray.splice(this.answersArray.indexOf(searchWord), 1);

                this.trueList.push(searchWord);
                this.current = null;
            }           
        }
    }
}
</script>

<style scoped>
 input {
     padding: 10px;
     width: 220px;
     height: 15px;
     margin-top: 20px;
     margin: 7px;
     font-size: 20px;
     text-transform: uppercase;
     text-align: center;
 }
</style>