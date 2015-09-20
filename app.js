var dice = {
	sides: 6,
	roll: function(side) {
				randomNumber =Math.floor(Math.random() * dice.sides) + 1;
				console.log(randomNumber);
	}
};
