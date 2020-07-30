let slider = document.getElementById('product')
let image = ["<img src='img/product1.jpg'>", "<img src='img/product2.jpg'>", "<img src='img/product3.jpg'>", "<img src='img/product4.jpg'>"]

let i = image.length
function nextImage(){
    if(i < image.length) {
        i++
    } else {
        i = 1
    }

    slider.innerHTML = image[i-1]
}

function prevImage(){
    if(i < image.length+1 && i > 1) {
        i--
    } else {
        i = image.length
    }

    slider.innerHTML = image[i-1]
}
