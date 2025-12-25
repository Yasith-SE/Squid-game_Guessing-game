    let randomNumbers = Math.floor(Math.random()*10)+1


function Clickbutton(){
    


    let LblId    = document.getElementById("result");
    let btnText  = document.getElementById("txtGuessNumber").value;

    if(randomNumbers != btnText){
        
        document.getElementById("error-message").innerHTML = 'You are Eliminated'
        document.getElementById("correctGif").innerHTML = '<img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDkybmFwNXNkazN4YWsxbDd1c3NzZXhiOHBkZnFhcmR1aDhlZHhoMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NTEyfNzEmOSlEmiVVM/giphy.gif" class="img-fluid rounded mx-auto d-block " alt="...">'
        
        LblId.innerText = 'wrong';
    }else if(randomNumbers == btnText){

        document.getElementById("error-message").innerHTML = 'You win this round'
        document.getElementById("correctGif").innerHTML = '<img src ="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3V2emJ5cnA1d25tMGdtem9kMmE5cHI4bXlneWQxenEyd21qem56ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/n5xOuk22LGZFZNPKpX/giphy.gif" class="img-fluid rounded mx-auto d-block " alt="...">'
        LblId.innerText = 'Win'
    }
    console.log(randomNumbers);
    

    
    


}