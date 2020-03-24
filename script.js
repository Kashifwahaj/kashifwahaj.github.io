$(document).ready(function() {
  const mchatLength = $("#mchat-ios img").length;
  let ind = 0;
  let ind1 = 0;
  let ind2 = 0;
  let ind3 = 0;
  setInterval(function() {
    for (var i = 0; i < mchatLength; i++) {
      if (i != ind) {
        $("#mchat-ios")
          .children("img")
          .eq(i)
          .addClass("mobile-hide");
        $("#mchat-android")
          .children("img")
          .eq(i)
          .addClass("mobile-hide");
      }
    }

    $("#mchat-ios")
      .children("img")
      .eq(ind)
      .removeClass("mobile-hide");
    $("#mchat-android")
      .children("img")
      .eq(ind)
      .removeClass("mobile-hide");
    if (ind == mchatLength - 1) {
      ind = 0;
      return;
    }
    ind++;
  }, 2000);

  setInterval(function() {
    for (var i = 0; i < $("#rs-ios img").length; i++) {
      if (i != ind1) {
        $("#rs-ios")
          .children("img")
          .eq(i)
          .addClass("mobile-hide");
        $("#rs-android")
          .children("img")
          .eq(i)
          .addClass("mobile-hide");
      }
    }

    $("#rs-ios")
      .children("img")
      .eq(ind1)
      .removeClass("mobile-hide");
    $("#rs-android")
      .children("img")
      .eq(ind1)
      .removeClass("mobile-hide");
    if (ind1 == $("#rs-ios img").length - 1) {
      ind1 = 0;
      return;
    }
    ind1++;
  }, 2000);

  setInterval(function() {
    for (var i = 0; i < $("#e-ios img").length; i++) {
      if (i != ind2) {
        $("#e-ios")
          .children("img")
          .eq(i)
          .addClass("mobile-hide");
        $("#e-android")
          .children("img")
          .eq(i)
          .addClass("mobile-hide");
      }
    }

    $("#e-ios")
      .children("img")
      .eq(ind2)
      .removeClass("mobile-hide");
    $("#e-android")
      .children("img")
      .eq(ind2)
      .removeClass("mobile-hide");
    if (ind2 == $("#e-ios img").length - 1) {
      ind2 = 0;
      return;
    }
    ind2++;
  }, 2000);

  setInterval(function() {
    for (var i = 0; i < $("#m-ios img").length; i++) {
      if (i != ind3) {
        $("#m-ios")
          .children("img")
          .eq(i)
          .addClass("mobile-hide");
        $("#m-android")
          .children("img")
          .eq(i)
          .addClass("mobile-hide");
      }
    }

    $("#m-ios")
      .children("img")
      .eq(ind3)
      .removeClass("mobile-hide");
    $("#m-android")
      .children("img")
      .eq(ind3)
      .removeClass("mobile-hide");
    if (ind3 == $("#m-ios img").length - 1) {
      ind3 = 0;
      return;
    }
    ind3++;
  }, 2000);

  $("#ios-btn").click(function() {
    var elmnt = document.getElementById("ios");
    document.getElementById("ios-btn").classList.add("link-active");
    document.getElementById("home-btn").classList.remove("link-active");
    document.getElementById("android-btn").classList.remove("link-active");
    document.getElementById("web-btn").classList.remove("link-active");
    elmnt.scrollIntoView(true); // Top
  });
  $("#android-btn").click(function() {
    var elmnt = document.getElementById("android");
    document.getElementById("ios-btn").classList.remove("link-active");
    document.getElementById("home-btn").classList.remove("link-active");
    document.getElementById("android-btn").classList.add("link-active");
    document.getElementById("web-btn").classList.remove("link-active");

    elmnt.scrollIntoView(true); // Top
  });
  $("#web-btn").click(function() {
    var elmnt = document.getElementById("web1");
    document.getElementById("ios-btn").classList.remove("link-active");
    document.getElementById("home-btn").classList.remove("link-active");
    document.getElementById("android-btn").classList.remove("link-active");
    document.getElementById("web-btn").classList.add("link-active");

    elmnt.scrollIntoView(true); // Top
  });
  $("#home-btn").click(function() {
    var elmnt = document.getElementById("home");
    document.getElementById("ios-btn").classList.remove("link-active");
    document.getElementById("home-btn").classList.add("link-active");
    document.getElementById("android-btn").classList.remove("link-active");
    document.getElementById("web-btn").classList.remove("link-active");
    elmnt.scrollIntoView(true); // Top
  });

  $("#contact-btn").click(function() {
    var elmnt = document.getElementById("contact");
    document.getElementById("ios-btn").classList.remove("link-active");
    document.getElementById("home-btn").classList.remove("link-active");
    document.getElementById("android-btn").classList.remove("link-active");
    document.getElementById("web-btn").classList.remove("link-active");
    elmnt.scrollIntoView(true); // Top
  });

  //   console.log(
  //     $("#mchat")
  //       .children("img")
  //       .eq(0)
  //       .hide()
  //   );
});
