document.addEventListener("DOMContentLoaded", function () {
  const viewMoreButton = document.getElementById("view-more-button");
  const viewLessButton = document.getElementById("view-less-button");
  const downloadButton = document.getElementById("downloadBtn");

  viewMoreButton.addEventListener("click", showAdditionalHideDefault);
  viewLessButton.addEventListener("click", showDefaultHideAdditional);

  downloadButton.addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "/Photos/hand-meme.jpg";
    link.download = "hand-meme.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});

const defaultGallery = document.getElementById("gallery-default");
const additionalGallery = document.getElementById("gallery-more");

function showAdditionalHideDefault() {
  additionalGallery.classList.remove("hidden");
  defaultGallery.classList.add("hidden");
  viewLessButton.classList.remove("hidden");
}

function showDefaultHideAdditional() {
  defaultGallery.classList.remove("hidden");
  additionalGallery.classList.add("hidden");
  viewLessButton.classList.add("hidden");
}
