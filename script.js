$(document).ready(function(){

//This is how to initiate toggler
$(".togNextAll").toggler({
  nextAll: true,
  on: function(trig, elem){
    trig.html("Make every elements after me REAPPEAR");
  },
  off: function(trig, elem){
    trig.html("Make every elements after me disappear");
  }
});

$(".tog-grow").toggler({toggle: "grow"});

$(".tog-red").toggler({toggle: "redfont"})

$("span.tog").toggler({attr: "target", toggle: "blueBg"});

$("button.tog").toggler({attr: "which", toggle_on_create: false})

$(".togNext").toggler({
  next: true,
  toggle: "grow",
  on: function(trig, target){
    trig.html("Make Text Smaller");
  },
  off: function(trig, target){
    trig.html("Make the next element to this button bigger");
  }
});

$(".togBoth").toggler({next: true, prev: true})

$(".togPrev").toggler({prev: true, toggle: "redfont"})

$(".togPrevAll").toggler({prevAll: true});

});
