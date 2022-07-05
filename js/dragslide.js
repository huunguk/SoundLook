const slidebox = document.querySelector('#slidebox');
const listImg = document.querySelectorAll('#slidebox .slidecontainer .list'); //모든 슬라이드들

 const myRange = document.getElementById("myRange");
 const list_1 = document.getElementsByClassName("list1");
 const list_2 = document.getElementsByClassName("list2");
 const list_3 = document.getElementsByClassName("list3");
 const list_4 = document.getElementsByClassName("list4");

 const slideCount = listImg.length;
 const slideWidth = 960;
 const rangeValue = myRange.value;

 slidebox.style.width = slideWidth * slideCount + 'px';

//  function moveSlide(rangeValue) {
//     slidebox.style.left = -rangeValue * 960 + 'px';
//     myRange.value = num;
//     }
     
 // output.innerHTML = slider.value; // 초기값 0


myRange.oninput = function () {
    console.log(this.value);
    if(this.value < 2){
        // slidebox.style.left = -this.value * 960 + 'px';       
        // slidebox.animate(
        //     {
        //       transform: [
        //         'translateX(0px)',
        //         'translateX(-960px)'
        //       ]
        //     });        
    }else if(this.value >= 2 && this.value < 3){
        // slidebox.style.left = -this.value * 960 + 'px';
        // slidebox.animate(
        //     {
        //       transform: [
        //         'translateX(-960px)',
        //         'translateX(-1920px)'
        //       ]
        //     });
    }else if(this.value >= 3 && this.value < 4){
        // slidebox.style.left = -this.value * 960 + 'px';
        // slidebox.animate(
        //     {
        //       transform: [
        //         'translateX(-1920px)',
        //         'translateX(-2880px)'
        //       ]
        //     });
    }else if(this.value === 4){
        // slidebox.style.left = -this.value * 960 + 'px';
        // slidebox.animate(
        //     {
        //       transform: [
        //         'translateX(-2880px)',
        //         'translateX(-3840px)'
        //       ]
        //     });
    }
       
    // output.innerHTML = this.value;    
}

// myRange.addEventListener('input', updateValue);

// function updateValue(e) {
//     if(e.target.value < 2){
//         slidebox.style.left = -e.target.value * 960 + 'px';
//     }else if(e.target.value >= 2 && e.target.value < 3){
//         slidebox.style.left = -e.target.value * 960 + 'px';
//     }else if(e.target.value >= 3 && e.target.value < 4){
//         slidebox.style.left = -e.target.value * 960 + 'px';
//     }else if(e.target.value === 4){
//         slidebox.style.left = -e.target.value * 960 + 'px';
//     }
    
//   }



