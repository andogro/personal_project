
$(document).ready(function(){

// Array of images for random meme
var images = ['vegan_1.jpg', 'vegan_2.jpg', 'vegan_3.jpg', 'vegan_4.jpg',
'vegan_5.jpg', 'vegan_6.jpg', 'vegan_7.jpg', 'vegan_8.jpg', 'vegan_9.jpg',
'vegan_10.jpg', 'vegan_11.jpg', 'vegan_12.jpg', 'vegan_13.jpg'];

  $("#veganate").click(function(){
    var veganTitle = $(".recipeTitle").val();
    var veganRecipe = $(".recipeFull").val().replace(/\n/g, '<br/>').toUpperCase();
    if (veganTitle === "") {
      alert("Please fill in a Title for Your Recipe")
      return false; // Need to reroute to beginning, stop function
    };
    // Replace various ingredients
    var recipeTransform = veganRecipe.replace(/EGGS/g, '<span class="eggs">FLAX EGGS</span>')
    .replace(/MILK/g, '<span class="milk">ALMOND MILK</span>')
    .replace(/CHEESE/g, '<span class="cheese">VEGAN CHEESE</span>')
    .replace(/BACON/g, '<span class="bacon">COCONUT BACON</span>')
    .replace(/GROUND BEEF/g, '<span class="ground">VEGAN CRUMBLES</span>')
    .replace(/BEEF|STEAK/g, '<span class="beef">VEGAN BEEF</span>')
    .replace(/CHICKEN/g, '<span class="chicken">VEGAN CHICKEN</span>')
    .replace(/CREAM/g, '<span class="cream">CASHEW CREAM</span>')
    .replace(/BUTTER/g, '<span class="butter">COCONUT OIL</span>')
    .replace(/TUNA FISH/g, '<span class="tuna">VEGAN TUNA</span>')
    .replace(/SALMON|FISH|TROUT|ROUGHY|BASS/g, '<span class="fish">VEGAN FISH</span>')
    .replace(/PORK/g, '<span class="pork">VEGAN PORK</span>')
    .replace(/SAUSAGE/g, '<span class="sausage">VEGAN SAUSAGE</span>')
    .replace(/HONEY/g, '<span class="honey">AGAVE NECTAR</span>');


    $("div.on-click-eggs").hide();
    $("div.on-click-cheese").hide();
    $("div.on-click-milk").hide();
    $("div.on-click-bacon").hide();
    $("div.on-click-ground").hide();
    $("div.on-click-beef").hide();
    $("div.on-click-chicken").hide();
    $("div.on-click-cream").hide();
    $("div.on-click-butter").hide();
    $("div.on-click-tuna").hide();
    $("div.on-click-fish").hide();
    $("div.on-click-pork").hide();
    $("div.on-click-sausage").hide();
    $("div.on-click-honey").hide();


    $(".new_recipe_title").empty();                      // Empty new content area, so a new recipe is not added below
    $(".new_recipe_full").empty();                       //
    $("<h2>" +veganTitle+ " Veganated</h2><br />Click on an item to find recipes and resources on vegan replacements.<br /><br />").appendTo(".new_recipe_title");
    $("<br />" +recipeTransform+ "<br />").appendTo(".new_recipe_full");
    $(this).effect('bounce', {times:3}, 1000);
    $(".below_veganate").empty();                       // Empty out image so it is not additive.
    $('<img src="images/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.below_veganate');
  });

// Hide the divs that hold extra

$("div.on-click-eggs").hide();
$("div.on-click-cheese").hide();
$("div.on-click-milk").hide();
$("div.on-click-bacon").hide();
$("div.on-click-ground").hide();
$("div.on-click-beef").hide();
$("div.on-click-chicken").hide();
$("div.on-click-cream").hide();
$("div.on-click-butter").hide();
$("div.on-click-tuna").hide();
$("div.on-click-fish").hide();
$("div.on-click-pork").hide();
$("div.on-click-sausage").hide();
$("div.on-click-honey").hide();

//toggle function to show class on click, and set z index

$("body").on('click', ".eggs", function(){
    $(".on-click-eggs").fadeToggle('slow', 'linear').draggable({stack: "div",distance: 0}).css("z-index", "999").siblings().css("z-index", "0");
});

$("body").on('click', ".cheese", function(){
    $(".on-click-cheese").fadeToggle('slow', 'linear').draggable({stack: "div",distance: 0}).css("z-index", "999").siblings().css("z-index", "0");
});

$("body").on('click', ".milk", function(){
    $(".on-click-milk").fadeToggle('slow', 'linear').css("z-index", "999").siblings().css("z-index", "0");
});

$("body").on('click', ".bacon", function(){
    $(".on-hover-bacon").fadeToggle('slow', 'linear').css("z-index", "999").siblings().css("z-index", "0");
});

$("body").on('click', ".ground", function(){
    $(".on-hover-ground").fadeToggle('slow', 'linear').css("z-index", "999").siblings().css("z-index", "0");
});

$("body").on('click', ".beef", function(){
    $(".on-hover-beef").fadeToggle('slow', 'linear').css("z-index", "999").siblings().css("z-index", "0");
});

$("body").on('click', ".chicken", function(){
    $(".on-hover-chicken").fadeToggle('slow', 'linear').css("z-index", "999").siblings().css("z-index", "0");
});

$("body").on('click', ".cream", function(){
    $(".on-hover-cream").fadeToggle('slow', 'linear').css("z-index", "999").siblings().css("z-index", "0");
});

$("body").on('click', ".butter", function(){
    $(".on-hover-butter").fadeToggle('slow', 'linear').css("z-index", "999").siblings().css("z-index", "0");
});

$("body").on('click', ".tuna", function(){
    $(".on-hover-tuna").fadeToggle('slow', 'linear').css("z-index", "999").siblings().css("z-index", "0");
});

$("body").on('click', ".fish", function(){
    $(".on-hover-fish").fadeToggle('slow', 'linear').css("z-index", "999").siblings().css("z-index", "0");
});

$("body").on('click', ".pork", function(){
    $(".on-hover-pork").fadeToggle('slow', 'linear').css("z-index", "999").siblings().css("z-index", "0");
});

$("body").on('click', ".sausage", function(){
    $(".on-hover-sausage").fadeToggle('slow', 'linear').css("z-index", "999").siblings().css("z-index", "0");
});

$("body").on('click', ".honey", function(){
    $(".on-hover-honey").fadeToggle('slow', 'linear').css("z-index", "999").siblings().css("z-index", "0");
});

$.ajax({
  url: 'https://api.myjson.com/bins/20gec',
  type: 'GET',
  data: {
    format: 'json'
  },
  error: function(){
    alert('An error has occurred');
  },
  success: function(results){
    console.log(results.data);
   $( ".container" ).append( "<p>Colorado's Bird Is:</p>" + results.data[1].symbols[0].bird);
  }
});

});
