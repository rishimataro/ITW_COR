let storedText = ""; // Biến lưu trữ văn bản
let isFacebookVisible = false;
let isTiktokVisible = false;
let isInstagramVisible = false;
let isThreadVisible = false;
let isTwitterVisible = false;

// Lấy các phần tử HTML
const facebook_icon = document.getElementById("facebook");
const tiktok_icon = document.getElementById("tiktok");
const instagram_icon = document.getElementById("instagram");
const twitter_icon = document.getElementById("twitter");
const thread_icon = document.getElementById("thread");

const facebook_url = document.getElementById("url-facebook");
const tiktok_url = document.getElementById("url-tiktok");
const instagram_url = document.getElementById("url-instagram");
const twitter_url = document.getElementById("url-twitter");
const thread_url = document.getElementById("url-thread");

const deleteButton = document.querySelector('.button-group .del');
const saveButton = document.querySelector('.button-group .save');

// Hàm chuyển đổi hiển thị
function toggleVisibility(inputElement, isVisible) {
    inputElement.style.display = isVisible ? "block" : "none";
}

// Gắn sự kiện cho các biểu tượng
facebook_icon.addEventListener("click", () => {
    isFacebookVisible = !isFacebookVisible;
    toggleVisibility(facebook_url, isFacebookVisible);
});

tiktok_icon.addEventListener("click", () => {
    isTiktokVisible = !isTiktokVisible;
    toggleVisibility(tiktok_url, isTiktokVisible);
});

instagram_icon.addEventListener("click", () => {
    isInstagramVisible = !isInstagramVisible;
    toggleVisibility(instagram_url, isInstagramVisible);
});

twitter_icon.addEventListener("click", () => {
    isTwitterVisible = !isTwitterVisible;
    toggleVisibility(twitter_url, isTwitterVisible);
});

thread_icon.addEventListener("click", () => {
    isThreadVisible = !isThreadVisible;
    toggleVisibility(thread_url, isThreadVisible);
});

window.onload = function () {
    isFacebookVisible = true;
    isTiktokVisible = true;
    isInstagramVisible = true;
    isTwitterVisible = false;
    isThreadVisible = false;

    toggleVisibility(facebook_url, isFacebookVisible);
    toggleVisibility(instagram_url, isInstagramVisible);
    toggleVisibility(tiktok_url, isTiktokVisible);
    toggleVisibility(twitter_url, isTwitterVisible);
    toggleVisibility(thread_url, isThreadVisible);

    facebook_url.value = "";
    tiktok_url.value = "";
    instagram_url.value = "";
    twitter_url.value = "";
    thread_url.value = "";
}
// Lưu URL khi nhấn nút "Lưu"
saveButton.addEventListener("click", () => {
    const facebookLink = facebook_url.value.trim();
    const tiktokLink = tiktok_url.value.trim();
    const instagramLink = instagram_url.value.trim();
    const twitterLink = twitter_url.value.trim();
    const threadLink = thread_url.value.trim();

    // Chuyển đối tượng thành chuỗi JSON để hiển thị trong alert
    alert("Saved Links: " + JSON.stringify({
        facebookLink,
        tiktokLink,
        instagramLink,
        twitterLink,
        threadLink
    }));

    // Sau khi lưu, reset giá trị các input
    facebook_url.value = "";
    tiktok_url.value = "";
    instagram_url.value = "";
    twitter_url.value = "";
    thread_url.value = "";
});


// Xóa URL và ẩn tất cả khi nhấn nút "Xóa"
deleteButton.addEventListener("click", () => {
    isFacebookVisible = false;
    isTiktokVisible = false;
    isInstagramVisible = false;
    isTwitterVisible = false;
    isThreadVisible = false;

    toggleVisibility(facebook_url, isFacebookVisible);
    toggleVisibility(instagram_url, isInstagramVisible);
    toggleVisibility(tiktok_url, isTiktokVisible);
    toggleVisibility(twitter_url, isTwitterVisible);
    toggleVisibility(thread_url, isThreadVisible);

    facebook_url.value = "";
    tiktok_url.value = "";
    instagram_url.value = "";
    twitter_url.value = "";
    thread_url.value = "";
});

const value = document.querySelector("#value");
const input = document.querySelector("#filter_input");
value.textContent = input.value;
input.addEventListener("input", (event) => {
    value.textContent = Math.round(event.target.value);
});
document.querySelector('.filter-effect').addEventListener('change', function() {
    const effectValue = this.value;

    const target = document.querySelector('.effect-target');

    target.classList.remove('blur', 'darken', 'erase');

    if (effectValue === 'blur') {
        target.classList.add('blur');
    } else if (effectValue === 'darken') {
        target.classList.add('darken');
    } else if (effectValue === 'erase') {
        target.classList.add('erase');
    }
});
const saveCloseButton = document.querySelector('.save-close-button');

saveCloseButton.addEventListener('click', () => {
    const dataToSave = "Dữ liệu đã lưu";
    localStorage.setItem("savedData", dataToSave);

    alert("Dữ liệu đã được lưu!");

    window.close();
});


const inputField = document.getElementById("keywordInput");
const outputDiv = document.getElementById("output");

// Lắng nghe sự kiện 'keydown' cho phím Enter
inputField.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const inputText = inputField.value.trim();
        if (inputText) {
            // Bọc từ khóa trong thẻ <span> với class "keyword"
            const span = document.createElement("span");
            span.classList.add("keyword");
            span.textContent = inputText;

            // Thêm span vào outputDiv
            outputDiv.appendChild(span);

            // Thêm khoảng trắng giữa các từ khóa
            outputDiv.appendChild(document.createTextNode(" "));

            // Xóa nội dung trong ô nhập liệu
            inputField.value = "";
            inputField.focus();  // Tự động lấy focus lại vào ô nhập liệu
        }
    }
});

// Lắng nghe sự kiện 'click' trên các từ khóa (span) để xóa
outputDiv.addEventListener("click", function(event) {
    if (event.target && event.target.matches(".keyword")) {
        // Nếu người dùng nhấn vào từ khóa (span), xóa nó
        outputDiv.removeChild(event.target);
    }
});