const submit = document.getElementById("submit");

const emailFormat = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const name = ["First Name cannot be empty", "Last Name cannot be empty", "Looks like this is not an email", "Password cannot be empty"];

submit.addEventListener("click", () => {
    const input = document.querySelectorAll("input");
    const text = document.querySelectorAll(".text");

    for(let i = 0; i < input.length; i++) {
        for(let i = 0; i < text.length; i++) {
           if(input[i].value === "") {
            input[i].classList.add("error");
            text[i].innerHTML = name[i];
        } else {
            input[i].classList.remove("error");
            text[i].innerHTML = "";
        } 
            
        if (i == 2 &&  !input[2].value.match(emailFormat)){
            input[i].classList.add("error");
            text[i].innerHTML = name[i];
        }    
    }
  }
});
