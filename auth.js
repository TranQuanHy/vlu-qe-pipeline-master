function login(username, password) {
    // Kiểm tra username rỗng
    if (!username || username.trim() === "") {
        return false;
    }

    // Tài khoản bị khóa
    if (username === "locked") {
        return false;
    }

    // Kiểm tra password rỗng
    if (!password) {
        return false;
    }

    // Không cho phép mật khẩu chứa ký tự đặc biệt
    const specialChar = /[^a-zA-Z0-9]/;
    if (specialChar.test(password)) {
        return false;
    }

    // Tài khoản hợp lệ
    if (username === "admin" && password === "123") {
        return true;
    }

    // Sai username hoặc password
    return false;
}
// Updated login validation for feature branch
module.exports = { login };
