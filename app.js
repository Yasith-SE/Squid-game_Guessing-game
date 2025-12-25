function Clickbutton(){
    
    let LblId = document.getElementById("result");
    let btnText  = document.getElementById("txtGuessNumber");


    LblId.innerText = btnText.value;
         

    console.log(Math.floor(Math.random()*10)+1);
    


}