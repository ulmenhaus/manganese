//window.onresize = doLayout;
let $ = require('jquery');

spaces = [
  {
    name: "Chats",
    pages: [
      {
	name: "Docker",
	icon: "https://icon-icons.com/icons2/478/PNG/512/slack_47017.png",
	url: "https://docker.slack.com/",
      },
      {
	name: "Ulmenhaus",
	icon: "https://icon-icons.com/icons2/478/PNG/512/slack_47017.png",
	url: "https://ulmenhaus.slack.com/",
      },
      {
	name: "Telegram",
	icon: "https://image.flaticon.com/icons/png/512/355/355977.png",
	url: "https://web.telegram.org/",
      },
      {
	name: "Whatsapp",
	icon: "https://seeklogo.com/images/W/whatsapp-icon-logo-8CA4FB831E-seeklogo.com.png",
	url: "https://web.whatsapp.com/",
      },
      {
	name: "Personal",
	icon: "https://image.flaticon.com/icons/svg/355/355992.svg",
	url: "https://mail.google.com/mail/u/1/",
      },
      {
	name: "Work",
	icon: "https://image.flaticon.com/icons/svg/355/355992.svg",
	url: "https://mail.google.com/mail/u/0/",
      },
      {
	name: "Pushbullet",
	icon: "http://icons.iconarchive.com/icons/blackvariant/button-ui-requests-5/1024/PushBullet-icon.png",
	url: "https://www.pushbullet.com/#sms",
      },
      {
	name: "Twitter",
	icon: "https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-twitter-512.png",
	url: "https://www.twitter.com",
      },
    ],
  },
  {
    name: "News",
    pages: [
/* Disabling these for now as they take up a lot of resources. Would be good to lazily load these pages and be able to unload them
      {
	name: "Reddit",
	icon: "https://vignette2.wikia.nocookie.net/siivagunner/images/0/07/Reddit_icon.svg/revision/latest?cb=20160623172208",
	url: "https://www.reddit.com/",
      },
      {
	name: "Hackernews",
	icon: "http://www.pvhc.net/img114/tjxujdxphndbchnacbgw.png",
	url: "https://news.ycombinator.com/",
      },
      {
	name: "LessWrong",
	icon: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/LessWrong_logo.svg/1280px-LessWrong_logo.svg.png",
	url: "http://lesswrong.com/",
      },
      {
	name: "Euronews",
	icon: "http://www.userlogos.org/files/logos/Hugo/euronews1.png",
	url: "http://www.euronews.com/",
      },
      {
	name: "TechCrunch",
	icon: "http://botaware.com/wp-content/uploads/2014/10/techcrunch-icon-1.png",
	url: "https://techcrunch.com/",
      },
      {
	name: "Lifehacker",
	icon: "https://pbs.twimg.com/profile_images/590971614545612800/eV8h6rz7.png2D",
	url: "https://lifehacker.com/",
      },
      {
	name: "El Cultural",
	icon: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwj7oPbx1KjYAhWnjlQKHeK3CfUQjBwIBA&url=http%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F662605729929568256%2F_9GXy5GK_400x400.png&psig=AOvVaw3KJs-ORCjCuImBcn2zTxdi&ust=1514411574786607",
	url: "http://www.elcultural.com/",
      },
      {
	name: "BBC",
	icon: "http://icons.iconarchive.com/icons/martz90/circle/512/bbc-news-icon.png",
	url: "http://www.bbc.com/",
      },
      {
	name: "The Daily Beast",
	icon: "https://lh5.ggpht.com/4bci6bTnSI8HVYH4bsh53jjHxb52_X6XiKK7niOaXmzoY3kiCLes4wvuK3SGurGd5Bg=w300",
	url: "https://www.thedailybeast.com/",
      },
      {
	name: "Brookings",
	icon: "https://cdn-images-1.medium.com/fit/c/200/200/0*gR4ta5uBTkSqnxfe.png",
	url: "https://www.brookings.edu/",
      },
*/
    ],
  },
]

let currentSpace;
let currentPage;

function focusActiveSpace() {
    $("#space" + currentSpace + "_view" + currentPage).focus()
}

// TODO refactor!
onload = function() {
  // TODO react would be better
  var body = ""
  var topbar = '<div id="topbar" class="topbar"><div style="padding-top: 30px; padding-left: 20px; position: absolute;">Spaces</div>'

  for (var i=0; i<spaces.length; i++) {
    var index = i + 1;
    var space = spaces[i]
    topbar += '<div style="padding-top: 30px; padding-left:' +  (100 * index) + 'px; position: absolute;">' + index + ' ' + space.name + '</div>';
    body += '<div class="space" id="space' + index + '"><div class="leftbar">'
    body +=  '<div class="leftbarbutton">' + space.name + '<br /><br /></div>'
    for (var j=0; j<space.pages.length; j++) {
      var pageIndex = (j == 9) ? 0 : (j + 1)
      var page = space.pages[j]
      body += '<div class="leftbarbutton"><img class="leftbaricon" src="' + page.icon + '" /><br />' + pageIndex + ' ' + page.name + '</div>'
    }
    body += '</div><div class="chatcontainer">'
    for (var j=space.pages.length - 1; j>=0; j--) {
      var pageIndex = (j == 9) ? 0 : (j + 1)
      var page = space.pages[j]
      body += '<webview id="space' + index + '_view' + pageIndex + '" class="pageview" src="' + page.url + '" allowpopups></webview>'
    }
    body += '</div></div>'
  }
  topbar += '</div>'
  $("body").html(body + topbar)

  currentSpace = spaces.length;
  currentPage = 1;

  document.addEventListener('keydown', (e) => {
    if (!e.getModifierState("Control") || isNaN(e.key))
      return
    currentPage = parseInt(e.key)
    $(".pageview").hide()
    $("#space" + currentSpace + "_view" + e.key).show()
    $("#space" + currentSpace + "_view" + e.key).focus()
  });

  document.addEventListener('keydown', (e) => {
    if (!e.getModifierState("Control") || e.key != "r")
      return
    var wv = document.querySelector("#space" + currentSpace + "_view" + currentPage)
    wv.goToIndex(0);
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

  // TODO move post-scripts to JSON
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
