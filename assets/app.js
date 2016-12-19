$(document).ready(function(){
	
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










