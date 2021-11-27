
var video1 = document.getElementById('video1');
var video2 = document.getElementById('video2');

video1.onended = function(){
  video2.play();
  video1.style.opacity=0;
  video2.style.opacity=1;
}

video2.onended = function(){
  video1.play();
  video2.style.opacity=0;
  video1.style.opacity=1;
}







/* baniere_----------------------------------------------------------------------------------_____*/

 $('.resto-slide').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});

const btn = document.querySelector('button');
const image =document.querySelector('.image');
btn.addEventListener('click', () => {
  image.classList.toggle('is-visible');
  
});






var  likecount = document.querySelector('#likecount');
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


$('.plat-prefere-image').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,

});

$('.ebergements-proches').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});


 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  autoplay:true
});













                                    