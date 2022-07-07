let img = document.querySelectorAll('.product_img');
let view = document.querySelector('.view');
let currentImg = 3;

view.addEventListener('click',function(event){
    //console.log('check')
    for(let i = currentImg; i < currentImg + 3; i++){
        if(img[i]){
             img[i].style.display = 'block';
        }
    }
    currentImg += 3;
    if(currentImg >= img.length){
        event.target.style.display = 'none';
    }
});