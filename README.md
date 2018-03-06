jquery.tabacco.js
==============

Tabacco is a super lightweight jQuery plugin that provides tab functionality minus the obtrusive styling. The markup requirements are slim and it ships with no CSS so you're freed up from the burden of writing clunky overrides for styles you don't need.

 ````js
$("#my-container").tabacco();
````

## Installation

### The HTML

The HTML requirements are simple. All Tabacco needs to do it's work is a list of anchors for your tabs `<ul class="tabacco-tabs">`, the same number of elements you can map each tab to for your panels `<div class="tabacco-panel">`, and a container to wrap it all up `<div id="my-container">`

    <div id="my-container">
        <ul class="tabacco-tabs">
            <li><a href="">tab 1</a></li>
            <li><a href="">tab 2</a></li>
            <li><a href="">tab 3</a></li>
        </ul>
        <div class="tabacco-panel">
            this is panel 1
        </div>
        <div class="tabacco-panel">
            this is panel 2
        </div>
        <div class="tabacco-panel">
            this is panel 3
        </div>
    </div>

### The Javascript

If you meet the minimum HTML requirements you can load the scripts and just call `$("#my-container").tabacco();`

    <script src="/javascripts/jquery.js" type="text/javascript"></script> 
    <script src="/javascripts/jquery.tabacco.js" type="text/javascript"></script>  
    
    <script type="text/javascript"> 
      $(document).ready(function(){ $('element').tabacco(); });
    </script> 

### Options

If you don't like the default classes Tabacco uses you can pass in custom classes as parameters like this:

    $("#tabs").tabacco({
        $tabs: $(".tabs__tab"),
        $panels: $(".tabs__panel")
    });

## Info

* Author: [Steve Luscott](https://github.com/sluscott)
* License: Dual licensed under the [MIT](http://www.opensource.org/licenses/mit-license.php) and [GPL](http://www.gnu.org/licenses/gpl.html) licenses.
