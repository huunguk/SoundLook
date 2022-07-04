var slidecontainer = document.querySelector('.slidecontainer');
 var myRange = document.getElementById("myRange");
 var list_1 = document.getElementsByClassName("list1");
 var list_2 = document.getElementsByClassName("list2");
 var list_3 = document.getElementsByClassName("list3");
 var list_4 = document.getElementsByClassName("list4");

 // output.innerHTML = slider.value; // 초기값 0


myRange.oninput = function () {
    //console.log(this.value);
    // if(this.value < 2){
    //     list_1.style.left = '0px';        
    // }else if(this.value >= 2 && this.value < 3){
    //     list_2.style.left = '0px';
    // }else if(this.value >= 3 && this.value < 4){
    //     list_3.style.left = '0px';
    // }else if(this.value === 4){
    //     list_4.style.left = '0px';
    // }
       
    // output.innerHTML = this.value;    
}

myRange.addEventListener('input', updateValue);

function updateValue(e) {
    if(e.target.value < 2){
        list_1.style.left = '0px';
    }else if(e.target.value >= 2 && e.target.value < 3){
        list_2.style.left = '0px';
    }else if(e.target.value >= 3 && e.target.value < 4){
        list_3.style.left = '0px';
    }else if(e.target.value === 4){
        list_4.style.left = '0px';
    }
    
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


