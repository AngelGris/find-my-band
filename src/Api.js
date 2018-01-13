import axios from 'axios'

const api = axios.create({
    baseURL: 'https://rest.bandsintown.com/'
})
const apis = {
    api: api,
    searchBand: (query, appId) => api.get('artists/' + query + '/?app_id=' + appId),
    searchEvents: (query, appId) => api.get('artists/' + query + '/events/?app_id=' + appId),
    searchVideos: (query, appId) => api.get('https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId=10&maxResults=20&q=' + encodeURI(query) + '&key=' + appId),
}

export default apis