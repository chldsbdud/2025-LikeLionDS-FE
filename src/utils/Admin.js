// 어드민 로그인 관련 함수 해당 파일에 한번에 정리
// localStorage로 로그인 상태 관리
export const isAdminLoggedIn = () => {
    return localStorage.getItem("isAdmin") === "true";
};

export const loginAdmin = (id, password) => {
    if (id === "likelion" && password === "likelion1234") {
        localStorage.setItem("isAdmin", "true");
        return true;
    }
    return false;
};

export const logoutAdmin = () => {
    localStorage.removeItem("isAdmin");
};
