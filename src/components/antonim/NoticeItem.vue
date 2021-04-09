<template>
    <p :class="[notice == 'good' ? 'green' : 'red']">{{message}}</p>
</template>

<script>
import { getRandom } from '@/assets/functions.js';
export default {
    props: {
        notice: [String, Object]
    },    

    data() {
        return {
            phrases: {
                good: ['Excelent', 'Nice', 'Beautiful'],
                bad: ['Try one more', 'Oh, it is false', 'Think one more']
            }
        }
    },

    computed: {
        message() {
            if(this.notice === 'good') {
                return this.phrases.good[getRandom(0, this.phrases.good.length - 1)]
            }

            return this.phrases.bad[getRandom(0, this.phrases.bad.length - 1)]
        }
    }
}
</script>

<style scoped>
 .green {
     color: green;
 }

 .red {
     color: red;
 }
</style>