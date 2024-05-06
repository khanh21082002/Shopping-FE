import axios from "axios"

export const axiosJWT = axios.create();

export const loginUser = async (data) => {
    try {
        const res = await axios.post(
            `${import.meta.env.VITE_REACT_API_URL}/user/sign-in`,
            data // Truyền dữ liệu vào yêu cầu POST
        );
        return res.data;
    } catch (error) {
        throw error; // Xử lý lỗi hoặc ném ra để xử lý ở nơi gọi loginUser
    }
};

export const signUpUser = async (data) => {
    try {
        const res = await axios.post(
            `${import.meta.env.VITE_REACT_API_URL}/user/sign-up`,
            data // Truyền dữ liệu vào yêu cầu POST
        );
        return res.data;
    } catch (error) {
        throw error; // Xử lý lỗi hoặc ném ra để xử lý ở nơi gọi loginUser
    }
};

export const getDetailsUser = async (id, access_token) => {
    const res = await axiosJWT.get(`${import.meta.env.VITE_REACT_API_URL}/user/get-details/${id}`, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    },)
    return res.data
}

export const refreshToken = async (refreshToken) => {
    const res = await axios.post(`${import.meta.env.VITE_REACT_API_URL}/user/refresh-token`, {} , {
        headers: {
            token: `Bearer ${refreshToken}`,
        },

    })
    return res.data
}

export const logoutUser = async () => {   
    const res = await axios.post(`${import.meta.env.VITE_REACT_API_URL}/user/log-out`)
    return res.data
}

export const updateProfileUser = async (id , data , access_token) => {   
    const res = await axiosJWT.put(`${import.meta.env.VITE_REACT_API_URL}/user/update-user/${id}`, data,{
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}