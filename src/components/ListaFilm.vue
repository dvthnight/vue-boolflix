<template>
    <div class="container">

        <div class="film">
            <h2>Film</h2>
            <div class="container_card">
                <div v-for="film in films" :key="film.id" class="card">
                    <div class="contenitore_locandina">
                        <img :src="'https://image.tmdb.org/t/p/w342/'+film.poster_path" alt="" class="el_lista locandina" >
                    </div>
                    <ul class="dati">
                        <li >
                            <h3 class="titolo_el" >Titolo</h3>
                            <div class="el_lista">{{film.title}}</div>
                        </li>
                        <li >
                            <h3 class="titolo_el" >Titolo Originale</h3>
                            <div class="el_lista">{{film.original_title}}</div>
                        </li>
                        <li >
                            <h3 class="titolo_el" >Lingua</h3>
                            <!-- <div class="el_lista">`{{bandiera}}</div> -->
                            <!-- <figure>
                                <img :src="bandierine(film.original_language)" alt="">

                            </figure> -->
                            <div class="el_lista bandierina">{{bandierine(film.original_language)}}</div>
                        </li>
                        <li >
                            <h3 class="titolo_el" >Voto</h3>
                            <div class="contenitore_stelle">
                                <div class="el_lista stelle" >
                                    <i v-for="n in 5" :key="n" class="fa-star" :class="n <= votoFilm(film) ? 'fa-solid gold' : 'fa-regular'"></i>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="serie">
            <h2>serie</h2>
            <div class="container_card">
                <div v-for="serie in series" :key="serie.id" class="card">
                    <div class="contenitore_locandina">
                        <img :src="'https://image.tmdb.org/t/p/w342/'+serie.poster_path" alt="" class="el_lista locandina" >

                    </div>
                    <ul class="dati">
                        <li>
                            <h3 class="titolo_el" >Titolo</h3>
                            <div class="el_lista">{{serie.name}}</div>
                        </li>
                        <!-- <li>
                            <h3 class="titolo_el" >Titolo Originale</h3>
                            <div class="el_lista">{{serie.origin_country}}</div>
                        </li> -->
                        <li >
                            <h3 class="titolo_el" >Lingua</h3>
                                <div class="el_lista bandierina">{{bandierine(serie.original_language)}}</div>

                        </li>
                        <li >
                            <h3 class="titolo_el" >Voto</h3>
                                <div class="contenitore_stelle">
                                    <div class="el_lista stelle">
                                        <i v-for="n in 5" :key="n" class="fa-star" :class="n <= votoSerie(serie) ? 'fa-solid gold' : 'fa-regular'"></i>
                                    </div>
                                </div>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import state from "../store"
// import axios from "axios"
// import BarraRicerca from "./BarraRicerca.vue"
import state from "../store"
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import { hasFlag } from 'country-flag-icons'

export default {
    components:{
        // BarraRicerca,
    },

    data(){
        return{

        }
    },

    computed: {
       cerca: function(){
           return state.cerca;
       },

       films: function(){
           return state.films
       },

       series: function(){
           return state.series
       }
    },

    methods:{


    bandierine: function(lingua){
        if(hasFlag(lingua.toUpperCase())){
            return getUnicodeFlagIcon(lingua);
        }
        return lingua;
    },

     votoFilm: function(film){
            return Math.ceil(film.vote_average / 2);
        },
        votoSerie: function(serie){
            return Math.ceil(serie.vote_average / 2);
        }

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
        height: calc(100vh - 100px);
        // width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        // flex-wrap: wrap;
        padding: 20px;

        .film, .serie{
            height: 700px;
            margin-left: 100px;
        }


        .container_card{
            display: flex;
            gap: 20px;
            flex-wrap: nowrap;
            justify-content: flex-start;
            align-items: center;
            width: 100vw;
            overflow: auto;
            margin-bottom: 20px;


            .card{
                // border: 3px solid rgb(199, 1, 1);
                // padding: 10px;
                // height: 30rem;
                display: flex;
                justify-content: center;
                flex-direction: column;


                .dati{
                    display: none;
                }
                
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

                .bandierina{
                    font-size: 30px;
                }

               


                // figure {
                //     width: 100%;
                //     display: flex;
                //     justify-content: center;
                // }
            }

            .card:hover{
                cursor: pointer;
            }

            .card:hover .dati{
                display: block;
                height: 523px;
                width: 342px;
            }

            .card:hover .locandina{
                display: none;
            }

            .contenitore_locandina, .contenitore_stelle{
                display: flex;
                justify-content: center;
            }


            .gold{
                color: gold;
            }


        }

        h2{
            text-transform: uppercase;
            font-size: 2rem;
            // text-align: center;
        }
    }
</style>