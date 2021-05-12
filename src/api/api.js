import * as axios from "axios"

const instance = axios.create({
    withCredentials: true,
    // headers: {
    //  'API-KEY': 'd0ce4cd8-d0d2-4152-99ad-f6e1407cb23f'
    // }
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
});

export const UserAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(resp => resp.data)
    },
    follow (userId) {
        return instance.post(`follow${userId}`).then(resp => resp.data)
    },
    unFollow (userId) {
        return instance.delete(`follow${userId}`).then(resp => resp.data)
    },
    auth () {
        return instance.get(`auth/me`).then(resp => resp.data)
    },
}

// export const getUsers = (currentPage = 1, pageSize = 10) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`)
//     .then(resp => resp.data)
// }

// export const follow = (id) => {
//     return instance.post(`follow${id}`).then(resp => resp.data)
// }

// export const unFollow = (id) => {
//     return instance.delete(`follow${id}`).then(resp => resp.data)
// }