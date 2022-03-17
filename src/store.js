import Vue from "vue"
import axios from "axios"

const state = Vue.observable(
    {
        // film: [],
        cerca: "",
        films: [],
        series: [],
        baseURL: "https://api.themoviedb.org/3"
    }
)

export default state

export function filtraFilm() {
    axios.get(`${state.baseURL}/search/movie`,{
        params:{
            api_key: "9857cfb37fc41b760e69c70f6d75b517",
            query: state.cerca,
            language: "it-IT"
        }
    })
    .then(res => {
        console.log(res.data)
        state.films = res.data.results
    })
    .catch( error =>{
        console.log(error.response)
    })

    axios.get(`${state.baseURL}/search/tv`,{
        params:{
            api_key: "9857cfb37fc41b760e69c70f6d75b517",
            query: state.cerca,
            language: "it-IT"
        }
    })
    .then(res => {
        console.log(res.data)
        state.series = res.data.results
    })
    .catch( error =>{
        console.log(error.response)
    })
   
}