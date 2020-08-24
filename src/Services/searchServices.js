import axios from 'axios'

const api_key = "1cd3a65897a336f841f1ac1d98e56dad";

export default {
  async getResultOfSearch(query) {
    console.log(query)
    try {

      const responce = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&page=1&include_adult=false&&query=${query}`)
      return responce.data
    } catch (error) {
      console.log(error)
    }
  },

}