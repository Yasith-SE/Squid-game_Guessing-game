    let randomNumbers = Math.floor(Math.random()*10)+1


function Clickbutton(){
    


    let LblId    = document.getElementById("result");
    let btnText  = document.getElementById("txtGuessNumber").value;

    if(randomNumbers != btnText){
      
        LblId.innerText = 'wrong';
    }else if(randomNumbers == btnText){
        LblId.innerText = 'Win'
    }
    console.log(randomNumbers);
    

    
    


}