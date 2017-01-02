$(function(){
	
	// container is the DOM element;
	// userText is the textbox
	
	/*var container = $("#container")*/
		/*userText = $('#userText'); */
	var container2 = $("#container2")
	
	// Shuffle the contents of container
	/*container.shuffleLetters();*/
	container2.shuffleLetters();

	// Bind events
	/*userText.click(function () {
		
	  userText.val("");
	  
	}).bind('keypress',function(e){
		
		if(e.keyCode == 13){
			
			// The return key was pressed
			
			container.shuffleLetters({
				"text": userText.val()
			});
			
			userText.val("");
		}

	}).hide();
*/
	// Leave a 3 second pause

	setTimeout(function(){
		
		// Shuffle the container with custom text
		/*container.shuffleLetters({
			"text": "Test it for yourself!"
		});*/

		container2.shuffleLetters({
			"text": "Fausto Brito"
		});
		
		/*userText.val("type anything and hit return..").fadeIn();*/
		
	},2000);


});

	






