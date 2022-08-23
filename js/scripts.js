window.onload = function(){
  console.log("test");
  const form = document.querySelector("form");
  form.onsubmit = function(event){
    event.preventDefault();

    let aardvark = document.getElementById("aardvark");
    let badger = document.getElementById("badger"); 
    let flamingo = document.getElementById("flamingo");
    let error = document.getElementById("error");

    aardvark.setAttribute("class", "hidden");
    badger.setAttribute("class", "hidden");
    flamingo.setAttribute("class", "hidden");
    error.setAttribute("class", "hidden");

    const userChoice = document.querySelector("input#selection").value;
    if (userChoice === "aardvark") {
      aardvark.removeAttribute("class");
    }
    else if (userChoice === "badger") {
      badger.removeAttribute("class");
    }
    else if (userChoice === "flamingo") {
      flamingo.removeAttribute("class");
    }
    else {
      error.removeAttribute("class");
    }
  };
}; 