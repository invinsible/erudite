<template>
    <div>
        <input type="radio"
            :value="word"            
            :id="labelId"
            :checkThis = "checkThis"
            @change="up"
        />                        
        <label :for="labelId" v-if="word.active">{{wordValue(param)}}</label>
    </div>
</template>

<script>
export default {
    model: {
        prop: 'checkThis',
        event: 'change'
    },
    
    props: {
        word: Object,
        param: Number,
        checkThis: Object   
    },
    data() {
        return {
            check: null           
        }
    },
    computed: {
        labelId() {
            return this.word.id + Math.random();
        }
    },
    methods: {
        wordValue(num) {           
            return this.word['value' + num]          
        },
        up() {
            this.$emit('checkThis', this.$event.target.value);
        }
    },
    
}
</script>