//window.onresize = doLayout;
let $ = require('jquery');

onload = function() {
  var currentSpace = 2;

  document.addEventListener('keydown', (e) => {
    if (!e.getModifierState("Control") || isNaN(e.key))
      return
    $(".pageview").hide()
    $("#space" + currentSpace + "_view" + e.key).show()
    $("#space" + currentSpace + "_view" + e.key).focus()
  });


  var leftbarshidden = false;
  $("#topbar").hide()
  var topbarhidden = true;

  document.addEventListener('keydown', (e) => {
    if (!e.getModifierState("Shift"))
      return
    switch (event.key) {
    case "ArrowLeft":
      leftbarshidden = !leftbarshidden
      if (!leftbarshidden)
	$(".chatcontainer").css({
	  left: "75px",
	  width: "calc(100% - 75px)",
	})
      else
	$(".chatcontainer").css({
	  left: "0px",
	  width: "100%",
	})
      break;
    case "ArrowUp":
      topbarhidden = !topbarhidden
      if (!topbarhidden) {
	$(".leftbar").css({
	  top: "75px",
	})
	$(".pageview").css({
	  top: "75px",
	})
	$("#topbar").show()
      } else {
	$(".leftbar").css({
	  top: "0px",
	})
	$(".pageview").css({
	  top: "0px",
	})
	$("#topbar").hide()
      }
      break;
    };
  });

  document.addEventListener('keydown', (e) => {
    if (topbarhidden || isNaN(e.key))
      return
    currentSpace = parseInt(e.key);
    $(".space").hide()
    $("#space" + e.key).show()
  });

  var wv = document.querySelector("#space1_view6")
  wv.addEventListener('did-finish-load', () => {
    var contents = wv.getWebContents();
    contents.executeJavaScript('setTimeout(function() { toDestroy = elem = document.getElementsByClassName("aeN")[0]; toDestroy.parentNode.removeChild(toDestroy) }, 7000);')
  })

  var wv2 = document.querySelector("#space1_view5")
  wv2.addEventListener('did-finish-load', () => {
    var contents = wv2.getWebContents();
    contents.executeJavaScript('setTimeout(function() { toDestroy = elem = document.getElementsByClassName("aeN")[0]; toDestroy.parentNode.removeChild(toDestroy) }, 7000);')
  })
};
