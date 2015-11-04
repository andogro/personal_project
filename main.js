
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
    var recipeTransform = veganRecipe.replace(/EGGS|EGG/g, '<span class="eggs">FLAX EGGS</span>')
    .replace(/MILK/g, '<span class="milk">ALMOND MILK</span>')
    .replace(/CHEESE/g, '<span class="cheese">VEGAN CHEESE</span>')
    .replace(/BACON/g, '<span class="bacon">COCONUT BACON</span>')
    .replace(/GROUND BEEF/g, '<span class="ground">VEGAN CRUMBLES</span>')
    .replace(/BEEF|STEAK|STEAKS/g, '<span class="beef">VEGAN BEEF</span>')
    .replace(/CHICKEN/g, '<span class="chicken">VEGAN CHICKEN</span>')
    .replace(/CREAM/g, '<span class="cream">CASHEW CREAM</span>')
    .replace(/BUTTER/g, '<span class="butter">COCONUT OIL</span>')
    .replace(/TUNA FISH|TUNA/g, '<span class="tuna">VEGAN TUNA</span>')
    .replace(/SALMON|FISH|TROUT|ROUGHY|BASS|SHRIMP|SEAFOOD|CLAMS|MUSSELS/g, '<span class="fish">VEGAN FISH</span>')
    .replace(/PORK/g, '<span class="pork">JACKFRUIT</span>')
    .replace(/SAUSAGE|SAUSAGES/g, '<span class="sausage">VEGAN SAUSAGE</span>')
    .replace(/HONEY/g, '<span class="honey">AGAVE NECTAR</span>')
    .replace(/MAYO|MAYONNAISE|MAYONAISE/g, '<span class="mayo">NAYONAISE</span>');

    $("#click-info").children().hide();

    $(".new_recipe_title").empty();                      // Empty new content area, so a new recipe is not added below
    $(".new_recipe_full").empty();                       //
    $("<h2>" +veganTitle+ " Veganated</h2><br />Click on an item to find recipes and resources on vegan replacements.<br /><br />").appendTo(".new_recipe_title");
    $("<br />" +recipeTransform+ "<br />").appendTo(".new_recipe_full");
    $(this).effect('bounce', {times:3}, 1000);
    $(".below_veganate").empty();                       // Empty out image so it is not additive.
    $('<img src="images/' + images[Math.floor(Math.random() * images.length)] + '">').attr('width','200').appendTo('.below_veganate');
  });


//Close a div using the X on the side

$(".close").click(function() {
$(this).parent().fadeToggle('slow', 'linear');
});

//Hide the divs that hold extra when page is reset
$("#click-info").children().hide();

//toggle function to show class on click, set z index, make draggable

$("body").on('click', ".eggs", function(){
    $(".eggsinfo").fadeToggle('slow', 'linear').draggable({stack: "div",distance: 0}).css({"z-index" :"999", "left" : "400px",
      "background-color": "#E7FF41"}).siblings().css("z-index", "0");
});

$("body").on('click', ".cheese", function(){
    $(".cheeseinfo").fadeToggle('slow', 'linear').draggable({stack: "div",distance: 0}).css({"z-index" :"999", "left" : "450px",
      "background-color": "#FFC441"}).siblings().css("z-index", "0");
});

$("body").on('click', ".milk", function(){
    $(".milkinfo").fadeToggle('slow', 'linear').draggable({stack: "div",distance: 0}).css({"z-index" :"999", "left" : "500px",
      "background-color": "whitesmoke"}).siblings().css("z-index", "0");
});

$("body").on('click', ".bacon", function(){
    $(".baconinfo").fadeToggle('slow', 'linear').draggable({stack: "div",distance: 0}).css({"z-index" :"999", "left" : "550px",
      "background-color": "#ff4141"}).siblings().css("z-index", "0");
});

$("body").on('click', ".ground", function(){
    $(".groundinfo").fadeToggle('slow', 'linear').draggable({stack: "div",distance: 0}).css({"z-index" :"999", "left" : "600px",
      "background-color": "#B741FF"}).siblings().css("z-index", "0");
});

$("body").on('click', ".beef", function(){
    $(".beefinfo").fadeToggle('slow', 'linear').draggable({stack: "div",distance: 0}).css({"z-index" :"999", "left" : "650px",
      "background-color": "#FF41A4"}).siblings().css("z-index", "0");
});

$("body").on('click', ".chicken", function(){
    $(".chickeninfo").fadeToggle('slow', 'linear').draggable({stack: "div",distance: 0}).css({"z-index" :"999", "left" : "700px",
      "background-color": "#FA41FF"}).siblings().css("z-index", "0");
});

$("body").on('click', ".cream", function(){
    $(".creaminfo").fadeToggle('slow', 'linear').draggable({stack: "div",distance: 0}).css({"z-index" :"999", "left" : "750px",
      "background-color": "#4E41FF"}).siblings().css("z-index", "0");
});

$("body").on('click', ".butter", function(){
    $(".butterinfo").fadeToggle('slow', 'linear').draggable({stack: "div",distance: 0}).css({"z-index" :"999", "left" : "800px",
      "background-color": "#41DAFF"}).siblings().css("z-index", "0");
});

$("body").on('click', ".tuna", function(){
    $(".tunainfo").fadeToggle('slow', 'linear').draggable({stack: "div",distance: 0}).css({"z-index" :"999", "left" : "850px",
      "background-color": "#41FFC7"}).siblings().css("z-index", "0");
});

$("body").on('click', ".fish", function(){
    $(".fishinfo").fadeToggle('slow', 'linear').draggable({stack: "div",distance: 0}).css({"z-index" :"999", "left" : "900px",
      "background-color": "#FF41A4"}).siblings().css("z-index", "0");
});

$("body").on('click', ".pork", function(){
    $(".porkinfo").fadeToggle('slow', 'linear').draggable({stack: "div",distance: 0}).css({"z-index" :"999", "left" : "`950px",
      "background-color": "#FA41FF"}).siblings().css("z-index", "0");
});

$("body").on('click', ".sausage", function(){
    $(".sausageinfo").fadeToggle('slow', 'linear').draggable({stack: "div",distance: 0}).css({"z-index" :"999", "left" : "1000px",
      "background-color": "#B741FF"}).siblings().css("z-index", "0");
});

$("body").on('click', ".honey", function(){
    $(".honeyinfo").fadeToggle('slow', 'linear').draggable({stack: "div",distance: 0}).css({"z-index" :"999", "left" : "1050px",
      "background-color": "#41FF5E"}).siblings().css("z-index", "0");
});

$("body").on('click', ".mayo", function(){
    $(".mayoinfo").fadeToggle('slow', 'linear').draggable({stack: "div",distance: 0}).css({"z-index" :"999", "left" : "1100px",
      "background-color": "whitesmoke"}).siblings().css("z-index", "0");
});


        // function getRecipeJson() {
        //     var apiKey = "dvxeuuxV9MZ5Xe7ywNeS3oT5zL0747x3";
        //     var recipeTitle = $(".recipeTitle").val();
        //     var url = "http://api.bigoven.com/recipes?pg=1&rpp=25&title_kw="
        //           + recipeTitle  + "&api_key="+apiKey;
        //     $.ajax({
        //             type: "GET",
        //             dataType: 'json',
        //             cache: false,
        //             url: url,
        //             success: function (data) {
        //             alert('success');
        //             console.log(data);
        //             }
        //         });
        // }

//$(".button").click().getRecipeJson();

});
