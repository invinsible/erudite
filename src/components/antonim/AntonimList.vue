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
            <b v-if="check1">{{check1.value1}}</b> - <b v-if="check2">{{check2.value2}}</b>         
            
            <p v-if="!list.find(el => el.active == true)">Конец</p>
            <p v-else><button @click.prevent="checkAntonim">Check</button></p>
        </div>
    </section>    
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    id: 1,
                    value1: 'белый',
                    value2: 'черный',
                    active: true
                },
                {
                    id: 2,
                    value1: 'мокрый',
                    value2: 'сухой',
                    active: true
                },
                {
                    id: 3,
                    value1: 'быстрый',
                    value2: 'медленный',
                    active: true
                },
                {
                    id: 4,
                    value1: 'громкий',
                    value2: 'тихий',
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