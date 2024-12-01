document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.querySelector(".input__textbox--textarea");
  textarea.addEventListener("input", () => {
    document.querySelector(".message").innerText = textarea.value;
    textarea.style.height = "auto"; // Reset chiều cao để tính toán lại
    textarea.style.height = `${textarea.scrollHeight}px`; // Điều chỉnh chiều cao theo nội dung
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const uploadButton = document.querySelector(".media__btn--add-img");
  const imagePreview = document.querySelector(".imgBg");

  // Tạo input file ẩn
  const imageUpload = document.createElement("input");
  imageUpload.type = "file";
  imageUpload.accept = "image/*";
  imageUpload.style.display = "none"; // Ẩn input file

  imageUpload.addEventListener('change', function(event) {
    const file = event.target.files[0]; // Lấy file đầu tiên được chọn

    if (file) {
        const reader = new FileReader(); // Tạo đối tượng FileReader để đọc file

        // Gán sự kiện load cho FileReader
        reader.onload = function(e) {
            imagePreview.src = e.target.result; // Gán đường dẫn file cho src của img
        };

        reader.readAsDataURL(file); // Đọc file dưới dạng Data URL
    }
});

});
document.addEventListener("DOMContentLoaded", function() {
    // Lấy phần tử button và img từ DOM
    const uploadButton = document.querySelector(".media__btn--add-img");
    const imagePreview = document.querySelector(".coverFull");

    // Tạo input file ẩn
    const imageUpload = document.createElement('input');
    imageUpload.type = 'file';
    imageUpload.accept = 'image/*';
    imageUpload.style.display = 'none'; // Ẩn input file

    // Gán sự kiện change cho input file
    imageUpload.addEventListener('change', function(event) {
        const file = event.target.files[0]; // Lấy file đầu tiên được chọn

        if (file) {
            const reader = new FileReader(); // Tạo đối tượng FileReader để đọc file

            // Gán sự kiện load cho FileReader
            reader.onload = function(e) {
                imagePreview.src = e.target.result; // Gán đường dẫn file cho src của img
            };

            reader.readAsDataURL(file); // Đọc file dưới dạng Data URL
        }
    });

    // Gán sự kiện click cho button
    uploadButton.addEventListener('click', function() {
        imageUpload.click(); // Mở cửa sổ chọn file
    });
});
