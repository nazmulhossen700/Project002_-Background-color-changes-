
const bgColor = document.getElementById('bgcolor');

const button = document.querySelectorAll('li');

// ! 01 background calor chang=====================
// let redColor = document.querySelector('.red');
// redColor.addEventListener('click',function(){
//    bgColor.style.backgroundColor = '#ff7675';
// } );


// ? 02 background calor chang=====================
//  button.forEach(function(value){
//    value.addEventListener('click',function(){
//      let className = this.classList.value;
//      bgColor.style.backgroundColor = className;
//   });
//  });


// * 03 background calor chang=====================
button.forEach(function(value){
  value.addEventListener('click',function(){
    let className = this.classList[0];
    if(className === 'red'){
      color = '#ff7675';
    }
    if(className === 'green'){
      color = '#55efc4';
    }
    if(className === 'yellow'){
      color = '#ffeaa7';
    }
    if(className === 'blue'){
      color = '#74b9ff';
    }
    if(className === 'pink'){
      color = '#fab1a0';
    }
    if(className === 'purple'){
      color = '#a29bfe';
    }
    bgColor.style.backgroundColor = color;
  });
});

