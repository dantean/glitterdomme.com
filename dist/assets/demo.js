const form = document.querySelector("#demo-form");
const status = document.querySelector("#form-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  form.reset();
  status.textContent = "Demo submission complete. No information was sent.";
});

form.querySelector("fieldset").disabled = false;
