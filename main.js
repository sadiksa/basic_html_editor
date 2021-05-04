let buttonsList = document.querySelectorAll(".btn")

buttonsList.forEach(btnitem =>{
	btnitem.addEventListener("click", ()=>{
		let command = btnitem.dataset["btntype"];
		var url = null;
		if (command == "createLink" || command == "insertImage"){
			url = prompt("Enter a url.", "http://");
		}

		document.execCommand(command, false, url)
	})
});

let sender = document.getElementById("sender")
let textarea = document.getElementById("textarea")

sender.addEventListener("click", ()=>{
	console.log(textarea.innerHTML);
	// you can send data with JSON. This is just showing on console.
})