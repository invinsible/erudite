<template>
    <section>       
        <div v-if="path">
            <p v-if="isLoading">Загрузка...</p>        
            <div class="two-columns" v-else>
                <div class="col">                
                    <div v-for="el in basicList" :key="el.id">
                        <input type="radio" :value="el" v-model="check1" :id="el.id + 11">                        
                        <label :for="el.id + 11" :class="{'no-active': !el.active}">{{el.value1}}</label>
                    </div>
                </div>
                <div class="col">                
                    <div v-for="el in shuffleList" :key="el.id">
                        <input type="radio" :value="el" v-model="check2" :id="el.id + 22">
                        <label :for="el.id + 22" :class="{'no-active': !el.active}">{{el.value2}}</label>
                    </div>
                </div>             
            </div>
            <div class="check-section" v-if="!isLoading">
                <notice-item v-if="notice" :notice="notice"/>
                <p><b v-if="check1">{{check1.value1}}</b> - <b v-if="check2">{{check2.value2}}</b></p>
                <p v-if="!list.find(el => el.active == true)">Bingo!</p>
                <p v-else>
                    <button
                        @click.prevent="checkAntonim"
                        class="check-answer"
                        :disabled="!check1 || !check2"
                    >Check
                    </button>
                </p>
            </div>
        </div>
        
    </section>    
</template>

<script>
import { shuffle } from '@/assets/functions.js';
import NoticeItem from '@/components/antonim/NoticeItem';
export default {
    components: {
        NoticeItem
    },
    data() {
        return {
            list: [],
            check1: null,
            check2: null,
            notice: null,

            isLoading: false
        }
    },
    watch: {
        notice(value) {
            if(value == null) {
                return null
            }           
            setTimeout(() => {
                this.setDefault()
            } , 2000);
        },
        path : {
            immediate: true,
            handler() {
                this.getData();
            }
        }
    },
    computed: {
        shuffleList() {
            return shuffle(this.list)
        },
        basicList() {
            return [... this.list]
        },
        path() {
            return this.$route.params.op
        }
    },    
    methods: {
        checkAntonim() {
            if(this.check1 == this.check2) {
                this.trueAnswer();
                this.notice = 'good'
            } else {
                this.notice = 'bad'
            }            
        },

        trueAnswer() {
            let current = this.list.find(item => item.id == this.check1.id);
            current.active = false;            
        },

        setDefault() {
            this.notice = null
            this.check1 = null, this.check2 = null
        },

        getData() {
            this.isLoading = true;        
            fetch(`${this.path}.json`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
            })
            .then(data => {
                this.isLoading = false;            
                const wordsList = [];           
                
                for (const id in data.words) {
                wordsList.push({
                    id: id,
                    value1: data.words[id].value1,            
                    value2: data.words[id].value2,            
                    active: data.words[id].active,
                    
                });
                }

                console.log(wordsList);
                this.list = wordsList;
            })
            .catch(error => {
                console.log(error);
            })
        },
    }
}
</script>

<style scoped>
    .check-answer {
        position: relative;
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
        z-index: 10;
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
    .no-active {
        pointer-events: none;
        color: green;
        opacity: 0.5;
        text-decoration: line-through;
    }
</style>