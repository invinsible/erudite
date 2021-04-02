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

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

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