<template>
    <div>
        <BarraRicerca/>
        <ListaFilm/>
    </div>
</template>

<script>
import ListaFilm from "./ListaFilm.vue"
import BarraRicerca from "./BarraRicerca.vue"
export default {
    components: {
        ListaFilm,
        BarraRicerca,
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