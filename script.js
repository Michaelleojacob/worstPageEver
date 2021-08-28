const cantTouchThis = document.querySelector('#cantTouchThis');
const displayText = document.querySelector('#displayText');
const mybutton = document.querySelector('#mybutton');
const cats = document.querySelector('#cats');
let height = document.documentElement.clientHeight;
let width = document.documentElement.clientWidth;
let counter = 0;

height = height - 250;
width = width - 250;

function changetextAndColor(text, color) {
	displayText.textContent = text;
	displayText.style.color = color;
	mybutton.textContent = text;
	mybutton.style.color = 'black';
}

function moveElement(element) {
	let randomY = Math.floor(Math.random() * height + 1);
	let randomX = Math.floor(Math.random() * width + 1);
	element.style.transform = `translate(${randomX}px, ${randomY}px)`;
	counter++;
}

function myfunction(event) {
	moveElement(cantTouchThis);
	switch (counter) {
		case 1:
			changetextAndColor('Almost!', 'cyan');
			break;
		case 2:
			changetextAndColor('haha!', 'purple');
			break;
		case 3:
			changetextAndColor(`Can't thouch this!`, `blue`);
			break;
		case 4:
			changetextAndColor(`HE SAID NAAAAAAH!`, `pink`);
			break;
		case 5:
			changetextAndColor(`Cmon you got this!`, `yellow`);
			break;
		case 6:
			changetextAndColor(`lelelelel`, `orange`);
			break;
		case 7:
			changetextAndColor(`you don't got this`, `violet`);
			break;
		case 8:
			changetextAndColor(`seriously stop.`, `white`);
			break;
		case 9:
			changetextAndColor(`lol alright i give up`, `gray`);
			break;
		case 10:
			cantTouchThis.style.removeProperty('transform');
			cantTouchThis.removeEventListener('mouseover', myfunction);
			changetextAndColor(`That was fun, thanks for playing!`, `white`);
			mybutton.setAttribute('style', 'pointer-events: all');
			mybutton.textContent = 'alright you may click me now';
			mybutton.addEventListener('click', clickOnButton);
			return (counter = 0);
	}
}

cantTouchThis.addEventListener('mouseover', myfunction);

//!reset if i want !\\
// mybutton.addEventListener('click', e => {
// 	moveElement(cantTouchThis);
// 	cantTouchThis.addEventListener('mouseover', myfunction);
// 	counter = 0;
// 	return (counter = 0);
// });

function getRandomColors(max) {
	let num = Math.floor(Math.random() * max);
	return num;
}

function lolidk() {
	const myvar = `linear-gradient(90deg, rgb(${getRandomColors(
		252
	)}, ${getRandomColors(252)}, ${getRandomColors(252)}) ${getRandomColors(
		100
	)}%, rgb(${getRandomColors(252)}, ${getRandomColors(252)}, ${getRandomColors(
		252
	)}) ${getRandomColors(100)}%, rgb(${getRandomColors(252)}, ${getRandomColors(
		252
	)}, ${getRandomColors(252)}) ${getRandomColors(100)}%`;
	return myvar;
}

function clickOnButton(event) {
	document.querySelector('body').style.background = lolidk();
	counter++;
	switch (counter) {
		case 1:
			changetextAndColor('ok ok you won!', 'cyan');
			break;
		case 2:
			changetextAndColor('really stop!', 'purple');
			break;
		case 3:
			changetextAndColor(`I think you have a problem`, `blue`);
			break;
		case 4:
			changetextAndColor(`OK seriously knock it off.`, `pink`);
			break;
		case 5:
			changetextAndColor(`press my buttons uwu`, `yellow`);
			break;
		case 6:
			changetextAndColor(`whoa where did that come from`, `orange`);
			break;
		case 7:
			changetextAndColor(`seriously tho staaaaph`, `violet`);
			break;
		case 8:
			changetextAndColor(`alright i'm out peace..`, `white`);
			break;
		case 9:
			changetextAndColor(`seriously doe, im out yeeet`, `gray`);
			break;
		case 10:
			mybutton.setAttribute('style', 'pointer-event: none');
			mybutton.removeEventListener('click', clickOnButton);
			changetextAndColor(`here we go again!`, `white`);
			cantTouchThis.addEventListener('mouseover', myfunction);
			mybutton.setAttribute('style', 'pointer-events: none');
			mybutton.textContent = 'here we go again!';
			return (counter = 0);
	}
}
// mybutton.addEventListener('click', clickOnButton);
