export function verifyToken() {
    let token = localStorage.getItem("auth_token")
    return !token ? null : token; 
}