
$(document).ready(function() {
    $("form#cryptoForm").submit(function(event) {
        var userInput = $("#userInput").val().toLowerCase();

        if (userInput === "") {
            alert("Please enter a sentence!"); 
        } else {
            var messageCharacters = userInput.split("");
       
            debugger;
            for (var index = 0; index < messageCharacters.length; index++) {  
                if (messageCharacters[index] === "." || messageCharacters[index] === "," || messageCharacters[index] === "!"  || messageCharacters[index] === "?" || messageCharacters[index] === " ") {
                    messageCharacter.splice(index, 1,);
                }


                
            }
            
            messageCharacters = messageCharacters.join("").split("");

            alert(messageCharacters);
            
            var messageLength = messageCharacters.length;
            
            var squareSize = 0;
            for (var index = 1; (index*index) < messageLength; index++ ){
                squareSize = index;
            }
            
            for (var index = 0; squareSize >= messageLength; index++){
                messageCharacters[index]
            }
        }
        
        
        
        
        
        event.preventDefault();
    });
});

