
var count = 0;
var answer = Math.floor(Math.random() * 400) + 1;

function checkAnswer(){
	var userGuess = document.getElementById('enterGuess').value;
	row0 = document.getElementById('row0');
	row1 = document.getElementById('row1');
	console.log(row0);
	if (userGuess < answer){
		tooLow(userGuess);
	} else {
		if (userGuess > answer){
			tooHigh(userGuess);
		}
	} 
		if (userGuess == answer){
			correct(userGuess);
		}
}

function tooLow(userGuess){
	count = count + 1;
	if (count > 10 ){
		youLose();
	}
    $('#upOrDown').remove();
	H2 = document.createElement('h2');
	row0.appendChild(H2);
	Low = document.createTextNode('Too Low. Guess Again');
	H2.appendChild(Low);
	H2.setAttribute('id', 'upOrDown');
}

function tooHigh(userGuess){
	count = count + 1;
	if (count > 10 ){
		youLose();
	}
	 $('#upOrDown').remove();
	H2 = document.createElement('h2');
	row0.appendChild(H2);
	Low = document.createTextNode('Too High. Guess Again');
	H2.appendChild(Low);
	H2.setAttribute('id', 'upOrDown');
	
}

function correct(userGuess){
	count = count + 1;
	$('#upOrDown').remove();
	H2 = document.createElement('h2');
	row0.appendChild(H2);
	Low = document.createTextNode('That\'s the right number!!!');
	H2.appendChild(Low);
	H2.setAttribute('id', 'upOrDown');
	body = document.getElementById('body');
	$('#body').attr("background", "img/1.jpg");
	H22 = document.createElement('h2');
	row1.appendChild(H22);
	Low = document.createTextNode('It took you : ' + count + ' trys.');
	H22.appendChild(Low);
	H22.setAttribute('id', 'upOrDown');
}

function youLose(){
	$('#upOrDown').remove();
	H23 = document.createElement('h2');
	row0.appendChild(H23);
	Low = document.createTextNode('lose!!!');
	H23.appendChild(Low);
	H23.setAttribute('id', 'upOrDown');
	body = document.getElementById('body');
	$('#body').attr("background", "img/happyface.png");
	H22 = document.createElement('h2');
	row1.appendChild(H22);
	H22.setAttribute('id', 'upOrDown');
	Low = document.createTextNode('it took you too many trys.');
	H22.appendChild(Low);
	
	
}




// 	var carsForSale = [];


// 	function Car(title, image, mileage, make, model, price) {
// 		this.title  = title
// 		this.image  = image
// 		this.mileage = mileage
// 		this.make = make
// 		this.model = model
// 		this.price = price
// 	}

// 	var grayPrius = new Car("clean in and out car","img/prius.jpg","40,000","Toyota","Prius",20000);
// 	var redHummer = new Car("non-smoker car","img/hummer.jpg","42,000","Hummer","H3",20000);
// 	var redFocus = new Car("like new","img/focus.jpg","12","ford","focus",12000);
// 	var blackMr2 = new Car("a head turner","img/mr2.jpg","110,000","Toyota","MR2",4000);
// 	var redMr2 = new Car("a classic","img/mr2mk1.jpg","34000","toyota","MR2",3000);
// 	var redSprint = new Car("a gas saver","img/sprint.jpg","100,000","chevolet","sprint",500);

// 	carsForSale.push(grayPrius,redHummer,redFocus,blackMr2,redMr2,redSprint);

// 	body = document.getElementById('body');
// 		for (var i = 0 ; i < carsForSale.length ; i++){
// 			divElement = document.createElement('div');
// 			divElement.setAttribute('class', 'col-md-4 text-center');
// 			body.appendChild(divElement);
// 			newItem = "item" + i;
// 			newItem = document.createElement('h1');
// 			title = document.createTextNode(carsForSale[i].title);
// 			newItem.appendChild(title);
// 			divElement.appendChild(newItem);


// 			var image = document.createElement('img');
// 			image.setAttribute('src', carsForSale[i].image);
// 			divElement.appendChild(image);

// 			newItem = document.createElement('h3');
// 			title = document.createTextNode(carsForSale[i].make);
// 			newItem.appendChild(title);
// 			divElement.appendChild(newItem);

// 			newItem = document.createElement('h3');
// 			title = document.createTextNode(carsForSale[i].model);
// 			newItem.appendChild(title);
// 			divElement.appendChild(newItem);

// 			newItem = document.createElement('h3');
// 			title = document.createTextNode(carsForSale[i].mileage + " mi");
// 			newItem.appendChild(title);
// 			divElement.appendChild(newItem);

// 			newItem = document.createElement('h1');
// 			title = document.createTextNode("$" + carsForSale[i].price);
// 			newItem.appendChild(title);
// 			divElement.appendChild(newItem);

// 			buyButton = "button" + i;
// 			buyButton = document.createElement('button');
// 			divElement.appendChild(buyButton);
// 			buyText = document.createTextNode("BUY");
// 		 	buyButton.appendChild(buyText);
// 		    buyButton.className= 'btn-primary btn-lg';
// }







