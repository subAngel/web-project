const $btnLogIn = document.querySelector(".log-in-btn");
const $btnSignUp = document.querySelector(".sign-up-btn");
const $signUp = document.querySelector(".sign-up");
const $logIn = document.querySelector(".log-in");

document.addEventListener("click", (e) => {
	if (e.target === $btnLogIn || e.target === $btnSignUp) {
		$logIn.classList.toggle("active");
		$signUp.classList.toggle("active");
	}
});
