<template>
    <section>
        <div class="two-columns">
            <div class="col">
                <div v-for="el in list" :key="el.id">
                    <input type="radio" :value="el" v-model="check1" :id="el.id + 11">                        
                    <label :for="el.id + 11" v-if="el.active">{{el.value1}}</label>
                </div>                                
            </div>
            <div class="col">
                <div v-for="el in list" :key="el.id">                    
                    <input type="radio" :value="el" v-model="check2" :id="el.id + 22">                        
                    <label :for="el.id + 22" v-if="el.active">{{el.value2}}</label>
                </div> 
                              
            </div>        
        </div>
        <div>
            <p><b v-if="check1">{{check1.value1}}</b> - <b v-if="check2">{{check2.value2}}</b></p>
            
            <p v-if="!list.find(el => el.active == true)">Конец</p>
            <p v-else>
                <button
                    @click.prevent="checkAntonim"
                    class="check-answer"
                    :disabled="!check1 || !check2"
                >Check
                </button>
            </p>
        </div>
    </section>    
</template>

<script>
//import { shuffle } from '@/assets/functions.js';
export default {
    data() {
        return {
            list: [
                {
                    id: 1,
                    value1: 'white',
                    value2: 'black',
                    active: true
                },
                {
                    id: 2,
                    value1: 'day',
                    value2: 'night',
                    active: true
                },
                {
                    id: 3,
                    value1: 'big',
                    value2: 'small',
                    active: true
                },
                {
                    id: 4,
                    value1: 'slow',
                    value2: 'fast',
                    active: true
                }
            ],
            check1: null,
            check2: null
        }
    },    
    
    methods: {
        checkAntonim() {
            if(this.check1 == this.check2) {                
                let current = this.list.find(item => item.id == this.check1.id);
                current.active = false;
            }

            this.check1 = null, this.check2 = null;
        }
    }
}
</script>


<style scoped>
    .check-answer {
        padding: 10px 20px;
        margin: 0 auto;
        display: block;
        font-size: 20px;
        font-weight: bold;
        background-color: rgb(37, 131, 111);
        color: #fff;
        text-align: center;
        outline: none;
        border: none;
        cursor: pointer;
        transition: opacity 0.3s linear;
    }
    .check-answer:hover {
        opacity: 0.87;
    }
    .check-answer:disabled {
        background-color: #ccc;
        cursor: auto;
    }
    .two-columns {
        margin: 0 auto;
        max-width: 450px;        
        display: flex;
        align-items: flex-start;
    }
    .col {
        padding: 20px;
        min-height: 150px;
        width: 50%;
        border: 1px dotted #ccc;
    }
    label {
        padding: 5px 10px;
        display: block;
        cursor: pointer;
    }
    input {
        display: none;
    }
    input:checked + label{
        font-weight: bold;
    }
</style>