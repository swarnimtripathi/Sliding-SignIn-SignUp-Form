const signUpBtn= document.getElementById("signUpB");
const signInBtn= document.getElementById("signInB");
const container= document.querySelector(".container");
const fistForm = document.getElementById("formSignUp");
const secondForm = document.getElementById("formSignIn");


signInBtn.addEventListener("click", () => {
	container.classList.remove("panel");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("panel");
});

// fistForm.addEventListener("submit", (e) => e.preventDefault());
// secondForm.addEventListener("submit", (e) => e.preventDefault());
