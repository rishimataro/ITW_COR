const filterLevelInput = document.getElementById('filter-level');
const filterLevelValue = document.getElementById('filter-level-value');

filterLevelInput.addEventListener('input', function () {
    const percentage = this.value;
    filterLevelValue.textContent = `${percentage}%`;
    this.style.background = `linear-gradient(to right, #4B0082 ${percentage}%, #ddd ${percentage}%)`;
});

const addKeywordButton = document.querySelector('.add-keyword');
const keywordInput = document.getElementById('keywords');
const keywordList = document.getElementById('keyword-list');

addKeywordButton.addEventListener('click', function () {
    const keyword = keywordInput.value.trim();
    if (keyword) {
        const keywordItem = document.createElement('span');
        keywordItem.className = 'keyword-item';
        keywordItem.textContent = keyword;

        const closeButton = document.createElement('button');
        closeButton.className = 'close-btn';
        closeButton.textContent = 'X';

        closeButton.addEventListener('click', function (event) {
            event.stopPropagation();
            keywordList.removeChild(keywordItem);
        });

        keywordItem.appendChild(closeButton);
        keywordList.appendChild(keywordItem);
        keywordInput.value = '';
    }
});

// Add event listener for Enter key
keywordInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addKeywordButton.click();
    }
});

const socialButtons = document.querySelectorAll('.social-button');

socialButtons.forEach(button => {
    button.addEventListener('click', function () {
        socialButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});

const saveButton = document.querySelector('.save-button');
const deleteButton = document.querySelector('.delete-button');

saveButton.addEventListener('click', function () {
    deleteButton.classList.remove('active');
    this.classList.add('active');
    alert('Đã lưu!');
});

deleteButton.addEventListener('click', function () {
    saveButton.classList.remove('active');
    this.classList.add('active');
    alert('Đã xóa tất cả!');
});