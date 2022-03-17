<template>
    <header>
        <figure class="logo">
            <img src="../assets/img/netflix.png" alt="">
        </figure>
        <BarraRicerca/>
    </header>
</template>

<script>
import BarraRicerca from "./BarraRicerca.vue"

export default {
    components:{
        BarraRicerca,
    }
}
</script>

<style lang="scss" scoped>
    header{
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo{
            width: 7rem;
            img{
                width:100%
            }
        }
    }
</style>