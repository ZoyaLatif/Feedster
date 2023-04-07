$(document).ready(() => {
$('.menu').on('mouseenter',()=>{
  //Add an event handler to main.js that shows the .nav-menu element when a user mouses over the .menu element.
$('.nav-menu').show();
});
//Add an event handler to main.js that hides the .nav-menu element when a user’s mouse leaves the .nav-menu element.
$('.nav-menu').on('mouseleave',()=>{
$('.nav-menu').hide();
});
//Add an event handler to main.js that adds the .btn-hover class to .btn elements when a user mouses over a .btn element.
$('.btn').on('mouseenter',(event) =>{
  //Chain a mouse leave event handler to the mouse enter event handler you added the last step.Inside the callback function, remove the .btn-hover class from .btn.
$(event.currentTarget).addClass('btn-hover').on('mouseleave',(event)=>{
$(event.currentTarget).removeClass('btn-hover');
});
});
//In main.js, use the .on() method to add a keyup event listener to the '.postText' element. Leave the callback function empty until the next step.
$('.postText').on('keyup',(event) =>{
  
  let post = $(event.currentTarget).val();
  let remaining = 140 - post.length;
  if(remaining <= 0){
    $('.wordcount').addClass('red');
  } else{
     $('.wordcount').removeClass('red');
  }
  $('.characters').html(remaining);

});
//In main.js, call jQuery’s .focus() method on '.postText'. This will cause the <textarea> to expect typed text as soon as the page loads.
$('.postText').focus();


}); 
