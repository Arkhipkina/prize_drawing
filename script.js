let but = document.getElementById("button");
let Myresult = document.getElementById("Myresult");
let quantityCards = document.getElementsByClassName("card");
let cards = document.getElementsByClassName("cards");
let prizeNumbers = document.getElementsByClassName("prize_number");


but.addEventListener("click", function onclick(){
  
    for(let index = 0; index < prizeNumbers.length; index++){
      quantityCards[index].classList.remove("active");
    }

    let randomNumber = Math.random() * 20;
    let num = Math.round(randomNumber);
    console.log(Myresult.textContent = num);
  
    for(let index = 0; index < prizeNumbers.length; index++){
      
        if(prizeNumbers[index].textContent == num){
          quantityCards[index].classList.add("active");  
        }
    }    
    
});
