//
//  Readable-bookmarklet.js
//
//  Created by Matt D. Smith on 9/17/2015.
//  Copyright (c) 2015 Matt D. Smith. All rights reserved.
//

(function(){
  
  function initMyBookmarklet() {
    (window.myBookmarklet = function() {
      
      // start readable
      var charCountShowing = false;

      $('span.readable').css({
        "background-color": "#f45b5d", 
      });

      function addSpans(){
        $('p').each(function (){
        var $this = $(this);
        var ohtml = $(this).html(); 
        $(this).data('ocontent', ohtml);
        $this.html(addReadable);
      });
      }

      function addReadable(){
        var text = $(this).text();
        var a = text.substring(0, 45);
        var b = text.substring(45, 75);
        var c = text.substring(75, text.length);
        var d = a + "<span class='readable'>" + b + "</span>" + c;
        return d;
      }

      function toggleSpans(){
        if( charCountShowing === true ){
          $('p').html(function(){
            var p = $(this).data('ocontent'); 
            return p;
          });
          charCountShowing = false;
        }else{
          addSpans();
          charCountShowing = true;
        }
      }

      function init(){
        charCountShowing = true;
        addSpans();
      }

      init();

    });
  }

  // the minimum version of jQuery we want
  var v = "1.3.2";

  // check prior inclusion and version
  if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
    var done = false;
    var script = document.createElement("script");
    script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
    script.onload = script.onreadystatechange = function(){
      if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
        done = true;
        initMyBookmarklet();
      }
    };
    document.getElementsByTagName("head")[0].appendChild(script);
  } else {
    initMyBookmarklet();
  }

})();
