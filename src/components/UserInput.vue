<template>
    <div>
        <form>
            <input type="text" v-model="current" :class="{'input-error' : alertMessage}">
            <button @click.prevent="check">Check</button>
            <p v-if="alertMessage" style="color: red;">{{alertMessage}}</p>                
        </form>
        <answer-list :answersArray="answersArray" :trueList="trueList"/>        
    </div>
</template>

<script>
import AnswerList from './AnswerList.vue';

export default {
    components: { AnswerList },
    props: {
        answers: Array
    },    

    data() {
        return {
            current: null,
            answersArray: [...this.answers],
            alertMessage: null,
            trueList: []
        }
    },

    methods: {
        check() {
            if(!this.current) {                
                this.alertMessage = 'Вы ничего не ввели';
                return
            }
            this.alertMessage = null;
            
            let searchWord = this.current.toLowerCase();
            if(this.answersArray.includes(searchWord)) {
                this.answersArray.splice(this.answersArray.indexOf(searchWord), 1);

                this.trueList.push(searchWord);                
            } else {
                this.alertMessage = 'Слово не подходит';
            }

            this.current = null;
        },       
        
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
     border: 1px solid;
     text-transform: uppercase;
     text-align: center;
     outline: none;
 }

 .input-error {
     border-color: red;
 }
</style>