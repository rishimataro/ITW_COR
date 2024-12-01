const filterLevelInput = document.getElementById('filter-level');
const filterLevelValue = document.getElementById('filter-level-value');

// Cập nhật giá trị phần trăm khi kéo thanh trượt
filterLevelInput.addEventListener('input', function() {
    const percentage = this.value; // Lấy giá trị hiện tại của thanh trượt
    filterLevelValue.textContent = `${percentage}%`; // Cập nhật hiển thị phần trăm

    // Cập nhật màu nền của thanh trượt
    this.style.background = `linear-gradient(to right, #4B0082 ${percentage}%, #ddd ${percentage}%)`;
});

const addKeywordButton = document.querySelector('.add-keyword');
const keywordInput = document.getElementById('keywords');
const keywordList = document.getElementById('keyword-list');

addKeywordButton.addEventListener('click', function() {
    const keyword = keywordInput.value.trim(); // Lấy giá trị từ ô nhập liệu và loại bỏ khoảng trắng
    if (keyword) { // Kiểm tra nếu từ khóa không rỗng
        const keywordItem = document.createElement('span'); // Tạo phần tử span cho từ khóa
        keywordItem.className = 'keyword-item'; // Thêm class cho từ khóa
        keywordItem.textContent = keyword; // Gán giá trị từ khóa vào phần tử
        keywordList.appendChild(keywordItem); // Thêm từ khóa vào danh sách

        keywordInput.value = ''; // Xóa ô nhập liệu
    }
});

const socialButtons = document.querySelectorAll('.social-button');

socialButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Xóa lớp 'active' khỏi tất cả các nút
        socialButtons.forEach(btn => btn.classList.remove('active'));
        
        // Thêm lớp 'active' cho nút được nhấn
        this.classList.add('active');
    });
});

const saveButton = document.querySelector('.save-button');
const deleteButton = document.querySelector('.delete-button');

// Xử lý sự kiện nhấn cho nút Lưu
saveButton.addEventListener('click', function() {
    // Xóa lớp 'active' khỏi nút Xóa tất cả
    deleteButton.classList.remove('active');
    
    // Thêm lớp 'active' cho nút Lưu
    this.classList.add('active');
    
    // Thực hiện hành động lưu (ví dụ: hiển thị thông báo)
    alert('Đã lưu!');
});

// Xử lý sự kiện nhấn cho nút Xóa tất cả
deleteButton.addEventListener('click', function() {
    // Xóa lớp 'active' khỏi nút Lưu
    saveButton.classList.remove('active');
    
    // Thêm lớp 'active' cho nút Xóa tất cả
    this.classList.add('active');
    
    // Thực hiện hành động xóa tất cả (ví dụ: hiển thị thông báo)
    alert('Đã xóa tất cả!');
});