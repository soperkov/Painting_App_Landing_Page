const viewMoreButton = document.getElementById("view-more-button");
const viewLessButton = document.getElementById("view-less-button");
const downloadButton = document.getElementById("downloadBtn");

document.addEventListener("DOMContentLoaded", function () {
  viewMoreButton.addEventListener("click", showAdditionalHideDefault);
  viewLessButton.addEventListener("click", showDefaultHideAdditional);

  downloadButton.addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "/Photos/hand-meme.jpg";
    link.download = "ink-muse.jpg";
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
  viewMoreButton.classList.add("hidden");
}

function showDefaultHideAdditional() {
  defaultGallery.classList.remove("hidden");
  additionalGallery.classList.add("hidden");
  viewLessButton.classList.add("hidden");
  viewMoreButton.classList.remove("hidden");
}
