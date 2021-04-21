<template>
    <section>
        {{this.$store.state.user}}
        <br>
        {{this.$store.getters['FULL_NAME']}}
        <button @click.prevent="$store.commit('SET_USER', 'oleg')">store</button>
        <div v-if="path">
            <p v-if="isLoading">Загрузка...</p>        
            <div class="two-columns" v-else>
                <antonim-item 
                    :list="basicList"
                    :side="1"
                    :id="11"
                    :op="check1"                  
                    @check="check1 = $event"
                />
                <antonim-item 
                    :list="shuffleList"
                    :side="2"
                    :id="22"
                    :op="check2"              
                    @check="check2 = $event"
                />                            
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
                    >Envoyer
                    </button>
                </p>
            </div>
        </div>
        
    </section>    
</template>

<script>
import { shuffle } from '@/assets/functions.js';
import NoticeItem from '@/components/antonim/NoticeItem';
import AntonimItem from '@/components/antonim/AntonimItem';
export default {
    components: {
        NoticeItem,
        AntonimItem
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
            } , 1500);
        },
        path: {
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
            this.check1 = null
            this.check2 = null
        },
        getData() {
            this.isLoading = true;
            fetch(`/${this.path}.json`)
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
                this.list = wordsList;
            })
            .catch(error => {
                console.log(error);
            })
        },
    }
}
</script>

