<template>
    <header>
         <input type="text" v-model="cerca" @keyup.enter="setCerca" class="cerca_input">
    </header>
</template>

<script>

import state from "../store"
import {filtraFilm} from "../store"

export default {
    data(){
        return{
            cerca:" ",
            
        }
    },
    methods: {
        setCerca: function(){
            state.cerca = this.cerca
            filtraFilm()
        }
    }
}
</script>


<style lang="scss" scoped>
.cerca_input{
    margin-bottom: 30px;
}
</style>