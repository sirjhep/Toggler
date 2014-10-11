$(document).ready(function(){

//Create Custom widget
$.widget("custom.toggler", {
  options: {
    toggle: false, // a class, which will be toggled. default is the jQuery's default toggle
    replace: false, // if the target elem to toggle will cause toggler to disappear
    attr: "href",
    toggle_on_create: false,
    next: false,
    nextAll: false,
    prev: false,
    prevAll: false,
    
    on: function(trigger, target){}, // function to be called when toggle is turned on.
    off: function(trigger, target){} // function to be called when toggle is turned off.
  },
  _create: function(){
    this.element
      .addClass(this.widgetFullName);// to add to theme
    
    if(this.options.toggle_on_create)
      this.toggleTarget();
    
    // binds a click event
    this._on(this.element, {
      "click": function(e){
        e.preventDefault();
        this.toggleTarget();
      }
    })
  },
  
  acquireTargets: function(){
    return [
      $(this.element.attr(this.options.attr)),
      (this.options.next) ? $(this.element.next()) : false,
      (this.options.nextAll) ? $(this.element.nextAll()) : false,
      (this.options.prev) ? $(this.element.prev()) : false,
      (this.options.prevAll) ? $(this.element.prevAll()) : false
    ]
  },
  
  toggleTarget: function(){
    //acquire target
    var target = this.acquireTargets(),
        toggle = this.options.toggle;
    
    //apply toggle
    for(var x in target){
      if(target[x]){
        if(!toggle){
          target[x].toggle();
          if(target[x].is(":hidden")){
            this.options.on(this.element, target[x]);
          }else{
            this.options.off(this.element, target[x]);
          }
        }else if(target[x].hasClass(toggle)){
          target[x].removeClass(toggle);
          this.options.off(this.element, target[x]);
        }else{
          target[x].addClass(toggle);
          this.options.on(this.element, target[x]);
        }
      }  
    }
  },
  
  ForceUnTonggle: function(){
    var targets = this.acquireTargets()
        toggle = this.options.toggle;
    for(var x in targets){
      if(targets[x]){
        if(!toggle){ 
          targets[x].hide();
          this.options.off(this.element, targets[x]);
        }else {
          target[x].removeClass(toggle);
          this.options.off(this.element, targets[x]);
        }
      }
    }
  },
  
  _destroy: function(){
    this.element
      .removeClass(this.widgetFullName);
    if(this.options.toggle_on_create)
      this.ForceUnTonggle();
  }
});

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
