


    
  $('.populaire').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

    
  $('.reputer').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});


 $('.contenant4').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.contenant2',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});

$('.contenant3').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});


$('.contenant2').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});
  
    
  $('.proche').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});


$('.cadremin2').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});




$('.cadremin2').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});

const btn = document.querySelector('button');
const image =document.querySelector('.image');
btn.addEventListener('click', () => {
  image.classList.toggle('is-visible');
  
});
const btn1 = document.querySelector('button');
const image1 =document.querySelector('.image1');
btn1.addEventListener('click', () => {
  image1.classList.toggle('is-visiblee');
  
});




var likecount = document.querySelector('#likecount');
var dislikecount = document.querySelector('#dislikecount');

var likecounta = document.querySelector('#likecounta');
var dislikecounta = document.querySelector('#dislikecounta');


function count(){
  likecount.value = parseInt(likecount.value)+1;
} 
function count1(){
  dislikecount.value = parseInt(dislikecount.value)+1;
} 
function count2(){
  likecounta.value = parseInt(likecounta.value)+1;
} 
function count3(){
  dislikecounta.value = parseInt(dislikecounta.value)+1;
} 






                                         