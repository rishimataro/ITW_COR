document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.querySelector(".input__textbox--textarea");
  textarea.addEventListener("input", () => {
    document.querySelector(".message").innerText = textarea.value;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const uploadButton = document.querySelector(".media__btn--add-img");
  const imagePreview = document.querySelector(".imgBg");

  const imageUpload = document.createElement("input");
  imageUpload.type = "file";
  imageUpload.accept = "image/*";
  imageUpload.style.display = "none";

  imageUpload.addEventListener('change', function(event) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            imagePreview.src = e.target.result;
        };

        reader.readAsDataURL(file);
    }
});

});
document.addEventListener("DOMContentLoaded", function() {
    const uploadButton = document.querySelector(".media__btn--add-img");
    const imagePreview = document.querySelector(".coverFull");

    const imageUpload = document.createElement('input');
    imageUpload.type = 'file';
    imageUpload.accept = 'image/*';
    imageUpload.style.display = 'none';

    imageUpload.addEventListener('change', function(event) {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function(e) {
                imagePreview.src = e.target.result;
            };

            reader.readAsDataURL(file);
        }
    });

    uploadButton.addEventListener('click', function() {
        imageUpload.click();
    });
});
