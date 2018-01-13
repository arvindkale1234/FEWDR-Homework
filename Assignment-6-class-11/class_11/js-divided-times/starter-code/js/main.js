$('.international').on('click', function(event) { 

$('#international-drop').show();
$('#politics-drop').hide();
$('#business-drop').hide();
$('#technology-drop').hide();
$('#blogs-drop').hide();
$('#culture-drop').hide();
$('#slide-down').slideDown();

event.preventDefault();

console.log("Inside International");

});

$('.politics').on('click', function(event) { 

$('#international-drop').hide();
$('#politics-drop').show();
$('#business-drop').hide();
$('#technology-drop').hide();
$('#blogs-drop').hide();
$('#culture-drop').hide();
$('#slide-down').slideDown();
event.preventDefault();

console.log("Inside Politics");

});

$('.business').on('click', function(event) { 

$('#international-drop').hide();
$('#politics-drop').hide();
$('#business-drop').show();
$('#technology-drop').hide();
$('#blogs-drop').hide();
$('#culture-drop').hide();
$('#slide-down').slideDown();
event.preventDefault();

console.log("Inside Business");

});

$('.technology').on('click', function(event) { 

$('#international-drop').hide();
$('#politics-drop').hide();
$('#business-drop').hide();
$('#technology-drop').show();
$('#blogs-drop').hide();
$('#culture-drop').hide();
$('#slide-down').slideDown();
event.preventDefault();

console.log("Inside Technology");

});

$('.blogs').on('click', function(event) { 

$('#international-drop').hide();
$('#politics-drop').hide();
$('#business-drop').hide();
$('#technology-drop').hide();
$('#blogs-drop').show();
$('#culture-drop').hide();
$('#slide-down').slideDown();
event.preventDefault();

console.log("Inside Blogs");

});

$('.culture').on('click', function(event) { 

$('#international-drop').hide();
$('#politics-drop').hide();
$('#business-drop').hide();
$('#technology-drop').hide();
$('#blogs-drop').hide();
$('#culture-drop').show();
$('#slide-down').slideDown();
event.preventDefault();

console.log("Inside Blogs");

});