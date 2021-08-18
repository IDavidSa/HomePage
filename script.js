let images= document.querySelectorAll('#slider img');
    time = 2500;
    currentImageIndex = 0;
    maxImages = images.length;
    

function nextImage(){

    images[currentImageIndex].classList.remove('selected');

    currentImageIndex++
    
    if(currentImageIndex >= maxImages){
        currentImageIndex = 0
    }

    images[currentImageIndex].classList.add('selected');
    
}

function start(){
    setInterval(() => {
        nextImage();
    
    
    }, time)
    

}

window.addEventListener('load',start())

    

