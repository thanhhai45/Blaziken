import axios from 'axios';
var request = {};
export default class Http {
    static RequestAPI(action, url, params) {
        switch (action) {
            case "GET":
                request = axios.get(url, params);
                break;
            case "POST":
                request = axios.post(url, params);
                break;
            case "PUT":
                request = axios.put(url, params);
                break;
            case "DELETE":
                request = axios.delete(url, params);    
            default:
                break;
        }
        return request
            .then((result) => {
                if (result.status === 200) {
                    return Promise.resolve(result);
                }
                else {
                    return Promise.reject(result);
                }
            })
            .catch((error) => {
                return Promise.reject(result);
            })
    }
}