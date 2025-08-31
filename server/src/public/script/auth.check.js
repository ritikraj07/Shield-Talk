
let token = localStorage.getItem("token");

if(!token) {
    token = location.href.split("?accessToken=")[1];
    if(token) {
        localStorage.setItem("token", token);
    } else {
        location.href = "/v1";
    }
}
