var slider = document.getElementById("myRange");
var output = document.getElementById("value");
var list = document.querySelectorAll('.list');

output.innerHTML = slider.value;

slider.oninput = function () {
    for(let i=0; i < list.length; i++){
        console.log(list[i]);        
       
    }    
    output.innerHTML = this.value;   
    
}
 // if(this.value < 25){
        //     list[i].style.left('0px');        
        // }else if(25 < this.value < 50){
        //     list[i].style.left('0px');
        // }else if(50 < this.value < 75){
        //     list[2].style.left('0px');
        // }else if(75 < this.value < 90){
        //     list[3].style.left('0px');
        // }