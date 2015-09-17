//
//  Readable.js
//
//  Created by Matt D. Smith on 9/17/2015.
//  Copyright (c) 2015 Matt D. Smith. All rights reserved.
//

(function($) {

  var showReadableOnLoad = true; 
  var charCountShowing = false; // don't set this to true

  $('body') 
    .prepend("<div class='switch'><input id='toggle' class='toggle' type='checkbox'><label for='toggle'></label></div>");

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

  $( '.toggle' ).click(function() {
    toggleSpans();
  });

  function init(){
    $('.toggle').removeAttr('disabled');
    if( showReadableOnLoad === true ){
      $( '.toggle' ).prop('checked', true);
      charCountShowing = true;
      addSpans();
    }
  }

  
  $('.toggle').attr('disabled', true);
  setTimeout(init, 1000);
  
}(jQuery));
