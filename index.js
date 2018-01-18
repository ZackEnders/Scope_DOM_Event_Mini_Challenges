// ------------------- Challenge 1 -----------------

let button1 = document.getElementById('button1')
let button2 = document.getElementById('button2')
let text = document.getElementById('text')
let text2 = document.getElementById('text2')

button1.addEventListener('click', function(){
	text2.innerHTML = ""
	text.innerHTML = "I'm right!";
})


button2.addEventListener('click', function(){
	text.innerHTML = ""
	text2.innerHTML = "No, I'm right!"
})

// ------------------- Challenge 2 -----------------

// let box = document.getElementById('box')

// box.addEventListener('mouseover', function(){
// 	box = alert("Hey, I said don't hover over me!")
// })



// ------------------- Challenge 3 -----------------


// let box = document.getElementById('box')


// document.addEventListener("keydown", function(event) {
// 	box.innerHTML = String.fromCharCode(event.keyCode)

// })

// ------------------- Challenge 4 -----------------



// let congrats = document.getElementById('congrats')
// let name = document.getElementById('name')
// var pass = document.createElement("pass")
// let submit = document.getElementById('submit')

// submit.addEventListener('click', login)

// function login(){
// 	if (name.value.length < 14 && document.getElementById("pass").value === '12345678'){
// 		congrats.innerHTML = 'Congrats on knowing your username and password!'
// 	}else {
// 		alert('Incorrect username or password')
// 	}
// }










