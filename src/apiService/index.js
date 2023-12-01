import axios from "axios"

const prescriptoService = axios.create({
    baseURL: "http://localhost:7004", // put on .env file
    headers: {
        "Content-Type": "application/json"
    }
})

prescriptoService.interceptors.request.use((config) => {
    const token = localStorage.getItem("auth_token");
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export const apiService = {
    async postUser(newUser) {
        try {
            const res = await prescriptoService.post("/auth/postUsers", newUser)
            console.log(res)
            return res;
        } catch (error) {
           return error;
        }
    },

    async login(userData) {
            const res = await prescriptoService.post("/auth/login", userData)
            console.log('login route',res);
            return res;
    },

    async getAllAppoitementPatient() {
        try {
            const res = await prescriptoService.get("/appointement/incomingAppointements")
            return res;
        } catch (error) {
            return error;
        }
    },

    async getAllHistoryAppoitementPatient() {
        try {
            const res = await prescriptoService.get("/appointement/appointementsHistory")
            return res;
        } catch (error) {
            return error;
        }
    }
}
