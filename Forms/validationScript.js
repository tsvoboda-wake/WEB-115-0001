myForm.addEventListener("submit", function(e) {
  let inputValue = document.getElementById("inputField").value;
  let regex = /^[a-zA-Z0-9]*$/

  if (!regex.test(inputValue) || inputValue === "") {
    console.log("Input must be alphanumeric.");
    e.preventDefault;
  }
  else {
    console.log("Input is valid!");
  }
})
