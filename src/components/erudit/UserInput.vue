<template>
    <div>
        <form>
            <input type="text" v-model="current" :class="{'input-error' : alertMessage}">
            <button @click.prevent="check" :disabled="!answersArray.length">Check</button>
            <button @click.prevent="dealDamage" :disabled="!answersArray.length">End round</button>
            <p v-if="alertMessage" style="color: red;">{{alertMessage}}</p>
        </form>
        <answer-list :answersArray="answersArray" :trueList="trueList"/>
        <p v-if="false">Игрок: <health-bar :hp="playerHealth"/></p>
        <p v-if="false">Противник: <health-bar :hp="enemyHealth"/></p> 
    </div>
</template>

<script>
import AnswerList from './AnswerList';
import HealthBar from './HealthBar';

export default {
    components: { AnswerList, HealthBar },
    props: {        
        answers: Array
    },    

    data() {
        return {
            current: null,
            answersArray: [...this.answers],
            alertMessage: null,
            trueList: [],

            enemyHealth : 3,
            playerHealth: 3
        }
    },

    watch: {
        answersArray(value) {            
            if(value.length == 0) {
                this.dealDamage();
            }
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

        dealDamage() {            
            this.enemyHealth -= this.trueList.length;
            this.playerHealth -= this.answersArray.length;
            this.trueList = [];
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
     border: 1px solid;
     text-transform: uppercase;
     text-align: center;
     outline: none;
 }

 .input-error {
     border-color: red;
 }
</style>