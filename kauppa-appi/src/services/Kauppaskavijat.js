import axios from 'axios'
import url from './url'

const baseUrl= url.getUrl() + "api/kaupassakavijat"

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (uusiKaupassakavija) => {
    return axios.post(baseUrl, uusiKaupassakavija)
}
export default { getAll, create }