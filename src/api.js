import axios from "axios";

const API_URL = "http://localhost:8080/api/admins";

export const getAdmins = () => axios.get(API_URL);
export const getAdminById = (id) => axios.get(`${API_URL}/${id}`);
export const createAdmin = (admin) => axios.post(API_URL, admin);
export const updateAdmin = (id, admin) => axios.put(`${API_URL}/${id}`, admin);
export const deleteAdmin = (id) => axios.delete(`${API_URL}/${id}`);
