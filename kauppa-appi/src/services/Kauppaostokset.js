import url from './url'

const baseUrl= url.getUrl() + "api/kauppaostokset"


const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (UusiOstos) => {
    return axios.post(baseUrl, UusiOstos)
}

export default { getAll, create }