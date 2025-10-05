const artGrid = document.getElementById('art-grid');
const artQuantity = 6;

for (let i = 0; i < artQuantity; i++) {
    var img = document.createElement("img");
    img.src = "./imgs/" + i + ".png";
    img.classList.add("art_img");
    artGrid.appendChild(img);
}