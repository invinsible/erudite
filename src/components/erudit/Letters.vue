<template>
    <div>
        <span 
            v-for="el in letters"
            :key="el.id"
        >
            {{el.letter}}
        </span>
    </div>
</template>

<script>
import { shuffle } from '@/assets/functions.js';

export default {
    name: 'Letters',

    props: {
        mainWord: String
    },

    data() {
        return {
            hello: 'hello from Letters.vue'
        }
    },

    computed: {
        letters() {
            let result = [];            

            let array = shuffle(this.mainWord.split(''));
            array.forEach(el => {
                result.push({
                    id: Math.random() * 10,
                    letter: el,
                    active: true
                })
            });
            
            return result            
        }
    }

    
}
</script>


<style scoped>
    /* span {
        font-size: 20px;
        font-weight: bold;
    } */
</style>