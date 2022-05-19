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
    props: {
        list: {
            type: Array,
            required: true
        },
        side: [Number, String],
        id: Number,
        op: Object
    },
    data() {
        return {
            userChoose: null
        }
    },

    watch: {
        op(value) {
            if(!value) {
                this.userChoose = null
            }
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

