Toggler
=======
*Requires jQuery and jQueryUI.
A custom widget for jQueryUI.

This widget is mainly use for toggling a state of target elements using a trigger.
Though it is also possible to toggle something else (doesn't have to be an element).

"Toggle" means to change between 2 states, like on and off switch.

-------------
#### Sample usage:

<p data-height="169" data-theme-id="0" data-slug-hash="GqBdH" data-default-tab="result" data-user="sirjhep" class='codepen'>See the Pen <a href='http://codepen.io/sirjhep/pen/GqBdH/'>GqBdH</a> by Jephthah Orobia (<a href='http://codepen.io/sirjhep'>@sirjhep</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

The above code will initiate all elements with class "toggle".
".togger" is the trigger of the widget.
Any jQuery selector or jQuery object can be use as trigger.
If the selector is collection, every element of that collection will be a toggler widget.
Since the above code doesn't posses any parameters, then the default toggle will take place which is, the target is the object pertained by the value of "href" attribute of the trigger. The value of "href" should be a valid jQuery selector.

Here's a more complicated example.

Html side:
```
<style>
.grow{
  font-size: 100px;
}
</style>
<button target="div" class="grower">Let It Grow!</button>
<div>Click Me to hide the button above.</div>
```

Javascript Side:
```
$(document).ready(function(){
  $(".grower").toggler({
    toggle: "grow",
    attr: "target",
    on: function(trig, target){
      trig.html("Let it Shrink!");
    },
    off: function(trig, target){
      trig.html("Let it Grow!");
    }
  });
  
  $("div").toggler({
    prev: true,
    on: function(trig, target){
      trig.html("Click Me to show the button above");
    },
    off: function(trig, target){
      trig.html("Click Me to hide the button above");
    }
  })

})
```

As you can see there's quite a number of parameters that can be set, to know more about the available parameters and more example. Please visit the [wiki](https://github.com/sirjhep/Toggler/wiki).
