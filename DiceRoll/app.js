document.addEventListener('DOMContentLoaded', function(){
	// Declaring a dice {} literal
	var dice = {
		// sides property with the value of 6
		sides: 6,
		// roll property has an anonymous func() the returns a random number between 1 and 6
		// roll is a property method
		roll: function() {
					randomNumber = Math.floor(Math.random() * this.sides) + 1;
					return randomNumber;
				}
	};

	// The outputNumber() expression takes one param will be the value of dice.roll()
	// Grabs the #output element and sets the innerHTML val to dice.roll()
	var outputNumber = function(num) {
		var output = document.getElementById("output");
		output.innerHTML = num;
	};

	// Grabs the #button element
	var button = document.getElementById("button");

	// .onclick() fires when #button is clcicked
	// changing the current output val to the current result
	button.onclick = function() {
		var result = dice.roll();
		outputNumber(result);
	};
});
