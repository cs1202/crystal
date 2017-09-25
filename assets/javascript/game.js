$(document).ready(function() {     //is jquery event fires as soon as the DOM is fully loaded and read to be manupliated by script.
                                   //This is the earliest point where the script can safely access the element in the page`s html dom. 
                                   //this event is fired before all the images,css...etc are fully loaded.//calling the ready method.  

	crystals = ['assets/images/crystal1.gif','assets/images/cystal2.gif','assets/images/crytsal3.gif','assets/images/crsytal4.gif'];

	var counter = 0;
	var wins = 0;
	var losses = 0;
	$('#win').text(wins); //for id(#) , for class(.) , for element $('')
	$('#loss').text(losses);                     //The text() method sets or returns the text content of the selected elements.
	                                            //When this method is used to return content, 
	                                            //it returns the text content of all matched elements (HTML markup will be removed). 
	                                            //When this method is used to set content, it overwrites the content of ALL matched elements.
	


                                                

	
	newCrystals();                                                                                                   //jquery do not thrwows an error if the given id if the element with given id id not found
	                                                                                                                 //(#id selector wont throw any error).to check if an element is returned by the #id selector 
	                                                                                                                 //use length property.
	function newCrystals () {
		var numbers = []                                                                                                                  
			while(numbers.length < 4){
			  var randomnumber = Math.ceil(Math.random()*12)
			  var found = false;
			  for (var i=0; i< numbers.length; i++){
				if (numbers[i] === randomnumber){
					found = true; break
				}
			  }
			  if(!found)numbers[numbers.length]=randomnumber;
			}
		console.log(numbers);		

		for (i = 0; i < numbers.length; i++) {
			var imageCrystal = $('<img>');
			imageCrystal.attr('data-num', numbers[i]);             // for attribute : $('[attribute]'')
			imageCrystal.attr('src', crystals[i]);                 //$('[attribute="vaue"])
			imageCrystal.attr('crystal', 'crystals');              //$('div[title]')-select all div that have title attribute
			imageCrystal.addClass('crystalImage')
			$('#crystals').append(imageCrystal);
		}
	}
      


    newGame();
	function newGame() {

		counter = 0;
		$('#yourScore').text(counter);

		function random(min,max){
		   	return Math.floor(Math.random()*(max-min+1)+min);     //The Math.floor() function returns the largest integer less than or equal to a given number
		   	                                                      //floor(), which rounds down to the nearest integer;
		   	                                                      //ceil(), which rounds up to the nearest integer;
			}

		var numberToGuess = random(19,120);

		$('.value').text(numberToGuess);


		$('.crystalImage').on('click', function(){
		    counter = counter + parseInt($(this).data('num'));
		   
		    $('#yourScore').text(counter);

		    if (counter === numberToGuess){
		      $('#status').text('You won!!!!');
		     
		      wins ++;
		      $('#win').text(wins);
		      console.log(wins)
		      $('#crystals').empty();
		      newCrystals();
		      newGame();
		        
		    } else if ( counter > numberToGuess){
		        $('#status').text('You lost!')
		        losses ++;
		        $('#loss').text(losses);
		        console.log(losses)
		        $('#crystals').empty();
		        newCrystals();
		        newGame();
		    }
		});
	}

});