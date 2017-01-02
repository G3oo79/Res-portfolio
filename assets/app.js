$(document).ready(function(){
	
	/////////////Activates Parallax effect/////////////////
    $('.parallax').parallax();

//////////////////Particles Json////////////////////////////
///////////////////////////////////////////////////////////
	particlesJS("particles-js", {
		"particles": {
			"number": 300,
			"color_random": ["#d50000", "#880e4f", "#00acc1"],
			"density": true,
			"size": 6,
			"size_random": true,
			"shape": "circle",
			"line_linked": {
				"enable_auto": true,
				"distance": 170,
				"color": "#304ffe",
				"opacity": 0.6,
				"width": 2.6,
				/*"condensed_mode": {
                "enable": false,
                "rotateX": 600,g
                "rotateY": 600
            	}*/
			},
			/*"stroke": {
        		"width": 10,
        		"color": "#dd2c00"
        	},*/
        	"anim": {
        		"enable": true,
        		"speed": 4
        	}
		},
		"interactivity": {
		    "detect_on": "window",
		    "events": {
		      "onhover": {
		        "enable": true,
		        "mode": "repulse"
		      },
		      "onclick": {
		        "enable": true,
		        "mode": "push"
		      },
		      "resize": true,
			    
			    "modes": {
			      /*"grab": {
			        "distance": 140,
			        "line_linked": {
			          "opacity": 1
			        }
			      },*/
			      "repulse": {
			        "distance": 200,
			        "duration": 0.4
			      },
			      "push": {
			        "particles_nb": 7
			      },
			      "remove": {
			        "particles_nb": 2
			      }
			    },
			},
		},
		"retina_detect": true,	

	});
////////////////////////End of Particle Json////////////////////////


});

////////////////////////Start Typed.js/////////////////////////////
//////////////////////////////////////////////////////////////////
	$(function(){
      $(".element").typed({
        strings: ["Web Developer", "TroubleShooting.", "Problem Solving.", "Electronic Technician.", "Soldering."],
        typeSpeed: 0
      });
  });	

//////////////To top click function////////////////////
    //////////////////////////////////////////////////////
    var amountScrolled = 400;

	$(window).scroll(function() {

		if ( $(window).scrollTop() > amountScrolled ) {
			$('a.back-to-top').fadeIn('slow');
			$('a.side-iconz').fadeOut('slow');
			$('#nav').addClass( "navbar-fixed").fadeIn('slow');

			$('nav').css("background-color", "rgba(255, 255, 255, " + ($(window).scrollTop()/1000) + ")" );
			$('ul#slide-out.side-nav').css("background-color", "rgba(255, 255, 255, " + ($(window).scrollTop()/1000) + ")" );

			$('nav a').css("color", "black");
			$('nav ul a').css("color", "black");
			$('nav .brand-logo').css("color", "black");
		} else {
			$('a.back-to-top').fadeOut('slow');
			$('a.side-iconz').fadeIn('slow');
			$('.navbar-fixed').fadeOut('slow');
			$('#nav').removeClass( "navbar-fixed" );
			$('#nav').fadeIn('slow');

			$('nav').css( "background-color", "rgba(45, 45, 45, 0.5)" );
			$('ul#slide-out.side-nav').css( "background-color", "rgba(45, 45, 45, 0.5)" );

			$('nav a').css("color", "#fff");
			$('nav ul a').css("color", "#fff");
			$('nav .brand-logo').css("color", "#fff");

		}


	});

	$('a.back-to-top').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 700);
		return false;
	});









