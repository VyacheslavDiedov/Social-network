import axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:
        {
            "API-KEY": "7840afa9-8478-4252-b2c4-ec337c095045"
        }
})

export const usersAPI =
{
    getUsers(currentPage, pageSize){
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    follow(userId){
        return axiosInstance.post(`follow/` + userId);
    },
    unfollow(userId){
        return axiosInstance.delete(`follow/` + userId);
    },
    getProfile(userId){
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI =
{
    getProfile(userId){
        return axiosInstance.get(`profile/` + userId);
    },
    getStatus(userId){
        return axiosInstance.get(`profile/status/` + userId);
    },
    updateStatus(status){
        return axiosInstance.put(`profile/status/`, {
            status: status
        });
    }
}

export const authAPI =
{
    me(){
        return axiosInstance.get(`auth/me`);
    },
    login(email, password, rememberMe = false){
        return axiosInstance.post(`auth/login`, {email, password, rememberMe});
    },
    logout(){
        return axiosInstance.delete(`auth/login`);
    }
}