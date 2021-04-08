<template>
    <div>
        <img v-for="n in hp" :key="n" src="@/assets/hp-ico.png">
    </div>       
</template>

<script>
export default {
    name: 'HealthBar',
    props: {
        hp: Number
    }
}
</script>

<style scoped>
    div {
        display: flex;
        justify-content: center;
    }
    img {
        display: block;
        margin: 0 3px;
    }
</style>