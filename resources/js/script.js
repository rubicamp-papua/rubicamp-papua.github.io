$(document).ready(function() {
  // var waypoints = $('#handler-first').waypoint(function(direction) {
  //   notify(this.element.id + ' hit 25% from top of window')
  // }, {
  //   offset: '25%'
  // })

  // Scroll on buttons

  $(".js--scroll-to-plans").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--section-plans").offset().top },
      1000
    );
  });

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  // Animation

  $(".js--wp-1").waypoint(
    function(direction) {
      $(".js--wp-1").addClass("animated fadeIn");
    },
    {
      offset: "40%"
    }
  );
  $(".js--wp-2-1").waypoint(
    function(direction) {
      $(".js--wp-2-1").addClass("animated bounceInLeft");
    },
    {
      offset: "50%"
    }
  );
  $(".js--wp-2-2").waypoint(
    function(direction) {
      $(".js--wp-2-2").addClass("animated bounceInRight");
    },
    {
      offset: "100%"
    }
  );
  $(".js--wp-3").waypoint(
    function(direction) {
      $(".js--wp-3").addClass("animated fadeIn");
    },
    {
      offset: "40%"
    }
  );
  $(".js--wp-4").waypoint(
    function(direction) {
      $(".js--wp-4").addClass("animated bounceInDown");
    },
    {
      offset: "70%"
    }
  );

  // menu toggle
  $(".js--nav-icon").click(function() {
    let nav = $(".js--main-nav");
    let icon = $(".js--nav-icon i");

    nav.slideToggle(200);
    if (icon.hasClass("ion-navicon-round")) {
      icon.addClass("ion-close-round");
      icon.removeClass("ion-navicon-round");
      $("nav").addClass("nav");
    } else {
      icon.addClass("ion-navicon-round");
      icon.removeClass("ion-close-round");
      $("nav").removeClass("nav");
    }
  });

  // Navigation;
  $(".js--section-features").waypoint(
    function(direction) {
      console.log(direction);
      if (direction == "down") {
        $("nav").addClass("sticky");
        $("#go-to-top").addClass("top bounceInRight");
      } else {
        $("nav").removeClass("sticky");
        $("#go-to-top").removeClass("top bounceInRight");
      }
    },
    {
      offset: "70%"
    }
  );

  // window.onscroll = function() {
  //   myFunction();
  // };

  // var header = document.getElementById("myHeader");
  // var sticky = header.offsetTop;

  // console.log(window.pageYOffset, sticky);
  // function myFunction() {
  //   if (window.pageYOffset > sticky) {
  //     header.classList.add("sticky");
  //   } else {
  //     header.classList.remove("sticky");
  //   }
  // }
});
