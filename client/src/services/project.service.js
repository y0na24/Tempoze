import httpService from './http.service'

const projectEndPoint = 'project/'

const projectService = {
	createProject: async payload => {
		const { data } = await httpService.post(projectEndPoint, payload)
		return data
	},

	getProjects: async userId => {
		const { data } = await httpService.get(projectEndPoint, {
			params: {
				userId,
			},
		})
		return data
	},

	removeProject: async projectId => {
		const { data } = await httpService.delete(projectEndPoint + projectId)
		return data
	},
}

export default projectService
