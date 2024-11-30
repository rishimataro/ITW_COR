function generateCaptcha(length = 6) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        captcha += characters[randomIndex];
    }
    return captcha;
}

function refreshCaptcha() {
    const captchaCode = generateCaptcha();
    document.getElementById('captchaCode').textContent = captchaCode;
}

document.addEventListener('DOMContentLoaded', () => {
    refreshCaptcha();
});

document.querySelector('.refresh-captcha').addEventListener('click', refreshCaptcha);

document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const enteredCaptcha = document.getElementById('captcha').value;
    const displayedCaptcha = document.getElementById('captchaCode').textContent;

    if (enteredCaptcha !== displayedCaptcha) {
        alert('Mã Captcha không đúng. Vui lòng thử lại.');
    } else {
        alert('Đăng ký thành công!');
    }
});
