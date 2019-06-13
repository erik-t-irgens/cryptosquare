
$(document).ready(function() {
    $("form#cryptoForm").submit(function(event) {
        event.preventDefault();
    });
    var userInput = $("#userInput").val();

    var messageCharacters = userInput.split("");

    for (var index = 0; index < messageCharacters.length; index++) {
        if (messageCharacters[index] === "." || messageCharacters[index] === "," || messageCharacters[index] === "!"  || messageCharacters[index] === "?" || messageCharacters[index] === " ") {
            messageCharacter[index] = "";
        }
        
    }

    messageCharacters = messageCharacters.join("").split("");

    var messageLength = messageCharacters.length;

    var squareSize = 0;
    for (var index = 1; (index*index) < messageLength; index++ ){
        squareSize = index;
    }

    for (var index = 0; squareSize >= messageLength; index++){
        messageCharacters[index]
    }
    

    
});

