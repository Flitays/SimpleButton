// Text Hidden, title change

var btn =  document.querySelector("#button");
var content = document.querySelector("#content");


btn.addEventListener('click', btnClick );



function btnClick() {
	btn.textContent = "Close block";
	content.classList.toggle('hidden'); 


	if(content.classList.contains('hidden')){
		btn.textContent = "Open block";
	} else btn.textContent = "Close block";
};


// Action buttom

function btmToggle() {
	var toggle = document.querySelector('.action');
	toggle.classList.toggle('active')
}