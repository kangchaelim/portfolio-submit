// 가로스크롤
const container = document.getElementById('container');
console.log(container);
console.dir(container);

const windowWidth = window.innerWidth;
console.log(windowWidth);

let eventHandle = 0;
window.addEventListener('wheel', (event) => {
    console.log(event.deltaY);
    if(event.deltaY > 0) {
        console.log('plus')

        eventHandle++;

        console.log(eventHandle);

        window.scrollTo({
            left:windowWidth * eventHandle,
            behavior : "smooth"
        });
    }else {
        console.log('minus');
        eventHandle--;
        console.log(eventHandle);

        window.scrollTo({
            left : windowWidth * eventHandle,
            behavior : 'smooth'
        });
    }
if (eventHandle < 0) {
    eventHandle = 0;
    console.log('minimum');
}
if (eventHandle > 5){
    eventHandle = 5;
    console.log('maxium');
}
});


// D 움직이기
const D = document.querySelector('#D');
console.log(D);

window.addEventListener('load', ()=>{
    D.style.marginTop = '5vh';
});


// 문장 순서
const typo = document.querySelectorAll('body .typo');
console.log(typo);
 
setInterval(()=>{
    typo[0].style.opacity = '0';
},650);

setInterval(()=>{
    typo[1].style.opacity = '0';
},1350);


setInterval(()=>{
    typo[2].classList.replace('opa-0', 'opa-1');
    typo[3].classList.replace('opa-0', 'opa-1');
},2700);

setInterval(()=>{
    typo[3].style.marginTop = '-5vh';
},3500);

// 가로 스크롤 값

window.addEventListener('scroll', ()=> {
    console.log(scrollX);

    if(scrollX >= 500){
        typo[0].style.opacity = '0';
        typo[1].style.opacity = '0';
        typo[2].style.opacity = '0';
        typo[3].style.opacity = '0';
    }else if (scrollX <= 500) {
        typo[2].style.opacity = '1';
        typo[3].style.opacity = '1';
    }
});

// number down
const down = document.querySelectorAll('.down');
console.log(down);

window.addEventListener('scroll', ()=> {
    console.log(scrollX);

    if(scrollX >= 1000){
        setInterval(()=>{
            down[0].style.marginTop = '5vh';
        },900);  
    }
    if(scrollX >= 2000){
        setInterval(()=>{
            down[1].style.marginTop = '5vh';
        },900);  
    }
    if(scrollX >= 4000){
        setInterval(()=>{
            down[2].style.marginTop = '5vh';
        },900);  
    }
    if(scrollX >= 6000){
        setInterval(()=>{
            down[3].style.marginTop = '5vh';
        },900);  
    }
});

// number 색상 바꾸기 
// for(let i = 0; i<gray.length;i++){
//     gray[i].style.color = 'gray';
// }

// works img hover
const content = document.querySelectorAll('.content');
console.log(content);
const works = document.querySelectorAll('.works img');
console.log(works);

for(let k = 0; k<works.length ; k++){
    content[k].addEventListener('mouseenter', function(){
      works[k].classList.replace('opa-0', 'opa-1');
    });
  }

  for(let k = 0; k<works.length ; k++){
    content[k].addEventListener('mouseleave', function(){
      works[k].classList.replace('opa-1', 'opa-0');
    });
  }  