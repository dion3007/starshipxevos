import axios from 'axios'
import constant from '../constant'

export const getAllStarships = async () => {
    const starship = await axios.get(`${constant.BASE_URL}/starships/`)
    return starship.data
}

export const getDetailStarships = async ({id}) => {
    const starship = await axios.get(`${constant.BASE_URL}/starships/${id}/`)
    return starship.data
}