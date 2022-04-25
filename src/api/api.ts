import axios from "axios";


const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "868d6cb1-0f96-4890-8719-fb44f5aea561"
	}

})


export const usersAPI = {
	getUsers(currentPage: number, pageSize: number) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data)
	},
	follow(userId: number) {
		return instance.post(`follow/${userId}`)
	},
	unfollow(userId: number) {
		return instance.delete(`follow/${userId}`,)
	},
	getProfile(userId: number) {
		return instance.get(`profile/${userId}`)
	}
}

export const authApi = {
	me() {
		return instance.get(`auth/me`)
	}
}

