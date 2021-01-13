// Hide arrow from header on scroll
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".hide_on_scroll").css({
        opacity: "0"
      });
    } else {
      $(".hide_on_scroll").css({
        opacity: "1"
      });
    }
  });
});

// // progress bar

// $(function () {
//   /*========== [] Progress Bar ==========*/
//   $(window).on("scroll", function () {
//     $(".skills-progress span").each(function () {
//       var bottom_of_object = $(this).offset().top + $(this).outerHeight(),
//         bottom_of_window = $(window).scrollTop() + $(window).height(),
//         myVal = $(this).attr("data-value");
//       if (bottom_of_window > bottom_of_object) {
//         $(this).css({
//           width: myVal
//         });
//       }
//     });
//   });
// });



// window.addEventListener("load", function () {
//   const loader = document.querySelector(".loader");
//   loader.className += " hidden"; // class "loader hidden"
// });

$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") ==
      this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: target.offset().top
          },
          1000,
          function () {}
        );
      }
    }
  });


/* Scroll-to-Top Button and Day & Night */
$(window).scroll(function () {
  if ($(this).scrollTop() > 600) {
    $('.scrollup').fadeIn();
  } else {
    $('.scrollup').fadeOut();
  }
});

$('.scrollup').click(function () {
  $("html, body").animate({
    scrollTop: 0
  }, 800);
  return false;
});


// Sal Super Lightweight Scroll Animation

// sal({
//   threshold: 1,
//   once: false,
// });





// // contact form


$("#sendForm").click(function (e) {
  e.preventDefault();
  const name = $("#name").val();
  const email = $("#email").val();
  const message = $("#message").val();
  if (name == '') {
    $("#name").addClass('error');
  } else {
    $("#name").removeClass('error');
  }
  if (message == '') {
    $("#message").addClass('error');
  } else {
    $("#message").removeClass('error');
  }
  if (email == '') {
    $("#email").addClass('error');
  } else {
    $("#email").removeClass('error');
  }

  if (email != '' && name != '' && message != '') {
    $.ajax({
        method: "POST",
        url: "./form/sendemail.php",
        data: {
          email: email,
          name: name,
          message: message
        }
      })
      .done(function (msg) {
        console.log("Forma poslata!");
        $("#success").show();
      });
  }
});

//Nav
// Menu-toggle button

$(document).ready(function () {
  $(".menu-icon").on("click", function () {
    $("nav ul").toggleClass("showing");
  });
  

});

$(document).ready(function(){
  $(".services-hover").hover(function(){
    $(".services-links").slideDown();
  });
});

// OWL carousel

$('.owl-carousel').owlCarousel({
  loop: true,
  margin:0,
  nav:false,
  center:true,
  dots: false,
  responsiveClass: true,
  responsive:{
    0:{
      items:1,
      nav: false
    },
    600:{
      items:3,
      nav: false
    },
    1000:{
      items:3,
      nav: false
    }
  }
})