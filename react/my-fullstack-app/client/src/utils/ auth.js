import { jwtDecode } from "react-jwt";

export const getUserRole = () => {
    const token = localStorage.getItem("token");
    if (!token) return null;
    const decoded = jwtDecode(token);
    return decoded.role;  // Assuming the token contains `role`
};
