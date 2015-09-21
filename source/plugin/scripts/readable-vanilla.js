//
//  Readable.js
//
//  Created by Matt D. Smith on 9/17/2015.
//  Copyright (c) 2015 Matt D. Smith. All rights reserved.
//

(function() {
  "use strict";

  // http://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
  var forEach = function (array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i]); // passes back stuff we need
    }
  };

  var Readable = {
    charCountShowing: false,

    initBefore: function() {
      var theSwitch = document.createElement("div");

      theSwitch.classList.add("switch");
      theSwitch.innerHTML = "<input id='toggle' class='toggle' type='checkbox'><label for='toggle'></label>";
      document.body.insertBefore(theSwitch, document.body.firstChild);
    },

    addSpans: function() {
      var pList = document.querySelectorAll("p");

      forEach(pList, function(i, el) {
        var ohtml = el.innerHTML;

        el.setAttribute("data-ocontent", ohtml);
        el.innerHTML = Readable.addReadable(el);
      });
    },

    addReadable: function(el) {
      var text = el.textContent;
      var a = text.substring(0, 45);
      var b = text.substring(45, 75);
      var c = text.substring(75, text.length);
      var d = a + "<span class='readable'>" + b + "</span>" + c;
      return d;
    },

    toggleSpans: function() {
      if (Readable.charCountShowing === true) {
        var pList = document.querySelectorAll("p");

        forEach(pList, function(i, el) {
          el.innerHTML = el.getAttribute("data-ocontent");
        });

        Readable.charCountShowing = false;
      }
      else {
        Readable.addSpans();
        Readable.charCountShowing = true;
      }
    },

    init: function() {
      var toggleList = document.querySelectorAll(".toggle");

      forEach(toggleList, function(i, el) {
        el.addEventListener("click", Readable.toggleSpans, false);
        el.checked = true;
      });

      Readable.charCountShowing = true;
      Readable.addSpans();

      setTimeout(function() {
        Readable.toggleSpans();
        Readable.unCheck();

        forEach(toggleList, function(i, el) {
          el.disabled = false;
        });
      }, 2000);
    },

    unCheck: function() {
      var toggleList = document.querySelectorAll(".toggle");

      forEach(toggleList, function(i, el) {
        el.checked = false;
      });
    }
  };

  Readable.initBefore();

  var toggleList = document.querySelectorAll(".toggle");

  forEach(toggleList, function(i, el) {
    el.disabled = true;
  });

  setTimeout(Readable.init, 1000);
})();