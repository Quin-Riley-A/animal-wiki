window.onload = function(){
  console.log("test");
  const form = document.querySelector("form");
  form.onsubmit = function(event){
    event.preventDefault();

    let aardvark = document.getElementById("aardvark");
    aardvark.setAttribute("class", "hidden");
    let badger = document.getElementById("badger"); 
    badger.setAttribute("class", "hidden");
    let flamingo = document.getElementById("flamingo");
    flamingo.setAttribute("class", "hidden");
    
    const userChoice = document.querySelector("input#selection").value;
    if (userChoice === "aardvark") {
      aardvark.removeAttribute("class", "hidden");
    }

    else if (userChoice === "badger") {
      badger.removeAttribute("class", "hidden");
    }

    else if (userChoice === "flamingo") {
      flamingo.removeAttribute("class", "hidden");
    }
  };
}; 