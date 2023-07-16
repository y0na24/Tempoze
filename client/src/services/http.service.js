import axios from 'axios'

const http = axios.create({
	baseURL: configFile.apiEndPoint,
})

const httpService = {
	get: http.get,
	post: http.post,
	put: http.put,
	delete: http.delete,
	patch: http.patch,
}

export default httpService
