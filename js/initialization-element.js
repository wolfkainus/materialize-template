//SIDEBAR MOBILE
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});
// Or with jQuery
$(document).ready(function(){
  $('.sidenav').sidenav();
});

//FIXED ACTION BTN
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, { 
    direction: 'left',
    hoverEnabled: false
  });
});
// Or with jQuery
$(document).ready(function(){
  $('.fixed-action-btn').floatingActionButton();
});

//SLIDER 
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems, options);
});
// Or with jQuery
$(document).ready(function(){
  $('.slider').slider();
});

//CAROUSEL
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, options);
  var instance = M.Carousel.init({
    fullWidth: true
  });
});
// Or with jQuery
$(document).ready(function(){
  $('.carousel').carousel();
});
$('.carousel.carousel-slider').carousel({
  fullWidth: true
});

//COLLAPSIBLE
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, options);
});
// Or with jQuery
$(document).ready(function(){
  $('.collapsible').collapsible();
});

//DROPDOWN
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems, options);
});
// Or with jQuery
$('.dropdown-trigger').dropdown();

//FeatureDiscovery
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tap-target');
  var instances = M.TapTarget.init(elems, options);
});
// Or with jQuery
$(document).ready(function(){
  $('.tap-target').tapTarget();
});

//MATERIAL BOX
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems, options);
});
// Or with jQuery
$(document).ready(function(){
  $('.materialboxed').materialbox();
});

//MODAL
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, options);
});
// Or with jQuery
$(document).ready(function(){
  $('.modal').modal();
});

//TABS
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tabs');
  var instance = M.Tabs.init(el, options);
});
// Or with jQuery
$(document).ready(function(){
  $('.tabs').tabs();
});

//TOASTS
 M.toast({html: 'I am a toast!'})

 //TOOLTIPS
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(elems, options);
});
// Or with jQuery
$(document).ready(function(){
  $('.tooltipped').tooltip();
  });