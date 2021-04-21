<template>
    <div class="col">                
        <div v-for="el in list" :key="el.id">
            <input
                type="radio"
                :value="el"
                :id="el.id + id"
                v-model="userChoose"
                @change="radioCheck"
            >
            <label
                :for="el.id + id"
                :class="{'no-active': !el.active}"
            >
            {{el[word]}}
            </label>
        </div>
    </div>
</template>

<script>
export default {
    model: {

    },
    props: {
        list: {
            type: Array,
            required: true
        },
        side: [Number, String],
        id: Number
    },

    data() {
        return {
            userChoose: null
        }
    },

    computed: {
        word() {
            if(this.side == 1) {
                return 'value1'
            } else {
                return 'value2'
            }
        }
    },

    methods: {
        radioCheck() {
            this.$emit('check', this.userChoose);
        }
    }
}
</script>

<style scoped>
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