let links = document.querySelectorAll(".info-portfolio a");
let imgs = document.querySelectorAll(".img-cards1");
console.log(links);
for (let i = 0; i < imgs.length; i++) {
    for (let j = 0; j < links.length; j++) {
        if (links[j].classList.contains("active")) {
            imgs[i].style.display = "inline-block";
        }
    }
}
function changeImage(event) {
    for (let i = 0; i < imgs.length; i++) {
        for (let j = 0; j < links.length; j++) {
            if (links[j].classList.contains("active")) {
                imgs[i].style.display = "inline-block";
            }
            if (event.target.textContent === "all") {
                imgs[i].style.display = "inline-block";
            } else {
                if (imgs[i].id === event.target.getAttribute("data-image-id")) {
                    imgs[i].style.display = "inline-block";
                } else {
                    imgs[i].style.display = "none";
                }
            }
        }
    }
}

for (var i = 1; i < links.length; i++) {
    links[i].classList.remove("active");
}

links.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        links.forEach(function (l) {
            l.classList.remove("active");
        });
        link.classList.add("active");
    });
});