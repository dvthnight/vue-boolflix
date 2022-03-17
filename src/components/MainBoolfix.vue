<template>
    <main>
        <ListaFilm/>
    </main>
</template>

<script>
import ListaFilm from "./ListaFilm.vue"
export default {
    components: {
        ListaFilm,
        
    },
    data(){
        return{
            cercaFilm: ""
        }
    },
    methods: {
        setCerca: function (stringa){
            this.cercaFilm = stringa
        }
    }
}
</script>


<style lang="scss" scoped>
    
</style>