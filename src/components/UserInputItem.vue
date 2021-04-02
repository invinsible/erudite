<template>
    <input type="text" v-model="current">
</template>

<script>
export default {
    data(){
        return {
            current: null
        }
    },    
}
</script>

<style scoped>
 input {
     padding: 10px;
     width: 220px;
     height: 20px;
     margin-top: 20px;
     margin: 7px;
     font-size: 20px;
     text-transform: uppercase;
     text-align: center;
 }
</style>