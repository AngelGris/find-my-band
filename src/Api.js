import axios from 'axios'

const api = axios.create({
    baseURL: 'https://rest.bandsintown.com/'
})
const apis = {
    api: api,
    searchBand: (query, appId, callback) => api.get('artists/' + query + '/?app_id=' + appId)
        .then((response) => {
            callback(response.data)
        }),
    searchEvents: (query, appId, callback) => api.get('artists/' + query + '/events/?app_id=' + appId)
        .then((response) => {
            callback(response.data)
        }),
    searchVideos: (query, appId, callback) => api.get('https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId=10&maxResults=20&q=' + encodeURI(query) + '&key=' + appId)
        .then((response) => {
            callback(response.data)
        })
}

export default apis