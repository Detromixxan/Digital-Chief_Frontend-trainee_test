let targetDiv= document.getElementById("burger-menu")

//функция закрытия 
function myFunction() {
    targetDiv.style.display = "block";
}
function myFunction2() {
    targetDiv.style.display = "none";
}
//валидац функция
function validateForm() {
	var nameInput = document.getElementById("name");
	var emailInput = document.getElementById("email");
	var nameError = document.getElementById("nameError");
	var emailError = document.getElementById("emailError");

	nameError.textContent = ""; // Очищаем сообщение об ошибке перед проверкой
	emailError.textContent = "";

	if (nameInput.value.trim() === "") {
		nameError.textContent = "Пожалуйста, введите ваше имя.";
		return;
	}

	if (emailInput.value.trim() === "") {
		emailError.textContent = "Пожалуйста, введите вашу почту.";
		return;
	}

	alert("До связи :)");
}