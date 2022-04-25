import axios from "axios";


const baseURL = 'https://social-network.samuraijs.com/api/1.0/'


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "868d6cb1-0f96-4890-8719-fb44f5aea561"
    }

})


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(baseURL + `users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }

}

