<template>
    <div class="container">
        <input type="text" v-model="cerca" @keyup.enter="filtraFilm">
        <div v-for="film in films" :key="film.id" >
            {{film.title}}
        </div>
    </div>
</template>

<script>
// import state from "../store"
import axios from "axios"
export default {

    data(){
        return{
            films: [],
            cerca:"casa",
            baseURL: "https://api.themoviedb.org/3"
        }
    },

    methods:{
        filtraFilm: function(){
            axios.get(`${this.baseURL}/search/movie`,{
                params:{
                    api_key: "9857cfb37fc41b760e69c70f6d75b517",
                    query: this.cerca,
                    language: "it-IT"
                }
            })
            .then(res => {
                console.log(res.data)
                this.films = res.data.results
            })
            .catch( error =>{
                console.log(error.response)
            })

            axios.get(`${this.baseURL}/search/tv`,{
                params:{
                    api_key: "9857cfb37fc41b760e69c70f6d75b517",
                    query: this.cerca,
                    language: "it-IT"
                }
            })
        }
           
    }

    }
// }

</script>


<style lang="scss" scoped>
    .container{
        height: 700px;
    }
</style>