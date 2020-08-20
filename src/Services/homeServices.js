import axios from 'axios'

const api_key = "1cd3a65897a336f841f1ac1d98e56dad";

export default {
  async getTrendingFilms() {
    try {
    const responce = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}&page=1`)
    return responce.data
    } catch (error) {
      console.log(error)
    }
  },

}