<template>
    <div>
        <p v-show="false"><small>{{answersArray}}</small></p>
        <div class="two-columns">
            <div class="col">
                <p>Правильные ответы:</p>
                <ul class="true-list">
                    <li v-for="el in trueList" :key="el">{{el}}</li>
                </ul>
            </div>
            <div class="col">
                <p>Осталось не отгаданных слов:</p>
                <p class="enemy-dmg">{{answersArray.length}}</p>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    props: {
        answersArray: Array,
        trueList: Array
    }
}
</script>

<style scoped>
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

    .enemy-dmg {
        color: red;
        font-weight: bold;
    }

    p {
        margin: 0;
    }

    .true-list {   
        margin: 0;     
        padding-left: 0;        
        list-style: none;
        color: green;
    }
</style>