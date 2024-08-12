// Array of image URLs for the banner
const bannerImages = [
    "assets/img/intro3.jpeg",
    "assets/img/intro4.webp"
];

// Index to track the current image
let currentIndex = 0;

// Function to change the banner image
function changeBannerImage() {
  const introElement = document.getElementById('intro');
  currentIndex = (currentIndex + 1) % bannerImages.length;
  introElement.style.backgroundImage = `url(${bannerImages[currentIndex]})`;
}

// Change banner image every 3 seconds
setInterval(changeBannerImage, 3000);

// Inicia com a primeira imagem
document.getElementById('intro').style.backgroundImage = `url(${bannerImages[0]})`;
// Obter o modal
var modal = document.getElementById("imageModal");

// Obter a imagem e o elemento modal
var img = document.querySelectorAll(".expandable-image");
var modalImg = document.getElementById("modalImage");

// Obter o botão de fechar
var closeBtn = document.getElementsByClassName("close")[0];

// Adicionar evento de clique em cada imagem para expandir
img.forEach(function(image) {
  image.addEventListener("click", function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  });
});

// Fechar o modal ao clicar no "X"
closeBtn.onclick = function() { 
  modal.style.display = "none";
}

// Fechar o modal ao clicar fora da imagem
modal.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
