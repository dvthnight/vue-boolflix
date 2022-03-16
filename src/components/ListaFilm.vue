<template>
    <div class="container">
        <input type="text" v-model="cerca" @keyup.enter="filtraFilm" class="cerca_input">
        
        <div class="film">
            <h2>Film</h2>
            <div class="container_card">
                <ul v-for="film in films" :key="film.id" class="card">
                    <li>
                        <h3 class="titolo_el" >Titolo</h3>
                        <div class="el_lista">{{film.title}}</div>
                    </li>
                    <li>
                        <h3 class="titolo_el" >Titolo Originale</h3>
                        <div class="el_lista">{{film.original_title}}</div>
                    </li>
                    <li>
                        <h3 class="titolo_el" >Lingua</h3>
                        <!-- <div class="el_lista">`{{bandiera}}</div> -->
                        <figure>
                            <img :src="bandiera(film)" alt="">

                        </figure>
                    </li>
                    <li>
                        <h3 class="titolo_el" >Voto</h3>
                        <div class="el_lista">{{film.vote_average}}</div>
                    </li>
                </ul>
            </div>
        </div>

        <div class="serie">
            <h2>serie</h2>
            <div class="container_card">
                <ul v-for="serie in series" :key="serie.id" class="card">
                    <li>
                        <h3 class="titolo_el" >Titolo</h3>
                        <div class="el_lista">{{serie.name}}</div>
                    </li>
                    <!-- <li>
                        <h3 class="titolo_el" >Titolo Originale</h3>
                        <div class="el_lista">{{serie.origin_country}}</div>
                    </li> -->
                    <li>
                        <h3 class="titolo_el" >Lingua</h3>
                        <div class="el_lista">{{serie.original_language}}</div>
                    </li>
                    <li>
                        <h3 class="titolo_el" >Voto</h3>
                        <div class="el_lista">{{serie.vote_average}}</div>
                    </li>
                </ul>
            </div>
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
            series: [],
            cerca:" ",
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
            .then(res => {
                console.log(res.data)
                this.series = res.data.results
            })
            .catch( error =>{
                console.log(error.response)
            })
           
    },

    // bandiera: function(film){
    //     const lingua = film.original_language;
    //     console.log(lingua)
    //     let url_bandierina;
    //     switch(lingua){
    //         case "us":
    //             url_bandierina = "usa";
    //             break;
    //         case "es":
    //             url_bandierina = "spagna";
    //             break;
    //         case "it":
    //             url_bandierina= "italia";
    //             break;
    //     }

    //     return "../assets/img/"+url_bandierina+".png"
    // }

    }
}

</script>


<style lang="scss" scoped>
    

    .container{
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        // flex-wrap: wrap;
        padding: 20px;

        .cerca_input{
            margin-bottom: 30px;
        }

        .container_card{
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            width: 100vw;

            .card{
                border: 3px solid rgb(199, 1, 1);
                padding: 10px;
                width: 20%;
                height: 30rem;
                display: flex;
                justify-content: center;
                flex-direction: column;  

                .titolo_el{
                    text-transform: uppercase;
                    text-align: center;
                    padding: 10px 0;
                    font-size: 1.5rem;
                }

                .el_lista{
                    text-align: center;
                    font-size: 1.25rem;
                    margin-bottom: 10px;
                }

                figure {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                }
            }
        
        }

        h2{
            text-transform: uppercase;
            text-align: center;
        }
    }
</style>