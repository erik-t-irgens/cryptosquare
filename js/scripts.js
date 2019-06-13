
$(document).ready(function() {
    $("form#cryptoForm").submit(function(event) {
        var userInput = $("#userInput").val().toLowerCase();

        if (userInput === "") {
            alert("Please enter a sentence!"); 
        } else {
            messageCharacters = userInput.replace(/[ !%$;.,_'-?]/g,'')

            messageCharacters = messageCharacters.split("");

            // Section for removing any potential punctuation or spaces. This way works, but another less complicated way is to use regex, as above, which alters the string directly instead of splitting it first.

            // for (var index = 0; index < messageCharacters.length; index++) {  
            //     if (messageCharacters[index] === "." || messageCharacters[index] === "," || messageCharacters[index] === "!"  || messageCharacters[index] === "?" || messageCharacters[index] === " ") {
            //         messageCharacter.splice(index, 1,);
            //     }
            // }
            
            messageCharacters = messageCharacters.join("").split("");

            alert(messageCharacters);
            debugger;
            var messageLength = messageCharacters.length;
            
            var squareSize = 0;
            for (var index = 1; (index*index) <= messageLength; index++ ){
                squareSize = index;
            }
            
            var finalArray = [];
            var endResult = "";
            var rows = [];

            for (var index = 0; index < messageLength; index += squareSize) {
                rows.push(messageCharacters.slice(index, index + squareSize));
            }

            for (var index = 0; index < squareSize; index++) {
                for (var jindex = 0; jindex < rows[index].length; jindex++) {
                    endResult += rows[jindex][index];
                }
            }
            console.log(endResult);
        }
        
        
        
        
        event.preventDefault();
    });
});

